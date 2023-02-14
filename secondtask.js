function insertion(el)
{
    for(let i=1;i<el.length;i++)
    {
        let j=i-1;
        while((j>=0)&&(el[j]>el[i]))
        {
          let k=el[j];
          el[j]=el[i];
          el[i]=k;
          j=j-1; 
          i=i-1;     
        }
    }
    return el
}
console.log(insertion([80,20,15,10,30,7,40,5,21,3,35,2,1]));