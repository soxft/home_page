import {
    Grid,
    Typography
} from "@mui/material";

const Proj = (props) => {
    return (
        <Grid
            container
            direction="row"
            alignItems="flex-start"
            spacing={2}
        >
            <Grid
                item
                sx={{
                    marginTop: '4px',
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
                    item
                >
                    <Typography
                        variant="h5"
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
                        color="text.primary"
                        align="left"
                    >
                        {props.desc}
                    </Typography>
                </Grid>
            </Grid>
        </Grid>);
}

export default Proj;