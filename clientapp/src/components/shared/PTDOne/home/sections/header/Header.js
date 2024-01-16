import { Facebook, GitHub, Grade, Instagram, LinkedIn, Send, Twitter } from "@mui/icons-material";
import { AppBar, Grid, MenuItem, Toolbar, Typography,Button } from "@mui/material";

const styles = {
  appBar: {
    backgroundColor: "#ffffff",
    boxShadow: "none",
    borderRadius: "10px",
    height:"60px"
  },
  toolbar:{
    "&": {
        minHeight: "60px",
      },
  }
};

function Header() {
  return (
    <AppBar position="static" sx={styles.appBar}>
      <Toolbar sx={styles.toolbar}>
        <Grid container>
            <Grid item xs='6' container justifyContent={'start'}>
        {["home", "resume", "blog", "contact"].map((nav) => (
        //   <MenuItem sx={{":hover":{boxShadow:"none"},height:"fit-content"}}>
            <Grid item px={2}>
            <Typography
              color={"#000"}
              sx={{
                fontSize: "14px",
                textTransform: "uppercase",
                lineHeight: "73px",
                fontWeight: "bold",
                cursor:"pointer",
                ":hover":{
                    color:"#ffb100"
                }
              }}
            >
              {nav}
            </Typography>
            </Grid>
        //   </MenuItem>
        ))}
            </Grid>
            <Grid item xs='4' spacing={1} container justifyContent={'end'} alignContent={'center'}>
                <Grid item>
                    <Instagram sx={{color:"#000"}} fontSize="small"  />
                </Grid>
                <Grid item>
                    <Twitter sx={{color:"#000"}} fontSize="small" />
                </Grid>
                <Grid item>
                    <GitHub sx={{color:"#000"}} fontSize="small" />
                </Grid>
                <Grid item>
                    <LinkedIn sx={{color:"#000"}} fontSize="small" />
                </Grid>
            </Grid>
            <Grid item xs='2' pl={2} container justifyContent={'end'} alignContent={'center'}>
              <Button  variant="contained"
              sx={{
                background:"#ffb100",
                borderRadius:"20px",
                boxShadow:"none",
                ":hover":{background:"#ffb100"}
              }}
              endIcon={<Send />}
              >
                <Typography
                sx={{
                    color:"#000",
                    textTransform:"capitalize",
                    fontWeight:"600"
                }}
                >hire me</Typography>
              </Button>
            </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
