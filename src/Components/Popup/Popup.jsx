import { Dialog, DialogContent, DialogTitle, Typography, Button} from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import CloseIcon from '@mui/icons-material/Close';

import Avatar from '@mui/material/Avatar';
import AddTaskIcon from '@mui/icons-material/AddTask';

export default function Popup(props) {

    

    const {  children, open, setOpenPopup } = props

    return (
        <Dialog open={open} maxWidth="md" sx={{
           
            // top: theme.spacing(2)
        }}>
            <DialogTitle>
                <Box sx={{
                    display: 'flex',
                    justifyContent: 'space-between'
                }}>
                    <Typography variant="h6" component="div" sx={{ 
                    display:'flex',
                    alignItems:'center',
                    flex: 1,
                     flexDirection: 'row'}}>
                        <Avatar sx={{ mt: 1, bgcolor: 'secondary.main',mr:2 }}>
                            <AddTaskIcon />
                        </Avatar>
                        Add note
                    </Typography>
                    <Button
                        onClick={() => { setOpenPopup(false) }}
                    >
                        <CloseIcon />

                    </Button>

                </Box>
            </DialogTitle>
            <DialogContent dividers>
                {children}
            </DialogContent>

        </Dialog>
    )
}
