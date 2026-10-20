//פאדי סעיד
//ראזי אבו אליונס

//prints the numbers that is prime under 237
function print()
{
    const num=237;
    for(let i=0;i<num;i++)
    {
         if(primenumbers(i))
            console.log(i);
    }
       console.log();
}

//returns true for each prime number
function primenumbers(num)
{
    if(num<2)
        return false;

    for(let i=2;i<=Math.sqrt(num);i++)
        if(num%i==0)
            return false;
        return true;
}

//calls the main function
print();