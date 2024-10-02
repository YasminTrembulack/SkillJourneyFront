import { StyledArea, StyledForm, StyledInput, StyledModalContent, StyledModalOverlay, StyledSubmitButton } from './styles';
import CircularButton from '../../../Components/CircularButton';
import AddIcon from '@mui/icons-material/Add';
import { Modal } from '@mui/material';
import { useContext, useState } from 'react';
import { api } from '../../../service/api';
import { getHeaders } from '../../../service/headers';
import { LanguageContext } from '../../../Context/language';
import { toast } from 'react-toastify';

interface AddTrainingButtonProps {
    onAdd: () => void;
}

export default function AddTrainingButton({ onAdd } : AddTrainingButtonProps){
    const [name, setName] = useState<string>('');
    const [description, setDescription] = useState<string>('');
    const [duration, setDuration] = useState<string>('');
    const [dueDate, setDueDate] = useState<string>('');

    const { getText } = useContext(LanguageContext);

    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>){
        e.preventDefault();

        const payload ={
            name : name,
            description : description,
            duration: duration,
            due_date : dueDate
        }
        try {
            await api.post('/training/create',payload,{
                headers: getHeaders()
            }); 
            toast.success(getText('createTrainingSuccess'));
            onAdd();
        } catch (error) {
            toast.error(getText('createTrainingError'));
            console.log(getText('createTrainingError'), error);
        }


        setOpen(false);
    }
  
    return(
        <>
            <CircularButton onClick={handleOpen} text="Create">
                <AddIcon/>
            </CircularButton>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <StyledModalOverlay>
                    <StyledModalContent>
                        <h3>{getText('createTraining')}</h3>
                        <StyledForm onSubmit={handleSubmit}>
                            <StyledInput
                                type="text"
                                placeholder={getText('name')}
                                value={name}
                                onChange={e => setName(e.target.value)}
                                required
                            />
                            <StyledArea 
                                placeholder={getText('description')+"..."} 
                                onChange={(e) => setDescription(e.target.value)} 
                                cols={34} 
                                rows={3} 
                                name="lyrics"
                            />
                            <StyledInput
                                type="number"
                                placeholder={getText('durationHours')}
                                value={duration}
                                onChange={e => setDuration(e.target.value)}
                                required
                            />
                            <StyledInput
                                type="date"
                                placeholder={getText('dueDate')}
                                value={dueDate}
                                onChange={e => setDueDate(e.target.value)}
                            />
                            <StyledSubmitButton type="submit">{getText('create')}</StyledSubmitButton>
                        </StyledForm>
                    </StyledModalContent>
                </StyledModalOverlay>
            </Modal>
        </>
    )
}


