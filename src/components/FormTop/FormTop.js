import React from 'react'
import './FormTop.css'
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';

function FormTop({ setDemandId,setAccname , setRecipName,  setOrdertype,  setDestType, setReccCont}) {
    return (<>
        <div className="FormtopContainer">
            <h2 className="FormtopHeader" >Doorstep Delivery Request Form</h2>
            <hr className="Divider"/>
            <div className="InputContainers" >
                <table className="leftinputs" >
                    <tr>
                        <td>Demand ID</td>
                        <td> <TextField onChange={(e) => setDemandId(e.target.value)} variant="outlined" /></td>
                    </tr>
                    <tr>
                        <td>Destination Account</td>
                        <td> <TextField onChange={(e) => setAccname(e.target.value)}  variant="outlined" /></td>
                    </tr>
                    <tr>
                        <td>Recipent Name</td>
                        <td> <TextField onChange={(e) => setRecipName(e.target.value)} variant="outlined" /></td>
                    </tr>
                </table>
                <table className="rightinputs" >
                    <tr>
                        <td>Order Type</td>
                        <td> 
                            <TextField onChange={(e) => setOrdertype(e.target.value)} select variant="outlined"  >
                            <MenuItem key="Cx Demand" value="Cx Demand">Cx Demand</MenuItem>
                            <MenuItem key="Missing Item in RO" value="Missing Item in RO">Missing Item in RO</MenuItem>
                            <MenuItem key="Range Building" value="Range Building">Range Building</MenuItem>
                            <MenuItem key="Periodical Replenishment" value="Periodical Replenishment">Periodical Replenishment</MenuItem>
                            </TextField>
                        </td>
                    </tr>
                    <tr>
                        <td>Order Destination</td>
                        <td>
                            <TextField onChange={(e) => setDestType(e.target.value)} select variant="outlined" >
                            <MenuItem key="IW" value="IW" >IW</MenuItem>
                            <MenuItem key="RO" value="RO" >RO</MenuItem>
                            <MenuItem key="VO" value="VO" >VO</MenuItem>
                            <MenuItem key="WH" value="WH" >WH</MenuItem>
                            <MenuItem key="OT" value="OT" >OT</MenuItem>
                            </TextField>
                        </td>
                    </tr>
                    <tr>
                        <td>Recipent Contact</td>
                        <td> <TextField onChange={(e) => setReccCont(e.target.value)} variant="outlined" /></td>
                    </tr>
                </table>
            </div>
        </div>
    </>
    )
}

export default FormTop
