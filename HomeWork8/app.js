//פאדי סעיד
//ראזי אבו אליונס
const express = require('express');
const { products } = require('./data.js'); 
const app=express();

app.get('/products/:productPrice',(req,res)=>{
    const price=Number(req.params.productPrice);
    if(price>0)
    {
         const priceObj=products.filter(product=>product.price>price);
         res.json(priceObj);
    }
    else
        res.send('Enter a vaild price');
   
});

app.listen(3000);