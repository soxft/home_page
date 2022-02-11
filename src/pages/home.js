import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

import axios from "axios";

import {
    Typography,
    Grid,
    Button,
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
            .catch((e) => setSentense(t('request_err', { 'ns': 'global' })));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const my_project = [
        ['timeletters', 'https://www.timeletters.cn', <EmailOutlinedIcon />],
        ['urlshorter', 'https://github.com/soxft/urlshorter', <LinkOutlinedIcon />],
        ['lovewall', 'https://love.xsot.cn', <FavoriteBorderOutlinedIcon />],
        ['xopenid', 'https://9420.ltd', <CableOutlinedIcon />],
    ]

    return <>
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
                        <Button
                            variant="outlined"
                            onClick={() => HandleJump('https://blog.xsot.cn')}
                        >
                            {t('blog', { 'ns': 'drawer' })}
                        </Button>
                    </Grid>
                    <Grid
                        item
                    >
                        <Button
                            variant="outlined"
                            onClick={() => HandleJump('https://github.com/soxft')}
                        >
                            {t('github', { 'ns': 'drawer' })}
                        </Button>
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
                {/* project list */}
                <Grid
                    item
                    container
                    justifyContent="start"
                    alignItems='left'
                    columnSpacing={{ xs: 1, sm: 2, md: 4 }}
                    rowSpacing={3}
                >
                    {
                        my_project.map((item, index) => {
                            let content = t(item[0]).split(':');
                            return (
                                <Grid
                                    key={index}
                                    item
                                    xs={12}
                                    sm={6}
                                    md={3}
                                    container
                                    justifyContent="center"
                                >
                                    <Proj
                                        icon={item[2]}
                                        title={content[0]}
                                        desc={content[1]}
                                        url={item[1]}
                                    />
                                </Grid>
                            )
                        })
                    }
                </Grid>
            </Grid>
        </Grid>
    </>;
}

export default Home;