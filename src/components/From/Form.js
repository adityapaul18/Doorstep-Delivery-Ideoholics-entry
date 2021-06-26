import React from 'react'
import FormBottom from '../FormBottom/FormBottom'
import FormMid from '../FormMid/FormMid'
import FormTop from '../FormTop/FormTop'
import './Form.css'

function Form() {
    return (
        <div>
            <FormTop/>
            <FormMid/>
            <FormBottom/>
        </div>
    )
}

export default Form
