const expect  = require('expect');
const request = require('supertest');

const{app} = require('./../server');
const{Todo} = require('./../models/todo');

const dummy =[
    {text:'Walk the road'},
    {text:'do your best'}
];

beforeEach((done)=>{
   Todo.remove({}).then(()=>{
        return Todo.insertMany(dummy);
   }).then(()=>done());

});

describe('POST /todos',()=>{
   
    it('should create a new todo', (done)=>{
       var text = 'Test todo text';
       
       request(app)
        .post('/todos')
        .send({text})
        .expect(200)
        .expect((res)=>{
           expect(res.body.text).toBe(text);
         })
        .end((err, res)=>{
            if(err){
                return done(err);
            }
           
            Todo.find({text}).then((todos)=>{
                expect(todos.length).toBeGreaterThan(0);
                expect(todos[todos.length - 1].text).toBe(text);
                expect('something truthy').toExist();
                done();
            }).catch((e)=>{
                done(e);
            })
          })
        
    });
    
    it('should not create new todo based on invalid body data',(done)=>{
        
        request(app)
         .post('/todos').send({}).expect(400).end(done());
        
        
    });

    
});

describe('GET /todos',()=>{
   it('should return all the todos',(done)=>{
       request(app).get('/todos').expect(200).expect((res)=>{
           expect(res.body.docs.length).toBe(dummy.length);
       }).end(done());
   });
    
    
    
});


