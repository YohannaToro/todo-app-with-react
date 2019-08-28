import React,{Component} from 'react'
import { Card } from 'react-bootstrap';
export default class Todo extends Component{
    constructor(props){
        super(props);
    }
    render(){
    
        return(

          <div className=" co-content">
            
              <h2 className="commentAuthor">
              <p className="card-text">Task: {this.props.task.content}</p>
              <p className="card-text">Priority: {this.props.task.priority}</p>
            <p className="card-text">Due date: {this.props.task.dueDate}</p>
 
			</h2>
              {this.props.children}
          </div>
        
        
        )
    }

}