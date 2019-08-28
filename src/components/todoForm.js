import React, { Component } from 'react'
import Input from '@material-ui/core/Input';
import Button from '@material-ui/core/Button';


export default class taskForm extends Component {
    constructor(props) {
        super(props);
        this.state={
            content:'',
            priority:'',
            dueDate:Date
        }
   
       }

 

   
        handleTextChange(e) {
            this.setState({content: e.target.value});
        }
        handlePirorityChange(e){
            this.setState({priority:e.target.value})
        }
        handleDueDateChange(e){
          
            var dd=e.target.value.split("-");
           var due=new Date(dd[0],dd[1],dd[2]).toDateString();
            this.setState({dueDate:due})
           
            
        }
        
        handleSubmit(e) {
            e.preventDefault();
           
            var text 		= this.state.content.trim();
            var prior=this.state.priority.trim();
            var due=this.state.dueDate.trim();
            if (!text || !prior) {
                return;
            }
            this.props.onTasktSubmit({ content: text,priority:prior,dueDate:due});
            this.setState({content: '',priority:''});
        }
        
    render() {
        return (
            <form className="task-Formi" onSubmit={(e) => this.handleSubmit(e)}> 
		
			 <Input
			 	className="input-content"
				 type="text"
				 placeholder="Add a task"
				 value={this.state.content}
				 onChange={(e) => this.handleTextChange(e)} 
			 /> 
             <Input
			 	className="input-pririty"
				 type="text"
				 placeholder="Add a priority"
				 value={this.state.priority}
				 onChange={(e) => this.handlePirorityChange(e)} 
			 /> 
         
         <Input type="text" 
      placeholder="Add a date"
         
       onChange={(e) => this.handleDueDateChange(e)} />


			<p><Button type="submit" className="btn-right" variant="outlined" color="primary">
                <a >Add Task</a></Button></p>
			 
		 </form>
        )
    }
}
