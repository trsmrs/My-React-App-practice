import { Typography } from '@mui/material'


const Page = ( title, Component ) => {
    
    return (
        <div>
           <Typography variant='h5' component='h2'>
                {title}
            </Typography> 
            <Component />
        </div>
    )
}



export default Page