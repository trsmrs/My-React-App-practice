import React, { useState } from 'react'
import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'

import {CardContent,
  CardActions,
  Avatar,
  IconButton,
  Typography,
} from '@mui/material/'


import { teal } from '@mui/material/colors'
import FavoriteIcon from '@mui/icons-material/Favorite'
import ShareIcon from '@mui/icons-material/Share'



const CustomerCard = ({
  name,
  lastname,
  email,
  avatar,
  className

}) => {

  // const classes = useStyles()
  return (

    
      <Card sx={{ maxWidth: 345, backgroundColor: teal['A200']}} className={className} >
        <CardHeader
          avatar={
            <Avatar aria-label="recipe" src={avatar}>

            </Avatar>
          }

          title={`${name} ${lastname}`}
          subheader={email}
        />

        <CardContent>
          <Typography variant="body2" color="text.secondary">

          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites">
            <FavoriteIcon />
          </IconButton>
          <IconButton aria-label="share">
            <ShareIcon />
          </IconButton>
        </CardActions>
      </Card>
  )
}

export default CustomerCard