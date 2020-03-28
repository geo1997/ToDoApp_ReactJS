import React, {Component} from 'react';
import InputForm from "./components/InputForm";
import HeaderBar from "./components/HeaderBar";
import ListLayout from "./components/ListLayout";

/* this is a simple
* to do application created using ReactJS,
* a user is capable of adding updating and deleting a
* to do.*/



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

    //handling the input on the text field
handleInput = e =>{
        this.setState({
            newItem:{
                id:1 + Math.random(),
                itemText: e.target.value

            }
        });

};

    // once the user clicks on the add button the textfield is added to a list
    addItem = e => {
        e.preventDefault();
        const typedItem = this.state.newItem;

        if (typedItem.itemText !== "") {
            const typedItems = [
                { ...typedItem, isStriked: false },
                ...this.state.items
            ];
            this.setState({
                items: typedItems,
                newItem: {
                    id: "",
                    itemText: ""
                },
                updateItem: false
            });
        } else {
        }
    };

//method to clear all the to dos in the array onclick
    clearList = () =>{
    this.setState({
    items:[]
    })
};

    //method to delete a particular to do item
deleteItem = id =>{
    const selectedItem = this.state.items.filter(item =>
    item.id !==id);
    this.setState({
        items:selectedItem
    });
};

//method to update a particulr to do item
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

/*method to change the state of an item, when a user clicks on an item on the list to
show that an item has been completed its state is converted to the required state(isStriked:true)
 */
handleClick = id => {
        const selectedItem = this.state.items.find(item => item.id === id);
        if (selectedItem.isStriked === false)
            this.setState({
                items: [
                    ...this.state.items.filter(item => item.id !== id),
                    { ...selectedItem, isStriked: true }
                ]
            });
    };



    render() {
        return (
            <div  >


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
                                         handleClick={this.handleClick}
                                        />


            </div>



        );
    }
}

export default App;
