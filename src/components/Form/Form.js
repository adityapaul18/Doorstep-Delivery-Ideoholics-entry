import React, { useState } from 'react'
import FormBottom from '../FormBottom/FormBottom'
import FormMid from '../FormMid/FormMid'
import FormTop from '../FormTop/FormTop'
import { Button } from '@material-ui/core'
import './Form.css'

function Form() {
    const [DemandId, setDemandId] = useState("");
    const [Accname, setAccname] = useState("");
    const [RecipName, setRecipName] = useState("");
    const [Ordertype, setOrdertype] = useState("");
    const [DestType, setDestType] = useState("");
    const [ReccCont, setReccCont] = useState("");
    const [PartNum, setPartNum] = useState("")
    const [Brand, setBrand] = useState("")
    const [PartDesc, setPartDesc] = useState("")
    const [Quantity, setQuantity] = useState("")
    const [DestAdd, setDestAdd] = useState("")
    const [OrderVal, setOrderVal] = useState("")
    const [Comment, setComment] = useState("")
    const [Priority,setPriority] = useState("")
    const [Advancstat,setAdvancstat] = useState(false)

    const handlesubmit = () => {
        console.log(DestAdd,OrderVal,Comment,Priority,Advancstat)
    }
    return (
        <div className="FormContainer">
            <FormTop 
                    setDemandId={setDemandId} 
                    setAccname={setAccname}
                    setRecipName={setRecipName}
                    setOrdertype={setOrdertype}
                    setDestType={setDestType}
                    setReccCont={setReccCont}
            />
            <FormMid 
                    PartNum={PartNum}
                    Brand={Brand}
                    PartDesc={PartDesc}
                    Quantity={Quantity}                    
                    setPartNum={setPartNum}
                    setBrand={setBrand}
                    setPartDesc={setPartDesc}
                    setQuantity={setQuantity}                    
            />
            <FormBottom
                    DestAdd={DestAdd}
                    setDestAdd={setDestAdd}
                    OrderVal={OrderVal}
                    setOrderVal={setOrderVal}
                    Comment={Comment}
                    setComment={setComment}
                    Priority={Priority}
                    setPriority={setPriority}
                    Advancstat={Advancstat}
                    setAdvancstat={setAdvancstat}
            />
            <div className="SaveButtonContainer">
                <Button onClick={handlesubmit} className="SaveButton" variant="contained" >Save</Button>
            </div>
        </div>
    )
}

export default Form
