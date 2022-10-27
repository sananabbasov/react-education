import { Avatar, Box, Button, IconButton, Menu, MenuItem, Modal, Tooltip, Typography } from '@mui/material'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { GetByEmailAction } from '../../redux/actions/AuthActions'
import CoursesCreateModal from '../CoursesModal/CoursesCreateModal'
import CoursesListModal from '../CoursesModal/CoursesListModal'
import '../Header/header.scss'


function Header() {
    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
    };

    const [isAuth, setAuth] = useState(false)
    const [anchorElNav, setAnchorElNav] = useState(null);
    const [anchorElUser, setAnchorElUser] = useState(null);

    const [openCreate, setOpenCreate] = useState(false);
    const handleOpenCreate = () => setOpenCreate(true);
    const handleCloseCreate = () => setOpenCreate(false);



    // Create course state modal start
    const [courseCreateModal, setCourseCreateModal] = useState(false);
    const handleOpenCreateModal = () => setCourseCreateModal(true);
    const handleCloseCreateModal = () => setCourseCreateModal(false);
    // Create course state modal end


    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };
    const { user } = useSelector((state) => state.user)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(GetByEmailAction())
    }, [dispatch])

    return (
        <div className="header">
            <div className="header__container">
                <div className="header__container__logo">
                    <img src="https://compar.edu.az/staticfiles/defaults/img/compar%20logo1%402x.png" alt="Compar Academy" />
                </div>
                <div className="header__container__nav">
                    <ul className='header__container__nav__list'>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/about">About</Link>
                        </li>
                        <li>Courses</li>
                        <li>Contact</li>
                    </ul>
                </div>
                <div className="header__container__auth">
                    {
                        user.length == 0 ?
                            <Link to="/auth">Login</Link>
                            :
                            <Box sx={{ flexGrow: 0 }}>
                                <Tooltip title="Open settings">
                                    <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                                        <Avatar alt="Eli Xudiyev" src="/static/images/avatar/2.jpg" />
                                    </IconButton>

                                </Tooltip>
                                <Menu
                                    sx={{ mt: '45px' }}
                                    id="menu-appbar"
                                    anchorEl={anchorElUser}
                                    anchorOrigin={{
                                        vertical: 'top',
                                        horizontal: 'right',
                                    }}
                                    keepMounted
                                    transformOrigin={{
                                        vertical: 'top',
                                        horizontal: 'right',
                                    }}
                                    open={Boolean(anchorElUser)}
                                    onClose={handleCloseUserMenu}
                                >
                                    <MenuItem onClick={handleCloseUserMenu}>
                                        <Link to="createcourse">Add course</Link>
                                    </MenuItem>
                                    <MenuItem onClick={handleCloseUserMenu}>
                                        <Typography textAlign="center">Add blog</Typography>
                                    </MenuItem>
                                    <MenuItem onClick={handleCloseUserMenu}>
                                        <Typography textAlign="center">Add category</Typography>
                                    </MenuItem>
                                    <MenuItem onClick={handleCloseUserMenu}>
                                        <Typography textAlign="center">Logout</Typography>
                                    </MenuItem>
                                </Menu>
                            </Box>
                    }
                </div>
            </div>
            <Modal
                open={openCreate}
                onClose={handleCloseCreate}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        Course create
                    </Typography>
                    <CoursesCreateModal />
                </Box>
            </Modal>

            
        </div>
    )
}

export default Header