import { useState, useEffect } from "react"
import axios from 'axios'
import Grid from '@mui/material/Unstable_Grid2';

import CustomersCard from "../components/CustomerCard"
import { useNavigate} from 'react-router-dom'


const Customers = () => {
    const [customers, setCustomers] = useState([])
//    aqui usa o navigate para navegar entre as paginas
    let navigate = useNavigate()
   
      


    useEffect(() => {
        axios.get('https://reqres.in/api/users')
        .then(response => {
            const { data } = response.data
                setCustomers(data)
               
            })
    }, [])

    //  aqui era pra retornar na url a página de editar junto com o id passado
    const handleEditCustomer = (id) =>{
        navigate(`/customers/edit/${id}`)
        
    }

    const handleRemoveCustomer = (id) =>{
        axios.delete(`https://reqres.in/api/users/${id}`)
        .then(() => {
          const newCustomersState = customers.filter(customer => customer.id !==id)
          setCustomers(newCustomersState)
        })
    }


    return (
        <>
        
            <Grid container
                spacing={{ xs: 5, md: 4 }}
                columns={{ xs: 2, sm: 4, md: 6 }}
                margin='10px'
                display='flex'
                justifyContent="center"
                alignItems='center'>

                {
                    customers.map(item => (
                        <Grid xs={2}>
                            <CustomersCard
                                id={item.id}
                                name={item.first_name}
                                lastname={item.last_name}
                                email={item.email}
                                avatar={item.avatar}
                                onRemoveCustomer ={handleRemoveCustomer}
                                onEditCustomer ={handleEditCustomer}
                            />
                        </Grid>
                    ))
                }
            </Grid>
            
        </>
    )
}



export default Customers