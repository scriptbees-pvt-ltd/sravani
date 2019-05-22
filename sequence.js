// var n=parseInt(5);
// function sequence(n){
//         var res=1,i;
//         for(i=2;i<=n;i++){
//         res *=i;
//         return res;
//         }    

// }
// function sum(n){
//     sum =parseInt(0);
//     for(i=1;i<=n;i++){
//         sum +=1.0/sequence(i);
//     return sum;
//     }
    
// }

// console.log(sum(n));

function main(){
      n,i,j,e;
      e=1.0,nfact=1.0;
      n=5;
      for(i=1;i<=n;i++){
          for(j=1;j<=i;j++){
              nfact *= j;
          }
          e=e+(1.0/nfact);
          console.log(e);

      }
      
}
