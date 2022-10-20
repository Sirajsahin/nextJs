import React, { useState, useEffect } from "react";
import { styled } from "@mui/material/styles";
// import { makeStyles } from "@mui/styles";
import { Grid, Box, Typography, Paper } from "@mui/material";
// import Form from "../../../component/form";



const TypographyHead = styled("div")(({ theme }) => ({
  fontSize:'55px', fontWeight:'800', color:'rgb(27, 55, 107)',
 [theme.breakpoints.down("sm")]: {
   fontSize:'17px',
   color:'white',
 },
 [theme.breakpoints.up("sm")]: {},
 }));


 const FormView = styled(Paper)(({ theme }) => ({
  borderRadius: 12,float:'right',marginRight:'4.3rem',boxShadow: 'rgb(0 0 0 / 20%) 0px 2px 1px -1px, rgb(0 0 0 / 14%) 0px 1px 1px 0px, rgb(0 0 0 / 12%) 0px 1px 3px 0px',
  padding:'22px',marginTop:'2rem', width:'32%',
  [theme.breakpoints.down("sm")]: {
    padding: '31px 16px',
    // width:'19rem',
  },
  [theme.breakpoints.up("sm")]: {
  
  
   
  },
}));
const DivView = styled("div")(({ theme }) => ({
  height: 200,
  borderRadius: 12,
   
  [theme.breakpoints.down("sm")]: {
   
    height: 200,
   
  },
  [theme.breakpoints.between("xs", "sm")]: {
    position: "absolute",
    top: 0,
    width: 'auto',
  },
  [theme.breakpoints.up("md")]: {
    position: "absolute",
    top: 0,
    right: 0,
    width: '100%',
  },
  "@media (max-width: 599px)": {
    height: "270px !important",
  },
}));
const BoxView = styled(Box)(({ theme }) => ({
  [theme.breakpoints.up("sm")]: {
    width: "100%",
  },
  [theme.breakpoints.down("sm")]: {
    marginTop: -116,
  },
  [theme.breakpoints.up("md")]: {
    marginTop: -90,
  },
  [theme.breakpoints.between("md", "lg")]: {
    marginTop: 0,
  },
}));

const QuestionMobileView = styled("div")(({ theme }) => ({
  
  backgroundColor: "#02C0D8",
  color: "#FFF !important",
  [theme.breakpoints.down("sm")]: {
    height: 'auto',
    padding:'5%',
    marginTop:'0rem',
  },
  [theme.breakpoints.between("sm", "md")]: {
    padding: "5% 0px 5% 5%",
  },
  [theme.breakpoints.up("md")]: {
    padding: "5% 0px 5% 5%", height: 'auto', paddingLeft: "100px !important",
  },
  [theme.breakpoints.between("md", "lg")]: {
    padding: "5% 0px 5% 5%", height: "auto !important",
  },
}));
const BBBox = styled("div")(({ theme }) => ({
  width:'100%',
  [theme.breakpoints.down("sm")]: {
    display:'flex', justifyContent:'center', alignItems:'center',
    
  },
   
  [theme.breakpoints.between("sm", "md")]: {
    display:'flex', justifyContent:'center', flexDirection:'column', width:'100%', gap:'18rem'
  },
  
}));

const GridItemView = styled(Grid)(({ theme }) => ({
  [theme.breakpoints.down("sm")]: {
    paddingLeft: "10px !important",
  },
  [theme.breakpoints.up("sm")]: {
    paddingLeft: "0px !important",
  },
}));

const HeadingText = styled(Typography)(({ theme, weight, inline }) => ({
  
  fontWeight: weight || "500",
  [theme.breakpoints.down("sm")]: {
    fontSize: 22, lineHeight: weight === "700" ? "44px" : "28px", paddingLeft: !inline && 13, display: inline && "inline",
  },
  [theme.breakpoints.up("sm")]: {
    lineHeight: "40px",
    fontSize: weight === "900" ? 34 : 34,
  },
}));

const SubHeadingText = styled('h1')(({ theme }) => ({
 fontWeight: "400", lineHeight: "16px", marginRight:'1rem',
  [theme.breakpoints.down("sm")]: {
    fontSize: 14, paddingLeft: 13, paddingRight: 0, marginTop:15, textAlign: 'left', lineHeight:'22px',
  },
  [theme.breakpoints.up("sm")]: {
    lineHeight: "25px", fontSize: 16, marginRight:'3rem', marginTop:'1rem',
  },
}));

const DivWrapper = styled("div")(({ theme }) => ({
  position: "relative",
  backgroundColor: "#FFF",
  [theme.breakpoints.between("sm", "md")]: {
    marginTop: "-94px !important",
  },
  [theme.breakpoints.down("sm")]: {
    marginTop: 80,
  },
  [theme.breakpoints.up("sm")]: {
    marginTop: 100,
  },
}));


function ForthSection() {
//   const   = useStyles();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [showError, setShowError] = useState(false);

  useEffect(() => {}, [isSubmitted, showError]);

  const text = ''

  const content = () => {
    return (
      <>
      <QuestionMobileView >
        <Grid container spacing={2}>
          <GridItemView item xs={12} sm={12} md={6} lg={7}>
            <HeadingText component="div">
              Make vet approved decisions
              <HeadingText weight="900" component="span" inline="true" sx={{color:'rgb(27, 55, 107)',fontSize:{xs:'26px',sm:'40px!important'}}}>
                {" "}
                Everyday
              </HeadingText>
            </HeadingText>

            <SubHeadingText>
              Take good care of your pets, skip the wait times with prior appointments, get personalized treatment &amp; nutrition, and so much more with Vetic.
            </SubHeadingText>
          </GridItemView>
          <Grid
            item
            xs={12}
            sm={12}
            md={5}
            lg={5}
            style={{ display: "none" }}
          />
        </Grid>
      </QuestionMobileView>
      </>
    );
  };

  return (
    <>
    <DivWrapper id="consultation_form">
      <BoxView>
        <Grid container spacing={2}>
          <Grid
            item
            xs={12}
            sm={12}
            md={12}
            display="flex"
            justifyContent="center"
            alignItems="center"
          ><BBBox>
            <Box sx={{display:{xs:'none',sm:'none',md:'block'}}}>
            <DivView>
                 <FormView>
                   {/* <Form sx={{float:'right'}} /> */}
                 </FormView>
              </DivView> 
            {/* <FormComponent sx={{float:'right'}}/> */}
            </Box>
            {content()}
            </BBBox>
          </Grid>
        </Grid>
      </BoxView>
    </DivWrapper>
    </>
  );
}

export default ForthSection;
