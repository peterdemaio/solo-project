import React, { Component } from 'react';
import { connect } from 'react-redux';
import Checkbox from '@material-ui/core/Checkbox'
import { FormControlLabel } from '@material-ui/core';
import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import './UserPreference.css';
class preferences extends Component {

    handleChange = (event, id)  => {
        console.log(`you clicked the box with health id: ${id} for user ${this.props.reduxStore.user.id}`)
        this.props.dispatch({
            type: 'EDIT_PREFERENCE',
            payload: {
                food_id: id,
                user_id: this.props.reduxStore.user.id
            }
        })
    };
    
    render() {
        return (
            <div className = "preferenceList">
                <FormControl component="fieldset">
                    <FormLabel component="legend">Set your preferences</FormLabel>
                    <FormGroup row>
                        {this.props.reduxStore.preferencesMaster.map(preference => (
                            <FormControlLabel
                                className = "preferencesListItem"
                                control={
                                    <Checkbox
                                        checked={preference.status}
                                        onChange={(event) => this.handleChange(event, preference.health_id)}
                                        value={preference.status}
                                    />
                                }
                                label={preference.name}
                                key={preference.name}
                            />
                        ))}
                    </FormGroup>
                </FormControl>
            </div>
        )
    }

}

const mapStateToProps = (reduxStore) => ({
    reduxStore
});

export default connect(mapStateToProps)(preferences);

