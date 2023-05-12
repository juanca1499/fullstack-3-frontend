import { Dialog, DialogContent, DialogTitle, DialogActions, Button } from "@mui/material";
import ProjectForm from '../forms/ProjectForm';

export default function AddNewProjectModal( {open, onClose, onSubmit, onEdit, onDelete }) {
    return(
        <Dialog open={ open } onClose={onClose}>
            <DialogTitle>Adding a new project...</DialogTitle>    
            <DialogContent>
                <ProjectForm onSubmit={onSubmit}/>
            </DialogContent>
            <DialogActions>
                <Button variant='contained' color='error' 
                type='reset' form='project-form'>
                    Clear form
                </Button>
                <Button variant='contained' type='submit' 
                form='project-form' onClick={onClose}>
                    Add project
                </Button>
            </DialogActions>
        </Dialog>
    );
}