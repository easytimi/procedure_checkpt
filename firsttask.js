function Dot_product(v1,v2,deg)
{
  let p=(v1*v2)*Math.cos((Math.PI/180)*deg)
  return p
}
console.log(Math.trunc(Dot_product(4,3,30)))
var orthogonal = function(...vect)
{
  for(let i=0;i<vect.length;i++)
  {
    let m=Dot_product(vect[i][0],vect[i][1],vect[i][2]);
    m=Math.trunc(m);
    if(m==0)
    {
      console.log(vect[i]+  "  is orthogonal")
    }
    else{
      console.log(vect[i]+  "  is not orthogonal")
    }
  }
}
console.log(orthogonal([2,3,40],[4,5,70],[5,6,90],[5,9,30]))