import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Modal } from 'react-bootstrap';
import { useTheme, Button, FormControl, TextField } from '@mui/material';

import DashboardTable from '@/components/dashboard/Table';
import { User } from '@/types/User';
import { useUser } from '@/hooks/useUser';


const Users = () => {
  const theme = useTheme();

  // user
  const [users, setUsers] = useState<User[]>([]);
  const [userDetails, setUserDetails] = useState<User>({} as User);
  const { getUsers, getUser, updateUser, deleteUser, error } = useUser();

  // user handlers
  const checkUserDetails = () => { // check that all fields are filled out
    if (!userDetails.username || !userDetails.email || !userDetails.first_name || !userDetails.last_name) {
      setUserModalError('Please fill out all fields.');
      return false;
    }
  }

  const handleUpdateUser = async () => {
    checkUserDetails(); // check that all fields are filled out
    const updatedUser = await updateUser(userDetails);

    if (updatedUser) {
      setUsers(users.map(user => user.id === userDetails.id ? userDetails : user));
      handleCloseUserModal();
      setUserModalError(null);
    }

    else {
      setUserModalError('An error occured.');
    }
  };

  const handleDeleteUser = async () => {
    const deletedUser = await deleteUser(userDetails.id);

    if (deletedUser) {
      setUsers(users.filter(user => user.id !== userDetails.id ));
      handleCloseDeleteUserModal();
      setDeleteUserModalError(null);
    }

    else {
      setDeleteUserModalError('An error occurred.');
    }
  };

  // edit modal
  const [showUserModal, setShowUserModal] = useState<boolean>(false);
  const [userModalError, setUserModalError] = useState<string | null>(null);

  const handleOpenEditUserModal = (id: number) => {
    setUserDetails(users.find(user => user.id === id));
    setShowUserModal(true);
  }

  const handleCloseUserModal = () => setShowUserModal(false);

  // delete modal
  const [showDeleteUserModal, setShowDeleteUserModal] = useState<boolean>(false);
  const [deleteUserModalError, setDeleteUserModalError] = useState<string | null>(null);

  const handleOpenDeleteUserModal = (id: number) => {
    setUserDetails(users.find(user => user.id === id));
    setShowDeleteUserModal(true);
  };

  const handleCloseDeleteUserModal = () => setShowDeleteUserModal(false);

  // get users
  useEffect(() => {
    getUsers().then((data) => setUsers(data));
  }, []);


  return (
    <div className="container-fluid bg-white p-5 rounded-3">
      <div className="d-flex justify-content-center">
        <Modal show={showUserModal} onHide={handleCloseUserModal}>
          <Modal.Header closeButton>
            <Modal.Title>Edit User</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <FormControl variant="standard" fullWidth>
              {userModalError && (
                <div className="alert alert-danger" role="alert">
                  {userModalError}
                </div>
              )}
              <div className="row mb-3 px-3">
                <div className="col">
                  <TextField 
                    required 
                    id="new-user-username" 
                    label="Username" 
                    variant="standard" 
                    fullWidth 
                    value = { userDetails.username }
                    onChange = { (e) => setUserDetails({ ...userDetails, username: e.target.value }) }
                  />
                </div>
                <div className="col">
                  <TextField
                    required
                    id="new-user-email"
                    label="E-Mail"
                    variant="standard"
                    fullWidth
                    value = { userDetails.email }
                    onChange = { (e) => setUserDetails({ ...userDetails, email: e.target.value }) }
                  />
                </div>
              </div>
              <div className="row mb-3 px-3">
                <div className="col">
                  <TextField
                    required
                    id="new-user-first-name"
                    label="First Name"
                    variant="standard"
                    fullWidth
                    value = { userDetails.first_name }
                    onChange = { (e) => setUserDetails({ ...userDetails, first_name: e.target.value }) }
                  />
                </div>
                <div className="col">
                  <TextField
                    required
                    id="new-user-last-name"
                    label="Last Name"
                    variant="standard"
                    fullWidth
                    value = { userDetails.last_name }
                    onChange = { (e) => setUserDetails({ ...userDetails, last_name: e.target.value }) }
                  />
                </div>
              </div>
            </FormControl>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="contained" color="primary" className="me-2" onClick={handleUpdateUser}>Save</Button>
            <Button variant="outlined" color="error" onClick={handleCloseUserModal}>Cancel</Button>
          </Modal.Footer>
        </Modal>
      </div>
      <h3 className="mb-4">Users</h3>
      <DashboardTable 
        columns = {['id', 'username', 'email', 'first_name', 'last_name']}
        column_names = {['#', 'Username', 'E-Mail', 'First Name', 'Last Name']}
        data = {users}
        handlers = {{
          editModalHandler: handleOpenEditUserModal,
          deleteModalHandler: handleOpenDeleteUserModal 
        }}
      />
      <Modal show={showDeleteUserModal} onHide={handleCloseDeleteUserModal}>
        <Modal.Header closeButton>
          <Modal.Title>Delete User</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Are you sure you want to delete the user "{ userDetails.first_name } { userDetails.last_name }"?</p>
          {deleteUserModalError && (
            <div className="alert alert-danger" role="alert">
              {deleteUserModalError}
            </div>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="contained" color="error" className="me-2" onClick={handleDeleteUser}>Delete</Button>
          <Button variant="outlined" color="primary" onClick={handleCloseDeleteUserModal}>Cancel</Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default Users;
