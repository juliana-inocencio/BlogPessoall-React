import React, {useState, useEffect, ChangeEvent} from 'react';
import User from '../../models/User';
import { cadastroUsuario } from '../../services/Service'; 
import './CadastroUsuario.css' 
import { Box, Button, Grid, TextField, Typography } from '@material-ui/core';
import { Link, useNavigate} from 'react-router-dom'; 


function CadastroUsuario(){

    let navigate = useNavigate();
    const [confirmarSenha,setConfirmarSenha] = useState<String>("")
    const [usuario, setUsuario] = useState<Usuario>(
        {
            id: 0,
            nome: '',
            usuario: '',
            senha: ''
        })

    const [usuarioResult, setUsuarioResult] = useState<Usuario>(
        {
            id: 0,
            nome: '',
            usuario: '',
            senha: ''
        })

    useEffect(() => {
        if (usuarioResult.id != 0) {
            navigate("/login")
        }
    }, [usuarioResult])


    function confirmarSenhaHandle(event: ChangeEvent<HTMLInputElement>){
        setConfirmarSenha(event.target.value)
    }


    function updateModel(event: ChangeEvent<HTMLInputElement>) {

        setUsuario({
            ...usuario,
            [event.target.name]: event.target.value
        })

    }
    async function onSubmit(event: ChangeEvent<HTMLFormElement>) {
        event.preventDefault()
        if(confirmarSenha == usuario.senha){
        cadastroUsuario(`/usuarios/cadastrar`, usuario, setUsuarioResult)
        alert('Usuario cadastrado com sucesso')
        }else{
            alert('Dados inconsistentes. Favor verificar as informações de cadastro.');
        }
    }


    return(
        <Grid container direction='row' justifyContent='center' alignItems='center'>
            <Grid item xs={6} className='imagem2'></Grid>
            <Grid item xs={6} alignItems='center'>
                    <Box paddingX={10}>
                    <form onSubmit={onSubmit}>
                            <Typography variant='h3' gutterBottom color='textPrimary' component='h3' align='center' className='textos2'>
                                Cadastrar
                            </Typography>
                            <TextField value={usuario.name} onChange={(e:ChangeEvent<HTMLInputElement>) => updateModel(e)} id='nome' label='nome' variant='outlined' name='nome' margin='normal' type='password' fullWidth/>
                            <TextField value={usuario.usuario} onChange={(e:ChangeEvent<HTMLInputElement>) => updateModel(e)} id='usuario' label='usuario' variant='outlined' name='usuario' margin='normal' fullWidth/>
                            <TextField value={usuario.senha} onChange={(e:ChangeEvent<HTMLInputElement>) => updateModel(e)} id='senha' label='senha' variant='outlined' name='senha' margin='normal' type='password' fullWidth/>
                            <TextField value={confirmarSenha} onChange={(e:ChangeEvent<HTMLInputElement>) => confirmarSenhaHandle(e)} id='confirmarSenha' label='confirmarSenha' variant='outlined' name='confirmarSenha' margin='normal' type='password' fullWidth/>
                            <Box marginTop={2} textAlign='center'>
                                <Link to='/login' className='text-decorator-none'>
                                <Button variant='contained' color='primary' className='btnCancelar'>
                                    Cancelar
                                </Button>
                                </Link>
                                <Button type='submit' variant='contained' color='secondary'>
                                    Cadastrar
                                </Button>
                            </Box>
                        </form>
                    </Box>


            </Grid>



        
        </Grid>










    );

}   

export default CadastroUsuario;