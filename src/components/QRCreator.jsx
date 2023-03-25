import React from 'react'
import { useState } from 'react';
import QRCode from "react-qr-code";
function QRCreator() {

    const [inputValue,setInputValue] = useState("");
    const [inputcolor,setInputcolor] = useState("");
    const [inputName,setInputName] = useState("");
    const download = ()=>{
      const svg = document.getElementById("QRCode");
      const svgData = new XMLSerializer().serializeToString(svg);
      const canvas = document.createElement("canvas");
      const ctx = canvas.getContext("2d");
      const img = new Image();
      img.onload = () => {
        canvas.width = img.width;
        canvas.height = img.height;
        ctx.drawImage(img, 0, 0);
        const pngFile = canvas.toDataURL("image/png");
        const downloadLink = document.createElement("a");
        downloadLink.download =`${inputName}`+'.png';
        downloadLink.href = `${pngFile}`;
        downloadLink.click();
      };
      img.src = `data:image/svg+xml;base64,${btoa(svgData)}`;
    }
  return (
    <div>
        <h2 className='h2 text-center'>QR Code Generator</h2>
        <div className='d-flex justify-content-center mt-3'>
      <input type="text" onChange={(e)=>setInputName(e.target.value)} className="form-control w-25 me-1" placeholder='Please To Code Name'/>
      <input type="text" onChange={(e)=>setInputValue(e.target.value)} className="form-control w-25 ms-1" placeholder='Please To İnput'/>
      </div>
      <div className='d-flex justify-content-center mt-2'>
    <div style={{ height: "auto", maxWidth: 100, width: "100%" }} className="mt-3">
    <QRCode
    size={256}
    style={{ height: "auto", maxWidth: "100%", width: "100%" }}
    value={inputValue}
    viewBox={`0 0 256 256`}
    fgColor={inputcolor}
    id="QRCode"
    />
    </div>
    <div className='mt-3 ms-3'>
        <button className='btn btn-dark me-2' onClick={(e=>setInputcolor("black"))}>Black</button>
        <button className='btn btn-danger me-2' onClick={(e=>setInputcolor("red"))}>Red</button>
        <button className='btn btn-primary me-2' onClick={(e=>setInputcolor("blue"))}>Blue</button>
        <button className='btn btn-warning me-2' onClick={(e=>setInputcolor("yellow"))}>Yellow</button>
        <button className='btn btn-success me-2' onClick={(e=>setInputcolor("green"))}>Green</button>
        <div className='mt-3'>
        <p>Set Manuel Color</p>
        <input type="color" name="" onChange={(e)=>setInputcolor(e.target.value)}/>
        </div>
        <div className='mt-3'>
        <input type="button" onClick={download} value="Download Qr Code" className='btn btn-primary'/>
        </div>
    </div>
    </div>
   </div>
  )
}

export default QRCreator;