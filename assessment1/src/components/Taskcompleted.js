import React, {Component} from 'react';

class TaskCompleted extends Component {
    constructor(props) {
        super(props)
        this.state={
            completed: props.completed
        };
    }


    render() {
        const{completed}= this.state;
        return (
    <div>
            {/* <div className="completed">  <div className="title">Completed Tasks:</div>

            {
              this.props.completed.map((complete) => {
                return <div className="parent2"><div className="chores2">{this.props.complete}</div></div>
              })
            }

            </div> */}
    </div>
        );
    }

}

export default TaskCompleted;
