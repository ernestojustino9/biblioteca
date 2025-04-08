import React, { useState } from 'react'
import {
    Dialog,
    DialogTitle,
    DialogContent,
    Button,
    TextField
} from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import VisibilityIcon from '@mui/icons-material/Visibility';
// import CloseIcon from '@mui/icons-material/Close';
import Sidebar from '../../components/layout/sliderbar/Sidebar'
import HeaderMenu from '../../components/layout/header/HeaderMenu'
import Footer from '../../components/layout/footer/Footer'
import ModalCriarLivro from '../../components/modal/livro/ModalCriarLivro';
import ModalEditarLivro from '../../components/modal/livro/ModalEditarLivro';
import 'primeicons/primeicons.css';
import ModalAddPdf from '../../components/modal/livro/ModalAddPdf';
import ModalVerLivro from '../../components/modal/livro/ModalVerLivro';
import ModalDeleteLivro from '../../components/modal/livro/ModalDeleteLivro';

const Lirvos = () => {
    const [open, setOpen] = useState(false);
    const [openEdit, setOpenEdit] = useState(false);
    const [openPdf, setOpenPdf] = useState(false);
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
    const handleClickPdf = async () => {
        setOpenPdf(true);
    };

    const handleClosePdf = async () => {
        setOpenPdf(false);
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
                                        {/* <Button onClick={() => handleClickOpen()}><Add /></Button> */}
                                        <Button onClick={() => handleClickOpen()}><i className="pi-plus-circle"></i></Button>
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
                                                <td>
                                                    <Button onClick={() => handleClickEdit()}>Editar</Button>
                                                    <Button onClick={() => handleClickPdf()}>pdf</Button>
                                                    <Button onClick={() => handleClickVer()}>Ver</Button>
                                                    <Button onClick={() => handleClickDelete()} >Eliminar</Button></td>
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
                            // aria-labelledby="alert-dialog-title"
                            // aria-describedby="alert-dialog-description"
                            >
                                <DialogContent style={{ width: "600px" }}>
                                    <ModalCriarLivro
                                    // funcionarioListas={listarFuncionario}
                                    // verFuncionarioID={verFuncionarioID._id}
                                    // setOpenDelete={handleClosse}
                                    />
                                </DialogContent>

                            </Dialog>

                            <Dialog
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

                            </Dialog>
                            <Dialog
                                open={openPdf}
                                onClose={handleClosePdf}
                            // aria-labelledby="form-dialog-title"
                            // maxWidth="md" fullWidth
                            >
                                <DialogContent style={{ width: "600px" }}>
                                    <ModalAddPdf
                                    // verFuncionarioEDITAR={verFuncionarioEDITAR}
                                    // funcionarioListas={listarFuncionario}
                                    // setOpenEdit={handleCloseEdit}
                                    />
                                </DialogContent>

                            </Dialog>
                            {/*  Ver Detalhes*/}
                            <Dialog
                                // fullScreen
                                open={openVer}
                                onClose={handleCloseVer}
                            >
                                {/* <AppBar sx={{ position: "relative" }}>
                                    <Toolbar style={{ background: "#0060bf" }}> */}
                                {/* <Typography
                                            sx={{ ml: 2, flex: 1 }}
                                            variant="h6"
                                            component="div"
                                        >
                                            Livro
                                        </Typography> */}
                                {/* <IconButton
                                            edge="start"
                                            color="inherit"
                                            onClick={handleCloseVer}
                                            aria-label="close"
                                        >
                                            <CloseIcon />
                                        </IconButton> */}
                                {/* </Toolbar>
                                </AppBar> */}
                                <ModalVerLivro />
                            </Dialog>


                            {/* Deletar */}
                            <Dialog
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

                            </Dialog>


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