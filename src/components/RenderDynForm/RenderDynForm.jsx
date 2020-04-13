import React from "react";

const RenderDynForm = props => {
  
  const {formJSON} = props;
  console.log(formJSON.action);

  return (
    <form
      acceptCharset={formJSON["accept-charset"]}
      id={formJSON.id}
      action={formJSON.action}
      autocomplete={formJSON.autocomplete}
      className={formJSON.className}
      encType={formJSON.enctype}
      method={formJSON.method}
      name={formJSON.name}
      target={formJSON.target}
    >
        
    </form>
  );
};

export default RenderDynForm;
