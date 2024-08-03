import * as React from 'react';

import { usePathname, useRouter } from 'next/navigation';

import AppBar from '@mui/material/AppBar';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Image from 'next/image';
import Link from 'next/link';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import MenuItem from '@mui/material/MenuItem';
import NotificationsIcon from '@mui/icons-material/Notifications';
import SettingsIcon from '@mui/icons-material/Settings';
import Toolbar from '@mui/material/Toolbar';
import Tooltip from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';

export type HeaderProps = {};

const pages = [{ title: 'Portraits', url: '/dashboard'},{ title: 'Evidence', url: '/evidence'}];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];
const user = {
  firstName: "Agaetis",
  lastName: "Byjrun"
}

const Header: React.FC<HeaderProps> = (HeaderProps): JSX.Element => {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);
  const router = useRouter();
  const pathname = usePathname();

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };


  return (
    <AppBar position="static" sx={{backgroundColor: '#FCFCFF', borderRadius: '0', border: '1px solid #E7EAEC', boxShadow: 'none', color: 'black', width: '100%'}}>
      <Box>
        <Toolbar>
          <Link href="/dashboard">
            <Image
            src='/logo.svg'
            alt='Learning Portrait Logo'
            width={93}
            height={64}
            />
          </Link>
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page.title} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page.title}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, marginLeft: '24px', 'a:link':{textDecoration: 'none'},  }}>
            {pages.map((page) => (
              <Button
                disableRipple
                key={page.title}
                onClick={() => router.push(page.url)}
                sx={{ 
                  my: 2, 
                  color: '#61666B', 
                  display: 'block', 
                  fontSize: '16px', 
                  textTransform: 'uppercase', 
                  borderRadius: '0',
                  borderBottom: `${pathname.includes(page.url) ? '2px solid #006C96' : ''}`,
                  '&:active': {
                    borderBottom: '2px solid #006C96',
                    color: '#006C96'
                  },
                  '&:hover': {
                    backgroundColor: '#FCFCFF'
                  },
                }}
              >
                {page.title}
              </Button>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0, md: 'flex'}} >
          <Tooltip title="To update your settings, email support@learningportrait.com">
            <IconButton disableRipple sx={{ p: 0,'&:hover': {backgroundColor: '#FCFCFF'}, }}>
              <SettingsIcon sx={{ color: '#006C96',  marginRight: '16px'}}/>
            </IconButton>
          </Tooltip>
          <Tooltip title="Coming soon!">
          <IconButton disableRipple sx={{ p: 0,'&:hover': {backgroundColor: '#FCFCFF'}}}>
            <NotificationsIcon sx={{ color: '#006C96', marginRight: '16px' }}/>
          </IconButton>
          </Tooltip>
              <IconButton disableRipple sx={{ p: 0 }}>
                <Avatar alt="User Avatar" src={"/static/images/avatar/2.jpg"} />
              </IconButton><div style={{ display: 'inline-block', color: '#006C96', paddingLeft: '8px' }}>{`${user.firstName} ${user.lastName}`}</div>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Box>
    </AppBar>
  );
}
export default Header;
