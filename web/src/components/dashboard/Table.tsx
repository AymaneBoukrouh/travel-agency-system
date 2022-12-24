import { Table, TableCell, TableBody, TableContainer, TableHead, TableRow, Paper } from '@mui/material';

import { Edit, Delete } from '@mui/icons-material';

interface DashboardTableProps {
  columns: string[];
  column_names: string[];
  data: any;
  handlers: any[];
}

const DashboardTable = (props: DashboardTableProps) => {
  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            {props.column_names.map((column_name) => (
              <TableCell key={column_name} className="fw-bold" scope="col">{column_name}</TableCell>
            ))}
            <TableCell scope="col" className="text-center fw-bold" style={{ width: '200px' }}>Actions</TableCell>
          </TableRow>
        </TableHead>
        {props.data && 
        <TableBody>
          {props.data.map((item) => (
            <TableRow key={item.id}>
              {props.columns.map((column) => (
                <TableCell key={`${column}-${item.id}`} className={`${ column==='id' ? 'fw-bold ' : '' }align-middle`}>{item[column]}</TableCell>
              ))}
              <TableCell className="text-center">
                <button className="btn text-primary"><Edit /></button>
                <button onClick={() => props.handlers.deleteModalHandler(item.id)} className="btn text-danger"><Delete /></button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
        }
        {!props.data && <tbody></tbody>}
      </Table>
    </TableContainer>
  )
}

export default DashboardTable;
