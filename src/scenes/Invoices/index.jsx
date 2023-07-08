import { Box, Typography, useTheme } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import { Header } from '../../components/Header';
import { mockDataInvoices } from '../../data/mockData';
import { tokens } from '../../theme';

export const Invoices = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const columns = [
    {
      field: 'id',
      headerName: 'ID',
    },
    {
      field: 'name',
      headerName: 'Name',
      flex: 1,
      cellClassName: 'name-column--cell',
    },
    {
      field: 'phone',
      headerName: 'Phone Number',
      flex: 1,
    },
    {
      field: 'email',
      headerName: 'Email',
      flex: 1,
    },
    {
      field: 'cost',
      headerName: 'Cost',
      flex: 1,
      renderCell: ({ row: { cost } }) => (
        <Typography color={colors.greenAccent[500]}>{cost}</Typography>
      ),
    },
    {
      field: 'date',
      headerName: 'Date',
      flex: 1,
    },
  ];

  return (
    <Box m="20px">
      <Header title="Invoices" subtitle="List of Invoice Balances" />
      <Box
        m="40px 0 0 0"
        sx={{
          '& .name-column--cell': {
            color: colors.greenAccent[300],
          },
          '& .MuiDataGrid-root': {
            border: 'none',
          },
          '& .MuiDataGrid-cell': {
            borderBottom: 'none',
            paddingBottom: '5px',
            paddingTop: '5px',
          },
          '& .MuiDataGrid-columnHeaders': {
            backgroundColor: colors.blueAccent[700],
            borderBottom: 'none',
          },
          '& .MuiDataGrid-virtualScroller': {
            backgroundColor: colors.primary[400],
          },
          '& .MuiDataGrid-footerContainer': {
            borderTop: 'none',
            backgroundColor: colors.blueAccent[700],
          },
          '& .MuiCheckbox-root': {
            color: `${colors.greenAccent[200]} !important`,
          },
        }}
      >
        <DataGrid
          checkboxSelection
          rows={mockDataInvoices}
          columns={columns}
          sx={{ fontSize: '16px', textAlign: 'center' }}
        />
      </Box>
    </Box>
  );
};
