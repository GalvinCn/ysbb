import ShowContent from "@components/ShowPage"; 
import Typography from "@mui/material/Typography";
import { Container, Grid } from "@mui/material";
import ClientOnly from "@components/ClientOnly";
import { getPosts, getCategories } from "@lib/api";
import ResponsiveAppBar from "@components/Appbar";
import Footer from "@components/Footer"
import Dashboard  from "@components/Dashboard/Dashboard";


const dashboard = () => {
    return (
      <Container component="section" maxWidth="md" sx={{ mb: 15 }}>
          
      <Grid container spacing={3}>
         
        <Grid item xs={12} sm={12}
            container 
            flexDirection="column"
            justifyContent="center" 
            alignItems="center"
            marginTop="1rem"
        >
           <Dashboard />
        </Grid>
        
      </Grid>
      
    </Container>
    );
  };
  
export default dashboard;

