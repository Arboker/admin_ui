import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import DashboardIcon from '@mui/icons-material/Dashboard';
import SupportIcon from '@mui/icons-material/Support';
import { Link } from "react-router-dom";

const drawerWidth = 240;

const Sidebar = () => {
    return (
        <Drawer
            variant="permanent"
            sx={{
                width: drawerWidth,
                flexShrink: 0,
                [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box' },
            }}
        >
            <Toolbar />
            <Box sx={{ overflow: 'auto' }}>
                <List className="sidebar_list">
                    <Link to="/">
                        <ListItem button key="Dashboard">
                            <ListItemIcon>
                                <DashboardIcon />
                            </ListItemIcon>
                            <ListItemText primary="Dashboard" />
                        </ListItem>
                    </Link>
                    <ListItem button key="Support">
                        <ListItemIcon>
                            <SupportIcon />
                        </ListItemIcon>
                        <ListItemText primary="Support" />
                    </ListItem>
                </List>
            </Box>
        </Drawer>
    )
}

export default Sidebar;