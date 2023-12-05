import { Container } from 'semantic-ui-react'
import { Outlet, useLocation } from 'react-router-dom'
import NavBar from './nav/NavBar'
import HomePage from '../../features/home/HomePage';
import ModalManager from '../common/modals/ModalManager';

function App() {
  const location = useLocation();
  return (
    <>
      {location.pathname === '/' ? <HomePage /> : (
        <>
          <ModalManager />
          <NavBar />
          <Container className='main'>
            <Outlet />
          </Container>
        </>
      )}
    </>
  )
}

export default App
