import React, { useContext } from 'react';
import { Box, IconButton, useTheme } from '@mui/c';
import { ColorModeContext, tokens } from '../../theme';
import InputBase from '@mui/material';
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';
import NotificationlinedIcon from '@mui/icons-material/LightModeOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/LightModeOutlined';
import PersonOutlinedIcon from '@mui/icons-material/LightModeOutlined';
import SearchIcon from '@mui/icons-material/LightModeOutlined';

function Topbar() {
  const theme = useTheme()
  const color = tokens(theme.palette.mode)
  const colorMode = useContext(ColorModeContext)

  // console.log(theme.palette);
  return (
    <Box display="flex" justifyContent="space-between" p={2}>
      
    </Box>
  )
}

export default Topbar