import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import { useEffect, useState } from 'react';
import '../assets/styles/modalbox.scss'

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    pt: 2,
    px: 4,
    pb: 3,
};

const ModalBox = () => {
    const [open, setOpen] = useState(false);
    const handleOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };
    useEffect(() => {
        handleOpen();
    }, [])
    return (
        <div>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="child-modal-title"
                aria-describedby="child-modal-description"
            >
                <Box sx={{ ...style, width: 400 }}>
                    <h2 id="child-modal-title" className='modal__title'>metamask extention</h2>
                    <p id="child-modal-description" className='modal__text'>
                    To work with our application, you have to install the <span className='modal__span'>Metamask browser extension</span>
                    </p>
                    <Button className='modal__button' onClick={handleClose}>Skip this step</Button>
                </Box>
            </Modal>
        </div>
    )
}
export default ModalBox;