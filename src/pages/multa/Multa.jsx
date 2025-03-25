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
                                                <th>Titulo</th>
                                                <th>Autor</th>
                                                <th>Ano</th>
                                                <th>Qtd</th>
                                                <th>Estado</th>
                                                {/* <th>Salary</th> */}
                                                <th>Acao</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>Tiger Nixon</td>
                                                <td>System Architect</td>
                                                <td>Edinburgh</td>
                                                <td>61</td>
                                                <td>2011/04/25</td>
                                                {/* <td> <Button onClick={() => handleArmazemEdit(row)}><Edit /></Button>
                                                    <Button onClick={() => handleArmazemDelete(row)}><DeleteIcon /></Button></td> */}
                                                {/* <td> <Button><Edit /></Button>
                                                    <Button ><DeleteIcon /></Button></td> */}
                                            </tr>
                                            <tr>
                                                <td>Garrett Winters</td>
                                                <td>Accountant</td>
                                                <td>Tokyo</td>
                                                <td>63</td>
                                                <td>2011/07/25</td>
                                                {/* <td> <Button><Edit /></Button>
                                                    <Button ><DeleteIcon /></Button></td> */}
                                            </tr>
                                            <tr>
                                                <td>Ashton Cox</td>
                                                <td>Junior Technical Author</td>
                                                <td>San Francisco</td>
                                                <td>66</td>
                                                <td>2009/01/12</td>
                                                {/* <td> <Button><Edit /></Button>
                                                    <Button ><DeleteIcon /></Button></td> */}
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

export default Multa