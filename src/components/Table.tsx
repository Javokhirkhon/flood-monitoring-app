import {
  TableContainer,
  Table as MuiTable,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Paper,
} from '@mui/material'
import { Reading } from '../types'

const Table = ({ readings }: { readings: Reading[] }) => (
  <TableContainer component={Paper}>
    <MuiTable>
      <TableHead>
        <TableRow>
          <TableCell>#</TableCell>
          <TableCell>Date</TableCell>
          <TableCell>Value</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {readings.map(({ dateTime, value }, index: number) => (
          <TableRow
            key={index}
            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
          >
            <TableCell>{index + 1}</TableCell>
            <TableCell>{new Date(dateTime).toString()}</TableCell>
            <TableCell>{value}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </MuiTable>
  </TableContainer>
)

export default Table
