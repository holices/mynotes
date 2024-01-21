import { useState } from "react"
import { FiUser, FiMail, FiLock } from "react-icons/fi"
import { Link, useNavigate } from "react-router-dom";
import { api } from '../../services/api'
import { Input } from "../../components/Input"
import { Button } from "../../components/Button"
import { Container, Form } from "./styles";

export function SignUp() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const navigate = useNavigate()

  function handleSignUp() {
    if(!name || !email || !password) {
      return alert('Preencha todos os campos!')
    }

    api.post("/users", { name, email, password })
    .then(() => {
      alert('Usuário cadastrado com sucesso!')
      navigate("/")
    })
    .catch(error => {
      if(error.response) {
        alert(error.response.data.message)
      } else {
        alert("Não foi possível cadastrar")
      }
    })

  }

  return (
    <Container>
      <Form>
        <h1>myNotes</h1>
        <p>Save and menage your useful links.</p>

        <h2>Sign Up</h2>

        <Input 
          placeholder="Name"
          type="text"
          icon={FiUser}
          onChange={e => setName(e.target.value)}
        />

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

        <Button title='Register' onClick={handleSignUp}/>

        <Link to="/">
          Back to login
        </Link>
  
      </Form>
    </Container>
  )
}