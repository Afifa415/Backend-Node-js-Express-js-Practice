import express from 'express'
import Pool from './db.js';

const app = express ();

app.get('/products',(req , res)=>{
    res.json("Hello products")

})

// app.get('/',(req , res)=>{
//     res.json("Hello server is running on port number 5000")

// })

//contact , about 

// app.get('/contact',(req , res)=>{
//     res.json("This is contact page")

// })

// app.get('/about',(req , res)=>{
//     res.json("This is about page")

// })


Pool.query("SELECT NOW()", (error , result)=>{
    if (error){
        // console.log("Database connection failed");
        // console.log(error);
         console.log("Database connection failed",error);
        }else {
        // console.log("Database connected");
        // console.log(result.rows); 
         console.log("Database is connected", result.rows);
        }
});

app.listen(5000,()=>{
    console.log ('server running on port 5000')
})