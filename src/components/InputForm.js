import React, {Component} from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography'
import AddIcon from '@material-ui/icons/Add'
import EditIcon from '@material-ui/icons/Edit';


import Card from '@material-ui/core/Card';

const styles = {
    edit: {

        width:'40%',
         marginLeft:270,
        background:'#76ff03',

    },
    add:{
        width:'40%',
        marginLeft:270,
        background:'#18ffff'

    },
    root: {
        minHeight: 200,
    },

};



class InputForm extends Component {


    render() {
        const { newItem, addItem,handleInput,updateItem} =this.props;



        const buttonChange = () =>{
          if(!updateItem){
                return(
                    <Button
                        type="submit"
                        variant="contained"
                        color='inherit'
                        style={styles.add}
                        startIcon={<EditIcon/>}

                    >
                        Add Item
                    </Button>

                )
            }else{
                return (
                    <Button
                        type="submit"
                        variant="contained"
                        color='inherit'
                        style={styles.edit}
                        startIcon={<EditIcon/>}

                    >
                        Edit Item
                    </Button>
                )
          }
        };

        return (
                <div>
                    <Container maxWidth="md"  >
                        {/*marginTop:15*/}
                        <Typography component="div" style={{  borderColor:'#00c853' }}>
                            {/*style={{  height: '30vh' }}*/}
                            <Card   style={styles.root}>
                            <Typography variant="h3"  color="secondary"  style={{fontFamily:'Roboto'}}>
                               Input Todo
                            </Typography>
                                <form onSubmit={addItem} autoComplete='off' >
                    <TextField

                        id="outlined-full-width"
                        label="Input"
                        style={{  width:'90%',marginTop:30 ,marginLeft:40 }}
                        placeholder="Add A Todo Item "

                        margin="normal"

                        InputLabelProps={{
                            shrink: true,
                        }}
                        size="medium"
                        variant="outlined"
                        value={newItem}
                        onChange={handleInput}

                        //error{newItem === ""}



                    />

                                    {buttonChange()}
                                </form>
                            </Card>


                        </Typography>


            </Container>


                </div>
        );
    }
}

export default InputForm;