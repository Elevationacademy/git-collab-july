const express = require('express')
const path = require('path')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const api = require('./server/routes/api')


mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/weatherApp', { useNewUrlParser: true })

const app = express()
