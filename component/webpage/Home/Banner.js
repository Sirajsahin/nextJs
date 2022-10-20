
import { Grid, Box, Typography } from "@mui/material";
// import { img } from 'react-lazy-load-image-component';
// import "./ThirdSection.css";

import { styled } from "@mui/material/styles";

const BoxView = styled(Box)(({ theme }) => ({
  padding: "0 5%",marginTop:'10rem',marginBottom:'0rem',
  [theme.breakpoints.between("sm", "md")]: {
    marginTop: "85px !important",
    paddingBottom: "0px",
    padding: "3%",
  },
  [theme.breakpoints.down("sm")]: {
    paddingBottom: "0rem !important",
    paddingLeft: "20px !important",
    paddingRight: "20px !important",
    marginTop:'7rem',
  },
}));
const BoxVetic = styled('div')(({ theme }) => ({
 display:'flex', marginTop:'1rem', flexDirection: 'row',  gap: '1.5rem',
}));

const GridItemView = styled(Grid)(({ theme, imagesection }) => ({
  paddingBottom: "0px !important",marginTop:'1rem',
  [theme.breakpoints.between("sm", "md")]: {
    paddingLeft: "70px !important",
    paddingTop: "0px !important",
  },
  [theme.breakpoints.down("sm")]: {
    paddingTop: "0px !important",
    marginTop:'0rem',
  },
  [theme.breakpoints.up("sm")]: {
    paddingTop: "0px !important",
  },
  "@media (min-width: 823px) and (max-width: 1368px)": {
    paddingLeft: imagesection === "true" && "77px !important",
  },
}));

const ImageView = styled("img")(({ theme }) => ({
  [theme.breakpoints.down('sm')]:{
    marginBottom:'2.2rem'
  }
}));

const GridView = styled(Grid)(({ theme }) => ({
  [theme.breakpoints.down("sm")]: { },
  [theme.breakpoints.up("sm")]: {
    marginTop: -5,
  },
  [theme.breakpoints.between("sm", "md")]: {
    marginTop: 10,
  },
}));



const DivView = styled("div")(({ theme }) => ({
  display:'flex', flexDirection:'column',justifyContent: 'center', alignItems: 'flex-start',gap: '1rem', 
  [theme.breakpoints.between("sm", "md")]: {
   
  },
  [theme.breakpoints.up("sm")]: {
  
  },
  [theme.breakpoints.down("sm")]: {
    marginTop: '0rem',
  },
}));
const BoxLeftImage = styled("div")(({ theme }) => ({
  marginTop:'2rem',
  [theme.breakpoints.between("sm", "md")]: {
   width:'100%'
  },
  [theme.breakpoints.up("sm")]: {
  },
  [theme.breakpoints.down("sm")]: {
  },
}));

const ParaWrapper = styled('p')({
  // margin: 0;
  //   font-family: "Roboto","Helvetica","Arial",sans-serif;
  //   font-weight: 400;
  //   font-size: 0.875rem;
  //   line-height: 1.43;
  //   letter-spacing: 0.01071em;
  //   color: rgb(119 116 116);
  //   margin-left: 3px;
  //   letter-spacing: 0.5px;
  //   font-size: 16px;

    marginLeft:'3px', 
    letterSpacing:'0.5px',
    fontSize:'16px',
    color:'rgb(119 116 116)'
});

const ParaMobileWrapper = styled('p')({
  letterSpacing:'0.4px',
  fontSize:'14px', 
  color:'rgb(119 116 116)'
});


const laptopViewHeading = () => {
  return (
    <>
        <Box sx={{ display: { xs: "none", sm: "flex", md: "flex" }, marginBottom:'1rem', flexDirection:'column', marginLeft:'14px'}}>
           <Typography sx={{fontSize:'34px', fontWeight:'500', color:"#094d99", }}>  What is <span style={{ marginTop:'-11px'}}><span style={{fontSize:'45px',fontWeight:'700', color:'#034997'}}>Vetic? </span></span></Typography>
           <ParaWrapper>Vetic is India’s first tech-integrated chain of modern clinics to cater to all your pet needs such as wellness, consultations, grooming and nutrition.</ParaWrapper>
        </Box>
    </>
  );
};

const rightSide = () => {
  return [
    {
      image: 'https://vetic-img.s3.ap-south-1.amazonaws.com/website/home_page/Attention.svg',
      heading: " Experienced Vets",
      subHeading: "Our vets are trained in modern treatment & medicine to  provide  top notch care for your pet.",
    },
    {
      image: 'https://vetic-img.s3.ap-south-1.amazonaws.com/website/home_page/Products.svg',
      heading: "Modern Clinics ",
      subHeading: "Our ergonomically designed clinics specifically for pet needs ensure that your loved one feels at home.",
    },
    {
      image: 'https://vetic-img.s3.ap-south-1.amazonaws.com/website/home_page/ExclusiveSavings.svg',
      heading: "Convenience  ",
      subHeading: "Our easy to book appointments and tech integrated clinics ensure smooth customer experience for pet parents.",
    },
  ].map(({ image, subHeading, heading }) => {
    return (
      <GridView
        key={`${subHeading}_${heading}`}
        container
        // spacing={2}
        display="flex"
        justifyContent="center"
        alignItems="center"
        
      >
        <Box  className="boxUpeer" sx={{display: {xs:'none',sm:'flex',md:'flex'},flexDirection:'row', gap:'1.5rem', marginTop:{xs:'1rem',sm:'1rem',md:'2rem'}}}>
         <Box >
          <img src={image} className="vet_img" />
          </Box>
          <DivView >
            <h5 className="headingPara"  style={{ marginBottom:'0',fontSize:'20px', }}>{heading}</h5>
            <p className="textPara" style={{marginTop:'-10px',fontSize:'16px',color:'rgb(119 116 116)',  marginTop:'-5px', letterSpacing:'0.4px',}}>{subHeading}</p>
          </DivView>

        </Box>


             </GridView>
    );
  });
};

