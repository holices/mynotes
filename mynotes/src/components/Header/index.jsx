import { RiShutDownLine } from 'react-icons/ri'
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../hooks/auth';
import { api } from '../../services/api';

import avatarPlaceholder from '../../assets/avatar_placeholder.svg' 

import { Container, Profile, Logout } from "./styles";

export function Header() {
  const { signOut, user } = useAuth()
  const navigation = useNavigate()

  function handleSignOut() {
    navigation("/")
    signOut()
  }

  const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder


  return(
    <Container>
      <Profile to="/profile">
        <img
        src={avatarUrl}
        alt="User image" />

        <div>
          <span>Bem-vindo</span>
          <strong>Holices Sanson</strong>
        </div>
      </Profile>

      <Logout onClick={handleSignOut}>
        <RiShutDownLine color="#03FF2D" />
      </Logout>
    </Container>
  )
}