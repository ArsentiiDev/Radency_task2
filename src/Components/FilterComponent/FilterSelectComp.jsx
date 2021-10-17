import React from 'react'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { filterOptions } from '../../services/helpers';


export default function FilterSelectComp(props) {

    const {setFilterOption} = props

    const handleFilter = (e) => {
        setFilterOption(e.target.value)
    }

    return (
        <FormControl sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="filter-option">Filter todos</InputLabel>
        <Select
          labelId="filter-option"
          id="filter-option"
          label="Filter todos"
          onChange = {handleFilter}
        >
          <MenuItem value={filterOptions.ALL}>All</MenuItem>
          <MenuItem value={filterOptions.ARCHIVED}>Archived</MenuItem>
          <MenuItem value={filterOptions.ACTIVE}>Active</MenuItem>
        </Select>
      </FormControl>
    )
}
