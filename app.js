import express from 'express';
import mongoose from 'mongoose';
import devicesRouter from './routers/devicesRouter.js';

const app = express();

(async ()=> {
    try{
    await mongoose.connect('mongodb://127.0.1:27017/aggregationPractice');
    console.log('MongoDB connected');
    }catch(e){
        console.log('Error MongoDB connecting!',e);
    }
})();

//config
app.set('x-powered-by', false);


//middlewares
app.use(express.json());
app.use('/devices', devicesRouter);




//error handeler
app.use((error, req, res, next)=>{
    if(err && error.message){
        res.satatus(400).send(error);
    }else {
        res.status(500).send('Server Error!');
    }
});


app.use((req, res)=>{
    res.status(501).send('API is not supported');
});


app.listen(3000, ()=>{
    console.log('listening on 3000🌟');
})