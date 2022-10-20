import { Grid, Box, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

const BoxView = styled(Box)(({ theme }) => ({
  padding: "5%",
  paddingTop: "0px !important",
  [theme.breakpoints.down("sm")]: {
    paddingLeft: "20px !important",
    paddingRight: "20px !important",
  },
}));

const TextView = styled(Typography)(({ theme, fontWeight }) => ({
  color: "#013773",
  fontWeight: "bold",
  display: "inline",
  fontWeight: fontWeight,
   
  letterSpacing: "0px",
  [theme.breakpoints.down("sm")]: {
    fontSize: "24px",
    lineHeight: "35px",
    width: 150,
  },
  [theme.breakpoints.up("sm")]: {
    fontSize: "34px", // fontWeight === "700" ? "80px" : "65px",
  },
}));

const DivView = styled("div")(({ theme }) => ({
  margin: "20px 0px",
  marginBottom: 10,
  display: "flex",
  justifyContent: "flex-start",
  [theme.breakpoints.down("sm")]: {
    display: "flex",
    justifyContent: "left",
    marginTop:'2rem!important',
  },
}));



const View = styled("div")(({ theme }) => ({
  marginLeft: "auto", display: "flex", justifyContent: "flex-start", marginBottom: 40,
  [theme.breakpoints.down("sm")]: {
    justifyContent: "flex-start", textAlign: "center", marginBottom: 20,
  },
}));

const TypographyView = styled(Typography)(({ theme }) => ({
  fontSize: "16px",
  opacity: ".5",marginBottom:'1rem',
   
  [theme.breakpoints.down("sm")]: {
    fontSize: "14px", textAlign: "left", marginBottom:'0rem', marginTop:'-10px',
  },
  [theme.breakpoints.up("sm")]: {
    width: '50%',
    marginTop:'-12px',
  },
}));


const InnerDivView = styled("div")(({ theme }) => ({
  [theme.breakpoints.down("sm")]: {
    width: 'auto', textAlign: "left", marginTop: "0",
  },
}));

const MainDivView = styled("div")(({ theme }) => ({
  backgroundColor: "#FFF",
  [theme.breakpoints.down("sm")]: {
    marginTop: 0,
  },
}));
const BoxGrid = styled("div")(({ theme }) => ({
   height:'26rem',width:'auto',backgroundColor:'red',borderRadius:'8px',position:'relative',
}));
const BoxBlur = styled("div")(({ theme }) => ({
   height:'10rem',width:'auto',backdropFilter: 'blur(40px)',
   background: 'borderBox',borderRadius:'8px',position:'absolute', marginTop:'-10rem',padding:'10px'
}));
const ImgWrap = styled("img")(({ theme }) => ({
  height:'100%',width:'100%',objectFit:'cover',borderRadius:'8px',

}));

const HeadingWrapper = styled('p')({
    color:'white' ,
    fontSize:'20px',  
    marginBottom:'0.3rem',
    textAlign:'center',
    lineHeight: '1.6',
    letterSpacing: '0.0075em',
    fontWeight: '500'
});

const SubHeadingWrapper = styled('p')({
  color:'white', 
  fontSize:'12.5px', 
  textAlign:'justify', 
  padding:'0.3rem 0', 
  letterSpacing:'1px',
  fontWeight: '400',
});

const heading = () => {
  return (
    <>
      <DivView style={{marginTop:'5rem'}}>
        <InnerDivView>
          <TextView fontWeight="400" component="div">
          The Vetic 
            <TextView fontWeight="700" component="span" sx={{fontSize:{xs:'1.8rem',sm:'45px'}, }}>
           &nbsp;Edge
            </TextView>
          </TextView>
          {/* <Line />{" "} */}
        </InnerDivView>
      </DivView>
      <View style={{}}>
        <TypographyView color="#000000" component="div">
        How Vetic is disrupting pet care
        </TypographyView>
      </View>
    </>
  );
};

const FifthSection = () => {
  const laptopData = [
    {
      heading: "Knowledge Gap ",
      content:
      "Our experienced vets ensure right information is provided from time to time to make the life easier for pet parents. ",
      image: 'https://vetic-img.s3.ap-south-1.amazonaws.com/website/home_page/PAS-1.webp',
      img_alt:'jhb'
    },
    {
      heading: "Convenience ",
      content:
      "Our easy-to-book appointments & tech-enabled clinics ensure pet parents don't  wait long, have access to electronic medical records and get timely reminders.",
      image: 'https://vetic-img.s3.ap-south-1.amazonaws.com/website/home_page/PAS-3.webp',
      img_alt:'jb'
    },

    {
      heading: "Modern Clinics",
      content:
      "Our clinics are designed keeping in mind your pets' needs such as adequate waiting areas, low-friction floors in addition to state of the art medical and diagnostic equipment.",
      image: 'https://vetic-img.s3.ap-south-1.amazonaws.com/website/home_page/PAS-2.webp',
      img_alt:'jgvbj'
    },
    {
      heading: "Personalization",
      content:
      "We believe each pet is unique. We offer customized nutrition and wellness plans based on your pet's age, breed, and health condition.      ",
      image: 'https://vetic-img.s3.ap-south-1.amazonaws.com/website/home_page/Artboard 1.webp',
      img_alt:'mnb'
    },
  
  ];

  

  return (
    <MainDivView>
      <BoxView>
        {heading()}
        <Box sx={{ display: { xs: "none", sm: "flex", md: "flex"} }}>
          <Grid container spacing={2} display="flex" justifyContent= 'center' flexWrap='noWrap' gap='32px'>
            {laptopData.map((value,id) => {
              return (
                  
                   <Box  sx={{display:'flex',flexDirection:'row',gap:'10px'}} key={id}>
                     <BoxGrid>
                      <img src={value.image} alt={value.img_alt} style={{height:'100%',width:'100%', objectFit:'cover',borderRadius:'0.5rem'}}/>
                      <BoxBlur>
                       <HeadingWrapper>{value.heading}</HeadingWrapper>
                        <SubHeadingWrapper>{value.content}</SubHeadingWrapper>
                      </BoxBlur>
                     </BoxGrid>
                   </Box>
              );
            })}{" "}
          </Grid>
        </Box>
        <Box sx={{ display: { xs: "block", sm: "none", md: "none", margin:'0rem' } }}>
          {/* {rightSectionMobileView(mobileViewData)} */}
          <Box sx={{marginTop:'1rem'}} >
            <Box sx={{position:'relative',height:'17rem', width:'100%',}}>
            <img src='https://vetic-img.s3.ap-south-1.amazonaws.com/website/home_page/PAS 3 MOBILE (1).webp' 
           
             alt='one' style={{height:'100%',width:'100%', objectFit:'cover',borderRadius:'0.5rem'}}/>
            <Box sx={{position:'absolute',backdropFilter: ' brightness(0.5)',width: '50%', marginTop:' -17rem',height: '17rem',
               padding: '0.4rem',textAlign: 'center'}}>
              <Typography variant="h6"sx={{color:'white' , fontSize:'16px', marginBottom:'0.3rem'}} >Knowledge Gap</Typography>
                <Typography variant="body2" sx={{color:'white',  fontSize:'14px',textAlign:'left', padding:'0.4rem 6px', letterSpacing:'0.5px',fontFamily:'Work Sans'}}>Our experienced vets ensure right information is provided from time to time to make the life easier for pet parents.</Typography>

            

                {/* <Typography variant="body2" sx={{color:'white',  fontSize:'12px',textAlign:'left', padding:'0.3rem 0', letterSpacing:'0px',fontFamily:'Work Sans'}}>Our experts with modern technology ensure that pets are given best-in-class standardized experience for all their needs like OPDs, Surgeries, Grooming, and nutrition.</Typography> */}
             </Box>
           </Box>
          </Box>
          <Box sx={{marginTop:'1rem'}} >
            <Box sx={{position:'relative',height:'17rem', width:'100%',}}>
            <img src='https://vetic-img.s3.ap-south-1.amazonaws.com/website/home_page/PAS-3.webp'
            alt='one' style={{height:'100%',width:'100%', objectFit:'cover',borderRadius:'0.5rem'}}/>
            <Box sx={{backdropFilter: ' brightness(0.5)',float:'right', width: '50%', marginTop:' -17rem',height: '17rem',
               padding: '0.4rem',textAlign: 'center'}}>

                <Typography variant="h6" sx={{color:'white' , fontSize:'17px', marginBottom:'0.3rem'}}>Convenience </Typography>
                <div style={{color:'white',  fontSize:'14px',textAlign:'left', padding:'0.4rem 6px', letterSpacing:'0.5px',fontFamily:'Work Sans', fontWeight: '400',}} >Our easy-to-book appointments &amp; tech-enabled clinics ensure pet parents don't  wait long, have access to electronic medical records and get timely reminders.</div>

           </Box>
          </Box>
          </Box>
          <Box sx={{marginTop:'1rem'}}>
            <Box sx={{position:'relative',height:'17rem', width:'100%',}}>
            <img src='https://vetic-img.s3.ap-south-1.amazonaws.com/website/home_page/PAS 1 MOBILE.webp'
            alt='one' style={{height:'100%',width:'100%', objectFit:'cover', borderRadius:'0.5rem'}}/>
            <Box sx={{position:'absolute',backdropFilter: ' brightness(0.5)', width: '50%', marginTop:' -17rem',height: '17rem',
               padding: '0.4rem',textAlign: 'center'}}>

                <Typography variant="h6" sx={{color:'white' , fontSize:'16px', marginBottom:'0.3rem'}}> Modern Clinics</Typography>
                <Typography variant="body2" sx={{color:'white',   fontSize:'14px',textAlign:'left', padding:'0.4rem 6px', letterSpacing:'0.5px',fontFamily:'Work Sans'}}>Our clinics are designed keeping in mind your pets' needs such as adequate waiting areas, low-friction floors in addition to state of the art medical and diagnostic equipment.</Typography>

         </Box>
           </Box>
          </Box>
          <Box sx={{marginTop:'1rem'}}>
            <Box sx={{position:'relative',height:'17rem', width:'100%',}}>
            <img src='https://vetic-img.s3.ap-south-1.amazonaws.com/website/home_page/PAS4 MOBILE (2).webp'
            alt='one' style={{height:'100%',width:'100%', objectFit:'cover',borderRadius:'0.5rem'}}/>
            <Box sx={{backdropFilter: ' brightness(0.5)', float:'right', width: '50%', marginTop:' -17rem',height: '17rem',
               padding: '6px',textAlign: 'center'}}>

                <Typography variant="h6" sx={{color:'white' , fontSize:'16px', marginBottom:'0.3rem'}}>Personalization</Typography>
                <Typography variant="body2" sx={{color:'white',   fontSize:'14px',textAlign:'left', padding:'0.4rem 6px', letterSpacing:'0.5px',fontFamily:'Work Sans'}}>We believe each pet is unique. We offer customized nutrition and wellness plans based on your pet's age, breed, and health condition.</Typography>
                                {/* <Typography variant="h6" sx={{color:'white' , fontSize:'1.1rem', marginBottom:'0.3rem'}}>Each pet is Unique</Typography> */}

             
                {/* <Typography variant="body2" sx={{color:'white',  fontSize:'12px',textAlign:'left', padding:'0.3rem 0', letterSpacing:'0px',fontFamily:'Work Sans'}}>We offer tailored pet care plans based on your pet's age, breed, and health condition.</Typography> */}

             </Box>
           </Box>
          </Box>
        </Box>
      </BoxView>
    </MainDivView>
  );
};

export default FifthSection;
