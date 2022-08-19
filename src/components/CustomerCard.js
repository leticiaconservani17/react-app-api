import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import DeleteIcon from '@mui/icons-material/PersonRemove'
import EditIcon from '@mui/icons-material/Create'
import classNames from 'classnames'

import ModalConfirm from './ModalConfirm'

import {
    Card,
    CardHeader,
    CardActions,
    Avatar,
    IconButton,
} from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
}))

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
  const classes = useStyles()

  const [ openModal , setOpenModal] = useState(false)

  const handleToggleOpenModal = () => {
    setOpenModal(!openModal)
  }
 
  const handleConfirmModal = id => {
    onRemoveCustomer(id)
    handleToggleOpenModal()
  }

  const handleRemoveCustomer = () => {
    handleToggleOpenModal()
  }

  const handleEditCustomer = id => {
    onEditCustomer(id)
  }


  return (
    <>
      <Card className={classNames(className, classes.root)}>
        <CardHeader
          avatar={
            <Avatar aria-label="recipe" src={avatar}>
              R
            </Avatar>
          }
          title = {`${name} ${lastname}`}
          subheader = {email}
        />
        <CardActions disableSpacing>
          <IconButton aria-label="Editar Cadastro" onClick={() => handleEditCustomer(id)}>
            <EditIcon />
          </IconButton>
          <IconButton aria-label="Remover" onClick={handleRemoveCustomer}>
            <DeleteIcon />
          </IconButton>
        </CardActions>
      </Card>
      <ModalConfirm 
      open={openModal}
      onClose={handleToggleOpenModal}
      onConfirm={() => handleConfirmModal(id)}
      title="Deseja realmente excluir este cadastro?"
      message="Não é possivel recuperar os dados"
      />
    </>
  )
}

export default CustomerCard