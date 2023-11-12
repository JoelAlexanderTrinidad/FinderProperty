import PropTypes from 'prop-types';
import './ListPropertyUser.css' 
import useProperty from '../../hooks/useProperty';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useEffect, useState } from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

export const ListPropertyUser = ({userProperties, handleList}) => {

    const {setEditProperty, setpropertyID } = useProperty();
    const navigate = useNavigate();
    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
      };
    
      const handleClose = () => {
        setOpen(false);
      };

    useEffect(() => {
    }, [userProperties])

    const handleEdit = (property) => {
        setEditProperty(property);
        navigate("/editProperty")
    }

    const handleClick = async (propertyID) => {
        setpropertyID(propertyID);
        navigate("/details");
    }

    const handleDelete = async (property) => {
        try {
            await axios.delete(`http://localhost:3000/property/allProperty/property/delete/${property.id}`)
            handleClose();
            handleList();
        } catch (error) {
            console.log(error);
        }
    }

  return (
    <>
       {
         userProperties.map((property, i) => (
            <div key={i} className=' border-solid border-2 p-2 w-11/12 mx-auto my-2'>
                <div className='flex justify-between'>
                    <p onClick={ () => handleClick(property.id)} className='font-size cursor-pointer'>{property.name}</p>
                    <div className='flex gap-2'>
                        <button onClick={() => handleEdit(property)}><i className="fas fa-edit cursor-pointer text-green-500"></i></button>
                        <button onClick={handleClickOpen} ><i className="fas fa-trash-alt cursor-pointer text-red-500"></i></button>
                        <Dialog
                            open={open}
                            onClose={handleClose}
                            aria-labelledby="alert-dialog-title"
                            aria-describedby="alert-dialog-description"
                        >
                            <DialogTitle id="alert-dialog-title">
                            {"Are you sure you want to delete the property?"}
                             <i className="fas fa-exclamation-circle ms-3 text-red-500"></i>
                            </DialogTitle>
                            <DialogContent>
                            <DialogContentText id="alert-dialog-description">
                            
                                This action will permanently delete the property
                            </DialogContentText>
                            </DialogContent>
                            <DialogActions>
                            <Button onClick={handleClose}>CANCEL</Button>
                            <Button onClick={() => handleDelete(property)} autoFocus>
                                OK
                            </Button>
                            </DialogActions>
                        </Dialog>
                    </div>
                </div>
            </div>
        ))
       }
       
   
    </>
  )
}

ListPropertyUser.propTypes = {
    userProperties: PropTypes.arrayOf(PropTypes.object).isRequired,
    handleList: PropTypes.arrayOf(PropTypes.func).isRequired,
};