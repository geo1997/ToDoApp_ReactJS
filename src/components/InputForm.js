import React, {Component} from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography'
import AddIcon from '@material-ui/icons/Add'


import { borders } from '@material-ui/system';
import Card from '@material-ui/core/Card';

import Icon from '@material-ui/core/Icon';



class InputForm extends Component {


    render() {
        return (
                <div>
                    <Container maxWidth="md" >

                        <Typography component="div" style={{  borderColor:'#00c853',height: '50vh' }}>
                            <Card   style={{  height: '30vh' }}>
                            <Typography variant="h3"  color="secondary"  style={{fontFamily:'Roboto'}}>
                               Input Todo
                            </Typography>
                    <TextField

                        id="outlined-full-width"
                        label="Input"
                        style={{  marginTop:30,width:'90%' , marginLeft:40}}
                        placeholder="Add A Todo Item "

                        margin="normal"

                        InputLabelProps={{
                            shrink: true,
                        }}
                        size="medium"
                        variant="outlined"
                    />
                            <Button
                                variant="contained"
                                color='inherit'
                                style={{width:'30%', background:'#76ff03', marginLeft:300}}
                                startIcon={<AddIcon/>}
                            >
                                Add Item
                            </Button>
                            </Card>

                        </Typography>


            </Container>
            </div>
        );
    }
}

export default InputForm;