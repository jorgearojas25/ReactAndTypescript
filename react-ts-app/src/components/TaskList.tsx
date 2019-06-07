import * as React from 'react';
import { ITask} from './Task'

class TaskList extends React.Component<ITaskListProps,any> {

    // constructor(props) {
    //     super(props);
    // }
    render():JSX.Element[]{
        return this.props.tasks.map((task: ITask, i: number)=>{
            return (
                <div className="col-md-4 mt-2" key={task.id}>
                    <h3>{task.title}</h3>
                </div>
            )
        });
    }
}

interface ITaskListProps{
    tasks: ITask[]
}

export default TaskList;