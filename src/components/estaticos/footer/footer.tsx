import React from "react";
import { Box, Grid, Typography } from '@mui/material'
import './Footer.css'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import GitHubIcon from "@material-ui/icons/GitHub";

function Footer() {
  return (
    <>
    <Grid
      container
      direction="row"
      justifyContent="center"
      alignItems="center"
    >
      <Grid alignItems="center" item xs={12}>
        <Box style={{ backgroundColor: "black", height: "120px" }}>
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
              style={{ color: "white" }}
            >
              Siga-nos nas redes sociais{" "}
            </Typography>
          </Box>
          <Box display="flex" alignItems="center" justifyContent="center">
            <a href="https://github.com/juliana-inocencio" target="_blank">
              <GitHubIcon style={{ fontSize: 50, color: "white" }} />
            </a>
            
            <a
              href="https://www.linkedin.com/in/juliana-inocencio/"
              target="_blank"
            >
              <LinkedInIcon style={{ fontSize: 60, color: "white" }} />
            </a>
          </Box>
        </Box>
        <Box style={{ backgroundColor: "grey", height: "60px" }}>
          <Box paddingTop={1}>
            <Typography
              variant="subtitle2"
              align="center"
              gutterBottom
              style={{ color: "white" }}
            >
              © 2023 Copyright:
            </Typography>
          </Box>
          <Box>
            <a target="_blank" href="https://brasil.generation.org">
              <Typography
                variant="subtitle2"
                gutterBottom
                style={{ color: "white" }}
                align="center"
              >
                brasil.generation.org
              </Typography>
            </a>
          </Box>
        </Box>
      </Grid>
    </Grid>
  </>
);
}


export default Footer;
