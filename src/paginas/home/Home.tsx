  import React, { useEffect } from 'react';
  import { Grid, Typography, Button,  } from "@material-ui/core";
  import { Box } from "@mui/material";
  import './Home.css';
  import TabPostagem from '../../components/postagens/tabpostagem/TabPostagem';
import { Link, useNavigate } from 'react-router-dom';
import useLocalStorage from 'react-use-localstorage';
import ModalPostagem from '../../components/postagens/modalPostagem/ModalPostagem';
import { useSelector } from 'react-redux';
import { TokenState } from '../../store/tokens/tokenReducer';
import { toast } from 'react-toastify';

  function Home(){

    let navigate = useNavigate();
    const token = useSelector<TokenState, TokenState["tokens"]>(
      (state) => state.tokens
    );
    
    useEffect(() => {
      if (token == "") {

          toast.error('Você precisa estar logado',{
            position:"top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: false,
            theme: "colored",
            progress: undefined,
        });
          navigate("/login")
  
      }
  }, [token])
    
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
                  color="inherit"
                  component="h6"
                  align="center"
                  className='titulo'
                >
                  expresse aqui os seus pensamentos e opiniões!
                </Typography>
              </Box>
              <Box display="flex" justifyContent="center">
                <Box marginRight={1}>
                <ModalPostagem />
                </Box>
                <Link to="/posts" className="text-decorator-none"></Link>
                <Button
                  variant="contained" 
                  className="botao"
                >
                  Ver Postagens
                </Button>
              </Box>
            </Grid>
            <Grid item xs={5} style={{ margin: "10px" }}>
              <img
                src="https://c4.wallpaperflare.com/wallpaper/410/867/750/vector-forest-sunset-forest-sunset-forest-wallpaper-preview.jpg"
                alt=""
                width="600px"
                height="400px"
              />
            </Grid>
            <Grid xs={12} className='postagens'>
              <TabPostagem />
            </Grid>
          </Grid>
        </>
      
      );
  }

  export default Home; 
