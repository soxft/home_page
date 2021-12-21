import React, { useState } from "react";
import { Outlet } from 'react-router-dom';

import {
    Menu as MenuIcon,
    Inbox as InboxIcon,
    Mail as MailIcon,
} from '@mui/icons-material';
import {
    Typography,
    Drawer,
    Toolbar,
    AppBar,
    IconButton,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    Divider,
    ListSubheader,
    Box,
} from "@mui/material";

const Index = () => {
    const [open, setOpen] = useState(false);
    return <>
        <AppBar position="fixed" open={open}>
            <Toolbar>
                <IconButton
                    color="inherit"
                    edge="start"
                    onClick={() => setOpen(true)}
                    sx={{
                        marginRight: '36px',
                        ...(open && { display: 'none' }),
                    }}
                >
                    <MenuIcon />
                </IconButton>
                <Typography
                    variant="h6"
                    noWrap
                    component="div"
                    sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
                >
                    XCSOFT
                </Typography>
            </Toolbar>
        </AppBar>
        <Toolbar />
        <Drawer
            anchor='left'
            open={open}
            ModalProps={{
                keepMounted: true,
            }}
            onClose={() => setOpen(false)}
        >
            <Box
                sx={{ width: 250 }}
                role="presentation"
            >
                <Toolbar />
                <Divider />
                <List
                    subheader={
                        <ListSubheader component="div" id="nested-list-subheader">
                            Nested List Items
                        </ListSubheader>
                    }>
                    <ListItem button key=''>
                        <ListItemIcon>
                            <InboxIcon />
                        </ListItemIcon>
                        <ListItemText primary='1' />
                    </ListItem>
                </List>
            </Box>
        </Drawer>
        <Outlet />
    </>;
}

export default Index;