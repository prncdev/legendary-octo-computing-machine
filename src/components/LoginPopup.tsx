import {
  Box,
  Button,
  FormControl,
  InputAdornment,
  InputLabel,
  Link,
  Modal,
  OutlinedInput,
  TextField,
} from '@mui/material';
import { useState } from 'react';
import { IoEyeOffSharp } from 'react-icons/io5';
import { IoEyeOutline } from 'react-icons/io5';
import { useAuth } from '../context/AuthProvider';
interface Props {
  open: boolean;
  onLogin?: (details: {}) => void;
  onClose?: () => void;
}

const style = {
  // display: 'flex',
  // flexDirection: 'column',
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 500,
  bgcolor: 'background.paper',
  // border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export const LoginPopup = ({ open, onLogin, onClose }: Props) => {
  const auth = useAuth();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const [loginPassword, setLoginPassword] = useState('password');
  const [signupPassword, setSignupPassword] = useState('password');

  const [alreadyHaveAccount, setAlreadyHaveAccount] = useState(true);

  const handleLogin = () => {
    console.log('handleLogin: ', username);

    auth.login(username, password);
    // onLogin({ username, password });
  };

  return (
    <section>
      <Modal open={open} onClose={onClose}>
        <Box sx={style}>
          {alreadyHaveAccount ? (
            <form>
              <FormControl fullWidth sx={{ m: 1 }}>
                <TextField
                  id='username'
                  label='Username'
                  type='text'
                  // color='warning'
                  // helperText='Some important text'
                />
              </FormControl>

              <FormControl fullWidth sx={{ m: 1 }}>
                <TextField
                  id='password'
                  label='Password'
                  type={loginPassword}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment
                        position='start'
                        sx={{ cursor: 'pointer' }}
                      >
                        {loginPassword === 'password' ? (
                          <IoEyeOffSharp
                            onClick={() => setLoginPassword('text')}
                          />
                        ) : (
                          <IoEyeOutline
                            onClick={() => setLoginPassword('password')}
                          />
                        )}
                      </InputAdornment>
                    ),
                  }}
                  // color='warning'
                  // helperText='Some important text'
                />
              </FormControl>
              <Box className='flex justify-between items-end'>
                <Button variant='contained' onClick={handleLogin}>
                  Log in
                </Button>
                <span
                  onClick={() => setAlreadyHaveAccount(false)}
                  style={{ cursor: 'pointer' }}
                >
                  Don't have an Account?
                </span>
              </Box>
            </form>
          ) : (
            <form onSubmit={handleLogin}>
              <FormControl fullWidth sx={{ m: 1 }}>
                <TextField
                  required
                  id='full-name'
                  label='Full name'
                  type='text'
                  // color='warning'
                  // helperText='Some important text'
                />
              </FormControl>

              <FormControl fullWidth sx={{ m: 1 }}>
                <TextField
                  required
                  id='username'
                  label='Username'
                  type='text'
                  // color='warning'
                  // helperText='username already exist'
                />
              </FormControl>

              <FormControl fullWidth sx={{ m: 1 }}>
                <TextField
                  required
                  id='create-password'
                  label='Create password'
                  type={signupPassword}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment
                        position='start'
                        sx={{ cursor: 'pointer' }}
                      >
                        {signupPassword === 'password' ? (
                          <IoEyeOffSharp
                            onClick={() => setSignupPassword('text')}
                          />
                        ) : (
                          <IoEyeOutline
                            onClick={() => setSignupPassword('password')}
                          />
                        )}
                      </InputAdornment>
                    ),
                  }}
                />
              </FormControl>

              <FormControl fullWidth sx={{ m: 1 }}>
                <TextField
                  required
                  id='confirm-password'
                  label='Confirm password'
                  type={signupPassword}
                />
              </FormControl>

              <Box className='flex justify-between items-end'>
                <Button variant='contained' type='submit'>
                  Sign up
                </Button>
                <span
                  onClick={() => setAlreadyHaveAccount(true)}
                  style={{ cursor: 'pointer' }}
                >
                  Already have an Account?
                </span>
              </Box>
            </form>
          )}
        </Box>
      </Modal>
    </section>
  );
};
