const{ObjectID} = require('mongodb');
const{mongoose} = require('./../server/db/mongoose');
const{User} = require('./../server/models/user');

var mid= "5a58c9203f7aef1834cac428";

User.find().then((docs)=>{
    
    console.log(docs);
    
}).catch((err)=>{
    console.log('Failed to load users from db: ', err);
})

if(ObjectID.isValid(mid)){
    User.findById(mid).then((user)=>{
        if(user){
            return console.log(user);
        }
        
        console.log('No user by this id is available.');
        
    }).catch((err)=>{
        console.log('Failed to load user by id:', err);
    });
}

if(ObjectID.isValid(mid)){
    User.find({_id: mid}).then((user)=>{
        if(user){
            return console.log(user);
        }
        
        console.log('No user by this id is available.');
        
    }).catch((err)=>{
        console.log('Failed to load user by id:', err);
    });
}
if(ObjectID.isValid(mid)){
    User.findOne({_id: mid}).then((user)=>{
        if(user){
            return console.log(user);
        }
        
        console.log('No user by this id is available.');
        
    }).catch((err)=>{
        console.log('Failed to load user by id:', err);
    });
}