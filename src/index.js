import React from 'react'
import DynFormRender from './components/DynForm/DynFormRender.jsx'
import {formJSON} from './data/form'

export const DynForm = (props) => {
  return <DynFormRender formJSON={formJSON}/>
}
