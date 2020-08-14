import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import FormControl from '@material-ui/core/FormControl';
import IconButton from '@material-ui/core/IconButton';
import Input from '@material-ui/core/Input';
import InputAdornment from '@material-ui/core/InputAdornment';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import CloseIcon from '@material-ui/icons/Close';
import React, { useState } from 'react';

import { useStyles } from './styles';

const AddProduct = ({ open, handleClose, addNewProduct }) => {
  const classes = useStyles();

  const [category, setCategory] = useState('');
  const [product, setProduct] = useState('');
  const [price, setPrice] = useState('');
  const [imageUrl, setImageUrl] = useState('');

  const handleChange = (event) => {
    setCategory(event.target.value || '');
  };

  const addClothes = () => {
    const item = { product, price, imageUrl };
    addNewProduct(item, category);
  };

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby="customized-dialog-title"
      maxWidth="md">
      <MuiDialogTitle disableTypography className={classes.root}>
        <IconButton
          aria-label="close"
          className={classes.closeButton}
          onClick={handleClose}>
          <CloseIcon className={classes.closeIcon} />
        </IconButton>
      </MuiDialogTitle>
      <MuiDialogContent className={classes.content}>
        <Typography gutterBottom className={classes.title}>
          Novo Produto
        </Typography>
        <form className={classes.formCcontainer}>
          <FormControl>
            <InputLabel htmlFor="demo-dialog-native">Categoria</InputLabel>
            <Select
              native
              value={category}
              onChange={handleChange}
              input={<Input id="demo-dialog-native" />}>
              <option aria-label="None" value="" />
              <option value="ternos">Ternos</option>
              <option value="sapatos">Sapatos</option>
              <option value="relogios">Relógios</option>
              <option value="calcas">Calças</option>
              <option value="camisas">Camisas</option>
            </Select>
          </FormControl>
          <TextField
            fullWidth
            label="Nome do Produto"
            onChange={(event) => setProduct(event.target.value)}
          />
          <TextField
            fullWidth
            label="Preço"
            onChange={(event) => setPrice(event.target.value)}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">R$</InputAdornment>
              ),
            }}
          />
          <TextField
            fullWidth
            label="URL da Imagem"
            onChange={(event) => setImageUrl(event.target.value)}
          />
        </form>
        <div className={classes.contentButton}>
          <Button
            variant="contained"
            color="primary"
            className={classes.button}
            onClick={addClothes}>
            Cadastrar
          </Button>
          <Typography onClick={handleClose} className={classes.cancel}>
            Cancelar
          </Typography>
        </div>
      </MuiDialogContent>
    </Dialog>
  );
};

export default AddProduct;
