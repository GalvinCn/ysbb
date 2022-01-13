import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import Hero from "@components/Hero";
import SectionAbout from "@components/SectionAbout";
import SectionHome from "@components/SectionHome";
import SectionImage from "@components/SectionImage";
import SectionReview from "@components/SectionReview";
import ResponsiveAppBar from "@components/Appbar";
import { makeStyles } from "@material-ui/core/styles";
import Footer from "@components/Footer"


// Outside of functional component
const useStyles = makeStyles({
  button: {
    backgroundColor: "yellow",
    color: "black",
    "&:hover": {
      backgroundColor: "olive",
    },
  },
});

export default function Home() {
  // Inside of functional component
  const classes = useStyles();
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <ResponsiveAppBar />
        <Hero
          imgSrc="http://ysbbwp.datalibstar.com/wp-content/uploads/2022/01/muying.jpg"
          imgAlt="satified woman eating in restaurant"
          title="佑圣宝贝"
          subtitle="尊重、包容、成长、共赢"
        />
        <SectionAbout />
        <SectionImage imgSrc="/fusion-food.jpg" imgAlt="fusion food" />
        <SectionReview />
        <SectionImage imgSrc="/sushi.jpg" imgAlt="fusion sushi" />
        <Head>
          <title> 佑圣宝贝月子会所 </title>{" "}
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
      </main> 
     <Footer />
      
    </div>
  );
}
