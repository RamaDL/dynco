import React from 'react';

/**
'button'
'checkbox'
'color'
'date'
'datetime-local'
'email'
'file'
'hidden'
'image'
'month'
'number'
'password'
'radio'
'range'
'reset'
'search'
'submit'
'tel'
'text'
'time'
'url'
'week'
'select'
'textarea'
*/

export const standarInput = props => {
    const { input } = props;

    return(
        <input type={input.type} />
    )
}

export const checkboxInput = props => {

}

export const selectInput = props => {

}
