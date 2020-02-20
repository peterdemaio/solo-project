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
import red from '@material-ui/core/colors/red';
import FavoriteBorderOutlinedIcon from '@material-ui/icons/FavoriteBorderOutlined';
import FavoriteOutlinedIcon from '@material-ui/icons/FavoriteOutlined';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { connect } from 'react-redux';
import Link from '@material-ui/core/Link';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';
import Button from '@material-ui/core/Button';
import './SearchResultsItem.css'

function Transition(props) {
    return <Slide direction="up" {...props} />;
}

const styles = theme => ({
    card: {
        maxWidth: 600,
        maxHeight: 650,
        minWidth: 340,
        overflow: 'auto'
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

class SearchResultsItem extends React.Component {

    state = {
        expanded: false,
        favorited: false,
        open: false,
    };

    handleExpandClick = () => {
        this.setState(state => ({ expanded: !state.expanded }));
    };

    handleFavorite = () => {
        this.setState({ open: true });
    };

    handleCloseYes = () => {
        this.setState({ open: false });
        this.favorite()
    };
    handleCloseNo = () => {
        this.setState({ open: false });
    };

    favorite = () => {

        this.props.dispatch({
            type: 'SAVE_RECIPE',
            payload: {
                recipe: this.props.recipe.recipe,
                user: this.props.reduxStore.user.id
            }
        })

        this.setState(state => ({ favorited: !state.favorited }))

    }

    render() {
        const { classes } = this.props;
        return (
            <li className="recipeListItem">
                <Card className={classes.card}>
                    <CardHeader
                        className="cardHeader"
                        title={this.props.recipe.recipe.label}
                        subheader={this.props.recipe.recipe.source}
                        action={
                            <IconButton aria-label="Add to favorites">
                                {this.state.favorited === false ?
                                    <div>
                                        <FavoriteBorderOutlinedIcon onClick={this.handleFavorite} />
                                        <Dialog
                                            open={this.state.open}
                                            TransitionComponent={Transition}
                                            keepMounted
                                            onClose={this.handleClose}
                                            aria-labelledby="alert-dialog-slide-title"
                                            aria-describedby="alert-dialog-slide-description"
                                        >
                                            <DialogTitle id="alert-dialog-title">{"Add to Favorites?"}</DialogTitle>
                                            <DialogActions>
                                                <Button onClick={this.handleCloseNo} color="primary">
                                                    Go Back
                                    </Button>
                                                <Button onClick={this.handleCloseYes} color="primary" autoFocus>
                                                    Yes!
                                    </Button>
                                            </DialogActions>
                                        </Dialog>
                                    </div> :
                                    <FavoriteOutlinedIcon />
                                }
                            </IconButton>
                        }
                    />
                    <CardMedia
                        className={classes.media}
                        image={this.props.recipe.recipe.image}
                        title={this.props.recipe.recipe.label}
                    />
                    <CardContent className="cardDescription">
                        <Typography component="p" className="cardDescription">
                            Click down arrow to see ingredients list and heart to save to favorites
                            </Typography>
                        <Typography>
                            <Link href={this.props.recipe.recipe.url} target="_blank" >
                                View recipe on site
                                </Link>
                        </Typography>
                    </CardContent>
                    <CardActions className={classes.actions} disableActionSpacing>
                            <h2>Ingredients</h2>
                        <IconButton
                            className={classnames(classes.expand, {
                                [classes.expandOpen]: this.state.expanded,
                            })}
                            onClick={this.handleExpandClick}
                            aria-expanded={this.state.expanded}
                            aria-label="Show more"
                        >
                            <ExpandMoreIcon />
                        </IconButton>
                    </CardActions>
                    <Collapse in={this.state.expanded} timeout="auto" unmountOnExit>
                        <CardContent className="ingredientsList">
                            <ul>
                                {this.props.recipe.recipe.ingredientLines.map(item =>
                                    <li>
                                        <Typography>{item}</Typography>
                                    </li>
                                )}
                            </ul>
                        </CardContent>
                    </Collapse>
                </Card>
            </li>
        )
    }
}

SearchResultsItem.propTypes = {
    classes: PropTypes.object.isRequired,
};

const mapStateToProps = (reduxStore) => ({
    reduxStore
})

export default connect(mapStateToProps)(withStyles(styles)(SearchResultsItem));