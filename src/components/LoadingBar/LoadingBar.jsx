import React from "react";
import { css } from "@emotion/core";
// First way to import
import { ClipLoader } from "react-spinners";
// Another way to import. This is recommended to reduce bundle size
import ClipLoader from "react-spinners/ClipLoader";
 
// Can be a string as well. Need to ensure each key-value pair ends with ;
const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;
 
class ButtonLoader extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true
    };
  }

  handleClick = () => {
    let preferencesArray = []
    this.props.reduxStore.preferencesMaster.map(preference => {
            if (preference.status === true) {
                preferencesArray.push(preference)
            }
    })
    console.log(preferencesArray)
    this.props.dispatch({
        type: 'SEARCH',
        payload: {
            query: this.state.queryText,
            preferences: preferencesArray
        }
    })
}
 
  render() {
    return (
      <div className="sweet-loading">
        <ClipLoader
          css={override}
          size={150}
          //size={"150px"} this also works
          color={"#123abc"}
          loading={this.state.loading}
        />
      </div>
    );
  }
}


const mapStateToProps = (reduxStore) => ({
  reduxStore
})

export default connect(mapStateToProps)(ButtonLoader);
