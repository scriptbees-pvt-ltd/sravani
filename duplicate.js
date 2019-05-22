function removeDuplicates(no){
    var x,a=[],b=[];
    len=no.length;
    for (x=0;x<len;x++){
         //console.log(len);
         b[no[x]]=0;
    }
    for(x in b){
         a.push(x);
    }
    return a;

}
var no=[1,3,2,4,5,5,6];
//mynum[x]=prompt("enter element" +(x+1));
result = removeDuplicates(no);
console.log(no);
console.log(result);
// alert(mynum);
// alert(result);