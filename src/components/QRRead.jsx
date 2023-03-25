import React from 'react'
import QrScanner from 'qr-scanner';
import { useState } from 'react';

function QRRead() {
    const [result,setResult]=useState("");

    const readCode =(e)=>{
        const file = e.target.files[0];
            if (!file) {
                return;
            }
            QrScanner.scanImage(file, { returnDetailedScanResult: true })
                .then(result => setResult(result.data))
                .catch(e => console.log(e));
      }

  return (
    <div>
    <h2 className='text-center h2 mt-4'>QR Scanner</h2>
    <div className='d-flex justify-content-center '>
    <input type="file" onChange={(e)=>readCode(e)} className="file-input mt-3"/>
    </div>
    <p className='text-center mt-3 fw-bold'>{result}</p>
  </div>
  )
}

export default QRRead;