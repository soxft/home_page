import React, { useState } from "react";
import { Outlet, useNavigate } from 'react-router-dom';

// ICON start
import MenuIcon from '@mui/icons-material/Menu';
import MailIcon from '@mui/icons-material/MailOutline';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import BookIcon from '@mui/icons-material/BookOutlined';
import GitHubIcon from '@mui/icons-material/GitHub';
import CodeIcon from '@mui/icons-material/Code';
import HomeIcon from '@mui/icons-material/Home';
import ClassOutlinedIcon from '@mui/icons-material/ClassOutlined';
import AccountTreeOutlinedIcon from '@mui/icons-material/AccountTreeOutlined';
// ICON end

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
    Avatar,
    ListItemAvatar,
    Container,
} from "@mui/material";

import { useTranslation } from "react-i18next"

const Index = () => {
    const { t } = useTranslation('drawer');
    const [open, setOpen] = useState(false);
    const navigate = useNavigate();

    const HandleJump = (url) => window.open(url);
    const HandleNavigate = (url) => {
        setOpen(false);
        navigate(url);
    }

    const find_me = [
        ['Github', <GitHubIcon />, 'https://github.com/soxft']
    ];

    const my_site = [
        ['blog', <BookIcon />, 'https://blog.xsot.cn'],
        ['openid', <CodeIcon />, 'https://9420.ltd'],
        ['timeletters', <MailIcon />, 'https://www.timeletters.cn'],
    ];

    const links = [
        ['泽', "Z", 'https://blog.stzo.cn'],
        ['源源日记', "Y", 'https://blog.bsot.cn'],
    ];

    return <>
        <AppBar
            position="fixed"
            open={open}
            color="inherit"
        >
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
                    variant="overline"
                    noWrap
                    component="div"
                    sx={{ fontSize: 20 }}
                >
                    XCSOFT
                </Typography>
            </Toolbar>
        </AppBar>
        <Toolbar />
        {/* 侧边抽屉 */}
        <Drawer
            anchor='left'
            open={open}
            ModalProps={{
                keepMounted: true,
            }}
            onClose={() => setOpen(false)}
        >
            <Box
                sx={{
                    width: 250,
                    height: '100%',
                    bgcolor: "background.default",
                }}
                role="presentation"
            >
                <Toolbar>
                    <IconButton
                        onClick={() => setOpen(false)}
                    >
                        <ChevronLeftIcon />
                    </IconButton>
                </Toolbar>
                <Divider />
                {/* INDEX */}
                <List
                    subheader={
                        <ListSubheader
                            sx={{
                                bgcolor: "background.default",
                            }}
                        >
                            {t('subtitle_index')}
                        </ListSubheader>
                    }
                >
                    <ListItem
                        button
                        onClick={() => HandleNavigate('/')}
                    >
                        <ListItemIcon>
                            <HomeIcon />
                        </ListItemIcon>
                        <ListItemText
                            xs={{ color: "text.secondary" }}
                            primary={t('home')}
                        />
                    </ListItem>
                    <ListItem
                        button
                        onClick={() => HandleNavigate('/project')}
                    >
                        <ListItemIcon>
                            <AccountTreeOutlinedIcon />
                        </ListItemIcon>
                        <ListItemText
                            xs={{ color: "text.secondary" }}
                            primary={t('project')}
                        />
                    </ListItem>
                    <ListItem
                        button
                        onClick={() => HandleNavigate('/about')}
                    >
                        <ListItemIcon>
                            <ClassOutlinedIcon />
                        </ListItemIcon>
                        <ListItemText
                            xs={{ color: "text.secondary" }}
                            primary={t('about')}
                        />
                    </ListItem>
                </List>
                <Divider />
                {/* 我的网站 */}
                <List
                    subheader={
                        <ListSubheader
                            sx={{
                                bgcolor: "background.default",
                            }}
                        >
                            {t('subtitle_mysite')}
                        </ListSubheader>
                    }
                >
                    {
                        my_site.map((item, index) => {
                            return (
                                <ListItem
                                    onClick={() => HandleJump(item[2])}
                                    button
                                    key={index}
                                >
                                    <ListItemIcon>
                                        {item[1]}
                                    </ListItemIcon>
                                    <ListItemText
                                        xs={{ color: "text.secondary" }}
                                        primary={t(item[0])}
                                    />
                                </ListItem>
                            );
                        })
                    }
                </List>
                <Divider />
                {/* 找到我 */}
                <List
                    subheader={
                        <ListSubheader
                            sx={{
                                bgcolor: "background.default",
                            }}
                        >
                            {t('subtitle_findme')}
                        </ListSubheader>
                    }
                >
                    {
                        find_me.map((item, index) => {
                            return (
                                <ListItem
                                    onClick={() => HandleJump(item[2])}
                                    button
                                    key={index}
                                >
                                    <ListItemIcon>
                                        {item[1]}
                                    </ListItemIcon>
                                    <ListItemText
                                        xs={{ color: "text.secondary" }}
                                        primary={t(item[0])}
                                    />
                                </ListItem>
                            );
                        })
                    }
                </List>
                <Divider />
                {/* 推荐链接 */}
                <List
                    subheader={
                        <ListSubheader
                            sx={{
                                bgcolor: "background.default",
                            }}
                        >
                            {t('subtitle_suggest')}
                        </ListSubheader>
                    }
                >
                    {
                        links.map((item, index) => {
                            return (
                                <ListItem
                                    onClick={() => HandleJump(item[2])}
                                    button
                                    key={index}
                                >
                                    <ListItemAvatar>
                                        <Avatar sx={{
                                            bgcolor: "background.default",
                                            color: "text.secondary",
                                            width: 28,
                                            height: 28
                                        }}>{item[1]}</Avatar>
                                    </ListItemAvatar>
                                    <ListItemText
                                        xs={{ color: "text.secondary" }}
                                        primary={item[0]}
                                    />
                                </ListItem>
                            );
                        })
                    }
                </List>
            </Box>
        </Drawer>
        <Box
            sx={{
                height: '100%',
            }}
        >
            <Container
                maxWidth="md"
                sx={{
                    paddingTop: '4rem',
                    paddingBottom: '4rem',
                    mx: 'auto',
                    width: '100%',
                    textAlign: 'center',
                }}
            >
                <Outlet />
            </Container>
        </Box>
        <Typography
            variant="caption"
            sx={{
                position: "fixed",
                bottom: "20px",
                left: "20px",
                opacity: 0.3,
            }}
            color="text.secondary"
        >
            &ensp;Copyright {new Date().getFullYear()} xcsoft All Rights Reserved.
        </Typography>
    </>;
}

export default Index;