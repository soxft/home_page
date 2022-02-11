import { useTranslation } from "react-i18next";

import {
    Grid,
    Typography,
    Card,
    CardMedia,
} from "@mui/material";

const About = () => {

    const [t] = useTranslation('about');

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
                                maxWidth: '300px',
                            }}
                        >
                            <CardMedia
                                component="img"
                                alt={t('alipay')}
                                image="https://cdn.timeletters.cn/pay/alipay.jpeg"
                            />
                            <Typography
                                variant="h5"
                                component="div"
                                sx={{
                                    padding: '15px',
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
                                maxWidth: '300px',
                            }}
                        >
                            <CardMedia
                                component="img"
                                alt={t('wechat')}
                                image="https://cdn.timeletters.cn/pay/wechat.jpeg"
                            />
                            <Typography
                                variant="h5"
                                component="div"
                                sx={{
                                    padding: '15px',
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