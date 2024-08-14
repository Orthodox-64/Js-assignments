// 1 Promisified version of SetTimeout //

function SetTimeoutPromsified(xd){
    return new Promise(resolve=>setTimeout(resolve,2000));
}
// async function solve(){
//    await SetTimeoutPromsified(3000);
//    console.log("Hi");
//    await SetTimeoutPromsified(5000);
//    console.log("Xddd");
// }

// solve();
SetTimeoutPromsified(3000).then(function callback(){
    // console.log("Hi guys");
});

// 2-> Promisified Version of 

const fs=require("fs");
function readfile(filepath){
    return new Promise(function(resolve,reject){
       fs.readFile(filepath,"utf-8",function(err,data){
        if(err){
            reject("Unexpected ");
        }
        else{
            resolve(data);
        }
       }) ;
    });
}

function ondata(data){
    console.log(data);
}
function onerr(err){
    console.log(err+"Error");
}
readfile("a.txt").then(ondata).catch(onerr)