// USP Showcasing

const Banner = ({ setScroll,
  isScroll}) => {
    const onClickScroll = () => {
      setScroll(!isScroll);
    };
  return (
    <>
  
    <BoxView >
      <Grid
        container
        spacing={10}
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        <GridItemView item xs={12} sm={6} md={6}>
          <BoxLeftImage sx={{ display: { xs: "none", sm: "flex", md: "flex" }, height:'35rem',width:'98%' }}>
            <img
              src='https://vetic-img.s3.ap-south-1.amazonaws.com/website/home_page/vetic_is_different laptop.webp'
              width="100%"
              height="100%"
              objectFit='cover'
              // borderRadius='12px'
              style={{ borderRadius: 12 }}
              alt="image"
              
            />
          </BoxLeftImage>
          <Box
            sx={{
              display: { xs: "flex", sm: "none", md: "none" },
              flexDirection: "column",
              alignItems: "flexStart",
              margin: "1.5rem 0px 18px 0px",
            }}
          >
            <Typography
              component={"span"}
              
              sx={{fontSize:{xs:'24px',sm:'35px',md:'35px'},marginTop:{xs:'0.6rem'}, }}
              fontWeight="550"
              color="#013773"
            >
              What is
              <Typography
                component={"span"}
                sx={{fontSize:{xs:'33px',sm:'35px',md:'35px', fontWeight:'900', }}}
                fontWeight="bold"
                color="#013773"
                  
                // fontWeight="700"
                style={{ display: "inline", marginLeft: 6 }}
              >
                Vetic?
              </Typography> 
            </Typography>{" "}
            <h1 className='secondSectionTextPara'>Vetic is India’s first tech-integrated chain of modern clinics to cater to all your pet needs such as wellness, consultations, grooming and nutrition.</h1>
              
          </Box>
          <Box sx={{ display: { xs: "flex", sm: "none", md: "none",  } }}>
            <img src='https://vetic-img.s3.ap-south-1.amazonaws.com/website/home_page/vetic_is_different mobile.webp'
             width="100%" height="100%"/> 
          </Box>
        </GridItemView>
        <GridItemView item xs={12} sm={6} md={6} imagesection="true">
          {laptopViewHeading()}
          {rightSide()}
          <Box className="boxUpeer" sx={{ display: {xs:'block',sm:'none',md:'none'},  marginTop: { xs: '2rem', sm: '1rem', md: '1rem' } }}>
                    <BoxVetic >
                      <Box sx={{paddingTop:'2.5rem'}}>
                        <img src='https://vetic-img.s3.ap-south-1.amazonaws.com/website/home_page/Attention.svg' alt="mk" style={{height:'4rem',width:'70px'}}/>
                      </Box>
                      <DivView >
                        <h5 className='headingIcon' style={{ marginBottom: '0', fontSize: '20px', color: 'rgb(18, 18, 18)!important' }}> Experienced Vets</h5>
                        <p className="textPara" >Our vets are trained in modern treatment &amp; medicine to  provide  top notch care for your pet.</p>
                      </DivView>
                     </BoxVetic>
                     <BoxVetic >
                
                      <Box sx={{paddingTop:'2.5rem'}}>
                        <img src='https://vetic-img.s3.ap-south-1.amazonaws.com/website/home_page/Products.svg' alt="fgk"  style={{height:'4rem',width:'70px'}}/>
                      </Box>
                      <DivView >
                        <h5 className='headingIcon' style={{ marginBottom: '0', fontSize: '20px', color: 'rgb(18, 18, 18)!important' }}>Modern Clinics</h5>
                        <p className="textPara" >Our ergonomically designed clinics specifically for pet needs ensure that your loved one feels at home.</p>
                      </DivView>
                      </BoxVetic>
                      <BoxVetic >
                
                      <Box sx={{paddingTop:'2.4rem'}}>
                        <img src='https://vetic-img.s3.ap-south-1.amazonaws.com/website/home_page/ExclusiveSavings.svg' alt="hh"  style={{height:'4rem',width:'70px'}}/>
                      </Box>
                      <DivView >
                        <h5 className='headingIcon' style={{ marginBottom: '0', fontSize: '20px', color: 'rgb(18, 18, 18)!important' }}>Convenience</h5>
                        <p className="textPara">Our easy to book appointments and tech integrated clinics ensure smooth customer experience for pet parents.</p>
                      </DivView>

                    </BoxVetic>
               </Box>
        </GridItemView>
      </Grid>
    </BoxView>
    </>
  );
};

export default Banner;
