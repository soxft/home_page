import {
    Grid,
    Typography
} from "@mui/material";

const Proj = (props) => {
    return (
        <Grid
            item
            container
            direction="row"
            justifyContent="flex-start"
            alignItems="flex-start"
        >
            <Grid
                item
            >
                {props.icon}
            </Grid>
            <Grid
                item
                container
                direction="column"
                justifyContent="flex-start"
                xs={12}
                sm
            >
                <Grid
                    item
                    rowSpacing={2}
                    xs
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
                    xs
                >
                    <Typography
                        variant="body1"
                        color="text.primary"
                    >
                        {props.desc}
                    </Typography>
                </Grid>
            </Grid>
        </Grid>);
}

export default Proj;