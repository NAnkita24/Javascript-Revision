//Rest

function addnum(num1,num2,num3,...other){
    console.log(other);
    console.log(arguments);
    return num1+num2+num3;
}
const num=addnum(4,6,8,3,2)
console.log(num);

// var obj={
//     uname:"Anki",
//     age:21,
//     hobby:["singing" ,"movie"]
// }
// //const age=obj.age
// const {age,...rest}=obj;
// console.log(rest);


// //Spread

// var names=["Ankita","Nikita","Omkar"]

// function getname(name1,name2,name3){
//     console.log(name1,name2,name3);
// }
// getname(names[0],names[1],names[2]);
// getname(...names)
// getname(names)

// var obj2={
//     ...obj,
//     age:23
// }
// console.log(obj2);