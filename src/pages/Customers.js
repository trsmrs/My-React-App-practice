import { useState, useEffect } from "react"
import axios from 'axios'

import Grid from '@mui/material/Unstable_Grid2';

import CustomersCard from "../components/CustomerCard"


const Customers = () => {
   
    const [customers, setCustomers] = useState([])
    

    useEffect(() => {
        axios.get('https://reqres.in/api/users')
            .then(response => {
                const { data } = response.data
                setCustomers(data)

            })
    }, [])



    return (
        <>
            <h1>Customers</h1>

            <Grid container
            spacing={{ xs: 5, md: 4 }}
            columns={{ xs: 2, sm: 4, md: 6 }}
            margin= '10px'
            display='flex'
            justifyContent="center"
            alignItems='center'
            
            >

                {

                    customers.map(item => (


                        <Grid xs={2}>
                            <CustomersCard
                                name={item.first_name}
                                lastname={item.last_name}
                                email={item.email}
                                avatar={item.avatar}
                            />

                        </Grid>
                    ))
                }
            </Grid>
        </>
    )
}



export default Customers