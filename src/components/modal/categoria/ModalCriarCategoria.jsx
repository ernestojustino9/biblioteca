import React, { useEffect, useState } from 'react'
import {
  TextField, Grid, CircularProgress
} from "@mui/material";
import * as messages from "../../../components/message/toastr";
import { createCategoria } from '../../../service/CategoriaService';
import { useParams } from 'react-router-dom';

const ModalCategoria = ({ listasCategorias, setOpen }) => {
  const { id } = useParams();
  //SALVAR
  const [categoria, setCategoria] = useState({
    titulo: "",
    descricao: "",
  });

  const { titulo, descricao } = categoria;
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});
  //
  const onInputChange = (e) => {
    const { name, value } = e.target;
    setCategoria({
      ...categoria,
      [name]: value,
    });
    // Se o campo já estiver com erro, removemos o erro
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: '',
      });
    }
  };

  //Limpar Campos
  const handleClear = () => {
    setCategoria({
      titulo: "",
      descricao: "",
    });
  };

  const listarCategorias = () => {
    listasCategorias();
  };
  const fecharCategorias = () => {
    setOpen();
  };

  const validarCampos = () => {
    let tempErrors = {};
    let isValid = true;

    if (!categoria.titulo) {
      tempErrors.titulo = "O titulo é obrigatório.";
      isValid = false;
    }
    setErrors(tempErrors);
    return isValid;
  };

  const saveCategoria = async (e) => {
    e.preventDefault();
    if (!validarCampos()) return;
    setLoading(true);
    const data = {
      titulo,
      descricao,
    }
    try {
      await createCategoria(data);
      messages.mensagemSucesso("Salvo com sucesso");
      handleClear();
      listarCategorias();
    } catch (error) {
      const errorMessage = error.response?.data?.message || error.message;
      messages.mensagemErro(`Erro ao salvar funcionário: ${errorMessage}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div >
      <div className="container-fluid pt-4 px-4">
        <div className="row g-4">
          <div className="col-sm-12 col-xl-12">
            <form onSubmit={saveCategoria}>
              <div className="mb-3">
                <Grid item xs={12} sm={6}>
                  <TextField
                    label="Título"
                    variant="filled"
                    // fullWidth
                    className="form-control"
                    name="titulo"
                    value={titulo}
                    onChange={(e) => onInputChange(e)}
                    // sx={{ borderRadius: "8px", boxShadow: "0 2px 8px rgba(0,0,0,0.1)" }}
                    error={!!errors.titulo}
                    helperText={errors.titulo}
                  />
                </Grid>
              </div>
              <br />
              <br />
              <div className="mb-3">
                <Grid item xs={12} sm={6}>
                  <TextField
                    // id="outlined-multiline-static"
                    className="form-control"
                    label="Descrição"
                    name="descricao"
                    value={descricao}
                    onChange={(e) => onInputChange(e)}
                    multiline
                    rows={4}
                    defaultValue="Default Value"
                  />
                </Grid>
              </div>
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />

              {/* <button type="reset" onClick={fecharCategorias} className="btn btn-primary">Salvar</button> */}
              <button type="submit" className="btn btn-primary">
                {loading ? (
                  <CircularProgress size={24} sx={{ color: "#fff" }} />
                ) : (
                  "Salvar"
                )}
              </button>
            </form>
          </div>

        </div>
      </div>
    </div>
  )
}

export default ModalCategoria