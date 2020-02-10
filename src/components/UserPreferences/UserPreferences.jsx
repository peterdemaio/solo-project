import React, { Component } from 'react';
import { connect } from 'react-redux';
import Checkbox from '@material-ui/core/Checkbox'
import { FormControlLabel } from '@material-ui/core';
import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormHelperText from '@material-ui/core/FormHelperText';
import PropTypes from 'prop-types';


class preferences extends Component {

    state = {
        1: false,
        2: false,
        3: false,
        4: false,
        5: false,
        6: false,
        7: false,
        8: false,
        9: false,
        10: false,
        11: false,
        12: false,
    }

    componentDidMount() {
        this.props.dispatch({
            type: 'GET_PREFERENCES_MASTER'
        })
    }
    submit = () => {
        const trueValues = []
        const entries = Object.entries(this.state)
        for (const [id, value] of entries) {
            if (value == true) {
         trueValues.push([id])
             }
        }
        console.log(trueValues)
    }
    handleChange = name => event => {
        console.log('in handle change', name)
        this.setState({ 
            [name]: !this.state.name
         });
    };

    createCheckboxes = () => (
        this.props.reduxState.preferencesMaster.map(this.createCheckbox)
    )

    render() {

        return (
            <div>
                <FormControl component="fieldset">
                    <FormLabel component="legend">Select a Preference</FormLabel>
                    <FormGroup>
                        {this.props.reduxState.preferencesMaster.map(preference => (
                            <FormControlLabel
                                control={
                                    <Checkbox
                                        //checked={preference.id}
                                        onChange={this.handleChange(preference.id)}
                                        value={preference.id}
                                    />
                                }
                                label={preference.name}
                            />
                        ))}
                    </FormGroup>
                </FormControl>
                <button onClick={() => this.submit()}>SUBMIT</button>
            </div>
            //         {JSON.stringify(this.props.reduxState.preferencesMaster)}
            //     <div className="container">
            //     <div className="row">
            //       <div className="col-sm-12">

            //         <form onSubmit={this.handleFormSubmit}>
            //           {this.createCheckboxes()}

            //           <button className="btn btn-default" type="submit">Save</button>
            //         </form>

            //       </div>
            //     </div>
            //   </div>
        )
    }

}


// Instead of taking everything from state, we just want the user info.
// if you wanted you could write this code like this:
// const mapStateToProps = ({user}) => ({ user });
const mapStateToProps = (reduxState) => ({
    reduxState
});

// this allows us to use <App /> in index.js
export default connect(mapStateToProps)(preferences);

