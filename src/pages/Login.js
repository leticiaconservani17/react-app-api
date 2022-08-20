import { useState } from "react"
import { 
    makeStyles 
} from "@material-ui/core/styles"

import { 
    TextField, 
    Button, 
    Typography 
} from "@material-ui/core"

import UseAuth from '../state/Auth'
import { useHistory } from "react-router-dom"

const useStyles = makeStyles((theme) => ({
    wrapper: {
        margin: theme.spacing(3),
    }
}))

const Login = () => {
    const history = useHistory()
    const classes = useStyles()

    const [ form, setForm ] = useState({
        email: '',
        password: '',
    })

    const [ isLoading,setIsLoading ] = useState(false)
    const { user, setUser } = UseAuth()

    const handleInputChange = e => {
        const { name, value } = e.target

        setForm({
            ...form,
            [name]: value,
        })
    }

    const handleFormSubmit = () => {
        setIsLoading(true)
        setTimeout(() => {
            const response = {
                success: true,
                user: {
                    email: form.email
                }
            }

            setUser({
                logged: true,
                email: form.email,
            })

            history.push('/')
        }, 4000)
    }

    return(
        <>
            <Typography variant="h3">Acesso restrito</Typography>

            <div className={classes.wrapper}>
                <TextField
                    onChange={handleInputChange}
                    label= "Digite seu email"
                    name= "email"
                />
            </div>
            <div className={classes.wrapper}>
                <TextField
                    onChange={handleInputChange}
                    label= "Digite sua senha"
                    name= "password"
                    type= "password"
                />
            </div>
            <div className={classes.wrapper}>
                <Button variant="contained" color="primary" onClick={handleFormSubmit}>
                   {
                    isLoading  ? 'Aguarde...' : 'Entrar'
                   }
                </Button>
            </div>
        </>
    )
}

export default Login