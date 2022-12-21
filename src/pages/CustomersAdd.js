import { useState, useEffect } from "react"
import axios from 'axios'

import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button } from "@mui/material";
import { textAlign } from "@mui/system";

import img from '../customers.jpg'

const CustomersAdd = () => {
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
                helperText : "Digite o seu Nome"
            }
        }
        if (!form.email.value) {
            newFormState.email = {
                value: form.email.value,
                error: true,
                helperText : "Digite o seu E-mail"
            }
        }
        if (!form.job.value) {
           hasError = true
            newFormState.job = {
                value: form.job.value,
                error: true,
                helperText : "Digite o seu Cargo"
            }
        }
        if (hasError) {

            setForm(newFormState)
        }
    }


    return (
        <>
            <Box
                component="form"
                sx={{
                    '& > :not(style)': { m: 2, width: '30ch' },
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
                        helperText= {form.name.error ? form.name.helperText : ''}
                        onChange={handleInputChange} />
                </div>
                <div>
                    <TextField
                        error={form.email.error}
                        label="E-mail"
                        name="email"
                        variant="standard"
                        value={form.email.value}
                        helperText= {form.email.error ? form.email.helperText : ''}
                        onChange={handleInputChange} />
                </div>
                <div>
                    <TextField
                        error={form.job.error}
                        label="Cargo"
                        name="job"
                        variant="standard"
                        value={form.job.value}
                        helperText= {form.job.error ? form.job.helperText: ''}
                        onChange={handleInputChange} />
                </div>
                <div>
                    <Button sx={{ margin: 2, padding: ["5px 10px 0px 10px"] }}
                        variant="contained"
                        color='primary'
                        onClick={() => handleAddButton()}>
                        Cadastrar
                    </Button>
                </div>
            </Box>
        </>
    )
}



export default CustomersAdd