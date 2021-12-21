import React from "react";

import { Container, Typography } from '@mui/material';

import { Helmet } from "react-helmet";
import { useTranslation } from "react-i18next"

const NotFound = () => {
    const { t } = useTranslation('desc');
    return <>
        <Helmet>
            <title>404 NotFound - {t('title')}</title>
            <meta name="description" content={t('description')} />
        </Helmet>
        <br />
        <Container maxWidth="md">
            <Typography variant="h1" component="div">
                : (
            </Typography>
            <br />
            <Typography variant="h4">
                {t('desc', { 'ns': 'not_found' })}
            </Typography>
        </Container>
    </>;
}

export default NotFound;