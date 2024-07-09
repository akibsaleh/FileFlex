import { AppBar, IconButton, Stack, Toolbar, Typography } from '@mui/material';
import Link from 'next/link';
import LogoIcon from './icons/LogoIcon';
import PrimaryMenu from './PrimaryMenu';

const Header = () => {
  return (
    <AppBar position='static' color='inherit' elevation={0}>
      <Toolbar disableGutters sx={{ width: '100%' }}>
        <Stack
          direction='row'
          justifyContent='space-between'
          alignItems='center'
          width='100%'
          px={2}
        >
          <IconButton LinkComponent={Link} href='/'>
            <LogoIcon />
            <Typography
              component='h2'
              color='primary.secondary'
              style={{
                fontWeight: '900',
                fontSize: '18px',
                letterSpacing: '1px',
                marginLeft: '4px',
              }}
            >
              FILEFLEX
            </Typography>
          </IconButton>
          <PrimaryMenu />
        </Stack>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
