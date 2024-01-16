import { Grid } from "@mui/material";
import Header from "./sections/header/Header";
import Headline from "./sections/headline/Headline";

function Home(){
    return (
        <Grid container sx={{marginY:"50px",paddingX:"50px"}}>
            <Grid item container xs='4'>
                <Headline />
            </Grid>
            <Grid item container xs='8'>
                <Header />
            </Grid>
        </Grid>
    )
}

export default Home;