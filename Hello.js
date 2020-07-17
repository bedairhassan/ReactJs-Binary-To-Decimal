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
  
  let n=0
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
