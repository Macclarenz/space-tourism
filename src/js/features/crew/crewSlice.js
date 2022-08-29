import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const loadCrew = createAsyncThunk('crew/getCrew', async () => {
    try {
        const response = await fetch('/api/crew')
        const jsonResponse = await response.json()
        return jsonResponse.crews
    } catch (err) {
        console.error(err)
    }

})

const crewSlice = createSlice({
    name: 'crew',
    initialState: {
        data: [],
        hasError: false,
        isLoading: false
    },
    reducers: {},
    extraReducers: {
        [loadCrew.pending]: (state, action) => {
            state.isLoading = true
        },
        [loadCrew.fulfilled]: (state, action) => {
            state.isLoading = false
            state.data = action.payload
        },
        [loadCrew.rejected]: (state, action) => {
            console.error(action.error.message)
            state.isLoading = false
            state.hasError = true
        }
    }
})

export const selectCrew = state => state.crew.data
export default crewSlice.reducer

