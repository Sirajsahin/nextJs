import * as React from 'react';
import { styled } from "@mui/material/styles";
import {  Button,Box,Grid, Typography } from "@mui/material";
// import { img } from 'react-lazy-load-image-component';
// import './ThirdSection.css'
 const ImgBox = styled("div")(({ theme }) => ({
  height:'29.3rem!important', marginTop:'0.6rem',
    [theme.breakpoints.down("sm")]: {
      width:'auto', height:'auto', margin:' 0 1rem 1rem 1rem'
    },
    [theme.breakpoints.up("sm")]: {
      width:'auto', height:'auto',
    },
  }));
 const ImgBoxMobile = styled("div")(({ theme }) => ({
  height:'auto',width:'auto', marginTop:'0.5rem',
    [theme.breakpoints.down("sm")]: {
      width:'auto', height:'18rem', margin:' 0 0rem 1rem 1rem'
    },
    [theme.breakpoints.up("sm")]: {
      width:'auto',
      height:'auto',
    },
  }));
 const IMGVIEW = styled("div")(({ theme }) => ({
  height:'100%',width:'100%', marginTop:'0.5rem', objectFit:'cover', borderRadius:'0.4rem',

   
  }));
 const ImgBoxLeft = styled("div")(({ theme }) => ({
     width:'50%', margin:'10px 1rem', height: '14.2rem',
    [theme.breakpoints.down("sm")]: {
      height: '100%', width: 'auto', margin: '10px 0 0 1rem',
    },
    [theme.breakpoints.up("md")]: {
     width: '66%', margin: '10px 0 0 1rem',
    },
    [theme.breakpoints.between("sm","md")]: {
      // marginLleft: '2rem!important',
      margin:'1rem 0rem'
    },
  }));


  export default function seventhSection() {


    return (
      <>
      <Box sx={{margin:{xs:'0',sm:'4rem' , md:'0 5rem 3rem 5rem'}}} >
        <Typography variant='h3' sx={{margin:{xs:'2rem 0',md:'3rem 0' },fontSize:{xs:'34px'}, textAlign:'center',color:'#013773', }}>Blog</Typography>
        <Grid  container spacing={0}>
         <Grid sx={6} sm={12} md={6}>
         
          <ImgBox sx={{display:{xs:'none',sm:'block', md:'block', position:'relative'}}}>
          <a href='https://vetic.in/blog/pet-health/healthy-body-weight-importance-in-pets/'>
            <img src='https://vetic-img.s3.ap-south-1.amazonaws.com/website/home_page/blogimg.webp' alt='name'  className='img_blog'/>
          </a>
          <Box className='blogTab' sx={{height:'10.5rem',padding: '0.6rem 1rem',marginTop: '-10.60rem', width:'50%',backdropFilter: ' brightness(0.7)',position:'absolute'}}>
          <Typography  sx={{color:'white', fontSize:'20px',   fontWeight:'bold', textTransform:'capitalize'}}>Importance of healthy body weight of pets</Typography>
          <Typography sx={{color:'white',fontSize:'12px',  marginTop:'5px'}}>What to do if the pet is Underweight or Overweight </Typography>
                   <Button variant="contained" sx={{ textTransform:'capitalize', borderRadius:'0.3rem',background:'rgb(27, 55, 107)', marginTop:'1.3rem'}}>
              <a href="https://vetic.in/blog/" target="_blank" rel="noreferrer" style={{textDecoration:'none',color:'white',}} >Read More</a>
              </Button>
             </Box>
          </ImgBox>
         
          
          <ImgBoxMobile sx={{display:{xs:'block',sm:'none', md:'none',position:'relative'}}}>
             <a href='https://vetic.in/blog/pet-health/healthy-body-weight-importance-in-pets/'>
            <img src=  'https://vetic-img.s3.ap-south-1.amazonaws.com/website/home_page/blog image 1 mobile.webp'
             alt='name' className='img_blog' />
            </a>
            <Box sx={{height:'18rem',padding: '3.5rem 0.7rem',textAlign:'center',marginTop: '-18rem', width:'50%',backdropFilter: ' brightness(0.6)',position:'absolute'}}>
           
            <Typography  sx={{color:'white', fontSize:'16px',   fontWeight:'bold', textTransform:'capitalize'}}>Importance of healthy body weight of pets</Typography>
          <Typography sx={{color:'white',fontSize:'12px',  marginTop:'5px'}}>What to do if the pet is Underweight or Overweight </Typography>
           
              <Button variant="contained" sx={{ textTransform:'capitalize', borderRadius:'0.3rem', marginTop:'0.6rem'}}>
              <a href="https://vetic.in/blog/" target="_blank" rel="noreferrer" style={{textDecoration:'none',color:'white',}} >Read More</a>
              </Button>
             </Box>
          
          </ImgBoxMobile>
          </Grid>
           
  
          
         
  
          <Grid sm={6} md={6}>
          <Box sx={{display:{xs:'none',sm:'block', md:'block',position:'relative'}}}>
          <Box sx={{display:'flex',justifyContent:'spaceBetween',alignItems:'flexStart',}}>
              <ImgBoxLeft>
              <a href='https://vetic.in/blog/pet-parents/a-guide-for-new-pet-parents/'>
              <img src= 'https://vetic-img.s3.ap-south-1.amazonaws.com/website/home_page/blog image 3 laptop.webp' className='img_blog'
               alt='name'/>
              </a>
              </ImgBoxLeft>
              <Box sx={{padding:{xs:'1rem', md:'2rem 1rem'}, width:'60%'}}>
                <Typography  variant='body2'>4 July 2022</Typography>
                <Typography variant='h6' sx={{margin:'0.3rem 0 0.3rem  0',fontSize:'16px',  }}>A Guide for New  Pet Parents</Typography>
                <Typography variant='body2' sx={{marginBottom: {xs:'2rem', md:'0rem', sm:'0rem!important',fontSize:{xs:'12px'}, }}} >Anxiety, uncertainty, and doubts before getting a pet are normal....</Typography>
               </Box>
          </Box>
  
          <Box sx={{display:'flex',justifyContent:'spaceBetween',alignItems:'flexStart',}}>
             
          <ImgBoxLeft sx={{height:'100%'}}>
            <a href='https://vetic.in/blog/pet-parents/a-guide-for-new-pet-parents/'>
              <img src='https://vetic-img.s3.ap-south-1.amazonaws.com/website/home_page/blog image 2 laptop.webp'className='img_blog'
               alt='name'   />
              </a>
              </ImgBoxLeft>
              <Box sx={{padding:{xs:'1rem', md:'2rem 1rem'}, width:'60%'}}>
                <Typography  variant='body2'>3 October 2022</Typography>
                <Typography variant='h6' sx={{margin:'0.7rem 0',fontSize:'16px'}}>Importance of healthy body weight of pets</Typography>
                <Typography variant='body2' sx={{marginBottom: {xs:'2rem', md:'0rem', sm:'0rem!important',fontSize:{xs:'12px'}, }}} >What to do if the pet is Underweight or Overweight...</Typography>
               </Box>
  
            </Box>
           
         </Box>
  
         </Grid>
  
  
  
  
  
         </Grid>
         <Box sx={{display:{xs:'block',sm:'none', md:'none',position:'relative'}}}>
          <Box sx={{display:'flex',justifyContent:'spaceBetween',alignItems:'flexStart',}}>
               <ImgBoxLeft>
               <a href='https://vetic.in/blog/pet-parents/a-guide-for-new-pet-parents/'>
               <img src='https://vetic-img.s3.ap-south-1.amazonaws.com/website/home_page/blog image 3 laptop.webp' 
               alt='name' style={{height:'100%',width:'100%', objectFit:'cover', borderRadius:'0.5rem'}} />
              </a>
              </ImgBoxLeft>
              <Box sx={{padding:{xs:'0rem 1rem', md:'2rem 1rem'},width:'92%'}}>
                <Typography  variant='body1' sx={{ fontSize:'10px',marginTop:'20px'}}>24 July 2022</Typography>
                <Typography variant='h6' sx={{margin:'0rem 0', fontSize:'14px' }}>A Guide for new  Pet Parents</Typography>
                <Typography variant='body2' sx={{marginBottom: {xs:'2rem', md:'0rem', sm:'0rem!important',fontSize:{xs:'12px'}, }}} >Anxiety, uncertainty, and doubts ...</Typography>
               </Box>
          </Box>
  
          <Box sx={{display:'flex',justifyContent:'spaceBetween',alignItems:'flexStart',}}>
          <ImgBoxLeft>
          <a href='https://vetic.in/blog/pet-parents/a-guide-for-new-pet-parents/'>
              <img src='https://vetic-img.s3.ap-south-1.amazonaws.com/website/home_page/blog image 2 laptop.webp'
              alt='name' style={{height:'100%',width:'100%',marginTop:'0rem', objectFit:'cover', borderRadius:'0.5rem'}} />
              </a>
              </ImgBoxLeft>
              <Box sx={{padding:{xs:'0rem 1rem', md:'2rem 1rem'}, width:'93%'}}>
                <Typography  variant='body1' sx={{ fontSize:'10px', marginTop:'20px'}}>15 August 2022</Typography>
                <Typography variant='h6' sx={{margin:'0rem 0', fontSize:'14px' }}>Importance of healthy body weight of pets</Typography>
                <Typography variant='body2' sx={{fontSize:'12px', }} >What to do if the pet is Underweight ...</Typography>
               </Box>
  
            </Box>
           
         </Box>
         
       </Box>
      </>
    )
  }