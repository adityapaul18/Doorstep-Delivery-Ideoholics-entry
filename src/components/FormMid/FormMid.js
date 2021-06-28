import React, { useState } from 'react'
import TextField from '@material-ui/core/TextField';
import './FormMid.css'
import Bundlecard from '../Bundlecard/Bundlecard';
import { Button } from '@material-ui/core';
import { useEffect } from 'react';

function FormMid({PartNum , Brand ,PartDesc ,Quantity ,setPartNum ,setBrand ,setPartDesc, setQuantity,Messages, setMessages}) {
    const [ID, setID] = useState("");

    const addbundle = () => {
        console.log(PartNum,Brand,PartDesc,Quantity)
        setMessages([...Messages,{
            partNumber:PartNum,
            brandName:Brand,
            partDescription:PartDesc,
            quantity:Quantity
        }])
        console.log(Messages.length)
        setBrand("")
        setPartDesc("")
        setQuantity("")
        setPartNum("")

        // alert("added new bundle to the list")
    }
    const delbundle = ()=>{
        setMessages(Messages.filter((item) => item.partNumber !== ID))
    }

    useEffect(() => {
        delbundle()
    }, [ID])
    return (
        <div className="FormMidContainer">
            <div className="MidInputContainers" >
                <table className="leftinputs" > 
                    <tr>
                        <td></td>
                        <td className="FormmidHeader"> <h2  >Part Bundle Information</h2></td>
                    </tr>
                    <tr>
                        <td>Part Number</td>
                        <td> <TextField value={PartNum} onChange={(e) => setPartNum(e.target.value)} variant="outlined" /></td>
                    </tr>
                    <tr>
                        <td>Brand</td>
                        <td> <TextField value={Brand} onChange={(e) => setBrand(e.target.value)} variant="outlined" /></td>
                    </tr>
                    <tr>
                        <td>Part Description</td>
                        <td> <TextField value={PartDesc} onChange={(e) => setPartDesc(e.target.value)} variant="outlined" /></td>
                    </tr>
                    <tr>
                        <td>Quantity</td>
                        <td> <TextField value={Quantity} type="number" onChange={(e) => setQuantity(e.target.value)} variant="outlined" /></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td> <Button onClick={addbundle} className="SaveBundleBtn" variant="contained">+ Add Bundle</Button></td>
                    </tr>
                    <tr className="special">
                        <td></td>
                        <td>
                            {Messages?.sort((a, b) => a.id < b.id ? 1 : -1).map((data)=>{
                                return(
                                    <div key={data.PartNum}>
                                        <Bundlecard data={data} setID={setID} />
                                    </div>
                                )
                            })
                    }</td>
                    </tr>
                    
                </table>
                <div className="BundleContainer" > 
                    {Messages?.sort((a, b) => a.id < b.id ? 1 : -1).map((data)=>{
                        return(
                            <div key={data.PartNum}>
                                <Bundlecard data={data} setID={setID} />
                            </div>
                        )
                    })

                    }
                </div>
            </div>
        </div>
    )
}

export default FormMid
