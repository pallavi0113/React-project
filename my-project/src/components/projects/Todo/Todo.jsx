import React , {useEffect, useState} from "react";
import "./Todo.css";
import { TodoForm } from "./TodoForm";
import { TodoList } from "./TodoList";
import { TodoDate } from "./TodoDate";
export const Todo = () => {
    const [task,setTask] = useState([]);
    
    const handleFormSubmit =(inputValue) => {
        const {id,content,checked}=inputValue;
        if(!content) return;
        // if(task.includes(inputValue)) return;
        const ifTodoContentMatched =task.find(
            (curTask) => curTask.content===content
        );
        if(ifTodoContentMatched) return;
        setTask((prev) => [...prev,
            {id,content,checked}
        ]);
    };

    //todo date time
    
   
    //todo handledelete function

    const handleDeleteTodo =(value) => {
        console.log(task);
        console.log(value);
        const updateTask=task.filter((curTask) => curTask.content !== value);
        setTask(updateTask);
    };

    //todo handleclear button

    const handleClearButton =() => {
        setTask([]);
    };

    const handleCheckedTodo =(content) => {
        const updateTask =task.map((curTask) => {
            if(curTask.content === content){
                return { ...curTask,checked:!curTask.checked};
            }
            else{
                return curTask;
            }
        });
        setTask(updateTask);
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
                        return (<TodoList
                        key={curTask.id}
                        data={curTask.content} 
                        checked={curTask.checked}
                        onHandleDeleteTodo= {handleDeleteTodo}
                        onHandleCheckedTodo={handleCheckedTodo}
                        />
                        ) ;
                    })
                }
            </ul>
        </section>
        <section >
            <button className="clear-btn" onClick={handleClearButton}>Clear all</button>
        </section>
    </section>
}