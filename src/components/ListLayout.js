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
import { red } from '@material-ui/core/colors';
import { green } from '@material-ui/core/colors';



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
    const strikeList = props.strikeList;

    // React.useEffect(
    //     () => {
    //         setItems(items)
    //     },
    //     [props.items]
    // )

    const listItems = item =>{
        return <div key={item.id}>{item.itemText}</div>
    };


        const completed = (id) => {

            document.getElementById(id).style.textDecoration='line-through';
            return true
        };



        const strikeTextMethod = (id)=>{
            // const index = items.findIndex(x=> x.id ===id);
            // const newItems = [items[index], ...items.slice(0, index - 1), ...items.slice(index + 1)];
            // setItems(newItems);
            completed(id);

        };



    return(
        <div >


            <Grid container  justify='center' alignContent='center'  >
                <Grid item xs={12} md={6}  >
                    <Typography variant="h5" className={classes.title} gutterBottom>
                        To do List - <Typography variant='caption' >
                         Click on an Item to Complete
                    </Typography>
                    </Typography>

                    <div className={classes.demo}>
                        <List dense={dense} >

                            {items.slice(0).reverse().map(x=> (
                                <ListItem key={x.id} button id={x.id}  onClick={() => strikeTextMethod(x.id)} divider>

                                    <ListItemText
                                        primary={listItems(x)}

                                    />
                                    <ListItemSecondaryAction>

                                        <IconButton onClick={() =>updateItem(x.id)}
                                                    edge="end"
                                                    aria-label="edit"
                                                    style={{color:green[800]}}>
                                            <EditIcon />
                                        </IconButton>
                                        <IconButton onClick={() =>deleteItem(x.id)}
                                                    edge="end"
                                                    aria-label="delete"
                                                    style={{color:red[800]}}>
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
                        size="large"
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


//