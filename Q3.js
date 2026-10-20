//פאדי סעיד
//ראזי אבו אליונס

//loop on an array and count the zeros in it without if
function zerocounter()
{
    let array=[2,3,1,0,0,2,0,4,0,6,0,0];
    let count=0;
    for(let i=0;i<array.length;i++)
        array[i]==0?count++:count;//if we find a zero count++ if not we keep the count as is
    console.log(count);
}

zerocounter();