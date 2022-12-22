import { Container } from '@mui/material'
import { makeStyles } from '@mui/styles'
import useAuth from '../state/Auth'

import Header from "../partials/Header/Header"

const useStyles = makeStyles(() => ({
    container: {
        padding: '10px  0',

    }
}))

const Default = ({ children }) => {
    const classes = useStyles()
    const {user} = useAuth()


    return (
        <>
            <Header user= {user}/>
            <Container className={classes.container}>
                {children}
            </Container>
        </>
    )
}



export default Default