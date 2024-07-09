'use client';
import { GitHub, Login } from '@mui/icons-material';
import { Box, IconButton, Typography } from '@mui/material';
import Link from 'next/link';
import React from 'react';

const menuItems = [
  { text: 'Home', href: '/' },
  { text: 'About', href: '/about' },
  { text: 'Services', href: '/services' },
  { text: 'Contact', href: '/contact' },
];

const PrimaryMenu = () => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const handleOpenNavMenu = (e: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(e.currentTarget);
  };
  const handleCloseNavMenu = () => {
    setAnchorEl(null);
  };

  return (
    <Box display='flex' alignItems='center' gap={1.5}>
      <IconButton
        LinkComponent={Link}
        href='https://github.com/akibsaleh/FileFlex'
        color='primary'
        sx={{
          gap: '5px',
          borderRadius: '5px',
        }}
      >
        <GitHub fontSize='small' />
        <Typography ml='40px' fontWeight={500}>
          Source Code
        </Typography>
      </IconButton>
      <IconButton
        LinkComponent={Link}
        href='/auth/login'
        color='primary'
        sx={{
          gap: '5px',
          borderRadius: '5px',
          borderWidth: '1px !important',
          borderColor: 'primary.main',
        }}
      >
        <Login fontSize='small' />
        <Typography ml='40px' fontWeight={500}>
          Get Access
        </Typography>
      </IconButton>
      {/* <IconButton
        size='large'
        aria-label='sample menu'
        aria-controls='menu-appBar'
        aria-haspopup='true'
        onClick={handleOpenNavMenu}
        color='inherit'
      >
        <MenuIcon />
      </IconButton>
      <Menu
        id='menu-appBar'
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleCloseNavMenu}
      >
        {menuItems.map((item) => (
          <MenuItem
            key={item.text}
            LinkComponent={Link}
            href={item.href}
            onClick={handleCloseNavMenu}
          >
            <Typography textAlign='center'>{item.text}</Typography>
          </MenuItem>
        ))}
      </Menu> */}
    </Box>
  );
};

export default PrimaryMenu;
