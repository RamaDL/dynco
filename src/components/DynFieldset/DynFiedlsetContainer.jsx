import React, { Fragment } from 'react'
import DynFieldsetRender from './DynFieldsetRender'

const DynFieldsetContainer = props => {
    const { fieldsets } = props;
    {console.log(fieldsets)}
    return (
        <Fragment>
            {
                fieldsets.map(fieldset => {
                    return fieldset.active 
                    ? <DynFieldsetRender fieldset={fieldset}/>
                    : <Fragment>
                        Render inputs without a fieldset
                    </Fragment>
                })
            }
        </Fragment>
    )
}

export default DynFieldsetContainer