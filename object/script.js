let obj={
    a: 1,
    "hello world":"earth",
    "":"empty string",
    " ":"sparce"
};
// console.log(obj.a);
// console.log(obj["hello world"]);

for(let k in obj){
    console.log(obj[k]);
}