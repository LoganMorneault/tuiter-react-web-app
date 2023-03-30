import { createSlice }
    from "@reduxjs/toolkit";
import { findTuitsThunk, deleteTuitThunk, createTuitThunk, updateTuitThunk }
    from "../../services/tuits-thunks";

const initialState = {
    tuitsData: [],
    loading: false
}

const tuitsSlice = createSlice({
    name: 'tuits',
    initialState,
    extraReducers: {
        [findTuitsThunk.pending]:
            (state) => {
                state.loading = true
                state.tuitsData = []
            },
        [findTuitsThunk.fulfilled]:
            (state, { payload }) => {
                state.loading = false
                state.tuitsData = payload
            },
        [findTuitsThunk.rejected]:
            (state, action) => {
                state.loading = false
                state.error = action.error
            },
        [deleteTuitThunk.fulfilled]:
            (state, { payload }) => {
                state.loading = false
                state.tuitsData = state.tuitsData
                    .filter(t => t._id !== payload)
            },
        [createTuitThunk.fulfilled]:
            (state, { payload }) => {
                state.loading = false
                state.tuitsData.push(payload)
            },
        [updateTuitThunk.fulfilled]:
            (state, { payload }) => {
                console.log("payload", payload);

                state.loading = false
                const tuitNdx = state.tuitsData
                    .findIndex((t) => t._id === payload._id)
                state.tuitsData[tuitNdx] = {
                    ...state.tuitsData[tuitNdx],
                    ...payload
                }
            }
    },
    reducers: {}
});

export default tuitsSlice.reducer;