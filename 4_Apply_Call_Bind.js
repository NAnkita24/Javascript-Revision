
let details={
    name:"Ankita jagtap",
    city:"pune",
    age:21,
    printDetails:function(){
       console.log(this.name); 
    }
}
details.printDetails();

let details2={
    name:"Omkar jagtap",
    city:"pune",
    age:20
    
}
details.printDetails.call(details2);

let printDetails=function(state,country){
    console.log(this.name+" "+state+" "+country); 
 }
 printDetails.call(details);
 printDetails.call(details2,"Delhi","India");
 printDetails.apply(details2,["Delhi","India"]);

 var newFun =printDetails.bind(details2,"Delhi","India");
 newFun();



