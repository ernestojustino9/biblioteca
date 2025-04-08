import React, { useEffect, useState } from 'react'
import * as messages from "../../../components/message/toastr";
import { createCategoria } from '../../../service/CategoriaService';
import { useParams } from 'react-router-dom';

const ModalCategoria = () => {
  const { id } = useParams();
  //SALVAR
  const [categoria, setCategoria] = useState({
    titulo: "",
    descricao: "",
  });

  const { descricao } = categoria;
  //
  const onInputChange = (e) => {
    const { name, value } = e.target;
    setCategoria({
      ...categoria,
      [name]: value,
    });
  };

  //Limpar Campos
  const handleClear = () => {
    setCategoria({
      titulo: "",
      descricao: "",
    });
  };

  const validarCampos = () => {
    let tempErrors = {};
    let isValid = true;

    if (!funcionario.titulo) {
      tempErrors.titulo = "O titulo é obrigatório.";
      isValid = false;
    }
    setErrors(tempErrors);
    return isValid;
  };


  const saveFuncionario = async (e) => {
    e.preventDefault();
    if (!validarCampos()) return;
    setLoading(true);
    const apenasId = valoresSelecinodos.map((i) => i._id);
    const data = {
      password: bilhetePassaporte,
      nome,
      sobrenome,
      telefone,
      email,
      bilhetePassaporte,
      nacionalidade,
      genero,
      dataDeNascimento,
      formacao,
      inicioNoEstabelecimento,
      perfilId: apenasId,
      estabelecimentoId: user.estabelecimentoId,
    }
    console.log(data)
    try {
      await api.post(`funcionarios`, data

      );
      toast.success("Funcionário cadastrado com sucesso!");
      limpar();
      listarFuncionario();
    } catch (error) {
      const errorMessage = error.response?.data?.message || error.message;
      toast.error(`Erro ao salvar funcionário: ${errorMessage}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div >
      <div className="container-fluid pt-4 px-4">
        <div className="row g-4">
          <div className="col-sm-12 col-xl-12">
            <form>
              <div className="mb-3">
                <label for="exampleInputEmail1" className="form-label">Titulo</label>
                <input type="text" className="form-control" id="exampleInputEmail1"
                  aria-describedby="emailHelp" />
              </div>
              <div className="mb-3">
                <label for="exampleInputPassword1" className="form-label">Autor</label>
                <input type="text" className="form-control" id="exampleInputPassword1" />
              </div>
              <div className="mb-3">
                <label for="exampleInputPassword1" className="form-label">Data</label>
                <input type="date" className="form-control" id="exampleInputPassword1" />
              </div>
              <div className="mb-3">
                <label for="exampleInputPassword1" className="form-label">Qtd</label>
                <input type="text" className="form-control" id="exampleInputPassword1" />
              </div>
              <button type="submit" className="btn btn-primary">Salvar</button>
            </form>
          </div>

        </div>
      </div>
    </div>
  )
}

export default ModalCategoria