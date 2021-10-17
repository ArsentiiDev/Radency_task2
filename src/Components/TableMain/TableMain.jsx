import React from 'react'
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import { Typography } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import ArchiveIcon from '@mui/icons-material/Archive';
import DeleteIcon from '@mui/icons-material/Delete';
import { filterOptions, icons } from '../../services/helpers';

export default function TableMain(props) {

    const { records, filterOption,openInPopup,archiveHandler,deleteHandler } = props
    return (
        <>
          {records.filter(item => {
            if (filterOption === filterOptions.ALL)
            return item
            else if (filterOption === filterOptions.ARCHIVED)
            return !item.active
            else if (filterOption === filterOptions.ACTIVE)
            return item.active
            return item
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
            })}
        </>
    )
}
