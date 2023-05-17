import React from 'react';
import { Grid, Typography, Button,  } from "@material-ui/core";
import { Box } from "@mui/material";
import './Home.css';

function Home(){
    return(
        <> 
           <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
          className='caixa'
        >
          <Grid alignItems="center" item xs={6}>
            <Box paddingX={20}>
              <Typography
                variant="h4"
                gutterBottom
                color="textPrimary"
                component="h4"
                align="center"
                className='titulo'
              >
                Seja bem vindo(a)!
              </Typography>
              <Typography
                variant="h6"
                gutterBottom
                color="textPrimary"
                component="h6"
                align="center"
                className='titulo'
              >
                expresse aqui os seus pensamentos e opiniões!
              </Typography>
            </Box>
            <Box display="flex" justifyContent="center">
              <Box marginRight={1}></Box>
              <Button
                variant="contained" 
                className='botao'
              >
                Ver Postagens
              </Button>
            </Box>
          </Grid>
          <Grid item xs={5} style={{ margin: "10px" }}>
            <img
              src="https://i.imgur.com/7U5Qpii.jpeg"
              alt=""
              width="600px"
              height="400px"
            />
          </Grid>
          <Grid xs={12} className='postagens'></Grid>
        </Grid>
      </>
    
    );
}

export default Home; 
