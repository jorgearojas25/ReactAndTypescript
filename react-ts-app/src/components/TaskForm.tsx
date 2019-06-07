import * as React from "react";
import { ITask } from "./Task";

class TaskForm extends React.Component<ITaskFormProps, any> {


  constructor(props: ITaskFormProps) {
    super(props);
    this.state = {
      title: "",
      description: ""
    };
  }

  getCurrentTimestamp(): number{
      const date: Date = new Date();
      return date.getTime();
  }

  handleNewTask(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const newTask: ITask = {
      id: this.getCurrentTimestamp(),
      title: this.state.title,
      description: this.state.description,
      completed: false
    };
    console.log(newTask);
    this.props.addANewTask(newTask);
  }

  handleInputChange(
    e: React.ChangeEvent<HTMLInputElement|HTMLTextAreaElement>
  ) {
    const { name, value } = e.target;
    this.setState({
        [name]: value
    })
  }

  render() {
    return (
      <div className="card card-body">
        <form onSubmit={e => this.handleNewTask(e)}>
          <div className="form-group">
            <input
              name="title"
              type="text"
              onChange={e => this.handleInputChange(e)}
              className="form-control"
              placeholder="Task Title"
            />
          </div>
          <div className="form-group">
            <textarea
              name="description"
              onChange={e => this.handleInputChange(e)}
              className="form-control"
              placeholder="Task Description"
            />
          </div>
          <div className="form-group">
            <button type="submit" className="btn btn-primary btn-block">
              Save
            </button>
          </div>
        </form>
      </div>
    );
  }
}

interface ITaskFormState {
  title: string;
  description: string;
}

interface ITaskFormProps {
  addANewTask: (Task: ITask) => void;
}

export default TaskForm;
