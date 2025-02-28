const express = require('express')
const mongoose = require('mongoose')
const app = express()
const std = require('./models/studentModel')
const dbConn = require('./config/db')

app.use(express.json());

app.get('/',function(req,res){
    res.json('hi world')
});

dbConn()


app.post('/api/students',async(req,res)=>{
    
    const {name , age , rollno , major} = req.body;
    try {
        const existingStudent = await std.findOne({rollno}) 
        if (existingStudent){
            return(
                res.status(201).json("Student already found")
            )
        }
        const newStudent = new std({
            name ,
            age ,
            rollno ,
            major
        })

        await newStudent.save()

        res.status(200).json({message:"successfully created Student", std : newStudent})



    } catch (e) {
        console.log("can't post student",e)
        res.status(400).json({message:"error to make student"})
    }
})

app.get('/api/students',async(req,res)=>{
    try{
        const students = await std.find()
        res.status(200).json(students);
    }
    catch(error){
        console.log("error in retrieving")
        res.status(400).json({message:'server error'})
    }})


app.get('/api/students/:id',async(req,res)=>{
    try{
    const retreiveStd= await std.findById(req.params.id)
    if(!retreiveStd){
        return(
            res.status(404).json({message:"Student is not found"})
        )
    }
    return res.json(retreiveStd)
}
    catch(error){
        res.status(400).json({message:"server error",error:error.message})
    }
    })

app.put('/students/:id', async (req, res) => {
    try {
    const { rollNo} = req.body;
        
            // Check if rollNo already exists for another student
        if (rollNo) {
                const existingStudent = await std.findOne({ rollNo });
                if (existingStudent) {
                return res.status(409).json({ message: 'rollNo already exists for another student' });
                }
            }
        
            const updatedStudent = await Student.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
            if (!updatedStudent) {
                return res.status(404).json({ message: 'Student not found' });
            }
            res.json(updatedStudent);
            } catch (error) {
            res.status(500).json({ message: 'Server error', error: error.message });
            }
        });


app.listen(3000,()=>{
    console.log('port runnning on 3000');
})