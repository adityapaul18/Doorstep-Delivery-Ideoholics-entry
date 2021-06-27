import React from 'react'
import TextField from '@material-ui/core/TextField';
import './FormMid.css'
import Bundlecard from '../Bundlecard/Bundlecard';
import { Button } from '@material-ui/core';

function FormMid() {
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
                        <td> <TextField  variant="outlined" /></td>
                    </tr>
                    <tr>
                        <td>Brand</td>
                        <td> <TextField  variant="outlined" /></td>
                    </tr>
                    <tr>
                        <td>Part Description</td>
                        <td> <TextField variant="outlined" /></td>
                    </tr>
                    <tr>
                        <td>Quantity</td>
                        <td> <TextField variant="outlined" /></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td> <Button className="SaveBundleBtn" variant="contained">+ Add Bundle</Button></td>
                    </tr>
                    
                </table>
                <div className="BundleContainer" > 
                    <Bundlecard/>
                    <Bundlecard/>
                    <Bundlecard/>
                    <Bundlecard/>
                </div>
            </div>
        </div>
    )
}

export default FormMid
