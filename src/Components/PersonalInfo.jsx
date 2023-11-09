import React from 'react'
import { useForm } from 'react-hook-form';
import { Form, Button } from 'react-bootstrap';
const PersonalInfo = () => {
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = (data)=>{
   console.log(data);
  }
  return (
    <>
     <Form onSubmit={handleSubmit(onSubmit)}>
     <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" placeholder="Enter Name" autoComplete='off' name='fullname' />
        <Form.Text className="text-muted">
  
        </Form.Text>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Phone No</Form.Label>
        <Form.Control type="number" placeholder="Enter Phone No" />
        <Form.Text className="text-muted">
          
        </Form.Text>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
     </Form>
    </>
  )
}

export default PersonalInfo