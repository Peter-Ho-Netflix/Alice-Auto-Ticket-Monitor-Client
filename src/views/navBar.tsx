import { Box, AppBar, Toolbar, Typography, Button } from '@mui/material';

export function NavBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            爱丽丝自动票务监控系统
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
