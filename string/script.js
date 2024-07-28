let str ="hello world";

console.log(str);
  for(let i=0;i<str.length;i++){
    console.log(str[i]);
  }
  for(let index of str){
    console.log(str[index]);
  }
  let indx =str.indexOf("world");
  console.log(indx);