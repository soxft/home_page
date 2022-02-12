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

    const payMethod = [
        ['alipay', 'https://qr.alipay.com/fkx15638lyxqs3hlajhdv3c'],
        ['wechat', 'wxp://f2f0TRR_wAwKpE4IBz7oCgrQI5992xfIx5slf5dZtNJN7czxV7cQLdCb-9D-x8xWZX0V'],
        ['paypal', 'https://paypal.me/xcsoft?country.x=C2%26locale.x=zh_XC'],
    ]

    return (
        <>
            <Grid
                container
                rowSpacing={6}
                direction="column"
            >
                <Grid
                    container
                    item
                    rowSpacing={2}
                >
                    <Grid
                        item
                        xs={12}
                    >
                        <Typography
                            fontSize={44}
                            fontWeight={350}
                            color="text.primary"
                        >
                            {t('title')}
                        </Typography>
                    </Grid>
                    <Grid
                        item
                        xs={12}
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
                </Grid>
                <Grid
                    container
                    item
                    xs={24}
                    justifyContent="center"
                    rowSpacing={3}
                >
                    <Grid
                        item
                        xs={12}
                    >
                        <Typography
                            fontSize={34}
                            fontWeight={350}
                            color="text.primary"

                        >
                            {t('sponsor')}
                        </Typography>
                    </Grid>
                    <Grid
                        item
                        container
                        xs={12}
                        rowSpacing={2}
                        columnSpacing={3}
                    >
                        {
                            payMethod.map((item, index) => {
                                return <Grid
                                    key={index}
                                    container
                                    item
                                    xs={12}
                                    sm={4}
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
                                                value={item[1]}
                                                size={160}
                                                bgColor={theme.palette.background.default}
                                                fgColor={theme.palette.text.primary}
                                            />
                                        </CardMedia>
                                        <Typography
                                            component="div"
                                            fontSize={20}
                                            fontWeight={300}
                                            sx={{
                                                paddingTop: '5px',
                                                color: 'text.secondary',
                                            }}
                                        >
                                            {t(item[0])}
                                        </Typography>
                                    </Card>
                                </Grid>
                            })
                        }
                    </Grid>
                </Grid>
            </Grid>
        </>
    )
}

export default About;