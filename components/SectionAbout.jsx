import { Container, Grid } from "@mui/material";
import Image from "next/image";
import Typography from "@mui/material/Typography";
import MuiNextLink from "@components/MuiNextLink";
import Button from "@mui/material/Button";
import PageName from "./ShowPageMini"; 
import Paper from '@mui/material/Paper';
import ClientOnly from "./ClientOnly";

const SectionAbout = () => {
  return (
    <Container component="section" maxWidth="md" sx={{ mb: 15 }}>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
        <Image
            src="/chef.svg"
            alt="A Chef"
            layout="responsive"
            width={800}
            height={600}
            />
        </Grid>
        <Grid item xs={12} sm={6}
            container 
            flexDirection="column"
            justifyContent="center" 
            alignItems="center"
        >
            <Typography component="h2" variant="h4" textAlign="center" gutterBottom>
                关于我们
            </Typography>
            <Typography variant="subtitle1" color="primary">
                <ClientOnly>
                    <PageName pageName = 'aboutus'  />
                </ClientOnly>    

            </Typography>
            <MuiNextLink href="/about-us">
                <Button variant="outlined" size="large">
                    更多详情
                </Button>
            </MuiNextLink>
        </Grid>
        
      </Grid>
    </Container>
  );
};

export default SectionAbout;