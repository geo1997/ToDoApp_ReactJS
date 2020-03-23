import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import ClearAllIcon from '@material-ui/icons/ClearAll';
import Card from '@material-ui/core/Card';
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
    root: {
        flexGrow: 1,
        maxWidth: 752,
    },
    demo: {
        backgroundColor: theme.palette.background.paper,
    },
    title: {
        margin: theme.spacing(4, 0, 2),
    },
    cardWith:{
        Width:300
    }


}));


const ToDoList = (props) =>{
    const classes = useStyles();
    const [dense, ] = React.useState(false);
    const items = props.items;


    const listItems = item =>{
        return <div key={item.id}>{item.itemText}</div>
    };


    return(
        <div >

            <Grid container spacing={0} justify='center' style={{marginTop:-150}}>
                <Grid item xs={12} md={6}>
                    <Typography variant="h6" className={classes.title}>
                        To do List
                    </Typography>

                    <div className={classes.demo}>
                        <List dense={dense}>
                            <Card className={classes.cardWidth} variant='outlined' >
                            {items.map(x=> (
                                <ListItem key={x.id}>

                                    <ListItemText
                                        primary={listItems(x)}

                                    />
                                    <ListItemSecondaryAction>

                                        <IconButton edge="end" aria-label="edit" style={{color:green[800]}}>
                                            <EditIcon />
                                        </IconButton>
                                        <IconButton edge="end" aria-label="delete" style={{color:red[800]}}>
                                            <DeleteIcon />
                                        </IconButton>

                                    </ListItemSecondaryAction>

                                </ListItem>

                            ) )}
                            </Card>
                        </List>
                    </div>

                    <Button
                        variant="text"
                        color='inherit'
                        style={{ background:'#d50000',width:'100%',color:'white'}}
                        size="large"

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