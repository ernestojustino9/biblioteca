import React from "react";
import HomeIcon from '@mui/icons-material/Home';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import PersonIcon from '@mui/icons-material/Person';
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div>
      {/* <!-- Left Panel --> */}
      <ul
        className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion"
        id="accordionSidebar"
      >
        {/* <!-- Sidebar - Brand --> */}
        <Link
          className="sidebar-brand d-flex align-items-center justify-content-center"
          to="/"
        >
          <div className="sidebar-brand-icon rotate-n-15">
            {/* <i class="fa-solid fa-book-open"></i> */}
          </div>
          <div className="sidebar-brand-text mx-3">
            Biblioteca
            {/* <sup>2</sup> */}
          </div>
        </Link>

        {/* <!-- Divider --> */}
        <hr className="sidebar-divider my-0" />

        {/* <!-- Nav Item - Dashboard --> */}
        <li className="nav-item active">
          <Link
            className="nav-link"
            to="/"
          >
            <span> <HomeIcon /> Dashboard</span>
          </Link>
        </li>

        {/* <!-- Divider --> */}
        <hr className="sidebar-divider" />

        {/* <!-- Heading --> */}
        <li className="nav-item">
          <Link
            className="nav-link collapsed"
            to="/categorias"
          >
            {/* <i class="fa-solid fa-book"></i> */}
            <span><LibraryBooksIcon />Categorias</span>
          </Link>
        </li>

        {/* <!-- Nav Item - Utilities Collapse Menu --> */}
        <li className="nav-item">
          <Link
            className="nav-link collapsed"
            to="/reserva"
          // data-toggle="collapse"
          // data-target="#collapseUtilities"
          // aria-expanded="true"
          // aria-controls="collapseUtilities"
          >
            {/* <i className="fas fa-fw fa-wrench"></i> */}
            <span>Reserva</span>
          </Link>
        </li>
        {/* <!-- Divider --> */}
        <hr className="sidebar-divider" />
        {/* <!-- Nav Item - Pages Collapse Menu --> */}
        <li className="nav-item">
          <Link
            className="nav-link collapsed"
            to="/emprestimo"
          // data-toggle="collapse"
          // data-target="#collapsePages"
          // aria-expanded="true"
          // aria-controls="collapsePages"
          >
            {/* <i className="fas fa-fw fa-folder"></i> */}
            <span>Emprestimo</span>
          </Link>
        </li>

        {/* <!-- Divider --> */}
        <hr className="sidebar-divider" />
        {/* <!-- Nav Item - Pages Collapse Menu --> */}
        <li className="nav-item">
          <Link
            className="nav-link collapsed"
            to="/multa"
          // data-toggle="collapse"
          // data-target="#collapsePages"
          // aria-expanded="true"
          // aria-controls="collapsePages"
          >
            {/* <i className="fas fa-fw fa-folder"></i> */}
            <span>Multa</span>
          </Link>
        </li>

        {/* <!-- Nav Item - Charts --> */}
        {/* <li className="nav-item">
          <a className="nav-link" href="charts.html">
            <i className="fas fa-fw fa-chart-area"></i>
            <span>Charts</span>
          </a>
        </li> */}

        {/* <!-- Nav Item - Tables --> */}
        {/* <li className="nav-item">
          <a className="nav-link" href="tables.html">
            <i className="fas fa-fw fa-table"></i>
            <span>Tables</span>
          </a>
        </li> */}
        {/* <!-- Divider --> */}
        <hr className="sidebar-divider d-none d-md-block" />
      </ul>
    </div>
  );
};

export default Sidebar;
