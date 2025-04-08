import api from "./api";

// export const getUser = async () => {
//   try {
//     return await api.get("user/all");
//   } catch (error) {
//     console.log(error.message);
//   }
// };
export const createUser = async (data) => {
  try {
    return await api.post("auth", data);
  } catch (error) {
    console.log(error.message);
  }
};
// 
export const createSession = async (data) => {
  try {
    return await api.post("entrar", data);
  } catch (error) {
    console.log(error.message);
  }
};
// 
// export const getUserId = async (id) => {
//   try {
//     return await api.get(`user/${id}`);
//   } catch (error) {
//     console.log(error.message);
//   }
// };

// export const removeUser = async (id) => {
//   try {
//     return await api.delete(`user/${id}`);
//   } catch (error) {
//     console.log(error.message);
//   }
// };

// 
// export const getPerfilUserIdRelacionados = async (userId) => {
//   try {
//     return await api.get(`perfiluser/usuario/${userId}`);
//   } catch (error) {
//     console.log(error.message);
//   }
// };

// export const getPerfilUserId = async (id) => {
//   try {
//     return await api.get(`perfiluser/${id}`);
//   } catch (error) {
//     console.log(error.message);
//   }
// };

// export const salvePerfil = async (data) => {
//   try {
//     return await api.post("perfiluser/salve", data);
//   } catch (error) {
//     console.log(error.message);
//   }
// };

// export const createPerfil = async (data) => {
//   try {
//     return await api.post("perfiluser/create", data);
//   } catch (error) {
//     console.log(error.message);
//   }
// };