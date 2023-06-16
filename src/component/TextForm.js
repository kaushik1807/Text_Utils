import React, { useState } from 'react';
import { useEffect } from 'react';

export default function TextForm(props) {
  const [context, setcontext] = useState("enter something in textarea");
  console.log("function body")
  
  useEffect((e) => {
  //  alert("this is use effect");
   console.log(e)
  })
  
  const handlechange = (e) => {
    // console.log("this is change")
    setcontext(e.target.value);
  }

  const handleUpcase = () => {
    // console.log("button clicked");
    var upper = context.toUpperCase();
    setcontext(upper);
  }
  const handletOGGLEytext = () => {
    var a = document.getElementById('text');
    var ch = a.substring(0,1).toLowerCase();
    var chh = a.substring(1).toUpperCase();
    setcontext(ch.concate(chh));
  }
  const handlecleartext = () => {
    console.log("this is clear button")
    setcontext("");
  }
  const handlecopytext = () => {
    console.log("this is copy button")
    var a = document.getElementById('text');
    a.select();
    navigator.clipboard.writeText(a.value);
  }
  return (
    <div>
      <div className='container'>
        <div className="mt-5 ml-5">
          <label htmlFor="">Enter Message</label><br />
          <textarea className="form-control" value={context} onChange={handlechange} cols="30" rows="5" id="text"></textarea>
          <button className='btn btn-primary mt-3' onClick={handleUpcase}>convert to UpperCase</button>
          <button className='btn btn-primary mt-3 mx-2' onClick={handlecleartext}>clear text</button>
          <button className='btn btn-primary mt-3 mx-2' onClick={handlecopytext}>copy text</button>
          <button className='btn btn-primary mt-3 mx-2' onClick={handletOGGLEytext}>convert to tOGGLE CASE</button>
          <p className='mt-3'>{context.split(" ").filter((ele) => { return ele.length !== 0 }).length} words and {context.length} characters</p>
          <h1 className='mt-3'>preview</h1>
          <p>{context}</p>

        </div>
      </div>
    </div>
  )
}
