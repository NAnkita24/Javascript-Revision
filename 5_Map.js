const companies=[
    {name:"google",category:"product base",start:1981},
    {name:"amazon",category:"product base",start:1988},
    {name:"paytm",category:"service base",start:1970},
    {name:"gpay",category:"product base",start:1990},
    {name:"microsoft",category:"service base" ,start:2000},

]

// for (let i = 0; i <=companies.length; i++) {
// console.log(companies[i]);    
// }

// companies.forEach(function(name,index){
//     console.log(name);
// })

// companies.forEach((company,index)=>{
//     console.log(company.name);
// })

// var sb=companies.filter(function(company){
//     if (company.category==="service base") {
//         return true
//     }
// })
// console.log(sb);

const ages=[21,34,56,87,44,12,24,66,88,77];

// for (let i = 0; i < ages.length; i++) {
//     if (ages[i]>=20) {
//         console.log(ages[i]);
//     }
// }


const age = ages.filter(function(i){
    if (i>=30) {
        return true
    }
})
console.log(age);


const newage=ages.filter((age,index)=>age>=30)
console.log(newage);

const sorted=companies.sort(function(c1,c2){
    if (c1.start>c2.start) {
        return 1
    }else{
        return -1
    }
})
console.log(sorted);

// const sort1=companies.sort((c1,c2)=>(c1.start>c2.start)?1:-1);
// console.log(sort1);


const sortage=ages.sort((a,b)=>(b-a));
console.log(sortage);


let total=0;
for (let i = 0; i < ages.length; i++) {
    total+=ages[i]
}
console.log(total);

var t1=ages.reduce(function(total,age) {
    return total+age
},0);
console.log(t1);

var t2=ages.reduce((total,age)=>total+age,0);
console.log(t2);