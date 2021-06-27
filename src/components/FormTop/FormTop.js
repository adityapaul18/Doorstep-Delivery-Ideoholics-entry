import React from 'react'
import './FormTop.css'
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';

function FormTop({ DemandId ,setDemandId, Accname ,setAccname ,RecipName, setRecipName, Ordertype, setOrdertype, DestType, setDestType, ReccCont,setReccCont}) {
    return (
        <div className="FormtopContainer">
            <h2 className="FormtopHeader" >Doorstep Delivery Request Form</h2>
            <hr className="Divider"/>
            <div className="InputContainers" >
                <table className="leftinputs" >
                    <tr>
                        <td>Demand ID</td>
                        <td> <TextField  variant="outlined" /></td>
                    </tr>
                    <tr>
                        <td>Destination Account Name</td>
                        <td> <TextField  variant="outlined" /></td>
                    </tr>
                    <tr>
                        <td>Recipent Name</td>
                        <td> <TextField variant="outlined" /></td>
                    </tr>
                </table>
                <table className="rightinputs" >
                    <tr>
                        <td>Order Type</td>
                        <td>
                            <TextField  select variant="outlined"  >
                            <MenuItem>option 1</MenuItem>
                            <MenuItem>option 2</MenuItem>
                            <MenuItem>option 3</MenuItem>
                            <MenuItem>option 4</MenuItem>
                            </TextField>
                        </td>
                    </tr>
                    <tr>
                        <td>Order Destination</td>
                        <td>
                            <TextField  select variant="outlined" >
                            <MenuItem>option 1</MenuItem>
                            <MenuItem>option 2</MenuItem>
                            <MenuItem>option 3</MenuItem>
                            <MenuItem>option 4</MenuItem>
                            <MenuItem>option 5</MenuItem>
                            </TextField>
                        </td>
                    </tr>
                    <tr>
                        <td>Recipent Contact</td>
                        <td> <TextField  variant="outlined" /></td>
                    </tr>
                </table>
            </div>
        </div>
    )
}

export default FormTop
