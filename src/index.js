import React from 'react'
import RenderDynForm from './components/RenderDynForm/RenderDynForm.jsx'
import {formJSON} from './data/form'

export const DynForm = (props) => {
  return <RenderDynForm formJSON={formJSON}/>
}
