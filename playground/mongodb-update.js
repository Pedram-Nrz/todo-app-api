const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect("mongodb://localhost",(err, client)=>{
    if(err) return console.log("Failed to connect mongodb: ", err);
    
    var db = client.db('TodoApp');
    //FindALL Promise
//    db.collection('Users').find().toArray().then((res)=>{
//        
//        console.log(res);
//        
//    },(err)=>{
//        
//        if(err) console.log('Failed to fetch Users Data', err);
//    });
    
    //InsertMany
//    db.collection('Users').insertMany([
//        {Name:'PedramOne', age:26, location: 'Phl'},
//        {Name:'PedramOne', age:26, location: 'Phl'},
//        {Name:'PedramTwo', age:27, location: 'Dallas'},
//        {Name:'PedramThree', age:28, location: 'NEWYORK'}
//    ]).then((res) => {
//        console.log(res);
//    }, (err)=>{
//        if(err) throw new Error(err);
//    });
    
    
    db.collection('Users').findOneAndUpdate({_id: new ObjectID('5a5780895a3a561724ee856b')},{
        $set: {
            Name: 'PedramFour',
            AreYouReady: true
        },
        
        $inc: {age: 4}
    },{ upsert:false, multi:true, returnOriginal:false}).then((doc)=>{
        console.log(doc.value);
    },(err)=>{
        if(err) throw new Error(err);
    });
    
    client.close();
    
});