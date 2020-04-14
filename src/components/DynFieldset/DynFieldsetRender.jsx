import React from 'react'

const DynFieldsetRender = props => {
    const {fieldset} = props;
    return (
        <fieldset
            accessKey={fieldset.accesskey}
            align={fieldset.align}
            className={fieldset.class}
            contentEditable={fieldset.contenteditable}
            contextMenu={fieldset.contextmenu}
            dir={fieldset.dir}
            disabled={fieldset.disabled}
            dropzone={fieldset.dropzone}
            form={fieldset.form}
            hidden={fieldset.hidden}
            id={fieldset.id}
            lang={fieldset.ang}
            name={fieldset.name}
            spellCheck={fieldset.spellcheck}
            tabIndex={fieldset.tabindex}
            title={fieldset.title}
            translate={fieldset.transalet}
        >
            <legend>{fieldset.legend}</legend>
            Probando el form con fieldset
        </fieldset> 
    )
}

export default DynFieldsetRender