import * as React from 'react'
import { useState } from 'react'
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import { makeStyles } from '@material-ui/core/styles'
import axios from 'axios'

import Toasty from '../../components/Toasty'

const useStyles = makeStyles((theme) =>({
    wrapper: {
        margin: theme.spacing(3)
    },
}))

const CustomersRegister = () => {
    
    const classes = useStyles()

    const [ form, setForm ] = useState({
        name: {
            value: '',
            error: false,
        },
        job: {
            value: '',
            error: false,
        },
    })

    const [ openToasty, setOpenToasty ] = useState(false)

    const [ loading, setLoading ] = useState(false)

    const handleInputChange = (e) => {
        const {name, value} = e.target

        setForm({
            ...form,
            [name]: {
                value,
            },
        })
    }
    
    const handleRegisterButton = () => {
        
        setLoading(true)
        let hasError = false
        let newFormState = {
            ...form,
        }
        if (!form.name.value) {
            hasError = true

           newFormState.name = {
            value: form.name.value,
            error: true,
            helperText: 'Digite o nome corretamente'
           }
        }
        if (!form.job.value) {
            hasError = true

            newFormState.job = {
                value: form.job.value,
                error: true,
                helperText: 'Digite um cargo'
               }
        }

        if (hasError){
            return setForm(newFormState)
        }

        axios.post('https://reqres.in/api/users', {
            name: form.name.value,
            job: form.job.value,
        }).then((response) => {
            setLoading(false)
            setOpenToasty(true)
        })
    }



    return(
        <>
            <Box
                component="form"
                sx={{
                    '& > :not(style)': { m: 1, width: '25ch' },
                }}
                noValidate
                autoComplete="off"
            ></Box>
            <div className={classes.wrapper}>
                <TextField 
                    error={form.name.error}
                    helperText={form.name.error ? form.name.helperText : ''}
                    id="outlined-basic" 
                    label="Digite seu nome" 
                    name="name" 
                    value={form.name.value} 
                    onChange={handleInputChange} 
                    variant="outlined" 
                />
            </div>
            <div className={classes.wrapper}>
                <TextField
                    error={form.job.error} 
                    helperText={form.job.error ? form.job.helperText : ''}
                    id="outlined-basic" 
                    label="Digite seu cargo" 
                    name="job" value={form.job.value} 
                    onChange={handleInputChange} 
                    variant="outlined" 
                />
            </div>
            <div className={classes.wrapper}>
                <Button variant="contained" color='primary' onClick={handleRegisterButton} disabled={loading}>
                    {
                        loading ? 'Aguarde...' : 'Cadastrar'
                    }
                </Button>
            </div>
            <Toasty onClose={() => setOpenToasty(false) } open={openToasty} severity="success" message="Cadastro realizado"/>
        </>
    )
}


export default CustomersRegister