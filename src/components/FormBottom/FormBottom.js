import React from 'react'
import './FormBottom.css'
import TextField from '@material-ui/core/TextField';
import { Button } from '@material-ui/core';

function FormBottom() {
    return (
        <div className="FormBottomContainer">
            <div className="BottomInputContainers" >
                <table className="leftinputs">
                    <tr>
                        <td>Destination Address</td>
                        <td> <TextField  variant="outlined" /></td>
                    </tr>
                    <tr>
                        <td>Order Value(Rs.)</td>
                        <td> <TextField  variant="outlined" /></td>
                    </tr> 
                </table>
                <table className="rightinputs">
                    <tr>
                        <td>Case Priority</td>
                        <td> <TextField variant="outlined" /></td>
                    </tr>
                    <tr>
                        <td>Advance Status</td>
                        <td className="AdvanceBtnContainer"> <Button className="AdvanceBtn" variant="contained">Yes</Button><Button className="AdvanceBtn" variant="contained">No</Button></td>
                    </tr>
                    
                </table>
            </div>
            <div className="CommentContainers" >
                <table >
                    <tr>
                        <td>Add comment</td>
                        <td className="CommentBox" > <TextField  multiline rows={5} variant="outlined" /></td>
                    </tr>
                </table>
            </div>
        </div>
    )
}

export default FormBottom
