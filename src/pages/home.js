import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

import axios from "axios";
import { Typography, Card, CardContent, Grid, Divider, List, ListItem, ListItemText, Skeleton } from "@mui/material";

const Home = () => {

    const [sentense, setSentense] = useState('...'); //一言
    const [blogData, setBlogData] = useState([[], [], [], []]);
    const [weatherData, setWeatherData] = useState(null);

    const [weatherLoad, setWeatherLoad] = useState(true);
    const [blogLoad, setBlogLoad] = useState(true);
    const [t] = useTranslation('home');

    const HandleJump = (url) => window.open(url);

    useEffect(() => {
        axios.get('https://v1.hitokoto.cn')
            .then((response) => setSentense(response['data']['hitokoto']))
            .catch((e) => setSentense(t('request_err')));

        axios.get('https://blog.xsot.cn/api')
            .then((res) => {
                setBlogData(res['data'])
                setBlogLoad(false)
            }).catch((e) => console.log('request_blog_err'));

        axios.get('https://x-api.timeletters.cn/weather/ip')
            .then((res) => {
                if (res['data']['code'] === 0) {
                    setWeatherData(res['data']['data'])
                    setWeatherLoad(false);
                } else {
                    console.log(t('request_err'))
                }
            }).catch((e) => console.log('request_weather_err', e));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return <>
        <Grid
            container
            spacing={3}
        >
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
                        <div style={{ height: '5px' }}></div>
                        <Divider />
                        <br />
                        <Typography
                            variant="body"
                            sx={{ fontSize: 17 }}
                        >
                            <div dangerouslySetInnerHTML={{ __html: t('desc') }}></div>
                        </Typography>
                    </CardContent>
                </Card>
            </Grid>
            <Grid item xs={12}>
                <Card sx={{ opacity: 0.7 }}>
                    <CardContent>
                        { /* 我的项目 */}
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
                        <div style={{ height: '5px' }}></div>
                        <Divider />
                        <List>
                            { // 我的项目
                                [
                                    ['timeletters', 'https://www.timeletters.cn'],
                                    ['urlshorter', 'https://github.com/soxft/urlshorter'],
                                    ['lovewall', 'https://love.xsot.cn'],
                                    ['etc', 'https://github.com/soxft'],
                                ].map((item, index) => {
                                    return (
                                        <ListItem onClick={() => HandleJump(item[1])} button key={index}>
                                            <ListItemText
                                                primary={<div dangerouslySetInnerHTML={{ __html: t(item[0]) }}></div>}
                                            />
                                        </ListItem>
                                    );
                                })
                            }
                        </List>
                    </CardContent>
                </Card >
            </Grid >
            {/* 随机文章 */}
            < Grid item md={6} xs={12} >
                <Card sx={{ opacity: 0.7 }}>
                    <CardContent>
                        <Typography
                            variant="h5"
                        >
                            {t('article')}
                        </Typography>
                        <Typography
                            variant="caption"
                        >
                            {t('article_desc')}
                        </Typography>
                        <div style={{ height: '5px' }}></div>
                        <Divider />
                        <List>
                            {
                                blogData.map((item, index) => {
                                    return (
                                        <ListItem onClick={() => blogLoad ? null : HandleJump(item['url'])} button key={index}>
                                            {
                                                blogLoad ? <Skeleton width="100%" height='32px' variant="text" /> :
                                                    <>
                                                        <ListItemText
                                                            primary={item['title'].length > 20 ? item['title'].substr(0, 20) + '...' : item['title']}
                                                        />
                                                    </>
                                            }
                                        </ListItem>
                                    );
                                })
                            }
                        </List>
                    </CardContent>
                </Card>
            </Grid >
            {/* 天气预报 */}
            < Grid item md={6} xs={12} >
                <Card sx={{ opacity: 0.7 }}>
                    <CardContent>
                        <Typography
                            variant="h5"
                        >
                            {t('weather')}
                        </Typography>
                        {weatherLoad ? <Skeleton width="20%" variant="text" /> :
                            <Typography
                                variant="caption"
                            >
                                {weatherData['location']['location']}
                            </Typography>
                        }
                        <div style={{ height: '5px' }}></div>
                        <Divider />
                        <List>
                            {
                                weatherLoad ? [[], [], [], []].map((item, index) => {
                                    return <ListItem button key={index}>
                                        <Skeleton width="100%" height='32px' variant="text" />
                                    </ListItem>;
                                }) : <>
                                    <ListItem button key={1}>
                                        <ListItemText
                                            primary={t('weather_update') + ': ' + weatherData['update_time']}
                                        />
                                    </ListItem>
                                    <ListItem button key={2}>
                                        <ListItemText
                                            primary={t('weather_temperature') + ': ' + weatherData['weather'][0]['temperature']['low'] + "℃ ~ " + weatherData['weather'][0]['temperature']['high'] + '℃'}
                                        />
                                    </ListItem>
                                    <ListItem button key={3}>
                                        <ListItemText
                                            primary={t('weather_weather') + ': ' + weatherData['weather'][0]['weather']['day'] + ' / ' + weatherData['weather'][0]['weather']['night']}
                                        />
                                    </ListItem>
                                    <ListItem button key={4}>
                                        <ListItemText
                                            primary={t('weather_humidity') + ': ' + weatherData['weather'][0]['rain']['humidity'] + '%'}
                                        />
                                    </ListItem>
                                </>
                            }
                        </List>
                    </CardContent>
                </Card>
            </Grid >
        </Grid >
    </>;
}

export default Home;