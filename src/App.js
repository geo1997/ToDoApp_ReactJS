import React, {Component} from 'react';
import InputForm from "./components/InputForm";
import HeaderBar from "./components/HeaderBar";
import List from './components/List'


class App extends Component {
    render() {
        return (
            <div>
                <HeaderBar/>
                <InputForm/>
                <List/>


            </div>



        );
    }
}

export default App;
