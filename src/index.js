module.exports = function getZerosCount(number, base) {
  // your implementation 
  function PrimeFactors(base)
   {
     for(var i = 2; i < 256; i++)
     { 
       if((base%i)===0)
       {
         factors.push(i);
         if((base/i)===1)
          return;
       
         else {return PrimeFactors(base/i)};      
       }
     }
   }
   function Zeroes(par1,par2)
   {
   var sum = 0;
   var n = Math.floor (Math.log(number) / Math.log(par1));
   for (var i = 1; i <= n; i++)
   {
      sum = sum + Math.floor(number/(Math.pow(par1,i)));
   }
   return Math.floor(sum/par2);
   }
   
   var factors =[];
   PrimeFactors(base);
  
   var l = factors.length;
   var count = 1;
   var indexCount = 0;
   var factors2 = [];
   factors2[0] = factors[0]
   factors2[1] = count;
   
   for(var i = 1; i< l; i++)
   {
     if(factors[i] == factors2[indexCount])
     {
       count++;
       factors2[indexCount+1] = count;
     }
     else 
     {
       indexCount+=2;
       factors2[indexCount] = factors[i];
       count = 1;
       factors2[indexCount+1]=count;
     }
   }   
 var result = Zeroes(factors2[0],factors2[1]);
 for (var i=2; i<factors2.length-1;i+=2){
     if((result) > Zeroes(factors2[i],factors2[i+1]))
     result = Zeroes(factors2[i],factors2[i+1]);
 }
 return result;
}