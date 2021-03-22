const express=require('express');
const bodyparser=require('body-parser');

const signing=require('./Routes/Signing')
const router=require('./Routes/router');
const db=require('./DataBase/database')



const app=express();




app.use(bodyparser.json());
// app.use(bodyparser.urlencoded())

app.use((req,res,next)=>{
    res.setHeader('Access-Control-Allow-Origin','*');
    res.setHeader('Access-Control-Allow-Methods','POST');
    res.setHeader('Access-Control-Allow-Headers','Content-Type,Authorization');
    next();

})

app.use('/getall',(req,res,next)=>{
    db.execute("SELECT * FROM userdata").then(
        (e)=>{
            res.json(e[0])

        }

    )

} )



app.use(signing);

app.post('/senddata',(req,res,next)=>{
    console.log(req.method);
    const temp=[...req.body]
    console.log(temp);

    const dates=new Date();
     temp.map((e)=>{
     const {product,price,quantity,tprice}=e;
     //db.execute("INSERT INTO product (product,price,quantity,tprice ) VALUES(?,?,?,?) ",[product,price,quantity,tprice])   
     if(e.price==0||e.quantity==0||e.tprice==0  )   {
         return( res.status(201).send("success"));
     }
     db.execute('INSERT INTO product (product,price,quantity,tprice,date,time) VALUES(?,?,?,?,?,?)', [e.product,e.price,e.quantity,e.tprice,dates,7]) 

},()=>{return res.status(201).json({"karthick":"ok"})} ) 
   // console.log(req.headers)
   
   });


app.use( '/feed', router);




app.get('/',(req,res,next)=>{


console.log("fk"+req.body);
res.send("home")
})


app.listen(4000);