const express = require('express');
const app = express();

const cors = require('cors')
const notes = require('./routes/notes')
const addnotes = require('./routes/addnotes')
const delnotes = require('./routes/delnotes')

app.use(cors())
app.use(express.urlencoded({extended:false}))
app.use(express.json({extended:false}))
app.use('/api',notes)
app.use('/api',addnotes)
app.use('/api',delnotes);

app.route("/")
    .get((req,res)=>{
        res.send("<h1>This is the server for note taking app</h1>")
    })

app.listen(8080, '0.0.0.0', () => {
    console.log('Server is running on port 8080');
});

