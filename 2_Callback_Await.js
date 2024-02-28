var data=[
  {uname:"Ankita", proffesion:"Engineer"}, 
  {uname:"Nikita", proffesion:"Engineer"}

];

function getdata(){
    setTimeout(() =>{
        let output="";
        data.forEach((data,index)=>{
            output+=`<li>${data.uname} </li>`
        })
        document.body.innerHTML=output;
    },1000)
}

function createdata(newdata){
    return new Promise((resolve,reject)=>{
        setTimeout(() =>{
            data.push(newdata)
            let error=true;
            if(!error){
                resolve();
            }
            else{
                reject("Reject")
            }
        },2000)
    })

}

//createdata({uname:"Omkar", proffesion:"Engineer"}).then(getdata).catch (err =>console.log(err));

 async function start(){
    await createdata({uname:"Omkar", proffesion:"Engineer"});
    getdata();
}
start();