import { useState } from "react"
import axios from 'axios'

import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

import { teal } from "@mui/material/colors";
import {
    Button,
    Snackbar,
    Stack,
} from "@mui/material";
import MuiAlert from '@mui/material/Alert';
import { useParams } from "react-router-dom";



const CustomersEdit = () => {

    let { id } = useParams() 

    console.log(id) 

    const [form, setForm] = useState({
     

        name: {
            value: '',
            error: false,
        },
        email: {
            value: '',
            error: false,
        },
        job: {
            value: '',
            error: false,
        },


    })


    const [open, setOpen] = useState(false);
    const handleClick = () => {
        setOpen(true);
        clearFields()

    }


    const handleClose = (event, reason) => {
        if (reason === 'click') {
            return;
        }

        setOpen(false);
    }

    const handleInputChange = (e) => {
        const { name, value } = e.target

        setForm({
            ...form,
            [name]: {
                value,

            },

        })
    }

    const handleAddButton = () => {
        let hasError = false
        let newFormState = {
            ...form
        }
        if (!form.name.value) {
            hasError = true
            newFormState.name = {
                value: form.name.value,
                error: true,
                helperText: "Digite o seu Nome"
            }
        }
        if (!form.email.value) {
            newFormState.email = {
                value: form.email.value,
                error: true,
                helperText: "Digite o seu E-mail"
            }
        }
        if (!form.job.value) {
            hasError = true
            newFormState.job = {
                value: form.job.value,
                error: true,
                helperText: "Digite a sua Profissão"
            }
        }
        if (hasError) {

            return setForm(newFormState)
        }

        axios.post('https://reqres.in/api/users', {
            name: form.name.value,
            email: form.email.value,
            job: form.job.value,
        }).then((response) => {
            handleClick()
        })



    }

    const clearFields = () => {
        form.name.value = ""
        form.email.value = ""
        form.job.value = ""
    }


    return (
        <>
            <Box
                component="form"
                sx={{
                    '& > :not(style)': { m: 2, width: '400px', marginLeft: "15%" },
                }}
                noValidate
                autoComplete="off"
            >
                <div>
                    <TextField
                        error={form.name.error}
                        label="Nome"
                        name="name"
                        variant="standard"
                        value={form.name.value}
                        helperText={form.name.error ? form.name.helperText : ''}
                        onChange={handleInputChange} />
                </div>
                <div>
                    <TextField
                        error={form.email.error}
                        label="E-mail"
                        name="email"
                        variant="standard"
                        value={form.email.value}
                        helperText={form.email.error ? form.email.helperText : ''}
                        onChange={handleInputChange} />
                </div>
                <div>
                    <TextField
                        error={form.job.error}
                        label="Profissão"
                        name="job"
                        variant="standard"
                        value={form.job.value}
                        helperText={form.job.error ? form.job.helperText : ''}
                        onChange={handleInputChange} />
                </div>
                <div>
                   <Box> 
                    <Button sx={{ margin: 2, padding: ["5px 10px 0px 10px"] }}
                        variant="contained"
                        color='primary'
                        onClick={() => handleAddButton()}>
                        Salvar
                    
                    </Button>
                    </Box>
                </div>
            </Box>


            <Stack spacing={2} sx={{ width: '100%' }}>
                <Snackbar open={open} autoHideDuration={3000} onClose={handleClose}>
                    <MuiAlert onClose={handleClose} severity="success" sx={{
                        width: '100%',
                        color: teal['900'],
                        backgroundColor: teal['A400']
                    }}>
                        Cadastro Alterado com Sucesso!
                    </MuiAlert>
                </Snackbar>
            </Stack>

        </>
    )
}



export default CustomersEdit



