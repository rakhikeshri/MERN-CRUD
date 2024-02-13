import {configureStore} from '@reduxjs/toolkit'
import notesReducer from './reducers/notesSlice'

export const store =  configureStore({
    reducer:{
        notes: notesReducer
    }
})
