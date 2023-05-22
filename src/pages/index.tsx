import { Typography } from '@mui/material';
import { NextPage } from 'next';
import { Roboto } from 'next/font/google';

// const roboto = Roboto({
//   weight: ['400', '700'],
//   style: ['normal', 'italic'],
//   subsets: ['latin'],
//   display: 'swap',
// });

const Home: NextPage = () => {
  return (
    <>
      <Typography variant='h1' color='primary'>Hola Mundo</Typography>
    </>
  )
}

export default Home;
