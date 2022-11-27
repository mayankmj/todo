import { useState } from "react"
// redux => database for front-end
import { useDispatch } from "react-redux";
import { addNewTodo } from "../redux/actions";
const TodoForm =() => {

    const [text,settext] = useState('');

    const dispatch = useDispatch();
    const onFormSubmit = (e) =>{
        e.preventDefault();

        // here we can call api but as we are using redux , in redux we dispatch our actions
        dispatch(addNewTodo(text));
        settext('');
    }
    const onInputchnage =(e) =>{
        settext(e.target.value);
    }
    return(
        <form className="form" onSubmit={onFormSubmit}>
            <input placeholder="Enter new todo..."   className="input"
            onChange={onInputchnage}
            value={text}
            />
        </form>
    )
}

export default TodoForm;