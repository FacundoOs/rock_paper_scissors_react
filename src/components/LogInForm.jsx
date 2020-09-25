import React from "react";
import { Button, Form } from 'semantic-ui-react'


const LoginForm = ({ submitFormHandler }) => {
  return (
<Form onSubmit={submitFormHandler} id="login-form">
<Form.Input
  icon='user'
  iconPosition='left'
  label='Email'
  placeholder='Username' name="email" type="email" id="email"
/>
<Form.Input
  icon='lock'
  iconPosition='left'
  label='Password'
  type='password' name="password" type="password" id="password"
/>

<Button id="submit" content='Login' primary />
</Form>
  );
};

export default LoginForm;

