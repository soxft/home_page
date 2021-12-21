import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

import axios from "axios";
import { Box, Typography, Card, CardContent, Button, Grid } from "@mui/material";

const Home = () => {

    const [sentense, setSentense] = useState('...')
    const t = useTranslation('home');

    useEffect(() => {
        axios.get('https://v1.hitokoto.cn')
            .then((response) => setSentense(response['data']['hitokoto']))
            .catch((e) => setSentense(t('request_err')));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return <>
        <Grid container spacing={2}>
            <Card sx={{ opacity: 0.7, }}>
                <CardContent>
                    <Typography
                        variant="h5"
                        component='div'
                    >
                        XCSOFT
                    </Typography>
                    <Typography
                        variant="overline"
                        component='div'
                    >
                        {sentense}
                    </Typography>
                </CardContent>
            </Card>
        </Grid>
    </>;
}

export default Home;