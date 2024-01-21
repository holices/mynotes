import { useState } from "react";
import { FiMail, FiLock } from "react-icons/fi"
import { Link } from "react-router-dom";

import { useAuth } from "../../hooks/auth";

import { Input } from "../../components/Input"
import { Button } from "../../components/Button"

import { Container, Form } from "./styles";

export function SignIn() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const { signIn } = useAuth()

  function handleSignIn() {
    signIn({ email, password })
  }

  return (
    <Container>
      <Form>
        <h1>myNotes</h1>
        <p>Save and menage your useful links.</p>

        <h2>Sign In</h2>

        <Input 
          placeholder="E-mail"
          type="text"
          icon={FiMail}
          onChange={e => setEmail(e.target.value)}
        />

        <Input 
          placeholder="Password"
          type="password"
          icon={FiLock}
          onChange={e => setPassword(e.target.value)}
        />

        <Button title='Login' onClick={handleSignIn} />

        <Link to="/register">
          Sign Up
        </Link>
  
      </Form>
    </Container>
  )
}