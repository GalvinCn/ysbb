import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css' 
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import Hero from '@components/Hero';
import SectionAbout from "@components/SectionAbout";  
import SectionHome from "@components/SectionHome"; 
import SectionImage from "@components/SectionImage";
import SectionReview from "@components/SectionReview";
import ResponsiveAppBar from "@components/Appbar";
import { makeStyles } from "@material-ui/core/styles";



// Outside of functional component
const useStyles = makeStyles({
  button: {
    backgroundColor: 'yellow',
    color: 'black',
    '&:hover': {
      backgroundColor: 'olive',
    },
  },
});



export default function Home() {   
  
  // Inside of functional component
  const classes = useStyles();
  return (
    <div className={styles.container}>       
    <ResponsiveAppBar  />
    <Hero
        imgSrc="http://ysbbwp.datalibstar.com/wp-content/uploads/2022/01/muying.jpg"
        imgAlt="satified woman eating in restaurant"
        title="佑圣宝贝"
        subtitle="尊重、包容、成长、共赢"
      />
      <SectionAbout />
      <SectionImage imgSrc="/fusion-food.jpg" imgAlt="fusion food" />
      <SectionReview  />
      <SectionImage imgSrc="/sushi.jpg" imgAlt="fusion sushi" />
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>
        <Button variant="contained">你好，世界</Button>
        <div className="App">
          <Button variant="contained" color="primary" className={classes.button}>Click me!</Button>
        </div>

        <p className={styles.description}>
          Get started by editing{' '}
          <code className={styles.code}>pages/index.js</code>
        </p>

        <div className={styles.grid}>
          <a href="https://nextjs.org/docs" className={styles.card}>
            <h2>Documentation &rarr;</h2>
            <p>Find in-depth information about Next.js features and API.</p>
          </a>

          <a href="https://nextjs.org/learn" className={styles.card}>
            <h2>Learn &rarr;</h2>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/master/examples"
            className={styles.card}
          >
            <h2>Examples &rarr;</h2>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </a>

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
          >
            <h2>Deploy &rarr;</h2>
            <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}
