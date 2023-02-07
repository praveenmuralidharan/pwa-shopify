import  { createSlice } from '@reduxjs/toolkit'
const reduxState = JSON.parse(localStorage.getItem('reduxState'));

export const topBarSlice = createSlice({
    name: 'topbar',
    initialState: reduxState !== null && reduxState !== undefined && reduxState.topbar !== null && reduxState.topbar !== undefined ? reduxState.topbar : { value: { topBarStatus: true } },
    reducers: {
        hydrate:(state, action) => {
            // do not do state = action.payload it will not update the store
            return action.payload
        },
        dismiss: (state, action) => {
            state.value = action.payload
        }
    }
})

export const { dismiss } = topBarSlice.actions
export default topBarSlice.reducer;