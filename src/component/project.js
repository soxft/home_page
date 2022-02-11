import {
    Card,
    CardActionArea,
    Grid,
    Typography
} from "@mui/material";

const Proj = (props) => {
    return (
        <Card
            sx={{
                backgroundColor: 'transparent',
                maxWidth: '300px',
                minWidth: '150px',
            }}
            elevation={0}
        >
            <CardActionArea
                onClick={() => window.open(props.url)}
                sx={{
                    paddingTop: '5px',
                    paddingBottom: '5px',
                    paddingLeft: '8px',
                    paddingRight: '8px',
                }}
            >
                <Grid
                    item
                    container
                    alignItems="flex-start"
                    spacing={3}
                >
                    <Grid
                        item
                        sx={{
                            marginTop: '4px',
                            color:"text.secondary",
                        }}
                        xs={2}
                    >
                        {props.icon}
                    </Grid>
                    <Grid
                        item
                        container
                        direction="column"
                        alignItems="flex-start"
                        xs={10}
                    >
                        <Grid
                            container
                            item
                        >
                            <Typography
                                fontSize={23}
                                fontWeight={350}
                                color="text.primary"
                            >
                                {props.title}
                            </Typography>
                        </Grid>
                        <Grid
                            item
                        >
                            <Typography
                                variant="body2"
                                color="text.secondary"
                                align="left"
                            >
                                {props.desc}
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid >
            </CardActionArea>
        </Card>
    );
}

export default Proj;