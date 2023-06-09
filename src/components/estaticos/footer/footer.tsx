import React from "react";
import { Box, Grid, Typography } from '@mui/material'
import './Footer.css'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import GitHubIcon from "@material-ui/icons/GitHub";
import { useSelector } from "react-redux";
import { TokenState } from "../../../store/tokens/tokenReducer";


function Footer(){
const token = useSelector<TokenState, TokenState["tokens"]>(
  (state) => state.tokens
);  

var footerComponent;

if (token != ""){
  footerComponent = (<Grid
      container
      direction="row"
      justifyContent="center"
      alignItems="center"
    >
      <Grid alignItems="center" item xs={12}>
        <Box className='box1'>
          <Box
            paddingTop={1}
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            <Typography
              variant="h5"
              align="center"
              gutterBottom
              className='textos'
            >
              Siga-nos nas redes sociais{" "}
            </Typography>
          </Box>
          <Box display="flex" alignItems="center" justifyContent="center">
            <a href="https://github.com/juliana-inocencio" target="_blank">
              <GitHubIcon className='redes'/>
            </a>
            
            <a
              href="https://www.linkedin.com/in/juliana-inocencio/"
              target="_blank"
            >
              <LinkedInIcon className='redes'/>
            </a>
          </Box>
        </Box>
        <Box className='box2'>
          <Box paddingTop={1}>
            <Typography
              variant="subtitle2"
              align="center"
              gutterBottom
              className='textos'
            >
              © 2023 Copyright:
            </Typography>
          </Box>
          <Box>
            <a target="_blank" href="https://brasil.generation.org">
              <Typography
                variant="subtitle2"
                gutterBottom
                className='textos'
                align="center"
              >
                brasil.generation.org
              </Typography>
            </a>
          </Box>
        </Box>
      </Grid>
    </Grid>
);

}

  return (
    <>
    {footerComponent}
  </>
  )
  }


export default Footer;
