import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import classnames from 'classnames';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import DeleteIcon from '@material-ui/icons/Delete';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import EditIcon from '@material-ui/icons/Edit';
import { connect } from 'react-redux';
import Link from '@material-ui/core/Link';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';
import Button from '@material-ui/core/Button';
import CheckIcon from '@material-ui/icons/Check';
import { ThemeProvider, MuiThemeProvider } from '@material-ui/core/styles'
import './FavoritesListItem.css';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

function Transition(props) {
    return <Slide direction="up" {...props} />;
}

const styles = theme => ({
    card: {
        maxWidth: 600,
        minWidth: 340,
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

class FavoritesListItem extends React.Component {

    state = {
        expandedOne: false,
        expandedTwo: false,
        openRemove: false,
        noteBoolean: true,
        note: '',
        anchorEl: null,
    };

    menuOpen = event => {
        this.setState({ anchorEl: event.currentTarget });
    };

    menuClose = () => {
        this.setState({ 
            anchorEl: null,
            openRemove: false,
        });
    };

    toggleEdit = (event) => {
        this.setState({
            noteBoolean: false
        })
    }

    handleClickOpenRemove = () => {
        this.setState({
            openRemove: true,
        });
    };

    handleCloseDelete = () => {
        this.setState({
            openRemove: false,
            anchorEl: null 
        });
        this.delete()
    };

    handleCloseAdd = () => {
        this.setState({
            openRemove: false,
            anchorEl: null 
        });
        this.add()
    };
    handleClose = () => {
        this.setState({
            anchorEl: null,
            openRemove: false,
        });
    };

    handleExpandOneClick = () => {
        this.setState(state => ({
            expandedOne: !state.expandedOne
        }));
    };

    handleExpandTwoClick = () => {
        this.setState(state => ({
            expandedTwo: !state.expandedTwo
        }));
    };

    setNote = (event) => {
        this.setState({
            ...this.state,
            note: event.target.value

        })
    }

    saveNote = (event, id) => {
        this.setState({
            ...this.state,
            noteBoolean: true
        })
        this.props.dispatch({
            type: 'EDIT_NOTE',
            payload: {
                note: this.state.note,
                food_id: id,
                user_id: this.props.reduxStore.user.id
            }
        })

    }

    delete = () => {
        this.props.dispatch({
            type: 'DELETE_FAVORITE',
            payload: {
                recipe: this.props.recipe,
                user: this.props.reduxStore.user.id
            }
        })
    }

    add = () => {
        this.props.dispatch({
            type: 'ADD_TO_MEAL_PLAN',
            payload: {
                recipe: this.props.recipe,
                user: this.props.reduxStore.user.id
            }
        })
    }

    render() {
        const { classes } = this.props;
        const { anchorEl } = this.state;
        return (
            <li className="recipeListItem">
                <Card className={classes.card}>
                    <CardHeader
                        color="primary"
                        className="cardHeader"
                        title={this.props.recipe.label}
                        subheader={this.props.recipe.source}
                        action={
                            <div>
                                <IconButton
                                    aria-label="More"
                                    aria-haspopup="true"
                                    onClick={this.menuOpen}
                                >
                                    <MoreVertIcon />
                                </IconButton>
                                <Menu
                                    id="simple-menu"
                                    anchorEl={anchorEl}
                                    open={Boolean(anchorEl)}
                                    onClose={this.menuClose}
                                >
                                    <MenuItem onClick={this.add}>Add to Meal Plan</MenuItem>
                                    <MenuItem onClick={this.handleClickOpenRemove}>Remove From Favorites</MenuItem>
                                        <Dialog
                                            open={this.state.openRemove}
                                            TransitionComponent={Transition}
                                            keepMounted
                                            onClose={this.handleClose}
                                            aria-labelledby="alert-dialog-slide-title"
                                            aria-describedby="alert-dialog-slide-description"
                                        >
                                            <DialogTitle id="alert-dialog-title">{"Remove from favorites?"}</DialogTitle>
                                            <DialogContent>
                                                <DialogContentText id="alert-dialog-description">
                                                    This will delete your recipe and all your notes associated with it.
                                                </DialogContentText>
                                            </DialogContent>
                                            <DialogActions>
                                                <Button variant="contained" onClick={this.handleClose} color="primary">
                                                    Go back
                                                </Button>
                                                <Button variant="contained" onClick={this.handleCloseDelete} color="secondary">
                                                    Delete
                                                </Button>
                                            </DialogActions>
                                        </Dialog>
                                </Menu>
                            </div>
                        }
                    />
                    <CardMedia
                        className={classes.media}
                        image={this.props.recipe.image}
                        title={this.props.recipe.label}
                    />
                    <CardContent className="cardDescription">
                        <Typography component="p" className="cardDescription">
                            Click down arrow to see ingredients list and heart to save to favorites
                            </Typography>
                        <Typography>
                            <Link href={this.props.recipe.url} target="_blank" >
                                View recipe on site
                                </Link>
                        </Typography>
                    </CardContent>
                    <CardActions className={classes.actions} disableActionSpacing>
                        <h2>Ingredients</h2>
                        <IconButton
                            className={classnames(classes.expand, {
                                [classes.expandOpen]: this.state.expandedOne,
                            })}
                            onClick={this.handleExpandOneClick}
                            aria-expanded={this.state.expandedOne}
                            aria-label="Show more"
                        >
                            <ExpandMoreIcon />
                        </IconButton>
                    </CardActions>
                    <Collapse in={this.state.expandedOne} timeout="auto" unmountOnExit>
                        <CardContent className="ingredientsList">
                            <ul>
                                {this.props.recipe.ingredients.map(item =>
                                    <li>
                                        <Typography className="ingredientsListItem">{item}</Typography>
                                    </li>
                                )}
                            </ul>
                        </CardContent>
                    </Collapse>
                    <CardActions className={classes.actions} disableActionSpacing>
                        <h3>Notes</h3>
                        <IconButton
                            className={classnames(classes.expand, {
                                [classes.expandOpen]: this.state.expandedTwo,
                            })}
                            onClick={this.handleExpandTwoClick}
                            aria-expanded={this.state.expandedTwo}
                            aria-label="Show more"
                        >
                            <ExpandMoreIcon />
                        </IconButton>
                    </CardActions>
                    <Collapse in={this.state.expandedTwo} timeout="auto" unmountOnExit>
                        <CardContent className="notesSection">
                            {this.state.noteBoolean === true ?
                                <div>
                                    <p>{this.props.recipe.notes}</p>
                                    <IconButton>
                                        <EditIcon onClick={this.toggleEdit} />
                                    </IconButton>
                                </div> :
                                <div>
                                    <p><textarea className="notesTextArea" onChange={(event) => this.setNote(event)} defaultValue={this.props.recipe.notes} /></p>
                                    <IconButton>
                                        <CheckIcon onClick={(event) => this.saveNote(event, this.props.recipe.id)} />
                                    </IconButton>
                                </div>
                            }
                        </CardContent>
                    </Collapse>
                </Card>
            </li>
        )
    }
}

FavoritesListItem.propTypes = {
    classes: PropTypes.object.isRequired,
};

const mapStateToProps = (reduxStore) => ({
    reduxStore
})

let styledViewCard = withStyles(styles)(FavoritesListItem);

export default connect(mapStateToProps)(styledViewCard)