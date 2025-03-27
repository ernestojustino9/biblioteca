import React, { useState } from 'react'
import {
    Dialog,
    DialogTitle,
    DialogContent,
    Button,
    TextField
} from '@mui/material';
// import Add from '@material-ui/icons/Add';
// import Edit from '@material-ui/icons/Edit';
// import DeleteIcon from '@mui/icons-material/Delete';
// import CloseIcon from '@mui/icons-material/Close';
import Sidebar from '../../components/layout/sliderbar/Sidebar'
import HeaderMenu from '../../components/layout/header/HeaderMenu'
import Footer from '../../components/layout/footer/Footer'

const Reserva = () => {
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
                                        {/* <Button onClick={() => handleClickOpen()} style={{ backgroundColor: "#008a00", color: "#fff" }} ><Add /></Button> */}
                                        <Button  >+</Button>
                                    </div>
                                </div>
                            </div>
                            <div className="card-body">
                                <div className="table-responsive">
                                    <table className="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                                        <thead>
                                            <tr>
                                                <th>Cliente</th>
                                                <th>Livro</th>
                                                <th>Data</th>
                                                {/* <th>Estado</th> */}
                                                <th>Acao</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>EJ-Developer</td>
                                                <td>Sistema Online de Biblioteca</td>
                                                <td>2011/04/25</td>
                                                {/* <td>Edinburgh</td> */}

                                                {/* <td> <Button onClick={() => handleArmazemEdit(row)}><Edit /></Button>
                                                    <Button onClick={() => handleArmazemDelete(row)}><DeleteIcon /></Button></td> */}
                                                {/* <td> <Button><Edit /></Button>
                                                    <Button ><DeleteIcon /></Button></td> */}
                                                <td>
                                                    <Button onClick={() => handleClickEdit()}>Editar</Button>
                                                    <Button onClick={() => handleClickPdf()}>pdf</Button>
                                                    <Button onClick={() => handleClickVer()}>Ver</Button>
                                                    <Button onClick={() => handleClickDelete()} >Eliminar</Button>

                                                </td>
                                            </tr>

                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>




                        {/* </div> */}
                    </div>
                </div>
                <Footer />
            </div>
        </div>
    )
}

export default Reserva