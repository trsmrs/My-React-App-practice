import {Container} from '@mui/material'

import Header from "../partials/Header/Header"


import { makeStyles } from '@mui/styles'
import { blue } from '@mui/material/colors'


const useStyles = makeStyles(()=>({
    container: {
        padding: '10px  0',
        
    }
}))


const Default = ({children}) => {
    const classes = useStyles()
    return(
        <>
        <Header />
        <Container className={classes.container}>
        {children}
        </Container>
        </>
    )
}



export default Default