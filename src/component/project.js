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
                minWidth: '250px',
            }}
            elevation={0}
        >
            <CardActionArea
                onClick={() => window.open(props.url)}
                sx={{
                    padding: '5px',
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
                        }}
                        sm={2}
                    >
                        {props.icon}
                    </Grid>
                    <Grid
                        item
                        container
                        direction="column"
                        alignItems="flex-start"
                        sm={10}
                    >
                        <Grid
                            item
                        >
                            <Typography
                                fontSize={25}
                                fontWeight={400}
                                color="text.primary"
                                align="left"
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