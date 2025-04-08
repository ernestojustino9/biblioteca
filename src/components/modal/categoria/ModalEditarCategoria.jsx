import React, { useEffect, useState } from 'react'
import {
  TextField, Grid, CircularProgress
} from "@mui/material";
import * as messages from "../../message/toastr";
import api from "../../../service/api";
import { useParams } from 'react-router-dom';

const ModalEditarCategoria = ({ listasCategorias, idCurso, setOpen }) => {
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
  useEffect(() => {
    buscarCategoria();
  }, []);

  const buscarCategoria = async () => {
    try {
      const { data: categoria } = await api.get(`categorias/${idCurso._id}`);
      const formattedData = {
        titulo: categoria.titulo || "",
        descricao: categoria.descricao || "",
      };
      setCategoria(formattedData);
    } catch (error) {
      const errorMessage = error.response?.data?.message || error.message;
      // toast("Erro ao buscar funcionário", { type: "error" });
    }
  };
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
      await api.put(`armazens/${idCurso._id}`, data);
      messages.mensagemSucesso("Actualizado com sucesso");
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
        <pre>
          {JSON.stringify(idCurso, null,2)}
        </pre>
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
                    value={categoria.titulo}
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
                    value={categoria.descricao}
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
                  "Actualizar"
                )}
              </button>
            </form>
          </div>

        </div>
      </div>
    </div>
  )
}

export default ModalEditarCategoria