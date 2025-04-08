import api from "./api";

export const getCategorias = async () => {
  try {
    return await api.get("categoria/listar");
  } catch (error) {
    console.log(error.message);
  }
};
export const getCategoriaid = async (id) => {
  try {
    return await api.get(`categoria/${id}`);
  } catch (error) {
    console.log(error.message);
  }
}; 
export const createCategoria = async (data) => {
  try {
    return await api.post("categoria/cadastrar", data);
  } catch (error) {
    console.log(error.message);
  }
};

export const updateCategoriaId = async (id, data) => {
  try {
    return await api.get(`categoria/${id}`, data);
  } catch (error) {
    console.log(error.message);
  }
}; 

export const removeCategoria = async (id) => {
  try {
    return await api.delete(`categoria/${id}`);
  } catch (error) {
    console.log(error.message);
  }
};