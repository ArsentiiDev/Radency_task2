import React from 'react'
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import { Typography } from '@mui/material';
import { icons } from '../../services/helpers';

export default function TableSummary(props) {

    const { categories, records } = props
    return (
        <>
            {
                categories.map((category, index) => {
                    let arr = records.filter(el => {
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
                })
            }

        </>
    )
}
