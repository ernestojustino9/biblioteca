import api from "./api";

export const getCategorias = async () => {
  try {
    return await api.get("categorias");
  } catch (error) {
    console.log(error.message);
  }
};
export const getCategoriaid = async (id) => {
  try {
    return await api.get(`categorias/${id}`);
  } catch (error) {
    console.log(error.message);
  }
}; 
export const createCategoria = async (data) => {
  try {
    return await api.post("categorias", data);
  } catch (error) {
    console.log(error.message);
  }
};

export const updateCategoriaId = async (id, data) => {
  try {
    return await api.get(`categorias/${id}`, data);
  } catch (error) {
    console.log(error.message);
  }
}; 

export const removeCategoria = async (id) => {
  try {
    return await api.delete(`categorias/${id}`);
  } catch (error) {
    console.log(error.message);
  }
};