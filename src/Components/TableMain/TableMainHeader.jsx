import React from 'react'
import TableCell from '@mui/material/TableCell';
import ArchiveIcon from '@mui/icons-material/Archive';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

export default function TableMainHeader() {

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

    return (
        <>
            {
                columns.map((column) => (
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

        </>
    )
}
