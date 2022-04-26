import React from 'react';
import '../App.css';

const List = (props) => {
    const renderTasks = (taskName, taskText, index) => {
        return (
            <div className='row'>
                <div className='alert alert-info alert-size'>
                    <div className='fs-5 fw-bold text-wrap'>{index+1}.  {taskName}</div>
                    <div className='fs-6 text-wrap'>  {taskText} </div>
                    <button className='btn btn-danger pull-right'
                            onClick={() => props.deleteTask(index)}>Удалить задачу</button>
                </div>
            </div>
        )
    }

    return (
        <div className='container'>
            <div className='form-group'>
                Имя задачи:
                    <textarea 
                        className='form-control' 
                        type='text'
                        onChange={props.changeTaskNameText} 
                        value={props.tasks.newNameText}/>
                Описание задачи:
                    <textarea 
                        className='form-control' 
                        type='text'
                        onChange={props.changeText}
                        value={props.tasks.newText}/>
                <button 
                className='btn btn-success pull-right' 
                onClick={props.addTask}>Добавить задачу</button>

            </div>
            <div>
                {
                    props.tasks.tasks.length > 0 && props.tasks.tasks.map((TE, index) => 
                    renderTasks(TE.taskName, TE.tasktext, index)
                )
                }
            </div>
        </div>
    );

}

export default List;