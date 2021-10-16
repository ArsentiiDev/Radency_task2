import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import ArchiveIcon from '@mui/icons-material/Archive';
import DeleteIcon from '@mui/icons-material/Delete';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import LightbulbIcon from '@mui/icons-material/Lightbulb';
import AddReactionIcon from '@mui/icons-material/AddReaction';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';
import { Typography } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
//import { categories } from '../../../services/task'
import FilterSelectComp from '../../FilterComponent/FilterSelectComp';

import { useDispatch, useSelector } from "react-redux";
import {
    addTodo,
    updateTodo,
    deleteTodo,
    recordsSelector,
    archiveTodo,
} from './TableSlice'


const columns = [
    { id: 'name', label: 'Name', minWidth: 120 },
    { id: 'created', label: 'Created', minWidth: 100 },
    {
        id: 'category',
        label: 'Category',
        minWidth: 100,
        align: 'left',
    },
    {
        id: 'content',
        label: 'Content',
        minWidth: 170,
        align: 'left',
    },
    {
        id: 'dates',
        label: 'Dates',
        minWidth: 100,
        align: 'left',
    }, {
        id: 'icons',
        label: <>
            <EditIcon sx={{ color: 'transparent' }} /> <ArchiveIcon />   <DeleteIcon />
        </>
    }
];
const columns2 = [
    { id: 'name', label: 'Name', minWidth: 120 },
    { id: 'active', label: 'Active', minWidth: 100 },
    {
        id: 'archive',
        label: 'Archived',
        minWidth: 100,
        align: 'left',
    }
];

export const categories = []


const icons = {
    "Task": <FormatListBulletedIcon />,
    "Random Thought": <AddReactionIcon />,
    "Idea": <LightbulbIcon />,
    "Qoute": <FormatQuoteIcon />
}
export default function TableBodyMain(props) {

    const { main, setRecordsForEdit, setOpen, archiveRecordHandler, deleteRecordHandler } = props;
    const [filterOption, setFilterOption] = React.useState('All')
    const dispatch = useDispatch()
    const Allrecords = useSelector(recordsSelector)

    
    Allrecords.forEach(el=>{
        if(!categories.includes(el.category)){
            categories.push(el.category)
        }
    })

    console.log(Allrecords)



    const openInPopup = (item) => {
        //setRecordsForEdit(item)
        setOpen(true)
        setRecordsForEdit(item.id)
    }

    const archiveHandler = (item) => {
        dispatch(archiveTodo(item.id))
    }

    const deleteHandler = (item) => {
        dispatch(deleteTodo(item.id))
    }



    return (
        <>
            {main && <FilterSelectComp setFilterOption={setFilterOption} />}
            <Paper sx={{ width: '100%', overflow: 'hidden' }}>
                <TableContainer sx={{ maxHeight: 440 }}>
                    <Table stickyHeader aria-label="sticky table">
                        <TableHead>
                            <TableRow>
                                {
                                    main ? columns.map((column) => (
                                        <TableCell
                                            key={column.id}
                                            align={column.align}
                                            style={{
                                                minWidth: column.minWidth,
                                                fontWeight: 800
                                            }}
                                        >
                                            {column.label}
                                        </TableCell>
                                    )) : columns2.map((column) => (
                                        <TableCell
                                            key={column.id}
                                            align={column.align}
                                            style={{
                                                minWidth: column.minWidth,
                                                fontWeight: 800
                                            }}
                                        >
                                            {column.label}
                                        </TableCell>
                                    ))
                                }
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {main ? Allrecords
                                .filter(item => {
                                    if (filterOption === "All")
                                        return item
                                    else if (filterOption === "Archived")
                                        return !item.active
                                    else if (filterOption === "Active")
                                        return item.active
                                })
                                .map(item => {
                                    return (
                                        <TableRow hover key={item.id}>
                                            <TableCell sx={{
                                                alignItems: 'center'
                                            }}> {
                                                    icons[item.category]}

                                                <Typography variant="body1">
                                                    {item.task}</Typography>
                                            </TableCell>
                                            <TableCell > {item.date}</TableCell>
                                            <TableCell > {item.category}</TableCell>
                                            <TableCell > {item.content}</TableCell>
                                            <TableCell > {item.dates}</TableCell>
                                            <TableCell>
                                                <EditIcon sx={{
                                                    cursor: 'pointer'
                                                }} onClick={() => { openInPopup(item) }} />

                                                <ArchiveIcon sx={{
                                                    cursor: 'pointer'
                                                }} onClick={() => { archiveHandler(item) }} />

                                                <DeleteIcon sx={{
                                                    cursor: 'pointer'
                                                }} onClick={() => { deleteHandler(item) }} />

                                            </TableCell>
                                        </TableRow>
                                    );
                                }) : categories.map((category, index) => {
                                    let arr = Allrecords.filter(el => {
                                        return el.category === category
                                    })
                                    return (
                                        <TableRow hover key={index} >
                                            <TableCell>
                                                {icons[category]}
                                                <Typography variant="body1">
                                                    {category}
                                                </Typography>
                                            </TableCell>
                                            <TableCell>
                                                {arr.reduce((a, b) => {
                                                    if (b.active)
                                                        return a = a + 1
                                                    else return a
                                                }, 0)}
                                            </TableCell>
                                            <TableCell>
                                                {arr.reduce((a, b) => {
                                                    if (!b.active)
                                                        return a = a + 1
                                                    else return a
                                                }, 0)}
                                            </TableCell>
                                        </TableRow>

                                    )
                                })}
                        </TableBody>
                    </Table>
                </TableContainer>

            </Paper>
        </>

    );
}