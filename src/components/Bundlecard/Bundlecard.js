import React from 'react'
import './Bundlecard.css'
import CloseIcon from '@material-ui/icons/Close';
function Bundlecard({data , setID}) {
    const id = data.PartNum
    return (
        <div key={data.id} className="Bundlecard">
            <div>
                <div>Part number : {data.PartNum}</div>
                <div>Brand : {data.Brand} </div>
                <div>Part Desc : {data.PartDesc}</div>
                <div>Quantity : {data.Quantity}</div>
            </div>
            <div onClick={() => setID(id)}  className="RemoveIcon"><CloseIcon /></div>
            
        </div>
    )
}

export default Bundlecard
