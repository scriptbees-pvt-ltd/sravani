
function rev(){
    var no,a,temp=0,sum=0;
    no=document.getElementById("input number").value;
    
    while(no > 0){
        a=no%10;
        no=parseInt(no/10);
        temp=temp*10+a;
        sum=sum+a;
    }
     alert(temp);
     alert(sum);
    // console.log(temp);
    // console.log(sum);
}