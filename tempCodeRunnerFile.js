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