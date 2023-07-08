import {
  AdminPanelSettingsOutlined,
  LockOpenOutlined,
  SecurityOutlined,
} from '@mui/icons-material';
import { Box, Typography, useTheme } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import { Header } from '../../components/Header';
import { mockDataTeam } from '../../data/mockData';
import { tokens } from '../../theme';

export const Team = () => {
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
      field: 'access',
      headerName: 'Access',
      flex: 0.8,
      headerAlign: 'center',
      renderCell: ({ row: { access } }) => {
        return (
          <Box
            width="60%"
            m="0 auto"
            p="5px"
            display="flex"
            justifyContent="center"
            bgcolor={
              access === 'admin'
                ? colors.greenAccent[600]
                : colors.greenAccent[700]
            }
            borderRadius="4px"
          >
            {access === 'admin' && <AdminPanelSettingsOutlined />}
            {access === 'manager' && <SecurityOutlined />}
            {access === 'user' && <LockOpenOutlined />}
            <Typography color={colors.grey[100]} sx={{ ml: '5px' }}>
              {access}
            </Typography>
          </Box>
        );
      },
    },
  ];

  return (
    <Box m="20px">
      <Header title="Team" subtitle="Managing the Team Members" />
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
        }}
      >
        <DataGrid
          rows={mockDataTeam}
          columns={columns}
          sx={{ fontSize: '16px', textAlign: 'center' }}
        />
      </Box>
    </Box>
  );
};
