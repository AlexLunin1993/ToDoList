import React from 'react';
import '../App.css';

const List = (props) => {
    let taskElements = props.tasks.tasks.map((TE, index) => {
        debugger
        let itemTaskName = TE.taskName;
        let itemTask = TE.tasktext;
        let i = index;
        if (i !== 0) {
            return (
                <div className='row'>
                    <div className='alert alert-info alert-size'>
                        <div className='fs-5 fw-bold text-wrap'>{i}.  {itemTaskName}</div>
                        <div className='fs-6 text-wrap'>  {itemTask} </div>
                        <button className='btn btn-danger pull-right'
                            onClick={() => props.deleteTask(i)}>
                            <p> Удалить задачу </p>
                        </button>
                    </div>
                </div>
            )
        }
    }
    )

    return (
        <div className='container'>
            <div className='form-group'>
                Имя задачи:
                <textarea className='form-control' type='text'
                    onChange={props.changeTaskNameText} value={props.tasks.newNameText}> </textarea>
                Описание задачи:
                <textarea className='form-control' type='text'
                    onChange={props.changeText} value={props.tasks.newText}> </textarea>
                <button className='btn btn-success pull-right' onClick={props.addTask}>Добавить задачу</button>

            </div>
            <div>
                {taskElements}
            </div>
        </div>
    );

}

export default List;