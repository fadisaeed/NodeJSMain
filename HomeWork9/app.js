//פאדי סעיד
//ראזי אבו אליונס
const express = require('express');
const { products } = require('./Data.js'); 
const app=express();

app.get('/api/products',(req,res)=>{
    const {name,minPrice,maxPrice,limit}=req.query;
    let answer=[...products];
    if(name)
        {
             answer=answer.filter(product=>product.name==name);
        }
    if(minPrice&&Number(minPrice)>0)
    {
         answer=answer.filter(product=>product.price>=Number(minPrice))
    }
    if(maxPrice&&Number(maxPrice)>0)
    {
          answer=answer.filter(product=>product.price<=Number(maxPrice))
    }
    if(limit&&Number(limit)>0)
    {
        answer=answer.slice(0,Number(limit));
        res.json(answer);
    }
    else
    {
        res.json(answer);
    }
});

app.listen(3000);