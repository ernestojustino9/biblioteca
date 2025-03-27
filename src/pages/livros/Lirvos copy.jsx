import React, { useState } from 'react'
import {
    Dialog,
    DialogTitle,
    DialogContent,
    Button,
    TextField
} from "@mui/material";
// import Add from '@material-ui/icons/Add';
// import Edit from '@material-ui/icons/Edit';
// import DeleteIcon from '@mui/icons-material/Delete';
// import CloseIcon from '@mui/icons-material/Close';
import Sidebar from '../../components/layout/sliderbar/Sidebar'
import HeaderMenu from '../../components/layout/header/HeaderMenu'
import Footer from '../../components/layout/footer/Footer'
import ModalCriarLivro from '../../components/modal/livro/ModalCriarLivro';

const Lirvos = () => {
    const [open, setOpen] = useState(false);
    const [openEdit, setOpenEdit] = useState(false);
    const [openVer, setOpenVer] = useState(false);
    const [openDelete, setOpenDelete] = useState(false);


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

    const handleClickVer = async () => {
        setOpenVer(true);
    };

    const handleCloseVer = async () => {
        setOpenVer(false);
    };


    const handleClickDelete = async () => {
        setOpenDelete(true);
    };

    const handleCloseDelete = async () => {
        setOpenDelete(false);
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
                                <h6 className="m-0 font-weight-bold text-primary">Livros</h6>
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
                                        <Button onClick={() => handleClickOpen()}><Add /></Button>
                                    </div>
                                </div>
                            </div>
                            <div className="card-body">
                                <div className="table-responsive">
                                    <table className="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                                        <thead>
                                            <tr>
                                                <th>Titulo</th>
                                                <th>Autor</th>
                                                <th>Ano</th>
                                                <th>Qtd</th>
                                                {/* <th>Estado</th> */}
                                                {/* <th>Salary</th> */}
                                                <th>Acao</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>Sistema Online de Biblioteca</td>
                                                <td>EJ-Developer</td>
                                                <td>2025/04/25</td>
                                                <td>1</td>
                                                {/* <td> <Button onClick={() => handleArmazemEdit(row)}><Edit /></Button>
                                                    <Button onClick={() => handleArmazemDelete(row)}><DeleteIcon /></Button></td> */}
                                                <td> <Button>Editar</Button>
                                                    <Button >Eliminar</Button></td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>



                        <div>
                            {/* Criar */}
                            <Dialog
                                open={open}
                                onClose={handleClose}
                                aria-labelledby="alert-dialog-title"
                                aria-describedby="alert-dialog-description"
                            >
                                <DialogContent>
                                    <ModalCriarLivro
                                    // funcionarioListas={listarFuncionario}
                                    // verFuncionarioID={verFuncionarioID._id}
                                    // setOpenDelete={handleClosse}
                                    />
                                </DialogContent>

                            </Dialog>
                            {/*  Ver Detalhes*/}
                            {/* <Dialog
                                fullScreen
                                open={openVer}
                                onClose={handleCloseVer}
                            >
                                <AppBar sx={{ position: "relative" }}>
                                    <Toolbar style={{ background: "#0060bf" }}>
                                        <Typography
                                            sx={{ ml: 2, flex: 1 }}
                                            variant="h6"
                                            component="div"
                                        >
                                            Horário do funcionário
                                        </Typography>
                                        <IconButton
                                            edge="start"
                                            color="inherit"
                                            onClick={handleCloseVer}
                                            aria-label="close"
                                        >
                                            <CloseIcon />
                                        </IconButton>
                                    </Toolbar>
                                </AppBar>
                                <ModalVerFuncionario verFuncionario={verFuncionario} />
                            </Dialog> */}


                            {/* Deletar */}
                            {/* <Dialog
                                open={openDelete}
                                onClose={handleCloseDelete}
                                aria-labelledby="alert-dialog-title"
                                aria-describedby="alert-dialog-description"
                            >
                                <DialogContent>
                                    <ModalDeleteFuncionario
                                        funcionarioListas={listarFuncionario}
                                        verFuncionarioID={verFuncionarioID._id}
                                        setOpenDelete={handleCloseDelete}
                                    />
                                </DialogContent>

                            </Dialog> */}
                            {/*  */}
                            {/* <Dialog
                                open={openEdit}
                                onClose={handleEditClose}
                                aria-labelledby="form-dialog-title"
                                maxWidth="md" fullWidth
                            >
                                <DialogContent>
                                    <ModalEditarFuncionario
                                        verFuncionarioEDITAR={verFuncionarioEDITAR}
                                        funcionarioListas={listarFuncionario}
                                        setOpenEdit={handleEditClose}
                                    />
                                </DialogContent>

                            </Dialog> */}
                            {/*  */}
                        </div>
                        {/* </div> */}
                    </div>
                </div>
                <Footer />
            </div>
        </div>
    )
}

export default Lirvos