import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

import axios from "axios";

import {
    Typography,
    Card,
    Grid,
    Box,
    Button,
    CardActionArea,
} from "@mui/material";

import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import LinkOutlinedIcon from '@mui/icons-material/LinkOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import CableOutlinedIcon from '@mui/icons-material/CableOutlined';

import Proj from "../component/project";

const Home = () => {

    const [sentense, setSentense] = useState('...'); //一言
    const [t] = useTranslation('home');

    const HandleJump = (url) => window.open(url);

    useEffect(() => {
        axios.get('https://v1.hitokoto.cn')
            .then((response) => setSentense(response['data']['hitokoto']))
            .catch((e) => setSentense(t('request_err')));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const my_project = [
        ['timeletters', 'https://www.timeletters.cn', <EmailOutlinedIcon />],
        ['urlshorter', 'https://github.com/soxft/urlshorter', <LinkOutlinedIcon />],
        ['lovewall', 'https://love.xsot.cn', <FavoriteBorderOutlinedIcon />],
        ['xopenid', 'https://9420.ltd', <CableOutlinedIcon />],
    ]

    return <>
        <Box
            sx={{
                paddingTop: '4rem',
                mx: 'auto',
                width: '100%',
                textAlign: 'center',
            }}
        >
            <Grid
                container
                rowSpacing={10}
                direction="column"
                justifyContent="center"
                alignItems="center"
            >
                <Grid
                    container
                    item
                    xs={24}
                    justifyContent="center"
                    alignItems="center"
                    rowSpacing={3}
                >
                    <Grid
                        item
                    >
                        <Typography
                            variant="h2"
                            color="text.secondary"
                        >
                            XCSOFT
                        </Typography>
                        <Typography
                            variant="caption"
                            color="text.secondary"
                        >
                            {sentense}
                        </Typography>
                    </Grid>
                    <Grid
                        item
                        container
                        justifyContent="center"
                        columnSpacing={{ xs: 1, sm: 2, md: 3 }}
                        rowSpacing={1}
                    >
                        <Grid
                            item
                        >
                            <Button variant="outlined">{t('blog', { 'ns': 'drawer' })}</Button>
                        </Grid>
                        <Grid
                            item
                        >
                            <Button variant="outlined">{t('github', { 'ns': 'drawer' })}</Button>
                        </Grid>
                    </Grid>
                </Grid>
                {/* 我的项目 */}
                <Grid
                    item
                    container
                    direction="row"
                    justifyContent="space-evenly"
                    alignItems="flex-start"
                    rowSpacing={4}
                >
                    <Grid
                        item
                    >
                        <Typography
                            variant="h5"
                            color="#90caf9"
                        >
                            {t('my_proj')}
                        </Typography>
                    </Grid>
                    <Grid
                        item
                        container
                        justifyContent="center"
                        columnSpacing={{ xs: 1, sm: 2, md: 3 }}
                        rowSpacing={3}
                    >
                        {
                            my_project.map((item, index) => {
                                let content = t(item[0]).split(':');
                                return (
                                    <Grid
                                        item
                                        key={index}
                                        xs={12}
                                        sm={6}
                                        md={3}
                                    >
                                        <Card
                                            sx={{
                                                backgroundColor: 'transparent',
                                            }}
                                            elevation={0}
                                        >
                                            <CardActionArea
                                                onClick={() => HandleJump(item[1])}
                                                sx={{
                                                    padding: '5px',
                                                    paddingLeft: '8px',
                                                    paddingRight: '8px',
                                                }}
                                            >
                                                <Proj
                                                    icon={item[2]}
                                                    title={content[0]}
                                                    desc={content[1]}
                                                    url={item[1]}
                                                    key={index}
                                                />

                                            </CardActionArea>
                                        </Card>
                                    </Grid>
                                )
                            })
                        }
                    </Grid>
                </Grid>
            </Grid>
        </Box>
    </>;
}

export default Home;