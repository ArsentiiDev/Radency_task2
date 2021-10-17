import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import FilterSelectComp from '../../FilterComponent/FilterSelectComp';
import { useDispatch, useSelector } from "react-redux";
import {
    deleteTodo,
    recordsSelector,
    archiveTodo,
} from './TableSlice'
import TableMain from '../../TableMain/TableMain';
import TableSummary from '../../TableSummary/TableSummary';
import TableMainHeader from '../../TableMain/TableMainHeader';
import TableSummaryHeader from '../../TableSummary/TableSummaryHeader';

export const categories = []

export default function TableBodyMain(props) {

    const { main, setRecordsForEdit, setOpen} = props;
    const [filterOption, setFilterOption] = React.useState('All')
    const dispatch = useDispatch()
    const records = useSelector(recordsSelector)
    
    records.forEach(el=>{
        if(!categories.includes(el.category)){
            categories.push(el.category)
        }
    })

    const openInPopup = (item) => {
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
                                {main 
                                    ?  <TableMainHeader 
                                        />
                                   
                                     : <TableSummaryHeader
                                        />
                                }
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {main 
                            ?  <TableMain 
                                records = {records} 
                                filterOption ={filterOption} 
                                openInPopup = {openInPopup}
                                archiveHandler = {archiveHandler}
                                deleteHandler = {deleteHandler}
                                />
                            : <TableSummary 
                                categories ={categories} 
                                records = {records} 
                                />
                                 }
                        </TableBody>
                    </Table>
                </TableContainer>
            </Paper>
        </>
    );
}