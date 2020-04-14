import React from "react";
import DynFieldsetContainer from '../DynFieldset/DynFiedlsetContainer'

const DynFormRender = props => {
  
  const {formJSON} = props;
  console.log(formJSON.action);

  return (
    <form
      acceptCharset={formJSON["accept-charset"]}
      id={formJSON.id}
      action={formJSON.action}
      autocomplete={formJSON.autocomplete}
      className={formJSON.class}
      encType={formJSON.enctype}
      method={formJSON.method}
      name={formJSON.name}
      target={formJSON.target}
    >
        {console.log(formJSON.fieldsets)}
        <DynFieldsetContainer fieldsets={formJSON.fieldsets}/>
    </form>
  );
};

export default DynFormRender;
