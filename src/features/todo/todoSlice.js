import { createSlice } from '@reduxjs/toolkit'

var count = 0

const initialState = {

    data: []

}
export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {

        add: (state, action) => {

            state.data.push({
                id: ++count,
                todoName: action.payload

            })

        },
        deleteById: (state, action) => {

            state.data = state.data.filter(item => item.id != action.payload)



        },
        deleteAll: (state) => {

            state.data = [];


        }
    }
})


export const { add, deleteById, deleteAll } = todoSlice.actions

export default todoSlice.reducer