const express = require('express')
const app = express()
app.get('/',function(req,res){
    res.json({msg:'Hello welcome to this page'})
})

app.get('/users',function(req,res){
    res.json([{id:'1',name:'siddiq'},{id:'2',name:'Mohammed'},{id:'3',name:'john'}])
})

app.listen(3000,function(){
    console.log('successfully printed all items')
})