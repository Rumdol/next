import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import Button from '@mui/material/Button';

const columns = [
  { id: 'productId', label: 'Product ID', minWidth: 170 },
  { id: 'productName', label: 'Product Name', minWidth: 170 },
  { id: 'brand', label: 'Brand', minWidth: 170 },
  { id: 'gender', label: 'Gender', minWidth: 100 },
  {
    id: 'price',
    label: 'Price',
    minWidth: 170,
    align: 'right',
    format: (value) => `$${value.toFixed(2)}`,
  },
  { id: 'status', label: 'Status', minWidth: 100 },
  { id: 'action', label: 'Action', minWidth: 100 },
];

export default function ProductTable() {
  const [rows, setRows] = React.useState([]); // State to store fetched rows
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  // Fetch data from API when the component mounts
  React.useEffect(() => {
    const fetchData = async () => {
      const baseUrl = "http://api.rumdul.store"; // Replace with your actual base URL

      try {
        const response = await fetch(`${baseUrl}/vendor/product`);
        const data = await response.json();
        console.log("Fetched data:", data);

        // Assuming the API response has the structure like:
        // { "data": [ { ...product data... }, { ...product data... } ] }
        const transformedData = data.data.map((product) =>
          createData(
            product.id, // Assuming 'id' is the product ID
            product.productName,
            product.brand,
            product.gender,
            product.price,
            product.status,
            ''
          )
        );
        setRows(transformedData); // Update rows state with transformed data
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData(); // Call the fetch function when component mounts
  }, []); // Empty dependency array ensures this runs only once when the component mounts

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const handleEdit = (productId) => {
    console.log(`Editing product: ${productId}`);
    // Add your edit logic here
  };

  const handleDelete = (productId) => {
    console.log(`Deleting product: ${productId}`);
    // Add your delete logic here
  };

  return (
    <Paper sx={{ width: '100%' }}>
      <TableContainer>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.productId}>
                    {columns.map((column) => {
                      const value = row[column.id];
                      if (column.id === 'action') {
                        return (
                          <TableCell key={column.id} align={column.align}>
                            <Button
                              variant="contained"
                              sx={{
                                backgroundColor: '#2ec4b6',
                                marginRight: '8px',
                                '&:hover': {
                                  backgroundColor: '#2ec4b6',
                                },
                              }}
                              onClick={() => handleEdit(row.productId)}
                            >
                              Edit
                            </Button>
                            <Button
                              variant="contained"
                              sx={{
                                backgroundColor: 'rgba(46, 196, 182, 0.5)', // 50% opacity
                                '&:hover': {
                                  backgroundColor: 'rgba(46, 196, 182, 0.5)',
                                },
                              }}
                              onClick={() => handleDelete(row.productId)}
                            >
                              Delete
                            </Button>
                          </TableCell>
                        );
                      }
                      return (
                        <TableCell key={column.id} align={column.align}>
                          {column.format && typeof value === 'number'
                            ? column.format(value)
                            : value}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
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

// Create data function
function createData(productId, productName, brand, gender, price, status, action) {
  return { productId, productName, brand, gender, price, status, action };
}
