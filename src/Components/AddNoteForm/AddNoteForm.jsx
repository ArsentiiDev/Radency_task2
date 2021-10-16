import React, { useEffect, useState } from 'react'
import { v4 as uuidv4 } from 'uuid';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import { InputLabel, Select } from '@mui/material';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Grid from '@mui/material/Grid';
import { createTheme } from '@mui/system';
import ButtonComponent from '../ButtonComponent';
import { addTodo, updateTodo } from '../Table/TableBody/TableSlice';
import { useDispatch, useSelector } from 'react-redux';
import { categories } from '../Table/TableBody/TableBody';

const theme = createTheme();

const initialValues = {
    id: 0,
    date: null,
    task: '',
    category: '',
    content: '',
    dates: null,
    active: null,

}


export default function AddNoteForm(props) {

    const {  recordForEdit,setOpen } = props
    const [values, setValues] = useState(initialValues)
    const dispatch = useDispatch()
    console.log(values)
    const  record = useSelector(state => 
    state.records.find(todo => todo.id === recordForEdit))

    const handleInputchange = (e) => {
        const { name, value } = e.target
        setValues({
            ...values,
            [name]: value
        })

    }

    useEffect(() => {
        if (recordForEdit)
        {
            setValues({
                ...record
            })

        }

    }, [recordForEdit,record])



    const handleSubmitForm = (e) => {
        e.preventDefault()
        if(recordForEdit){
            console.log('values',values)
            dispatch(updateTodo(values))
            setOpen(false)
            return
        }

        console.log(values)
        const now = new Date().toLocaleDateString().split('.').join('/')
        values['id'] = uuidv4()
        values['date'] = now
        let dates = values['content'].match(/([\d]+)([\-\./])([\d]+)([\-\./])([\d]+)/gm)
        if (!dates) dates = 'no dates'
        values['dates'] = dates
        values['active'] = true
        if (!categories.includes(values['category'])) {
            categories.push(values['category'])
        }
        dispatch(addTodo(values))
        setOpen(false)

    }


    return (
        <Box component="form"
            sx={{
                width: '100%',
                margin: theme.spacing(1)
            }}
            //onSubmit = {handleSubmit}
            onSubmit={handleSubmitForm}

        >
            <CssBaseline />
            <Grid container
                justifyContent="center"

                spacing={2}
                sx={{

                    bgColor: 'primary',
                }}
            >
                <Grid item xs={6}  >
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        id="task"
                        label="Name of Task"
                        name="task"
                        autoComplete="email"
                        value={values.task}
                        autoFocus
                        onChange={handleInputchange}
                    />

                    <FormControl
                        variant="filled"
                        sx={{
                            minWidth: 120,
                            mt: 1,
                            display: 'flex',
                            justifyContent: 'center'
                        }}

                    >
                        <InputLabel id="demo-simple-select-label">Choose Category</InputLabel>
                        <Select
                            label="category of task"
                            name="category"
                            id="demo-simple-select"
                            onChange={handleInputchange}
                            value={values.category}

                        >
                            <MenuItem value="Qoute">Qoute</MenuItem>
                            <MenuItem value="Random Thought">Random Thought</MenuItem>
                            <MenuItem value="Task">Task</MenuItem>
                            <MenuItem value="Idea">Idea</MenuItem>
                        </Select>
                    </FormControl>
                </Grid>
                <Grid item xs={6}>
                    <TextField
                        variant="filled"
                        margin="normal"
                        //fullWidth
                        name="content"
                        label="Content"
                        //type="text"
                        id="content"
                        multiline
                        rows={4}
                        onChange={handleInputchange}
                        value={values.content}
                    />
                </Grid>


                <ButtonComponent
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{ mt: 2, mb: 2 }}
                    text={recordForEdit ? "Update note" : "Add Note"}
                />
            </Grid>
        </Box>
    )
}
