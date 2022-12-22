import React, { useState } from 'react'
import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'

import {
  
  Snackbar,
  Stack,
  CardContent,
  CardActions,
  Avatar,
  IconButton,
  Typography,
} from '@mui/material/'

import MuiAlert from '@mui/material/Alert';

import { teal } from '@mui/material/colors'
import DeleteIcon from '@mui/icons-material/DeleteForever'
import EditIcon from '@mui/icons-material/Edit'

import ModalConfirm from './ModalConfirm'


const CustomerCard = ({
  id,
  name,
  lastname,
  email,
  avatar,
  className,
  onRemoveCustomer,
  onEditCustomer,

}) => {

  const [openModal, setOpenModal] = useState(false)

  const handleToggleOpenModal = () => {
    setOpenModal(!openModal)
  }

  const handleConfirmModal = () => {
    onRemoveCustomer(id)
    handleToggleOpenModal()
    handleClick()
  }

  const handleRemoveCustomer = () => {
    handleToggleOpenModal()
  }

  const handleEditCustomer = (id) => {
    onEditCustomer(id)
  }

  const [open, setOpen] = useState(false);
  
  const handleClick = () => {
      setOpen(true);
  };


  const handleClose = (event, reason) => {
      if (reason === 'click') {
          return;
      }

      setOpen(false);
  };


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
          <IconButton aria-label="Edit" onClick={()=> handleEditCustomer(id)}>
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
        onConfirm={() => handleConfirmModal(id)}
        title="Excluir cadastro."
        msg="Deseja realmente excluir este usuário?"
      />
   <Stack spacing={2} sx={{ width: '100%' }}>
                <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
                    <MuiAlert onClose={handleClose} severity="info" sx={{
                        width: '100%',
                        color: teal['900'],
                        backgroundColor: teal['A400']
                    }}>
                        Registro excluído com Sucesso!
                    </MuiAlert>
                </Snackbar>
            </Stack>
    </>

  )
}

export default CustomerCard