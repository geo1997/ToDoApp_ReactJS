import React, {Component} from 'react';
import InputForm from "./components/InputForm";
import HeaderBar from "./components/HeaderBar";

import ListLayout from "./components/ListLayout";



class App extends Component {

    constructor(props) {
        super(props);
        this.state={
            items:[],
            newItem:{
                id:'',
                itemText:''
            }
        };
        this.handleInput = this.handleInput.bind(this);
        this.addItem = this.addItem.bind(this);
    }

handleInput = e =>{
        this.setState({
            newItem:{
                id:1 + Math.random(),
                itemText: e.target.value

            }
        })
};

    addItem = e =>{
        e.preventDefault();
         const typedItem = this.state.newItem;

        if(typedItem.text !==" "){
            const typedItems=[...this.state.items,typedItem];
            this.setState({
                items:typedItems,
                newItem:{
                    id:'',
                    items: ''
                }
            })
        }
    };




    render() {
        return (
            <div>
                <HeaderBar/>
                <InputForm newItem={this.state.newItem.itemText}
                           addItem={this.addItem}
                           handleInput ={this.handleInput}

                         />
                <ListLayout items={this.state.items}/>




            </div>



        );
    }
}

export default App;
