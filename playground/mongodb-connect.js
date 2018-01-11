//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

//var objid = new ObjectID();
//console.log(objid);

MongoClient.connect('mongodb://localhost',(err, client) =>{
    if(err){
        return console.log('Unable to connect to mongodb server');
    }
    console.log('connected to MongoDB server');
    var db = client.db('TodoApp');
//    db.collection('Todos').insertOne({
//        text: 'Something to do',
//        completed: false
//    }, (err, result) =>{
//         if(err){
//             return console.log('Unable to insert todo', err);
//         }
//        
//          console.log(JSON.stringify(result, undefined, 2));
//        
//     });
    
//    var cursor = db.collection('Todos').findOne({}).then(function(item){
//        console.log(item);
//    });
  
//    db.collection('Users').insertOne({
//        
//        name: 'PedramZ',
//        age: 26,
//        location: 'ShirazZ'
//        
//    }, function(err, res){
//        if(err){
//            return console.log('Error ', err);
//        }
//        
//        console.log('Data got added', res.insertedCount);
//        console.log('Data got added', res.ops);
//        console.log('Data got added', res.ops[0]);
//        console.log('Data got added', res.ops[0]._id.getTimestamp());
//    });
    
//    db.collection('Users').find().toArray().then((item)=>{
//        console.log(item);
//    });
    

    client.close();
    
});