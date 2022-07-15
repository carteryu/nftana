import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import { styled } from '@mui/material/styles';
import { Link } from "react-router-dom";



const columns = [
  { id: 'rank', label: 'Rank', minWidth: 170 },
  { id: 'nft', label: 'NFT', minWidth: 100 },
  {
    id: 'token',
    label: 'Token',
    minWidth: 170,
    align: 'right',
    format: (value) => value.toLocaleString('en-US'),
  },
  {
    id: 'price',
    label: 'Price (USD)',
    minWidth: 170,
    align: 'right',
    format: (value) => value.toLocaleString('en-US'),
  },
  {
    id: 'sevenDay',
    label: '7d (%)',
    minWidth: 170,
    align: 'right',
    format: (value) => value.toFixed(2),
  },
  {
    id: 'marketCap',
    label: 'Market Cap',
    minWidth: 170,
    align: 'right',
    format: (value) => value.toLocaleString('en-US'),
  },
  {
    id: 'secondaryMarket',
    label: 'Exchange',
    minWidth: 170,
    align: 'right',
    format: (value) => value.toFixed(2),
  },
];


function createData(rank, nft,token, price, size, sevenDay) {
//   const density = population / size;
  return { rank, nft , token, price, size, sevenDay};
}

const rows = [
  createData('1', 'Axie Infinity', 'AXS', 123123123, 123123123, 12, 'https://google.com'),
  createData('2', 'Axie Infinity', 'AXS', 123123123, 123123123),
  createData('3', 'Axie Infinity', 'AXS', 123123123, 123123123),
  createData('Axie Infinity', 'AXS', 123123123, 123123123),
  createData('Axie Infinity', 'AXS', 123123123, 123123123),
  createData('Axie Infinity', 'AXS', 123123123, 123123123),
  createData('Axie Infinity', 'AXS', 123123123, 123123123),
  createData('Axie Infinity', 'AXS', 123123123, 123123123),
  createData('Axie Infinity', 'AXS', 123123123, 123123123),

  createData('Test1', 'Test2', 'Int', 123.5),

];
const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
      // backgroundColor: theme.palette.action.hover,
      // backgroundColor: 'red',
    },
    // hide last border
    // '&:last-child td, &:last-child th': {
    //   border: 0,
    // },
  }));
 

export default function StickyHeadTable() {
  // const navigate = useNavigate();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const createSortHandler = (property) => (event) => {
    alert('test')

    //navigate('blog');
  };


//   <Link
//   key={element.name}
//   to={element.link}
//   className={classes.noDecoration}
//   onClick={handleMobileDrawerClose}
// >
//   <Button
//     color="white"
//     size="large"
//     classes={{ text: classes.menuButtonText }}
//   >
//     {element.name}
//   </Button>
// </Link>

  return (
    <Paper sx={{ width: '100%'}}>
      <TableContainer sx={{ maxHeight: 880 }}>
        <Table stickyHeader aria-label="sticky table" sx={{ backgroundColor: 'white' }}>
          <TableHead id="head">
            <TableRow >
              {columns.map((column) => (
                <TableCell
                  sx={{ color: '#fff', backgroundColor: 'rgb(58,59,60)'}}
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody  >
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => {
                return (
                  <StyledTableRow onClick={createSortHandler()} hover role="checkbox" tabIndex={-1} key={row.code}>
                    {columns.map((column) => {
                      const value = row[column.id];
                      return (
                        
                            <TableCell sx={{ color: '#fff', backgroundColor: 'rgb(58,59,60)'}} key={column.id} align={column.align}>
                            {column.format && typeof value === 'number'
                                ? column.format(value)
                                : value}
                                <Link to={'/blog'}></Link>
                            </TableCell>
                      );
                    })}
                  </StyledTableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        sx={{ color: '#fff', backgroundColor: 'rgb(58,59,60)'}}
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
}
