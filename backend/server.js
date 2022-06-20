import express from 'express'
import dotenv from 'dotenv'
import connectDB from './config/db.js';
import productRouter from './routes/productRoutes.js'
import  userRouter from './routes/userRoutes.js'
import {notFound,errorHandler} from './middleware/errorMiddleware.js'


dotenv.config();//to use process.env environment variables
connectDB();

const app=express();

app.use(express.json())

app.get('/',(req,res)=>{
    res.send('api is running ')

})

app.use('/api/products',productRouter)
app.use('/api/users',userRouter)

//here we are overriding the error middleware
//because the middleware that are present before this
//if any error occur in that middle simply error-async-handler is calling the 
//next in that some method is invoked that for error handling so we are below
//overriding that error
//so the first argumnet is err to override that error and that function takes four(4) args
//and next for calling the next middleware

//if not routes get match this middleware will get executed
app.use(notFound)

app.use(errorHandler)




const port=process.env.PORT || 5000 ;

app.listen(port,console.log(`server running in ${process.env.NODE_ENV} on port ${port}`))