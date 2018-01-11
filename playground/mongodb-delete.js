const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect("mongodb://localhost",(err, client)=>{
    if(err) throw new Error(err);
    
    var db = client.db('TodoApp');
    
    db.collection('Users').find().toArray().then((c)=>{
        
        console.log(JSON.stringify(c, undefined, 2));
        
    },(err)=>{
        console.log('Failed to get documents count', err);
    });
    
    //Delete Many
//    db.collection('Users').deleteMany({name:'PedramZ'},(err, res)=>{
//        if(err) throw new Error(err);
//        
//        console.log(res.deletedCount);
//        
//    });   
    //Delete One
//    db.collection('Users').deleteOne({name: null},(err, res)=>{
//        if(err) throw new Error(err);
//        
//        console.log(res.deletedCount);
//        
//    });
    
    
     //FindOne n Delete   
//    db.collection('Users').findOneAndDelete({name: 'Pedram'},(err, res)=>{
//        if(err) throw new Error(err);
//        
//        console.log(res.value);
//        console.log(res.ok);
//        
//    });

    
    //InsertMany
//    db.collection('Users').insertMany([
//        {name: 'PedramOne', age:26, location:'Shiraz'},
//        {name: 'PedramOne', age:26, location:'Shiraz'},
//        {name: 'PedramOne', age:26, location:'Shiraz'},
//        {name: 'PedramTwo', age:27, location:'NewYok'},
//        {name: 'PedramThree', age:28, location:'New Zealand'}
//    ],(err, res)=>{
//        if(err) throw new Error(err);
//        
//        
////        console.log(res.insertedCount);
////        console.log(res.ops);
//        
//    });
    
    
    //Distinct
    
    db.collection('Users').deleteOne({name: 'PedramTwo'},(err, res)=>{
        if(err) throw new Error(err);
        console.log(res.deletedCount);
//        console.log(res.value);
    });
//    
    client.close();
});