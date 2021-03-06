import React, {Component} from "react";
import './App.css';
import Title from "./components/title";
import Layout from "./components/layout";
import TaskList from "./components/task-list";
import Input from "./components/input";

class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            newTask: "",
            tasks: [],
        }
    }

    handleTaskChange = (event) => {
        this.setState({
            newTask: event.target.value,
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        let newTask = this.state.tasks;
        newTask.push(this.state.newTask);
        this.setState({
            newTask: "",
            tasks: newTask
        })
    }

    handleDelete = (id) => {
        let newTasks = this.state.tasks;
        newTasks.splice(id, 1)
        this.setState({
            tasks: newTasks,
        })
    }

    render() {
        return (
            <Layout>
                <Title/>
                <Input
                    handleSubmit={this.handleSubmit}
                    handleTaskChange={this.handleTaskChange}
                    value={this.state.newTask}
                />
                <TaskList
                    tasks={this.state.tasks}
                    handleDelete={this.handleDelete}
                />
            </Layout>
        );
    }
}

export default App;
