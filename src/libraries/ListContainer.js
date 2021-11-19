import { connect } from 'react-redux'
import List from './list'
import { changeText , addTask , deleteTask , changeTaskNameText } from '../Redux/TasksReducer'


let mapStateToProps = (state) => {

    return{
    tasks: state.tasks,
    }
}
let mapDispatchToProps = (dispatch) => {
    
    return {
        changeText: (newText) => {
            dispatch(changeText(newText.target.value));            
        },
        addTask: () => {
            dispatch(addTask());
        },
        deleteTask: (id) => {
            dispatch(deleteTask(id))
        },
        changeTaskNameText:(newNameText) => {
            dispatch(changeTaskNameText(newNameText.target.value))
        }
    }
}


export default connect (mapStateToProps, mapDispatchToProps) (List)