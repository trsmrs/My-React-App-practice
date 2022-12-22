import { useState } from "react"

import { TextField, Button, Typography } from "@mui/material"
import { makeStyles } from "@mui/styles"
import { useNavigate } from "react-router-dom"
import useAuth from "../state/Auth"


const useStyles = makeStyles((theme)=>({
    wrapper: {
        margin: theme.spacing(2),
        marginLeft: theme.spacing("15%")
    }
}))


const Login = () =>{
    const classes = useStyles()
    const navigate = useNavigate()


    const [form, setForm] = useState({
        email: '',
        password: '',
    })

    const [isLoading, setIsLoading] = useState(false)
    const { user, setUser} = useAuth()

    const handleInputChange = event =>{
      const {name, value} = event.target

      setForm({
        ...form,
        [name]: value,

      })
    }
    const handleFormSubmit = () =>{
        setIsLoading(true)

       setTimeout(()=>{
            const response = {
                success: true,
                user: {
                    email: form.email
                },

            }

            setUser({
                logged: true,
                email: form.email
            })

            navigate('/')

       },2000) 
    }

    return (
        <>
        
            <Typography sx={{marginTop: 4}} variant="h3">Acesso Restrito</Typography>
            
            <div className={classes.wrapper}>
                <TextField
                  onChange={handleInputChange}
                  label='Digite o seu e-mail'
                  name='email'/>
            </div>

            <div className={classes.wrapper}>
                <TextField
                  onChange={handleInputChange}
                  label='Digite a sua senha'
                  type='password'
                  name='password'/>
            </div>

            <div className={classes.wrapper}>
                <Button variant="contained" color="primary" onClick={handleFormSubmit}>
                  {
                    isLoading ? 'Aguarde...' : 'Entrar'
                  }
                </Button>
            </div>
        </>
    )
}


export default Login