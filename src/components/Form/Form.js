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
    return (
        <div className="FormContainer">
            <FormTop 
                    DemandId={DemandId} setDemandId={setDemandId} 
                    Accname={Accname} setAccname={setAccname}
                    RecipName={RecipName} setRecipName={setRecipName}
                    Ordertype={Ordertype} setOrdertype={setOrdertype}
                    DestType={DestType} setDestType={setDestType}
                    ReccCont={ReccCont} setReccCont={setReccCont}
            />
            <FormMid/>
            <FormBottom/>
            <div className="SaveButtonContainer">
                <Button className="SaveButton" variant="contained" >Save</Button>
            </div>
        </div>
    )
}

export default Form
