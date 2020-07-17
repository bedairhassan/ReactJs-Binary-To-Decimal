import React,{useState} from 'react';

export default function Hello (){
  
  
  let validateBinary =(input)=>{ /* returns true if correct bin */

for (let i=0;i<input.length;i++){

  if(input[i]!=="0" && input[i]!=="1")
  return false;
}
return true;

}

const BinToDecimal = Bin=>{

  if(!validateBinary(Bin))
    return `Incorrect Binary`
  
  let n=0 // 2^n
  let ret=0 // sum
  for (let i=Bin.length-1;i>=0;i--){
   
    // update
    ret+= Bin[i]==="1" ? Math.pow(2,n) :0
    n++
  }

  return ret}

  const [user,userSet]=useState("")
  const [output,outputSet]=useState()
  
  return(
    <div className="box">
      <input onChange={e=>userSet(e.target.value)} placeholder={`Binary`}/>

<br/>
      Decimal : {BinToDecimal(user)}
    </div>
  );
}


// var binToDecimal = bin=>{

// let n,sum
// n=sum=0

// bin
// .split("")
// .reverse() // you can only reverse array
// .join("") // reversed the string
// .split("")
// .map(item=>parseInt(item)*Math.pow(2,n++))
// .filter(item=>item!==0)
// .map(item=>sum+=item)

// return sum

// }

// console.log(binToDecimal("01011")) // 11

