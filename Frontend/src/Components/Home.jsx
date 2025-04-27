import React from 'react'
import { Navigate, Outlet } from 'react-router'
import CustomNavbar from './CustomNavbar'
import { useAuth } from '../Helper/AuthContext'
import { Box,Button,Typography } from '@mui/material';

function Home() {

  const {token} = useAuth();
  if(!token){
    return (
      // <Box padding={5} display={'flex'} flexDirection={'column'} alignItems={'center'} gap={3} height={'100vh'} justifyContent={'center'}>
      //   <Typography variant='h5' alignItems={'center'}>Login Required</Typography>
      //   <Box>
      //     <Button variant='outlined' color='primary'>Login</Button>
      // </Box>
      // </Box>
      <Navigate  to={'/login'} />
    )
  }
  return (
    <div>
      <CustomNavbar />
      <Outlet />
    </div>
  )
}

export default Home
