import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import MealPlanItem from '../MealPlanItem/MealPlanItem'
import Button from '@material-ui/core/Button';

const styles = theme => ({
  card: {
    maxWidth: 600,
    maxHeight: 650,
    overflow: 'auto',
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  actions: {
    display: 'flex',
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
});

class mealPlan extends React.Component {

  groceryList = () => {
    console.log('you clicked the grocery button')
    let groceryList = []
    let mealList = this.props.reduxStore.mealPlan
    for (let item of mealList) {
      groceryList.push(...item.ingredients)
    }
    console.log(groceryList, this.props.reduxStore.user.id)
    this.props.dispatch({
      type: 'MAKE_GROCERY_LIST',
      payload: {
        groceryList: groceryList,
        user_id: this.props.reduxStore.user.id
      }
    })
  }

  componentDidMount() {
    this.props.dispatch({ type: 'FETCH_MEAL_PLAN', payload: this.props.reduxStore.user.id })
  }

  render() {
    return (
      <div>
        <Button variant="contained" onClick={this.groceryList} color="primary">Generate Grocery List</Button>
        <ul>
          {this.props.reduxStore.mealPlan.map(meal =>
            <MealPlanItem key={meal.id} meal={meal} />
          )}
        </ul>
      </div>
    )
  }
}

const mapStateToProps = (reduxStore) => ({
  reduxStore
})

let styledmealPlan = withStyles(styles)(mealPlan);

export default connect(mapStateToProps)(styledmealPlan)


