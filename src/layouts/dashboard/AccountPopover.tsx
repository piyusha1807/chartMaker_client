import { Icon } from '@iconify/react';
import React, { useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import homeFill from '@iconify/icons-eva/home-fill';
import settings2Fill from '@iconify/icons-eva/settings-2-fill';
import { Link as RouterLink } from 'react-router-dom';
// material
import { alpha } from '@mui/material/styles';
import { Button, Box, Divider, MenuItem, Typography, Avatar, IconButton } from '@mui/material';
// components
import MenuPopover from '../../components/MenuPopover';
//
import { logout } from '../../redux/actions/userActions';

// ----------------------------------------------------------------------

const MENU_OPTIONS = [
  {
    label: 'Home',
    icon: homeFill,
    linkTo: '/',
  },
  {
    label: 'Settings',
    icon: settings2Fill,
    linkTo: 'settings/profile',
  },
];

// ----------------------------------------------------------------------

export default function AccountPopover() {
  const dispatch = useDispatch();
  const anchorRef = useRef(null);

  const userLogin = useSelector((state: any) => state.userLogin);
  const { userInfo } = userLogin;

  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <>
      <IconButton
        ref={anchorRef}
        onClick={handleOpen}
        sx={{
          padding: 0,
          width: 44,
          height: 44,
          ...(open && {
            '&:before': {
              zIndex: 1,
              content: "''",
              width: '100%',
              height: '100%',
              borderRadius: '50%',
              position: 'absolute',
              bgcolor: (theme) => alpha(theme.palette.grey[900], 0.72),
            },
          }),
        }}
      >
        <Avatar src={''} alt="photoURL" />
      </IconButton>

      <MenuPopover
        open={open}
        onClose={handleClose}
        anchorEl={anchorRef.current}
        sx={{ width: 220 }}
      >
        <Box sx={{ my: 1.5, px: 2.5 }}>
          <Typography variant="subtitle1" noWrap>
            {userInfo?.name}
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }} noWrap>
            {userInfo?.email}
          </Typography>
        </Box>

        <Divider sx={{ my: 1 }} />

        {MENU_OPTIONS.map((option) => (
          <MenuItem
            key={option.label}
            to={option.linkTo}
            component={RouterLink}
            onClick={handleClose}
            sx={{ typography: 'body2', py: 1, px: 2.5 }}
          >
            <Box
              component={Icon}
              icon={option.icon}
              sx={{
                mr: 2,
                width: 24,
                height: 24,
              }}
            />

            {option.label}
          </MenuItem>
        ))}

        <Box sx={{ p: 2, pt: 1.5 }}>
          <Button fullWidth color="inherit" variant="outlined" onClick={handleLogout}>
            Logout
          </Button>
        </Box>
      </MenuPopover>
    </>
  );
}
