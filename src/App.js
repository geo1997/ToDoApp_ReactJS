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
            },
            updateItem:false
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
        });

};

    addItem = e =>{
        e.preventDefault();
         const typedItem = this.state.newItem;

        if(typedItem.itemText !==""){
            const typedItems=[...this.state.items,typedItem];
            this.setState({
                items:typedItems,
                newItem:{
                    id:'',
                    itemText: ''
                },
                updateItem:false
            })
        }else{

        }

    };

clearList = () =>{
    this.setState({
    items:[]
    })
};

deleteItem = id =>{
    const selectedItem = this.state.items.filter(item =>
    item.id !==id);
    this.setState({
        items:selectedItem
    });
};

updateItem = id =>{
    const selectedItem = this.state.items.filter(item =>
        item.id !==id);

    const ItemToBeEdittedId=
        this.state.items.find(item => item.id ===id);

    this.setState({
        items:selectedItem,
        newItem :{
            itemText:ItemToBeEdittedId.itemText
        },
        updateItem:true,
        id:id
    })
};

strikeList = id =>{
    const strikeItem = this.state.items.filter(item =>
        item.id !==id);
    this.setState({
        items:strikeItem
    });
}

    render() {
        return (
            <div >

                <HeaderBar/>
                <InputForm newItem={this.state.newItem.itemText}
                           addItem={this.addItem}
                           handleInput ={this.handleInput}
                           updateItem={this.state.updateItem}

                         />

                             <ListLayout items={this.state.items}
                                         clearList={this.clearList}
                                         deleteItem={this.deleteItem}
                                         updateItem={this.updateItem}
                                         strikeList={this.strikeList}
                                        />


            </div>



        );
    }
}

export default App;
