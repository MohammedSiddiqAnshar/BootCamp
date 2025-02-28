const express = require('express')
const app = express()

const students = [
    {id:1,name:'siddiq',std:'in'},
    {id:2,name:'mohammed',std:'in'}
]


app.get('/',function(req,res){
    res.json('hello you r here')
})

app.get('/users',function(req,res){
    res.json(students)
})

app.get('/users/:id',function(req,res){
    const { id } = req.params;
    const studentsdet= students.find((std)=> std.id==id)
    res.json(studentsdet)
})

app.listen(3000,function(){
    console.log('successfully printed all items')
})