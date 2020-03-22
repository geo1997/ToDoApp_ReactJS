import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import ListItemText from '@material-ui/core/ListItemText';
import Button from '@material-ui/core/Button';
import ClearAllIcon from '@material-ui/icons/ClearAll';
import Card from "@material-ui/core/Card";
import AddIcon from "@material-ui/icons/Add";


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



}));

function generate(element) {
    return [0].map(value =>
        React.cloneElement(element, {
            key: value,
        }),
    );
}

const ToDoList = () =>{
    const classes = useStyles();
    const [dense, setDense] = React.useState(false);
    const [secondary, setSecondary] = React.useState(false);

    return(
        <div style={{ padding: 20}}>
            <Grid container spacing={0} style={{position:'absolute',left:'44%',top:'38%'}}>
                <Grid item xs={12} md={6}   >
                    <Typography variant="h6" className={classes.title}>
                        TodoList
                    </Typography>
                    <div className={classes.demo}>
                        <List dense={dense}>
                            {generate(
                                <ListItem>
                                    <ListItemText
                                        primary="Single-line item"

                                    />
                                </ListItem>,
                            )}
                        </List>
                        <Button
                            variant="contained"
                            color='inherit'
                            style={{ background:'#d50000',width:'70%',marginLeft:-200}}
                            startIcon={<ClearAllIcon/>}
                        >
                            Clear All
                        </Button>


                    </div>

                </Grid>

            </Grid>


        </div>

    )
};

export default ToDoList;