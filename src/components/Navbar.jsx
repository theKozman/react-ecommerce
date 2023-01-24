import { AppBar, Toolbar, Box, Typography, styled, InputBase, Badge } from '@mui/material';
import StorefrontIcon from '@mui/icons-material/Storefront';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PersonIcon from '@mui/icons-material/Person';

const StyledToolbar = styled(Toolbar)({
  display: 'flex',
  justifyContent: 'space-between',
});

const Icons = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  gap: '20px'
}));

const Navbar = ({ handleOpenCartDrawer, cartProducts }) => {
  return (
    <AppBar position='static' width='100vw'>
        <StyledToolbar>
          <Typography 
            variant='h6'
            sx={{
              display: {
                xs: 'none',
                sm: 'block',
              }
            }}
          >
            STORE
          </Typography>  
          <StorefrontIcon
            sx={{
              display: {
                xs: 'block',
                sm: 'none',
              }
            }}
          />
          <Icons>
            <Badge
              badgeContent={cartProducts.length}
              color='error'
              onClick={() => handleOpenCartDrawer(true)}
            >
              <ShoppingCartIcon/>
            </Badge>
          </Icons>

        </StyledToolbar>
    </AppBar>
  );
}

export default Navbar;
