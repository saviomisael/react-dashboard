import { Box, useTheme } from '@mui/material';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import { Header } from '../../components/Header';
import { mockDataContacts } from '../../data/mockData';
import { tokens } from '../../theme';

export const Contacts = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const columns = [
    {
      field: 'id',
      headerName: 'ID',
      flex: 0.5,
    },
    {
      field: 'registrarId',
      headerName: 'Registrar ID',
    },
    {
      field: 'name',
      headerName: 'Name',
      flex: 1,
      cellClassName: 'name-column--cell',
    },
    {
      field: 'age',
      headerName: 'Age',
      type: 'number',
      headerAlign: 'left',
      align: 'left',
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
      field: 'address',
      headerName: 'Address',
      flex: 1,
    },
    {
      field: 'city',
      headerName: 'City',
      flex: 1,
    },
    {
      field: 'zipCode',
      headerName: 'Zip Code',
      flex: 1,
    },
  ];

  return (
    <Box m="20px">
      <Header
        title="Contacts"
        subtitle="List of Contacts for Future Reference"
      />
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
          '& .MuiDataGrid-toolbarContainer .MuiButton-text': {
            color: `${colors.grey[100]} !important`,
          },
        }}
      >
        <DataGrid
          rows={mockDataContacts}
          columns={columns}
          sx={{ fontSize: '16px', textAlign: 'center' }}
          slots={{
            toolbar: GridToolbar,
          }}
        />
      </Box>
    </Box>
  );
};
