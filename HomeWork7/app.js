const express = require('express');
const fs = require('fs');
const users=JSON.parse(fs.readFileSync(`C:/Users/fadis/OneDrive/Desktop/nodejs-homework/NodeJSMain/HomeWork7/users.json`,`utf-8`));
const app=express();

app.get('/api/users',(req,res)=>{
    res.json(users)
});

app.get('/api/users/filter',(req,res)=>{
      const { minAge, maxAge } = req.query;
    if((minAge>maxAge)||(minAge<0||maxAge<0))
    {
         res.send('Enter a valid minage and maxage');
    }
    if(minAge)
    {
        const UsersByAge=users.filter(user=>user.age>=Number(minAge))
        res.json(UsersByAge);
    }
    else
        if(maxAge)
        {
            const UsersByAge=users.filter(user=>user.age<=Number(maxAge))
            res.json(UsersByAge);
        }
     if(minAge&&maxAge)
    {
        const UsersByAge=users.filter(user=>user.age>=Number(minAge)&&user.age<=Number(maxAge))
        res.json(UsersByAge);   
    }
        else
        res.send('Enter minage and maxage');
});

app.get('/api/users/:id',(req,res)=>{
    const userById=users.find(user=>user.id==req.params.id)
    res.json(userById);
});

app.get('/user/:id',(req,res)=>{
    const userById=users.find(user=>user.id==req.params.id)
    res.send(`<h1>${userById.id}</h1>
        <h1>${userById.name}</h1>
        <h1>${userById.email}</h1>
        <h1>${userById.age}</h1>`
    );
});

app.listen(3000);