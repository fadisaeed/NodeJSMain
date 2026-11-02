//פאדי סעיד
//ראזי אבו אליונס
const fs=require('fs');

const namesArr = [
    'file1.txt',
    'file2.txt',
    'file3.txt',
    'file4.txt',
    'file5.txt',
    'file6.txt',
    'file7.txt',
    'file8.txt',
    'file9.txt',
    'file10.txt'
];


for(let i=0;i<10;i++)
{
        let content=fs.readFileSync(`C:/Users/fadis/OneDrive/Desktop/nodejs-homework/NodeJSMain/HomeWork4/input/${namesArr[i]}`,'utf-8');
        let ContentArray=content.split('\r\n');
        if(i+1>ContentArray.length)
        {
                for(let j=0;j<ContentArray.length;j++)
                     console.log(ContentArray[j]);

        }
        else
            for(let j=0;j<i+1;j++)
                  console.log(ContentArray[j]);
                
}