import React,{Component} from 'react';
import TodoApp from './components/todoApp'
import './css/home.css'


export default class App extends Component {
  render() {
    return (
      <div className="notepad">
        <header className=" yowis">
          <p>
          To Do:
          </p>
          <TodoApp/>

        </header>
      </div>
    );
  }
}


