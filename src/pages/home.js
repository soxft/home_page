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

        axios.get('https://blog.xsot.cn/sitemap/api.php')
            .then((res) => {
                setBlogData(res['data'])
                setBlogLoad(false)
            })
            .catch((e) => console.log('request_blog_err'));

        axios.get('https://api.xsot.cn/weather/?ip=true')
            .then((res) => {
                setWeatherData(res['data'])
                setWeatherLoad(false);
            })
            .catch((e) => console.log('request_weather_err'));
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
                        <Divider />
                        <br />
                        <Typography
                            variant="body"
                            sx={{ fontSize: 18 }}
                        >
                            <div dangerouslySetInnerHTML={{ __html: t('desc') }}></div>
                        </Typography>
                        <br />
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
                        <Divider />
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
                                            primary={<div dangerouslySetInnerHTML={{ __html: t(item[0]) }}></div>}
                                        />
                                    </ListItem>;
                                })
                            }
                        </List>
                    </CardContent>
                </Card>
            </Grid>
            {/* 随机文章 */}
            <Grid item md={6} xs={12}>
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
                        <Divider />
                        <List>
                            { // 我的网站
                                blogData.map((item, index) => {
                                    return <ListItem onClick={() => blogLoad ? null : HandleJump(item['url'])} button key={index}>
                                        {
                                            blogLoad ? <Skeleton width="100%" height='32px' variant="text" /> :
                                                <>
                                                    <ListItemText
                                                        primary={item['title'].length > 20 ? item['title'].substr(0, 20) + '...' : item['title']}
                                                    />
                                                </>
                                        }
                                    </ListItem>;
                                })
                            }
                        </List>
                    </CardContent>
                </Card>
            </Grid>
            {/* 天气预报 */}
            <Grid item md={6} xs={12}>
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
                                {weatherData['area']}
                            </Typography>
                        }
                        <Divider />
                        <List>
                            { // 我的网站
                                weatherLoad ? [[], [], [], []].map((item, index) => {
                                    return <ListItem button key={index}>
                                        <Skeleton width="100%" height='32px' variant="text" />
                                    </ListItem>;
                                }) : <>
                                    <ListItem button key={1}>
                                        <ListItemText
                                            primary={t('weather_update') + weatherData['updatetime']}
                                        />
                                    </ListItem>
                                    <ListItem button key={2}>
                                        <ListItemText
                                            primary={weatherData['result']['today']['temp'][0] + "℃ ~ " + weatherData['result']['today']['temp'][1] + '℃'}
                                        />
                                    </ListItem>
                                    <ListItem button key={3}>
                                        <ListItemText
                                            primary={weatherData['result']['today']['weather']}
                                        />
                                    </ListItem>
                                    <ListItem button onClick={() => HandleJump(weatherData['url'])} key={4}>
                                        <ListItemText
                                            primary={t('weather_detail')}
                                        />
                                    </ListItem>
                                </>
                            }
                        </List>
                    </CardContent>
                </Card>
            </Grid>
        </Grid>
    </>;
}

export default Home;