import React from 'react'
import './Bundlecard.css'
import CloseIcon from '@material-ui/icons/Close';
function Bundlecard({data , setID}) {
    const id = data.partNumber
    return (
        <div key={data.id} className="Bundlecard">
            <div>
                <div>Part number : {data.partNumber}</div>
                <div>Brand : {data.brandName} </div>
                <div>Part Desc : {data.partDescription}</div>
                <div>Quantity : {data.quantity}</div>
            </div>
            <div onClick={() => setID(id)}  className="RemoveIcon"><CloseIcon /></div>
            
        </div>
    )
}

export default Bundlecard
