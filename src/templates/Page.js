import { Typography } from '@mui/material'
import { makeStyles } from '@mui/styles'



const useStyles = makeStyles(() => ({
    container: {
        padding: '10px  0',

    }
}))

const Page = ( title, Component ) => {
    const classes = useStyles()
    return (
        <div>
           <Typography variant='h1' component='h2'>
                {title}
            </Typography> 
            <Component />
            
        </div>
    )
}



export default Page