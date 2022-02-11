import React, { useState } from "react";
import { Outlet } from 'react-router-dom';

import {
    Menu as MenuIcon,
    MailOutline as MailIcon,
    ChevronLeft as ChevronLeftIcon,
    BookOutlined as BookIcon,
    GitHub as GitHubIcon,
    Code as CodeIcon,
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
    Avatar,
    ListItemAvatar,
    Container,
} from "@mui/material";

//import { useTheme } from '@mui/material/styles';

import { useTranslation } from "react-i18next"

const Index = () => {
    //const theme = useTheme();
    const { t } = useTranslation('drawer');
    const [open, setOpen] = useState(false);

    const HandleJump = (url) => window.open(url);

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
                    <IconButton onClick={() => setOpen(false)}>
                        <ChevronLeftIcon />
                    </IconButton>
                </Toolbar>
                <Divider />
                {/* 我的网站 */}
                <List
                    sx={{
                    }}
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
                            return <ListItem onClick={() => HandleJump(item[2])} button key={index}>
                                <ListItemIcon>
                                    {item[1]}
                                </ListItemIcon>
                                <ListItemText
                                    xs={{ color: "text.secondary" }}
                                    primary={t(item[0])}
                                />
                            </ListItem>;
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
                            return <ListItem onClick={() => HandleJump(item[2])} button key={index}>
                                <ListItemIcon>
                                    {item[1]}
                                </ListItemIcon>
                                <ListItemText
                                    xs={{ color: "text.secondary" }}
                                    primary={t(item[0])}
                                />
                            </ListItem>;
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
                            return <ListItem onClick={() => HandleJump(item[2])} button key={index}>
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
                            </ListItem>;
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
                xs={{
                    paddingTop: "10px",
                    paddingBottom: "20px"
                }}
            >
                <Outlet />
            </Container>
        </Box>
        <Typography
            variant="caption"
            style={{
                position: "fixed",
                bottom: "20px",
                left: "20px",
            }}
            color="text.secondary"
        >
            &ensp;Copyright 2021 xcsoft All Rights Reserved.
        </Typography>
    </>;
}

export default Index;