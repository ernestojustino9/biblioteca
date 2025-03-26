import React from 'react'
import {
    Button,
    TextField,
} from '@mui/material';
// import Add from '@material-ui/icons/Add';
// import Edit from '@material-ui/icons/Edit';
// import DeleteIcon from '@mui/icons-material/Delete';
// import CloseIcon from '@mui/icons-material/Close';
import Sidebar from '../../components/layout/sliderbar/Sidebar'
import HeaderMenu from '../../components/layout/header/HeaderMenu'
import Footer from '../../components/layout/footer/Footer'

const Multa = () => {
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
                                <h6 className="m-0 font-weight-bold text-primary">Multa</h6>
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
                    </div>
                </div>
                <Footer />
            </div>
        </div>
    )
}

export default Multa