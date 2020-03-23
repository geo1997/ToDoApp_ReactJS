import React from 'react';
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    title: {
        flexGrow: 1,
        textAlign: 'center',
    },
}));

const HeaderBar = () =>{
    const classes = useStyles();
        return(
            <div>
               <AppBar position="static" style={{ background: '#263238' }}>
                   <Toolbar>
                       <Typography variant="title"  className={classes.title} >
                           To Do Application
                       </Typography>
                   </Toolbar>
               </AppBar>
            </div>
        )
};



export default HeaderBar;