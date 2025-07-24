import React , {useEffect, useState} from "react";
import "./Todo.css";
import { TodoForm } from "./TodoForm";
import { TodoList } from "./TodoList";
import { TodoDate } from "./TodoDate";
export const Todo = () => {
    const [task,setTask] = useState([]);
    
    const handleFormSubmit =(inputValue) => {
        if(!inputValue) return;
        if(task.includes(inputValue)) return;
        setTask((prev) => [...prev,inputValue]);
    };

    //todo date time
    
   
    //todo handledelete function

    const handleDeleteTodo =(value) => {
        console.log(task);
        console.log(value);
        const updateTask=task.filter((curTask) => curTask !== value);
        setTask(updateTask);
    };

    //todo handleclear button

    const handleClearButton =() => {
        setTask([]);
    };
    return <section className="todo-container">
        <header>
            <h1>Todo List</h1>
            <TodoDate />
        </header>
        <TodoForm onAddTodo={handleFormSubmit} /> 
        <section className="myUnOrdList">
            <ul>
                {
                    task.map((curTask,index)=>{
                        return <TodoList
                        key={index}
                        data={curTask} 
                        onHandleDeleteTodo= {handleDeleteTodo}
                        />;
                    })
                }
            </ul>
        </section>
        <section >
            <button className="clear-btn" onClick={handleClearButton}>Clear all</button>
        </section>
    </section>
}