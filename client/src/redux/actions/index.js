// api calls
import axios from 'axios';
import { ADDNEW_TODO , GETALL_TODO , TOGGLE_TODO , UPDATE_TODO , DELETE_TODO , TOGGLE_TAB} from './type';

// const API_URL = 'https://to-do1.up.railway.app'
const API_URL = 'https://todo-backend-0tfy.onrender.com'


// data will come from TodoForm
export const addNewTodo = (data) => async (dispatch) =>{ // dispatch is using with middleware
    try{
       const res = await axios.post(`${API_URL}/todos` , {data}) // res will be storing whole object
       dispatch({type:ADDNEW_TODO  , payload: res.data}); // payload is the data that we set in redux coming from api
      // dispatch will call the todosreducer and the whole object will be passed
    }

    catch(error){
        console.log('Error while calling newtodo api',error.message);
    }
}


// fetching all todos from backend 
export const getAllTodos = () => async (dispatch) => {
    try{
        const res = await axios.get(`${API_URL}/todos`)
        dispatch({type:GETALL_TODO  , payload: res.data}); // payload is the data that we set in redux coming from api
     }
     catch(error){
         console.log('Error while calling getallTodos api',error.message);
     }
}

// used to mark todo done 
export const toggleTodo = (id) => async (dispatch) => {
    try{
        const res = await axios.get(`${API_URL}/todos/${id}`)
        dispatch({type:TOGGLE_TODO  , payload: res.data}); // payload is the data that we set in redux coming from api
     }
     catch(error){
         console.log('Error while calling newtodo api',error.message);
     }
}


export const updateTodo = (id,data) => async (dispatch) => {
    try{
        const res = await axios.put(`${API_URL}/todos/${id}` , {data})
        dispatch({type:UPDATE_TODO  , payload: res.data}); // payload is the data that we set in redux coming from api
     }
     catch(error){
         console.log('Error while calling updatetodo api',error.message);
     }
}
// diff btw put api -> it helps in updating 


export const deleteTodo = (id,data) => async (dispatch) => {
    try{
        const res = await axios.delete(`${API_URL}/todos/${id}`)
        dispatch({type:DELETE_TODO  , payload: res.data}); // payload is the data that we set in redux coming from api
     }
     catch(error){
         console.log('Error while calling deletetodo api',error.message);
     }
}


export const toggleTab = (tab) => async (dispatch) => {
    try{
        // const res = await axios.delete(`${API_URL}/todos/${id}`)
        dispatch({type:TOGGLE_TAB  , selected: tab}); // payload is the data that we set in redux coming from api
     }
     catch(error){
         console.log('Error while calling deletetodo api',error.message);
     }
}

