import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import  Link  from '@mui/material/Link';

const drawerWidth = 240;
const navItems = ['Predict Disease'];

function DrawerAppBar(props) {
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const sendTo = (e) => {

    window.location.href ="/"+ e.target.value;

  }


  return (
     


    <Box sx={{ display: 'flex' }}>
      <AppBar component="nav">
      <Toolbar>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
          >
            Heart Disease Prediction
          </Typography>
          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
            {navItems.map((item) => (
                <Button key={item} value={  item} onClick = {(e)=>{sendTo(e.target.value)}} sx={{ color: '#fff' }}>
                  {item}
                </Button>
              
            ))}
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}



export default DrawerAppBar;
