import React from 'react'
import TableCell from '@mui/material/TableCell';

export default function TableSummaryHeader() {

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

    return (
        <>
            {
                columns2.map((column) => (
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
