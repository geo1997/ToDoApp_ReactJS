import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import ClearAllIcon from '@material-ui/icons/ClearAll';
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import IconButton from '@material-ui/core/IconButton';




const useStyles = makeStyles(theme => ({

    demo: {
        backgroundColor: theme.palette.background.paper,
    },
    title: {
        margin: theme.spacing(4, 0, 2),
    },
    root: {
        minHeight: 170,
    },


}));


const ToDoList = (props) =>{
    const classes = useStyles();
    const [dense ] = React.useState(false);

    const clearList = props.clearList;
    const items = props.items;
    const deleteItem = props.deleteItem;
    const updateItem = props.updateItem;
    const handleClick = props.handleClick;

    //items are listed
    const listItems = item =>{
        return <div key={item.id}>{item.itemText}</div>
    };


    const strikeTextMethod = id => {
        handleClick(id);
    };

    return(
        <div >


            <Grid container  justify='center' alignContent='center'  >
                <Grid item xs={12} md={6}  >
                    <Typography variant="h5" className={classes.title} gutterBottom>
                        To do List  <Typography variant='caption' >
                         Click on an Item to Complete
                    </Typography>
                    </Typography>

                    <div className={classes.demo}>
                        <List dense={dense} >

                            {items.map(x=> (
                                <ListItem key={x.id} button id={x.id}
                                          style={{
                                              textDecoration: x.isStriked ? "line-through" : "initial"
                                          }}

                                          onClick={() => strikeTextMethod(x.id)} divider>

                                    <ListItemText
                                        primary={listItems(x)}

                                    />
                                    <ListItemSecondaryAction>

                                        <IconButton onClick={() =>updateItem(x.id)}
                                                    edge="end"
                                                    aria-label="edit"
                                                    style={{color:'#76ff03'}}>
                                            <EditIcon />
                                        </IconButton>
                                        <IconButton onClick={() =>deleteItem(x.id)}
                                                    edge="end"
                                                    aria-label="delete"
                                                    style={{color:'#d50000'}}>
                                            <DeleteIcon />
                                        </IconButton>

                                    </ListItemSecondaryAction>

                                </ListItem>

                            ) )}

                        </List>
                    </div>

                    <Button
                        variant="text"
                        color='inherit'
                        style={{ background:'#d50000',width:'100%',color:'white'}}
                        fontsize="inherit"
                        onClick={clearList}
                        startIcon={<ClearAllIcon/>}
                    >
                        Clear All
                    </Button>
                </Grid>
            </Grid>


            <br/>

        </div>

    )
};

export default ToDoList;


