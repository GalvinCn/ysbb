import Grid from "@mui/material/Grid";
import Image from "next/image";
import Typography from "@mui/material/Typography";  
import { ThemeProvider, createMuiTheme, makeStyles } from '@material-ui/styles';
import ArrowDownward from "@mui/icons-material/ArrowDownward";

const useStyles = makeStyles({
  root: {    
    paddingBottom: 16,
    paddingRight: 16,
    marginTop: 16,
    marginLeft: "auto",
    marginRight: "auto", 
    zIndex: 999,    
  }
});

const Hero = ({imgSrc, imgAlt, title, subtitle} ) => {
    const classes = useStyles();
   
    return ( 
        <Grid
            component="section"
            container
            sx={{
                position: `relative`,
                height: "50vh",
                width: `100vw`,
                overflow: `hidden`,
                zIndex: -100,
                mb: 15,
            }}
        >
             <Image src={imgSrc} alt={imgAlt} layout="fill" objectFit="cover" />  
            <Grid
                container
                item
                flexDirection="column"
                justifyContent="center"
                alignItems="center"
                className={classes.root}
                >
                <Typography
                    variant="h1"
                    align="center"
                    gutterBottom
                    sx={{
                    color: "secondary.main",                     
                    fontSize: {
                        lg: 60,
                        md: 55,
                        sm: 50,
                        xs: 45
                      }
                    }}
                >
                    {title}
                </Typography>
                <Typography
                    component="p"
                    variant="h3"
                    align="center"
                    color="common.white"
                    sx={{
                    mb: 10,
                    fontSize: {
                        lg: 45,
                        md: 40,
                        sm: 35,
                        xs: 30
                      }
                    }}
                >
                    {subtitle}
                </Typography>
                
                <ArrowDownward fontSize="large" color="secondary" />
            </Grid>
        </Grid>
        
    );
}
 
export default Hero;