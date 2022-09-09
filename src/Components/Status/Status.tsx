import { MenuItem, Select } from '@material-ui/core'
import React from 'react'

export default function Status(props: any) {
    return (
        <div>
            <Select value={ props.value }>
                <MenuItem value='Vacant'>Vacant</MenuItem>
                <MenuItem value='Booked'>Booked</MenuItem>
                <MenuItem value='In Use'>In Use</MenuItem>
            </Select>
        </div>
    )
}
