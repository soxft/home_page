import { useTranslation } from "react-i18next";

import {
    Grid,
    Typography,
    Card,
    CardMedia,
} from "@mui/material";

import QRCode from 'qrcode.react';
import { useTheme } from '@mui/material/styles';

const About = () => {

    const [t] = useTranslation('about');
    const theme = useTheme();

    return (
        <>
            <Grid
                container
                rowSpacing={3}
                direction="column"
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
                >
                    <Typography
                        fontSize={20}
                        fontWeight={350}
                        color="text.secondary"
                        dangerouslySetInnerHTML={{ __html: t('content') }}
                        align="left"
                    >
                    </Typography>
                </Grid>
                <Grid
                    item
                >
                    <Typography
                        fontSize={35}
                        fontWeight={350}
                        color="text.secondary"
                    >
                        {t('sponsor')}
                    </Typography>
                </Grid>
                <Grid
                    item
                    container
                    rowSpacing={3}
                    columnSpacing={3}
                >
                    <Grid
                        container
                        item
                        xs={12}
                        sm={6}
                        justifyContent="center"
                    >
                        <Card
                            sx={{
                                backgroundColor: 'transparent',
                            }}
                            elevation={0}
                        >
                            <CardMedia>
                                <QRCode
                                    value="https://qr.alipay.com/fkx15638lyxqs3hlajhdv3c"
                                    size={250}
                                    bgColor={theme.palette.background.default}
                                    fgColor={theme.palette.text.primary}
                                />
                            </CardMedia>
                            <Typography
                                variant="h5"
                                component="div"
                                sx={{
                                    padding: '10px',
                                }}
                            >
                                {t('alipay')}
                            </Typography>
                        </Card>
                    </Grid>
                    <Grid
                        container
                        item
                        xs={12}
                        sm={6}
                        justifyContent="center"
                    >
                        <Card
                            sx={{
                                backgroundColor: 'transparent',
                            }}
                            elevation={0}
                        >
                            <CardMedia>
                                <QRCode
                                    value="wxp://f2f0TRR_wAwKpE4IBz7oCgrQI5992xfIx5slf5dZtNJN7czxV7cQLdCb-9D-x8xWZX0V"
                                    size={250}
                                    bgColor={theme.palette.background.default}
                                    fgColor={theme.palette.text.primary}
                                />
                            </CardMedia>
                            <Typography
                                variant="h5"
                                component="div"
                                sx={{
                                    padding: '10px',
                                }}
                            >
                                {t('wechat')}
                            </Typography>
                        </Card>
                    </Grid>
                </Grid>
            </Grid>
        </>
    )
}

export default About;