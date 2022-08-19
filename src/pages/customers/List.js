import {
    useState,
    useEffect
} from 'react'
import { makeStyles } from '@material-ui/core/styles'
import CustomerCard from './../../components/CustomerCard' 

import { useHistory } from 'react-router-dom'

import axios from 'axios'
import Grid from '@material-ui/core/Grid'


const useStyles = makeStyles((theme) => ({
    root:{
        flexGrow: 1,
    },
    card:{
        margin: theme.spacing(2),
    },
})) 


const Customers = () => {
    const classes = useStyles()
    const history = useHistory()
    const  [customers, setCustomers]  = useState([])

    useEffect(() => {
        axios.get('https://reqres.in/api/users')
            .then( response => {
            const { data } = response.data

            setCustomers(data)
        })
    }, [])

    
    const handleRemoveCustomer = id => {
        axios.delete(`https://regres.in/api/users/${id}`) 
        .then(() => { 
            const newCustomersState = customers.filter(customer => customer.id !==id)

            setCustomers(newCustomersState)
        })
    }

    const handleEditCustomer = id => {
        history.push(`/customers/edit/${id}`)
    }

    return (
        <>
            <Grid container>
                {
                    customers.map((item, pos) => {
                        return(    
                            <Grid key={pos} item xs={12} md={4}>
                                <CustomerCard
                                    id ={item.id}
                                    name = {item.first_name}
                                    lastname = {item.last_name}
                                    email = {item.email}
                                    avatar = {item.avatar}
                                    className = {classes.card}
                                    onRemoveCustomer = {handleRemoveCustomer}
                                    onEditCustomer = {handleEditCustomer}
                                />  
                            </Grid>
                        )
                    })
                }
            </Grid>
        </>
    )
}

export default Customers