import React, { useState } from "react";
import { Outlet } from 'react-router-dom';

import {
    Menu as MenuIcon,
    MailOutline as MailIcon,
    ChevronLeft as ChevronLeftIcon,
    BookOutlined as BookIcon,
    GitHub as GitHubIcon,
    Code as CodeIcon
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

import { useTranslation } from "react-i18next"

const Index = () => {
    const { t } = useTranslation('drawer');
    const [open, setOpen] = useState(false);

    const HandleJump = (url) => window.open(url);

    return <>
        <AppBar position="fixed" open={open} color="transparent">
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
                sx={{ width: 250 }}
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
                    subheader={
                        <ListSubheader component="div" id="nested-list-subheader">
                            {t('subtitle_mysite')}
                        </ListSubheader>
                    }
                >
                    {
                        [
                            ['blog', <BookIcon />, 'https://blog.xsot.cn'],
                            ['openid', <CodeIcon />, 'https://9420.ltd'],
                            ['timeletters', <MailIcon />, 'https://www.timeletters.cn'],
                        ].map((item, index) => {
                            return <ListItem onClick={() => HandleJump(item[2])} button key={index}>
                                <ListItemIcon>
                                    {item[1]}
                                </ListItemIcon>
                                <ListItemText sx={{ color: 'gray' }} primary={t(item[0])} />
                            </ListItem>;
                        })
                    }
                </List>
                <Divider />
                {/* 找到我 */}
                <List
                    subheader={
                        <ListSubheader component="div" id="nested-list-subheader">
                            {t('subtitle_findme')}
                        </ListSubheader>
                    }
                >
                    {
                        [
                            ['Github', <GitHubIcon />, 'https://github.com/soxft'],
                        ].map((item, index) => {
                            return <ListItem onClick={() => HandleJump(item[2])} button key={index}>
                                <ListItemIcon>
                                    {item[1]}
                                </ListItemIcon>
                                <ListItemText sx={{ color: 'gray' }} primary={t(item[0])} />
                            </ListItem>;
                        })
                    }
                </List>
                <Divider />
                {/* 推荐链接 */}
                <List
                    subheader={
                        <ListSubheader component="div" id="nested-list-subheader">
                            {t('subtitle_suggest')}
                        </ListSubheader>
                    }
                >
                    {
                        [
                            ['泽', "Z", 'https://blog.stzo.cn'],
                            ['源源日记', "Y", 'https://blog.bsot.cn'],
                            ['MDUI', 'M', 'https://mui.com'],
                        ].map((item, index) => {
                            return <ListItem onClick={() => HandleJump(item[2])} button key={index}>
                                <ListItemAvatar>
                                    <Avatar sx={{ bgcolor: "transparent", color: 'gray', width: 28, height: 28 }}>{item[1]}</Avatar>
                                </ListItemAvatar>
                                <ListItemText sx={{ color: 'gray' }} primary={item[0]} />
                            </ListItem>;
                        })
                    }
                </List>
            </Box>
        </Drawer>
        <Container maxWidth="xl" style={{ paddingTop: "10px", paddingBottom: "20px" }}>
            <Outlet />
        </Container>
        <Typography
            variant="caption"
            color="gray"
            style={{ paddingLeft: "20px" }}
        >
            &ensp;Copyright 2021 xcsoft All Rights Reserved.
        </Typography>
    </>;
}

export default Index;