const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost', (err, client) =>{
   
    if(err){
        return console.log('Failed to connect to the mongodb', err);
    }
    
    var db = client.db('TodoApp');
    
//    db.collection('Todos').insertOne({
//        text:'Listenint to the music',
//        completed: true
//    },(err, res)=>{
//        if(err) throw new Error(err);
//        
//        console.log(res.result);
//        console.log(res.ops[0]);
//    });
    
    
    db.collection('Todos').find({
        _id:new ObjectID('5a576a2d39cec81f504e2497')
    }).toArray().then((item)=>{
        
        console.log(JSON.stringify(item, undefined,2));
        
    },(err)=>{
        console.log('Failed to fetch data: '. err);
    });
    
    db.collection('Todos').find({
        
    }).count().then((c)=>{
       
        console.log('Count: ', c);
     },(err)=>{
         if(err){
        return console.log('Failed to count the cursors documents',err);
            }
    
    });
    
    
    client.close();
});