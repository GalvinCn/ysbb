import ShowContent from "@components/ShowPage"; 
import Typography from "@mui/material/Typography";
import { Container, Grid } from "@mui/material";
import ClientOnly from "@components/ClientOnly";
import { getPosts, getCategories } from "@lib/api";
import ResponsiveAppBar from "@components/Appbar";


const AboutUsPage = () => {
    return (
      <Container component="section" maxWidth="md" sx={{ mb: 15 }}>
         <ResponsiveAppBar /> 
      <Grid container spacing={3}>
         
        <Grid item xs={12} sm={12}
            container 
            flexDirection="column"
            justifyContent="center" 
            alignItems="center"
            marginTop="1rem"
        >
            <Typography component="h2" variant="h4" textAlign="center" gutterBottom>
                关于我们
            </Typography>
            <Typography variant="subtitle1" color="primary">
                <ClientOnly>
                    <ShowContent pageName = 'aboutus' />
                </ClientOnly>  
            </Typography> 
        </Grid>
        
      </Grid>
    </Container>
    );
  };
  
export default AboutUsPage;

export async function getServerSideProps(ctx) {
  let posts = await getPosts();
  let cats = await getCategories();
  return {
    props: {      
      cats
    }
  }
}