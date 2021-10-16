import { ConstructionOutlined } from '@mui/icons-material';
import { createSlice} from '@reduxjs/toolkit'


const initialState = [
    {active: true,
        category: "Task",
        content: "",
        date: "15/10/2021",
        dates: "no dates",
        id: "ee1e91c0-5898-4b66-8a0c-66e4510b2856",
        task: "test"},
    {active: false,
        category: "Qoute",
        content: "trtr",
        date: "15/10/2021",
        dates: "no dates",
        id: "61a7da90-b1c0-42d3-bce3-ec089fe0f999",
        task: "teterere"},
]

export const TableSlice = createSlice({ 
    name:'todos',
    initialState,
    reducers: {
        //add Todo
        addTodo: (state,action) => {
            state.push(action.payload)
        },
        //Update Todo
        updateTodo: (state,action) => {
            const {id, ...content} = action.payload;
            const existingTodo = state.find(todo => todo.id === id)
            if(existingTodo) {
                 for(let key in content) {
                    existingTodo[key] = content[key]
                 }
                
            }

        },
        //Delete Todo
        deleteTodo: (state,action) => {
            const existingTodo = state.findIndex(el=>el.id === action.payload)
            state.splice(existingTodo,1)
        },
        //Archive Todo
        archiveTodo: (state,action) => {
            console.log(action.payload)
            const existingTodo = state.find(todo => todo.id === action.payload)
            console.log('todo',existingTodo)
            if(existingTodo) {
                existingTodo['active'] = !existingTodo['active']
            }

        }
    }
})

export const {addTodo,updateTodo,archiveTodo,deleteTodo} = TableSlice.actions
export default TableSlice.reducer

export const recordsSelector = state => state.records