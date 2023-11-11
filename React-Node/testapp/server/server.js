import express from 'express'
import mysql from 'mysql'
import cors from 'cors'
import cookieParser from 'cookie-parser'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import multer from 'multer'
import path from 'path'

const app = express();
app.use(cors());
app.use(cookieParser());
app.use(express.json());
app.use(express.static('public'));

const con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",

})

con.connect(function(err) {
    if(err) {
        console.log("Error in correction");
    } else {
        console.log("Connected");
    }
})

app.post("/login", (req, res) => {
    
})

app.listen(8081, () => {
    console.log("Running");
})