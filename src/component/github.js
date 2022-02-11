import {
    Card,
    CardActionArea,
    Grid,
    Typography
} from "@mui/material";

import AccountTreeOutlinedIcon from '@mui/icons-material/AccountTreeOutlined';
import StarOutlinedIcon from '@mui/icons-material/StarOutlined';

const Github = (props) => {
    return (
        <Card
            elevation={0}
            sx={{
                backgroundColor: 'transparent',
                maxWidth: '300px',
                minWidth: '250px',
            }}
        >
            <CardActionArea
                onClick={() => window.open(props.url)}
                sx={{
                    paddingTop: '10px',
                    paddingBottom: '8px',
                    paddingLeft: '8px',
                    paddingRight: '8px',
                }}
            >
                <Grid
                    item
                    container
                    direction="column"
                    rowSpacing={0.5}
                >
                    {/* name */}
                    <Grid
                        item
                    >
                        <Typography
                            fontSize={23}
                            fontWeight={400}
                            color="text.secondary"
                        >
                            {props.name}
                        </Typography>
                    </Grid>
                    {/* star / fork */}
                    <Grid
                        container
                        item
                        justifyContent="center"
                        spacing={0.5}
                    >
                        <Grid
                            item
                        >
                            <Grid
                                container
                                spacing={0.3}
                            >
                                <Grid
                                    item
                                >
                                    <StarOutlinedIcon
                                        opacity={0.4}
                                        sx={{
                                            fontSize: '15px',
                                        }}
                                    />
                                </Grid>
                                <Grid
                                    item
                                >
                                    <Typography
                                        fontSize={10}
                                        fontWeight={200}
                                        color="text.secondary"
                                    >
                                        {props.star} stars
                                    </Typography>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid
                            item
                        >
                            <Typography
                                fontSize={10}
                                fontWeight={200}
                                color="text.secondary"
                            >
                                /
                            </Typography>
                        </Grid>
                        <Grid
                            item
                        >
                            <Grid
                                container
                                spacing={0.3}
                            >
                                <Grid
                                    item
                                >
                                    <AccountTreeOutlinedIcon
                                        opacity={0.4}
                                        sx={{
                                            fontSize: '15px',
                                        }}
                                    />
                                </Grid>
                                <Grid
                                    item
                                >
                                    <Typography
                                        fontSize={10}
                                        fontWeight={200}
                                        color="text.secondary"
                                    >
                                        {props.fork} forks
                                    </Typography>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                    {/* desc */}
                    <Grid
                        item
                    >
                        <Typography
                            fontSize={12}
                            fontWeight={200}
                            color="text.secondary"
                            flexWrap={'wrap'}
                        >
                            {props.desc}
                        </Typography>
                    </Grid>
                    {/* language */}
                    <Grid
                        container
                        item
                        justifyContent="right"
                    >
                        <Typography
                            fontSize={15}
                            fontWeight={200}
                            color="text.secondary"
                        >
                            {props.language}
                        </Typography>
                    </Grid>
                </Grid>
            </CardActionArea>
        </Card>
    );
}

export default Github;