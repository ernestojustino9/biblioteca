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
import { getCategorias, removeCategoria } from '../../service/CategoriaService';
import Skeleton from "@mui/material/Skeleton";
import Swal from 'sweetalert2';

const Categoria = () => {
    const { id } = useParams();
    const [categorias, setCategorias] = useState([]);
    const [loading, setLoading] = useState(true);
    const [loaderTabela, setLoaderTabela] = useState(false);
    const [open, setOpen] = useState(false);
    const [openEdit, setOpenEdit] = useState(false);
    const [openDelete, setOpenDelete] = useState(false);
    const [erro, setErro] = useState(null);

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

    const handleClickDelete = async () => {
        setOpenDelete(true);
    };

    const handleCloseDelete = async () => {
        setOpenDelete(false);
    };

    useEffect(() => {
        getAllCategoria();
    }, []);

    //LISTAR
    const getAllCategoria = async () => {
        await getCategorias()
            .then((response) => {
                setCategorias(response.data);
                setErro(response.data.message);
                setLoading(false);
            })
            .catch((error) => {
                // messages.mensagemErro(error.message);
                // setErro(error.message);
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
                                        label="Pesquisar por Nome / Email "
                                        variant="standard"
                                        //   value={searchQuery}
                                        //   onChange={handleSearchChange}
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
                                        loaderTabela ?
                                            <Box sx={{ width: "100%" }}>
                                                <Skeleton sx={{ height: "70px" }} />
                                                <Skeleton sx={{ height: "70px" }} />
                                                <Skeleton sx={{ height: "70px" }} />
                                                <Skeleton sx={{ height: "70px" }} />
                                                <Skeleton sx={{ height: "70px" }} />
                                            </Box> :
                                            <table className="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                                                <thead>
                                                    <tr>
                                                        <th>Cliente</th>
                                                        <th>Emprestimo</th>
                                                        <th>Valor</th>
                                                        {/* <th>Estado</th> */}
                                                        <th>Acao</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td>EJ-Developer</td>
                                                        <td>Vagne Zau Lelo</td>
                                                        <td>100kz</td>
                                                        <td>
                                                            <Button onClick={() => handleClickEdit()}><EditIcon /></Button>
                                                            <Button onClick={() => handleClickDelete()}><DeleteIcon /></Button>
                                                        </td>
                                                    </tr>
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
                            // aria-labelledby="alert-dialog-title"
                            // aria-describedby="alert-dialog-description"
                            >
                                <DialogContent style={{ width: "600px" }}>
                                    <ModalCriarCategoria
                                    // funcionarioListas={listarFuncionario}
                                    // verFuncionarioID={verFuncionarioID._id}
                                    // setOpenDelete={handleClosse}
                                    />
                                </DialogContent>

                            </Dialog>

                            {/* <Dialog
                                open={openEdit}
                                onClose={handleCloseEdit}
                            // aria-labelledby="form-dialog-title"
                            // maxWidth="md" fullWidth
                            >
                                <DialogContent style={{ width: "600px" }}>
                                    <ModalEditarLivro
                                    // verFuncionarioEDITAR={verFuncionarioEDITAR}
                                    // funcionarioListas={listarFuncionario}
                                    // setOpenEdit={handleCloseEdit}
                                    />
                                </DialogContent>

                            </Dialog> */}

                            {/*  Ver Detalhes*/}



                            {/* Deletar */}
                            {/* <Dialog
                                open={openDelete}
                                onClose={handleCloseDelete}
                            // aria-labelledby="alert-dialog-title"
                            // aria-describedby="alert-dialog-description"
                            >
                                <DialogContent>
                                    <ModalDeleteLivro
                                    // funcionarioListas={listarFuncionario}
                                    // verFuncionarioID={verFuncionarioID._id}
                                    // setOpenDelete={handleCloseDelete}
                                    />
                                </DialogContent>

                            </Dialog> */}


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