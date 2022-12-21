import React, { useState } from 'react'
import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'

import {
  CardContent,
  CardActions,
  Avatar,
  IconButton,
  Typography,
} from '@mui/material/'

import { teal } from '@mui/material/colors'
import DeleteIcon from '@mui/icons-material/DeleteForever'
import EditIcon from '@mui/icons-material/Edit'

import ModalConfirm from './ModalConfirm'
import useStyles from '../partials/Header/Header.style'

const CustomerCard = ({
  id,
  name,
  lastname,
  email,
  avatar,
  className,
  onRemoveCustomer,

}) => {

  const classes = useStyles()

  const [openModal, setOpenModal] = useState(false)

  const handleToggleOpenModal = () => {
    setOpenModal(!openModal)
  }

  const handleConfirmModal = () => {
    onRemoveCustomer(id)
    handleToggleOpenModal()
  }

  const handleRemoveCustomer = () => {
    handleToggleOpenModal()
  }


  return (

    <>
      <Card sx={{ maxWidth: 345, backgroundColor: teal['A200'] }} className={className} >
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
          <IconButton aria-label="Edit">
            <EditIcon />
          </IconButton>
          <IconButton aria-label="Delete" onClick={handleRemoveCustomer}>
            <DeleteIcon />
          </IconButton>
        </CardActions>
      </Card>
      <ModalConfirm
        open={openModal}
        onClose={handleToggleOpenModal}
        onConfirm={()=> handleConfirmModal(id)}
        title="Excluir cadastro."
        msg="Deseja realmente excluir este usuário?"
      />
    </>
  )
}

export default CustomerCard