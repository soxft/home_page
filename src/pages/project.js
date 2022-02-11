import { useState, useEffect } from 'react';
import axios from "axios";

import { useTranslation } from "react-i18next";

import {
    Grid,
    Typography,
    Skeleton,
    Snackbar,
    Alert,
} from "@mui/material";

import Github from "../component/github";

const Project = () => {
    const [err, setErr] = useState(false);
    const [repos, setRepos] = useState([]);
    const [loading, setLoading] = useState(true);
    const [t] = useTranslation('project');

    useEffect(() => {
        axios.get('https://api.github.com/users/soxft/repos').then(res => {
            setRepos(res.data);
        }).catch(_ => {
            setErr(true);
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
                            fontSize={44}
                            fontWeight={350}
                            color="text.secondary"
                        >
                            {t('title')}
                        </Typography>
                    </Grid>
                    <Grid
                        item
                        container
                        justifyContent="center"
                        alignItems='center'
                        columnSpacing={{ xs: 1, sm: 2, md: 4 }}
                        rowSpacing={3}
                    >
                        {
                            loading ?
                                [[], [], [], []].map((item, index) => {
                                    return (
                                        <Grid
                                            key={index}
                                            item
                                            xs={12}
                                            sm={6}
                                            container
                                            justifyContent="center"
                                        >
                                            <Skeleton
                                                animation="wave"
                                                width={250}
                                                height={80}
                                            />
                                        </Grid>
                                    );
                                })
                                :
                                repos.map((repo, index) => {
                                    return <Grid
                                        key={index}
                                        item
                                        xs={12}
                                        sm={6}
                                        container
                                        justifyContent="center"
                                    >
                                        <Github
                                            name={repo.name}
                                            star={repo.stargazers_count}
                                            fork={repo.forks_count}
                                            desc={repo.description}
                                            url={repo.html_url}
                                            language={repo.language}
                                        />
                                    </Grid>
                                })
                        }

                    </Grid>
                </Grid>
            </Grid>
            {/* snackbar */}
            <Snackbar
                open={err}
                autoHideDuration={6000}
                onClose={(_, __) => setErr(false)}
                anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
            >
                <Alert severity="error" sx={{ width: '100%' }}>
                    {t('request_err', { 'ns': 'global' })}
                </Alert>
            </Snackbar>
        </>
    )
}

export default Project;