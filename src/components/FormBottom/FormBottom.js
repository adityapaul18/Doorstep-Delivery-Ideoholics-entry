import React, { useState } from 'react'
import './FormBottom.css'
import TextField from '@material-ui/core/TextField';
import { Button, MenuItem } from '@material-ui/core';

function FormBottom({DestAdd,setDestAdd, OrderVal,setOrderVal,Comment,setComment,Priority,setPriority,Advancstat,setAdvancstat}) {
    const [Adv, setAdv] = useState(false);
    const setadv1 = () => {
        setAdvancstat("true")
        setAdv(true)
    }
    const setadv2 = () => {
        setAdvancstat("false")
        setAdv(false)
    }

    return (
        <>
        <div className="FormBottomContainer">
            <div className="BottomInputContainers" >
                <table className="leftinputs">
                    <tr>
                        <td>Destination Address</td>
                        <td> <TextField onChange={(e)=>setDestAdd(e.target.value)} variant="outlined" /></td>
                    </tr>
                    <tr>
                        <td>Order Value(Rs.)</td>
                        <td> <TextField onChange={(e)=>setOrderVal(e.target.value)} variant="outlined" /></td>
                    </tr> 
                </table>
                <table className="rightinputs">
                    <tr>
                        <td>Case Priority</td>
                        <TextField onChange={(e)=>setPriority(e.target.value)} select variant="outlined"  >
                            <MenuItem key="high" value="high">High</MenuItem>
                            <MenuItem key="medium" value="medium">Medium</MenuItem>
                            <MenuItem key="low" value="low">Low</MenuItem>
                        </TextField>
                    </tr>
                    <tr>
                        <td>Advance Status</td>
                        <td className="AdvanceBtnContainer"> <Button onClick={setadv1} id={Adv? "select" : "notselect"} className="AdvanceBtn" variant="contained">Yes</Button><Button id={Adv? "notselect" : "select"} onClick={setadv2} className="AdvanceBtn" variant="contained">No</Button></td>
                    </tr>
                    
                </table>
            </div>
            <div className="CommentContainers" >
                <table >
                    <tr>
                        <td>Add comment</td>
                        <td className="CommentBox" > <TextField onChange={(e)=>setComment(e.target.value)} multiline rows={5} variant="outlined" /></td>
                    </tr>
                </table>
            </div>
        </div>
        <div className="FormBottomContainermobile">
            <div className="BottomInputContainers" >
                <table className="leftinputs">
                    <tr>
                        <td>Destination Address</td>
                        <td> <TextField onChange={(e)=>setDestAdd(e.target.value)} variant="outlined" /></td>
                    </tr>
                    <tr>
                        <td>Order Value(Rs.)</td>
                        <td> <TextField onChange={(e)=>setOrderVal(e.target.value)} variant="outlined" /></td>
                    </tr>
                    <tr>
                        <td>Case Priority</td>
                        <TextField onChange={(e)=>setPriority(e.target.value)} select variant="outlined"  >
                            <MenuItem key="high" value="high">High</MenuItem>
                            <MenuItem key="medium" value="medium">Medium</MenuItem>
                            <MenuItem key="low" value="low">Low</MenuItem>
                        </TextField>
                    </tr>
                    <tr>
                        <td>Advance Status</td>
                        <td className="AdvanceBtnContainer"> <Button onClick={setadv1} id={Adv? "select" : "notselect"} className="AdvanceBtn" variant="contained">Yes</Button><Button id={Adv? "notselect" : "select"} onClick={setadv2} className="AdvanceBtn" variant="contained">No</Button></td>
                    </tr>
                    <tr>
                        <td>Add comment</td>
                        <td> <TextField onChange={(e)=>setComment(e.target.value)} multiline rows={5} variant="outlined" /></td>
                    </tr>
                </table>
            </div>
        </div>
        </>
    )
}

export default FormBottom
