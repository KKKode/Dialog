import React from 'react'
import { Dialog, DialogTitle, DialogContent } from "@material-ui/core"
import DialogMenu from './index';
import DeleteForeverOutlinedIcon from '@material-ui/icons/DeleteForeverOutlined';


const NavBar = () => {

    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };
    return (

        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">Fungy</a>
                    <form className="d-flex">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        {/* <button className="btn btn-outline-success" type="submit">Search</button> */}
                    </form>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link " aria-current="page" href="#">Explore</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#" >My items</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Following</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Activity</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">How it works</a>
                            </li>

                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Community
                                </a>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li><a className="dropdown-item" href="#">Value of X</a></li>
                                    <li><a className="dropdown-item" href="#">Value of Y</a></li>
                                    <li><a className="dropdown-item" href="#">Value of Z</a></li>
                                </ul>
                            </li>

                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Token
                                </a>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li><a className="dropdown-item" href="#" >Create a Collection</a></li>
                                    <li><a className="dropdown-item" href="#">My Profile</a></li>
                                    <li><a className="dropdown-item" href="#">My Favorites</a></li>
                                    <li><a className="dropdown-item" href="#">Manage Funds</a></li>
                                    <li><a className="dropdown-item" href="#">Log Out</a></li>
                                </ul>
                            </li>
                            <button className="btn btn-primary" onClick={handleClickOpen} >Create Collection</button>
                            {/* <li className="nav-item">
          <a className="nav-link disabled">Disabled</a>
        </li> */}
                        </ul>

                    </div>
                </div>
            </nav>
            <Dialog aria-labelledby="customized-dialog-title" open={open}>
                <DialogTitle id="customized-dialog-title" style={{ color: "Blue" }} >
                    Collection
                    <DeleteForeverOutlinedIcon style={{ marginLeft: 150, color: "red" }} onClick={handleClose} />
                </DialogTitle>

                <DialogContent dividers>
                    <DialogMenu />
                </DialogContent>

            </Dialog>

        </div>

    )
}

export default NavBar

