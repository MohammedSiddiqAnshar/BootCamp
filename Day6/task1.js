const express = require('express')
const app = express()

app.get('/',function(req,res){
    res.json({msg:'Hello welcome to this page'})
})

app.listen(3000,function(){
    console.log('successfully printed')
})