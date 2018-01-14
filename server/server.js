var express = require('express'); 
var bodyParser = require('body-parser'); 
var{ObjectID} = require('mongodb');

var {mongoose} = require('./db/mongoose');
var {User} = require('./models/user');
var {Todo} = require('./models/todo');

var app = express();

app.use(bodyParser.json());

app.post('/todos',(req, res)=>{
    var todo = new Todo({
        text: req.body.text
    });
    
    todo.save().then((doc)=>{
        res.send(doc);
    },(e)=>{
        res.status(400).send(e);
    })
});


app.get("/todos",(req, res)=>{
   
    Todo.find().then((docs)=>{
        
        res.send({docs});
    },(err)=>{
        res.status(400).send(err);
    })
    
});


app.get('/users', (req, res)=>{
   User.find().then((docs)=>{
       res.send(docs);
   }, (err)=>{
       res.status(400).send(err);
   }); 
});

app.get('/users/email/:email',(req, res)=>{
    var email = req.params.email;
    User.findOne({email}).then((user)=>{
        
        if(!user){
            res.send('NO USER AVAILABLE');
            return console.log('NO USER AVAILABLE');
        }
        
        res.send(user);
        
    }).catch((err)=>{
       console.log(err.message); 
    });
    
});

app.get('/users/id/:id',(req, res)=>{
   var mid= req.params.id;
    
    if(!ObjectID.isValid(mid)){
        res.status(404).send({Error: 'Invalid Id'});
    }
    
    User.findById(mid).then((user)=>{
       if(!user){
           res.status(404).send({Error: 'User Not Found'});
       }else{
           res.status(200).send(user);
       }
    }).catch((err)=>{
       res.status(400).send({err}); 
    });
    
});

//Todo.find({},'text').then((docs)=>{
//    console.log(docs);
//},(e)=>{
//    console.log(e);
//});


app.listen(3000,()=>{
    console.log('Started on port 3000');
});


module.exports = {
    app
}