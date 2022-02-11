import { useState, useEffect } from 'react';
import axios from "axios";

import { useTranslation } from "react-i18next";

import {
    Grid,
    Typography,
} from "@mui/material";

const About = () => {
    const [repos, setRepos] = useState([]);
    const [loading, setLoading] = useState(true);
    const [t] = useTranslation('about');
    useEffect(() => {
        axios.get('https://api.github.com/users/soxft/repos').then(res => {
            setRepos(res.data);
            console.log(res.data);
        }).catch(err => {
            console.log(err);
        }).finally(() => {
            setLoading(false);
        });
    }, [])


    return (
        <>
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
                            variant="h3"
                            color="text.secondary"
                        >
                            {t('title')}
                        </Typography>
                    </Grid>
                </Grid>
            </Grid>
        </>
    )
}

export default About;