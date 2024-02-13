// load env variables
if (process.env.NODE_ENV != 'production') {
    import('dotenv').then((dotenv) => dotenv.config());
}

// import dependencies
// const express = require('express')
// const connectToDb = require("./config/connectToDb")
import express from 'express'
import connectToDb from './config/connectToDb.js';
import { fetchNotes, fetchNote, createNote, updateNote, deleteNote } from './controllers/notesController.js';
import { signup, login, logout } from './controllers/usersController.js';
import cors from 'cors'
import cookieParser from 'cookie-parser';

// create an express app
const app = express()

// configure express app
app.use(express.json())
app.use(cookieParser())
app.use(cors())

// Connect to db
connectToDb()

//Routing

app.post('/signup', signup)
app.post('/login', login)
app.get('/logout', logout)






app.get('/notes', fetchNotes)
app.get('/notes/:id', fetchNote)
app.post('/notes', createNote)
app.put('/notes/:id', updateNote)
app.delete('/notes/:id', deleteNote)

//start the server
app.listen(process.env.PORT)
