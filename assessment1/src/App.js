import React, { Component } from 'react';
import Taskcompleted from './components/Taskcompleted.js';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
        userInput: "",
        task:[],
        completed: []
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleCompleted = this.handleCompleted.bind(this);

  }

  handleNewTask(userInput) {
    this.setState({
      userInput
    })
  }

  handleSubmit(){
    this.setState({
      userInput: "",
      task: [...this.state.task, this.state.userInput]
    })
  }

  handleCompleted() {  
    this.setState({
      completed: [this.state.task],
      task: []
    })
  }

  handleDelete() {
    this.setState({
      task: []
    })
  }


  render() {
    return (
      <div>
        <div className="background"></div>
      
          <div className="TODO"><h2>TO-DO:</h2></div>
            <p></p>
              <hr />

              <div className="parent">
                <div className="input"><input type="text" value={this.state.userInput} name="NewTo-Do" onChange={(e) => {this.handleNewTask(e.target.value)}}/></div>
                <div className="button-new" onClick={(e) => {this.handleSubmit()}}><div>Add new To-do</div></div> 
              </div>

              <div className="tasks">  <div className="title"> To-Do List:</div>
                    {
                      this.state.task.map((elem) => {
                        return <div className="parent2"><div className="chores">{elem}</div><div className="completeButton" onClick={(e) => {this.handleCompleted()}}><div>Complete</div></div>
                        <div className="delete" onClick={(e) => {this.handleDelete()}}> X </div></div>
                      })
                    }
              </div>

              <div className="completed">  <div className="title">Completed Tasks:</div>
              {
                this.state.completed.map((complete) => {
                  return <div className="parent2"><div className="chores2">{complete}</div></div>
                })
              }
              </div>

              {/* <Taskcompleted/> */}
    
      </div>
    );
  }
}

export default App;
