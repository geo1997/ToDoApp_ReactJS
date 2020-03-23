import React, {Component} from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography'
import AddIcon from '@material-ui/icons/Add'


import Card from '@material-ui/core/Card';

const styles = {
    container: {

        width:'40%',
         marginLeft:270,
        background:'#76ff03'
    }
};



class InputForm extends Component {


    render() {
        const { newItem, addItem,handleInput } =this.props;
        return (
                <div>
                    <Container maxWidth="md"  >

                        <Typography component="div" style={{  borderColor:'#00c853',height: '50vh' ,marginTop:15}}>
                            <Card   style={{  height: '30vh' }}>
                            <Typography variant="h3"  color="secondary"  style={{fontFamily:'Roboto'}}>
                               Input Todo
                            </Typography>
                                <form onSubmit={addItem}>
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
                        value={newItem}
                        onChange={handleInput}

                    />



                                <Button
                                    type="submit"
                                    variant="contained"
                                    color='inherit'
                                    style={styles.container}
                                    startIcon={<AddIcon/>}

                                >
                                    Add Item
                                </Button>
                                </form>
                            </Card>


                        </Typography>


            </Container>


                </div>
        );
    }
}

export default InputForm;