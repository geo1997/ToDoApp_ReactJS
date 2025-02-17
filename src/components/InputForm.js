import React, {Component} from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography'
import AddIcon from '@material-ui/icons/Add';
import Grid from '@material-ui/core/Grid';
import EditIcon from '@material-ui/icons/Edit';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import '../textStyle/textStyle.css'



const styles = {
    edit: {

        width:'100%',



        background:'#76ff03',
        size:'large'

    },
    add:{

        width:'100%',

        background:'#18ffff',
        size:'large',


    },
    root: {
        minHeight: 210,
        minWidth:300,
        padding: 10


    },


};


class InputForm extends Component {

    state = {
        errorState: false,

    };

    //on submit checks if the text field is empty or not, if empty errorState is set
    validateItem = e => {
        this.props.addItem(e);
        this.setState({
            errorState: this.props.newItem ? false : true,

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
                    <Grid container  justify='center' alignContent='center'  >
                        <Grid item xs={12} md={6}  >

                        <Typography component="div" style={{  borderColor:'#00c853' }}>

                            <Card   style={styles.root}>

                            <Typography variant="overline"    style={{fontFamily:'Roboto',margin:10}}>
                              <span className="toto">
                                <span> All about your needs</span>
                                    </span>
                            </Typography>
                                <form onSubmit={this.validateItem} autoComplete='off' style={styles.errorStyle} >


                                    <Grid container  justify='center' alignContent='center'  >
                                        <Grid item xs={12}   >

                                            <TextField

                                                id="outlined-full-width"
                                                label="Input"
                                                style={{  width:'100%',marginTop:30 }}
                                                placeholder="Add A Todo Item "

                                                margin="normal"

                                                InputLabelProps={{
                                                    shrink: true,
                                                }}



                                                error={this.state.errorState }
                                                helperText={
                                                    this.state.errorState && "Item name can't be blank"


                                                }
                                                size="large"
                                                variant="outlined"
                                                value={newItem}
                                                onChange={handleInput}




                                            />

                                        </Grid>

                                    </Grid>
                                    <CardActions>
                                    <Grid container  justify='center' alignContent='center'  >
                                        <Grid item xs={12} md={6}  >

                                        {buttonChange()}


                                        </Grid>

                                    </Grid>

                                    </CardActions>




                                </form>

                            </Card>


                        </Typography>


                         </Grid>

                    </Grid>
                </div>
        );
    }
}

export default InputForm;