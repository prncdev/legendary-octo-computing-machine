import { useEffect, useState } from 'react';
import { useAuth } from '../context/AuthProvider';
import { LoginPopup } from './LoginPopup';
import { Button } from '@mui/material';

export const Header = () => {
  const auth = useAuth();
  const [authenticated, setAuthenticated] = useState(false);
  const [showLogin, setShowLogin] = useState(true);

  useEffect(() => {
    console.log('auth: ', auth);
  }, []);

  useEffect(() => {
    if (!auth) {
      setAuthenticated(true);
    }
  }, [auth]);

  useEffect(() => {
    console.log('showLogin: ', showLogin);
  });

  return (
    <header className='w-full flex py-5 px-7 justify-between bg-orange-400'>
      <h1 className='m-0 text-3xl'>Bite Buddies</h1>
      <section>
        <Button variant='contained' onClick={() => setShowLogin(!showLogin)}>Login now</Button>
        <LoginPopup
        
          open={!showLogin}
          onClose={() => setShowLogin(!showLogin)}
        />
      </section>
      {/* {auth.currentUser ? (
        <div>
          {auth.currentUser?.name}
          <button onClick={auth.logout}>Logout</button>
        </div>
      ) : (
        <div>
          <button onClick={() => setShowLogin(true)}>Login</button>
        </div>
      )} */}
    </header>
  );
};
