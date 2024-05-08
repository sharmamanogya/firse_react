import express from 'express';
import bodyParser from 'body-parser';
import Connection from './database/db.js';
import Detail from './model/details.js'


const app = express();
const PORT = 8080
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())


app.get('/', (req, res)=>{
    const data = req.body;
    res.send(data)
})

app.post('/store', async (req,res)=>{
    const {name, password, enrollment, marks} = req.body;

    const detail = {
        name: name,
        password: password,
        enrollment: enrollment,
        mark: marks
    }

    await Detail.save(detail)

    res.status(200).json({data:name})
})

const URL ="mongodb://localhost:27017/result"
Connection(URL)  	

app.listen(PORT, () => {
    console.log(`server is running on  http://localhost:${PORT}`)
})