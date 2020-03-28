import React from 'react';
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

import Grid from '@material-ui/core/Grid';
import FormatListBulletedIcon from '@material-ui/icons/FormatListBulleted';

const HeaderBar = () =>{
    //const classes = useStyles();
        return(
            <div>
               <AppBar  position='static' style={{ background: '#263238' }}>
                   <Toolbar>
                       <Grid container direction="row" justify="center">
                           <Grid item>
                               <FormatListBulletedIcon  />
                           </Grid>
                               <Grid item>
                                   <Typography variant="title"   >
                                       To Do Application
                                   </Typography >

                               </Grid>
                           </Grid>


                   </Toolbar>
               </AppBar>
            </div>
        )
};



export default HeaderBar;