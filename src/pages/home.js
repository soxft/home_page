import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

import axios from "axios";
import { Typography, Card, CardContent, Grid, Divider, List, ListItem, ListItemText } from "@mui/material";

const Home = () => {

    const [sentense, setSentense] = useState('...')
    const [t] = useTranslation('home');

    const HandleJump = (url) => window.open(url);

    useEffect(() => {
        axios.get('https://v1.hitokoto.cn')
            .then((response) => setSentense(response['data']['hitokoto']))
            .catch((e) => setSentense(t('request_err')));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return <>
        <Grid
            container
            spacing={3}
        >
            <Grid item xs={12} id='home_screen'>
                <Card sx={{ opacity: 0.7 }}>
                    <CardContent>
                        <center>
                            <Typography
                                variant="overline"
                                sx={{ fontSize: 20 }}
                            >
                                {t('subtitle', { ns: 'desc' })}
                            </Typography>
                        </center>
                    </CardContent>
                </Card>
            </Grid>
            <Grid item xs={12}>
                <Card sx={{ opacity: 0.7 }}>
                    <CardContent>
                        <Typography
                            variant="h5"
                        >
                            XCSOFT
                        </Typography>
                        <Typography
                            variant="overline"
                        >
                            {sentense}
                        </Typography>
                        <Divider />
                        <br />
                        <Typography
                            variant="body"
                        >
                            <div dangerouslySetInnerHTML={{ __html: t('desc') }}></div>
                        </Typography>
                    </CardContent>
                </Card>
            </Grid>
            <Grid item md={4} xs={12}>
                <Card sx={{ opacity: 0.7 }}>
                    <CardContent>
                        <Typography
                            variant="h5"
                        >
                            {t('my_proj')}
                        </Typography>
                        <Typography
                            variant="caption"
                        >
                            {t('my_proj_desc')}
                        </Typography>
                        <Divider />
                        <br />
                        <List>
                            { // 我的网站
                                [
                                    ['timeletters', 'https://www.timeletters.cn'],
                                    ['urlshorter', 'https://github.com/soxft/urlshorter'],
                                    ['lovewall', 'https://love.xsot.cn'],
                                    ['etc', 'https://github.com/soxft'],
                                ].map((item, index) => {
                                    return <ListItem onClick={() => HandleJump(item[1])} button key={index}>
                                        <ListItemText
                                            //sx={{ color: 'gray' }}
                                            primary={<div dangerouslySetInnerHTML={{ __html: t(item[0]) }}></div>}
                                        />
                                    </ListItem>;
                                })
                            }
                        </List>
                    </CardContent>
                </Card>
            </Grid>
            <Grid item md={4} xs={12}>
                <Card sx={{ opacity: 0.7 }}>
                    <CardContent>
                        <Typography
                            variant="h5"
                        >
                            {t('my_proj')}
                        </Typography>
                        <Typography
                            variant="caption"
                        >
                            {t('my_proj_desc')}
                        </Typography>
                        <Divider />
                        <br />
                        <List>
                            { // 我的网站
                                [
                                    ['timeletters', 'https://www.timeletters.cn'],
                                    ['urlshorter', 'https://github.com/soxft/urlshorter'],
                                    ['lovewall', 'https://love.xsot.cn'],
                                    ['etc', 'https://github.com/soxft'],
                                ].map((item, index) => {
                                    return <ListItem onClick={() => HandleJump(item[1])} button key={index}>
                                        <ListItemText
                                            //sx={{ color: 'gray' }}
                                            primary={<div dangerouslySetInnerHTML={{ __html: t(item[0]) }}></div>}
                                        />
                                    </ListItem>;
                                })
                            }
                        </List>
                    </CardContent>
                </Card>
            </Grid>
        </Grid>
    </>;
}

export default Home;