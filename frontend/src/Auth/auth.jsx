import React from 'react'
import Form from '../Auth/form'

var userIsRegister ='true'

function auth() {
  return (
    <Form  isRgistered={userIsRegister}/>
  )
}

export default auth
