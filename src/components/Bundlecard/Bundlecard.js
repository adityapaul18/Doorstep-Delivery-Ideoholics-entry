import React from 'react'
import './Bundlecard.css'
import CloseIcon from '@material-ui/icons/Close';
function Bundlecard() {
    return (
        <div className="Bundlecard">
            <div>
                <div>this is title :   this is content</div>
                <div>this is title :   this is content</div>
                <div>this is title :   this is content</div>
                <div>this is title :   this is content</div>
            </div>
            <div className="RemoveIcon"><CloseIcon /></div>
            
        </div>
    )
}

export default Bundlecard
