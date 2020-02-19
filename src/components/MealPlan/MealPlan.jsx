import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import MealPlanItem from '../MealPlanItem/MealPlanItem'

class mealPlan extends React.Component {

componentDidMount() {
    this.props.dispatch({ type: 'FETCH_MEAL_PLAN', payload: this.props.reduxStore.user.id})
  }

  render () {
  return(
    <ul>
      {this.props.reduxStore.mealPlan.map(meal =>
          <MealPlanItem key={meal.id} meal={meal} />
        )}
    </ul>
  )
}
}

const mapStateToProps = (reduxStore) => ({
  reduxStore
})


export default connect(mapStateToProps)(mealPlan)


