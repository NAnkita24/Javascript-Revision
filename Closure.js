 var sum=function(a){
console.log(a);
var c=5;
return function(b){
return a+b+c;
}
 }
 var s1=sum(3);
 console.log(s1(6));


 var sum1=function(a,b,c){
    return {
        getsumTwo:function(){
            return a+b;
        },
        getsumThree:function(){
            return a+b+c
        }
    }
 }

 var s2=sum1(3,4,5);
 console.log(s2.getsumTwo());
 console.log(s2.getsumThree());