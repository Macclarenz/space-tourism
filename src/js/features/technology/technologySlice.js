import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const loadTechnology = createAsyncThunk('technology', async () => {
    const response = await fetch('/api/technology')
    const jsonResponse = await response.json()
    return jsonResponse.technologies
}) 

const technologySlice = createSlice({
    name: 'technology',
    initialState: {
        data: [],
        hasError: false,
        isLoading: false
    },
    extraReducers: {
        [loadTechnology.pending]: (state, action) => {
            state.isLoading = true
        },
        [loadTechnology.fulfilled]: (state, action) => {
            state.isLoading = false
            state.data = action.payload
        },
        [loadTechnology.rejected]: (state, action) => {
            state.isLoading = false
            state.hasError = true
            console.error(action.error.message)
        }
    }
})

export const selectTechnology = state => state.technology.data
export default technologySlice.reducer