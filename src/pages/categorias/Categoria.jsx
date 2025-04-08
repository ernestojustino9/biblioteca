import React, { useState, useEffect } from 'react'
import {
    Box,
    Button,
    Dialog,
    DialogTitle,
    DialogContent,
    TextField,
} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import Sidebar from '../../components/layout/sliderbar/Sidebar'
import HeaderMenu from '../../components/layout/header/HeaderMenu'
import Footer from '../../components/layout/footer/Footer'
import { Link, useParams } from 'react-router-dom';
import * as messages from "../../components/message/toastr";
import ModalCriarCategoria from '../../components/modal/categoria/ModalCriarCategoria';
import ModalEditarCategoria from '../../components/modal/categoria/ModalEditarCategoria';
import { getCategorias, removeCategoria, getCategoriaid } from '../../service/CategoriaService';
import Skeleton from "@mui/material/Skeleton";
import Swal from 'sweetalert2';
import api from '../../service/api';

const Categoria = () => {
    const { id } = useParams();
    const [categorias, setCategorias] = useState([]);
    const [searchQuery, setSearchQuery] = useState("");
    const [loading, setLoading] = useState(true);
    const [open, setOpen] = useState(false);
    const [openEdit, setOpenEdit] = useState(false);

    const handleClickOpen = async () => {
        setOpen(true);
    };

    const handleClose = async () => {
        setOpen(false);
    };

    const handleClickEdit = async () => {
        setOpenEdit(true);
    };

    const handleCloseEdit = async () => {
        setOpenEdit(false);
    };

    useEffect(() => {
        getAllCategoria();
    }, []);

    const handleSearchChange = (event) => {
        setSearchQuery(event.target.value);
    };

    const filteredCategorias = categorias.filter(
        (row) =>
            row.titulo.toLowerCase().includes(searchQuery.toLowerCase()) ||
            row.descricao.toLowerCase().includes(searchQuery.toLowerCase())
    );

    //LISTAR
    const getAllCategoria = async () => {
        await getCategorias()
            .then((response) => {
                setCategorias(response.data.serializes);
                setLoading(false);
            })
            .catch((error) => {
                const errorMessage = error.response?.data?.message || error.message;
                // messages.mensagemErro(error.message);
            });
    };
    const deleteCategoria = (id) => {
        Swal.fire({
            text: "Realmente deseja eliminar!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#9ba236",
            cancelButtonColor: "#d33",
            confirmButtonText: "Sim!",
            cancelButtonText: "Cancelar",
        }).then((result) => {
            if (result.isConfirmed) {
                removeCategoria(id).then((response) => {
                    getAllCategoria();
                    // Swal.fire("Eliminado!", "Eliminado.", "success");
                    messages.mensagemSucesso("Eliminado");
                });
            }
        });
    };


    return (
        <div id="wrapper">
            <Sidebar />
            <div id="content-wrapper" className="d-flex flex-column">
                <HeaderMenu />
                <div id="content">
                    <div className="container-fluid">
                        {/* <div className="row"> */}
                        <div className="card shadow mb-4">
                            <div className="card-header py-3">
                                <h6 className="m-0 font-weight-bold text-primary">Categoria</h6>
                                <div class="search-container">
                                    <TextField
                                        // id="standard-basic"
                                        label="Pesquisar por Título / Descrição "
                                        variant="standard"
                                        value={searchQuery}
                                        onChange={handleSearchChange}
                                        className="pesquisarTesto"
                                    />
                                    <div className="todosBotoes">
                                        <Button onClick={() => handleClickOpen()} style={{ color: "#fff" }} ><AddIcon /></Button>
                                    </div>
                                </div>
                            </div>
                            <div className="card-body">
                                <div className="table-responsive">
                                    {
                                        loading ?
                                            <Box sx={{ width: "100%" }}>
                                                <Skeleton sx={{ height: "70px" }} />
                                                <Skeleton sx={{ height: "70px" }} />
                                                <Skeleton sx={{ height: "70px" }} />
                                            </Box> :
                                            <table className="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                                                <thead>
                                                    <tr>
                                                        <th>Título</th>
                                                        <th>Descrição</th>
                                                        <th>Ação</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {filteredCategorias.map((cat) => (
                                                        <tr>
                                                            <td>{cat.titulo}</td>
                                                            <td>{cat.descricao}</td>
                                                            <td>
                                                                <Button onClick={() => handleClickEdit(cat._id)}><EditIcon /></Button>
                                                                <Button onClick={() => deleteCategoria(cat._id)}><DeleteIcon /></Button>
                                                            </td>
                                                        </tr>
                                                    ))}

                                                </tbody>
                                            </table>
                                    }
                                </div>
                            </div>
                        </div>

                        <div>
                            {/* Criar */}
                            <Dialog
                                open={open}
                                onClose={handleClose}
                            >
                                <DialogContent style={{ width: "600px" }}>
                                    <ModalCriarCategoria
                                        listasCategorias={getAllCategoria}
                                        setOpen={handleClose}
                                    />
                                </DialogContent>

                            </Dialog>

                            <Dialog
                                open={openEdit}
                                onClose={handleCloseEdit}
                            >
                                <DialogContent style={{ width: "600px" }}>
                                    <ModalEditarCategoria
                                        listasCategorias={getAllCategoria}
                                        setOpenEdit={handleCloseEdit}
                                    />
                                </DialogContent>

                            </Dialog>

                            {/*  */}
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        </div>
    )
}

export default Categoria