import React, {Component} from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography'
import AddIcon from '@material-ui/icons/Add';


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
        background:'#18ffff',
        

    },
    root: {
        minHeight: 210,
    },

};



class InputForm extends Component {
    state = {
        errorState: false
    };

    validateItem = e => {
        this.props.addItem(e);
        this.setState({
            errorState: this.props.newItem ? false : true
        });
    };

    render() {
        const { newItem,handleInput,updateItem} =this.props;



        const buttonChange = () =>{
          if(!updateItem){
                return(
                    <Button
                        type="submit"
                        variant="contained"
                        color='inherit'
                        fontsize='inherit'
                        style={styles.add}
                        startIcon={<AddIcon/>}

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
                        fontsize='inherit'
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

                            <Typography variant="overline"  color="secondary"   style={{fontFamily:'Roboto',margin:10}}>
                               All about your needs
                            </Typography>
                                <form onSubmit={this.validateItem} autoComplete='off' >
                    <TextField

                        id="outlined-full-width"
                        label="Input"
                        style={{  width:'90%',marginTop:40 ,marginLeft:40 }}
                        placeholder="Add A Todo Item "

                        margin="normal"

                        InputLabelProps={{
                            shrink: true,
                        }}
                        error={this.state.errorState}
                        helperText={
                            this.state.errorState && "Item name can't be blank"
                        }
                        size="large"
                        variant="outlined"
                        value={newItem}
                        onChange={handleInput}





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