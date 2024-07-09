import { Google } from '@mui/icons-material';
import { Button, Typography } from '@mui/material';

const SocialLogin = () => {
  return (
    <Button
      variant='outlined'
      size='large'
      color='primary'
      fullWidth
      sx={{ height: 48 }}
    >
      <Google />
      <Typography ml={1}>Log in with Google</Typography>
    </Button>
  );
};

export default SocialLogin;
