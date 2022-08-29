import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const loadDestinations = createAsyncThunk('destinations/getDestinations', async () => {
    const response = await fetch('/api/destinations')
    const jsonResponse = await response.json()
    return jsonResponse.destinations
})

const destinationsSlice = createSlice({
    name: 'destinations',
    initialState: {
        data: [],
        hasError: false,
        isLoading: false
    },
    extraReducers: {
        [loadDestinations.pending]: (state, action) => {
            state.isLoading = true
        },
        [loadDestinations.fulfilled]: (state, action) => {
            state.isLoading = false
            state.data = action.payload
        },
        [loadDestinations.rejected]: (state, action) => {
            state.isLoading = false,
            state.hasError = true
            console.error(action.error.message)
        }
    }
})

export const selectDestinations = state => state.destinations.data
export default destinationsSlice.reducer