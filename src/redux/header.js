import  { createSlice } from '@reduxjs/toolkit'
const reduxState = JSON.parse(localStorage.getItem('reduxState'));

export const headerSlice = createSlice({
    name: 'header',
    initialState: reduxState !== null && reduxState !== undefined && reduxState.header !== null && reduxState.header !== undefined ? reduxState.header : require('../json/header-menu.json'),
    reducers: {
        hydrate:(state, action) => {
            // do not do state = action.payload it will not update the store
            return action.payload
        },
        headermenu: (state, action) => {
            state.value = action.payload
        }
    }
})

export const { headermenu } = headerSlice.actions;
export default headerSlice.reducer;