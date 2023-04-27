import IconifyIcon from '@/@core/fragments/icon';
import styled from '@emotion/styled';
import { Avatar, Box, Card, CardContent, CardHeader, Chip, Divider, FormControl, Grid, InputLabel, MenuItem, Select, SelectChangeEvent, Theme, Typography } from '@mui/material';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import Link from 'next/link';
import React, { useCallback, useEffect, useState } from 'react'
import TableHeader from './TableHeader';
import AddUserDrawer from './AddUserDrawer';
import { ThemeColor } from '@/@core/layout/types';
import ClientOptions from './ClientOptions';

interface UserRoleType {
    [key: string]: { icon: string; color: string }
  }
  
  interface UserStatusType {
    [key: string]: ThemeColor
  }
  
  // ** Vars
  const userRoleObj: UserRoleType = {
    admin: { icon: 'mdi:laptop', color: 'error.main' },
    author: { icon: 'mdi:cog-outline', color: 'warning.main' },
    editor: { icon: 'mdi:pencil-outline', color: 'info.main' },
    maintainer: { icon: 'mdi:chart-donut', color: 'success.main' },
    subscriber: { icon: 'mdi:account-outline', color: 'primary.main' }
  }
  
  interface CellType {
    row: any // UsersType
  }
  
  const userStatusObj: UserStatusType = {
    active: 'success',
    pending: 'warning',
    inactive: 'secondary'
  }
  
const LinkStyled = styled(Link)(({ theme }) => ({
    fontWeight: 600,
    fontSize: '1rem',
    cursor: 'pointer',
    textDecoration: 'none',
    color: (theme as any).palette.text.secondary,
    '&:hover': {
      color: (theme as any).palette.primary.main
    }
}))

const columns: GridColDef[] = [
    {
      flex: 0.2,
      minWidth: 230,
      field: 'fullName',
      headerName: 'User',
      renderCell: ({ row }: CellType) => {
        const { id, fullName, username } = row
  
        return (
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Avatar alt={fullName} src={''}  sx={{ mr: 3, width: 34, height: 34 }} />
            <Box sx={{ display: 'flex', alignItems: 'flex-start', flexDirection: 'column' }}>
              <LinkStyled href={`/apps/clients/client/${id}`}>{fullName}</LinkStyled>
              <Typography noWrap variant='caption'>
                {`@${username || ''}`}
              </Typography>
            </Box>
          </Box>
        )
      }
    },
    {
      flex: 0.2,
      minWidth: 250,
      field: 'email',
      headerName: 'Email',
      renderCell: ({ row }: CellType) => {
        return (
          <Typography noWrap variant='body2'>
            {row.email}
          </Typography>
        )
      }
    },
    {
      flex: 0.15,
      field: 'role',
      minWidth: 150,
      headerName: 'Role',
      renderCell: ({ row }: CellType) => {
        return (
          <Box sx={{ display: 'flex', alignItems: 'center', '& svg': { mr: 3, color: `${userRoleObj[row.role]?.color || ''}` } }}>
            {/*<IconifyIcon icon={userRoleObj[row.role].icon} fontSize={20} />*/}
            <Typography noWrap sx={{ color: 'text.secondary', textTransform: 'capitalize' }}>
              {row.role}
            </Typography>
          </Box>
        )
      }
    },
    {
      flex: 0.15,
      minWidth: 120,
      headerName: 'Plan',
      field: 'currentPlan',
      renderCell: ({ row }: CellType) => {
        return (
          <Typography variant='subtitle1' noWrap sx={{ textTransform: 'capitalize' }}>
            {row?.currentPlan}
          </Typography>
        )
      }
    },
    {
      flex: 0.1,
      minWidth: 110,
      field: 'status',
      headerName: 'Status',
      renderCell: ({ row }: CellType) => {
        return (
          <Chip
            //skin='light'
            size='small'
            label={row.status}
            color={userStatusObj[row.status]}
            sx={{ textTransform: 'capitalize', '& .MuiChip-label': { lineHeight: '18px' } }}
          />
        )
      }
    },
    {
      flex: 0.1,
      minWidth: 90,
      sortable: false,
      field: 'actions',
      headerName: 'Actions',
      renderCell: ({ row }: CellType) => <ClientOptions id={row.id} />
    }
  ]
const ClientsTable = ({initialData}: any) => {

    const [role, setRole] = useState<string>('')
    const [plan, setPlan] = useState<string>('')
    const [value, setValue] = useState<string>('')
    const [status, setStatus] = useState<string>('')
    const [addUserOpen, setAddUserOpen] = useState<boolean>(false)
    const [paginationModel, setPaginationModel] = useState({ page: 0, pageSize: 10 })
  
    // ** Hooks
    //const dispatch = useDispatch<AppDispatch>()
    //const store = useSelector((state: RootState) => state.user)
  
    useEffect(() => {
      //buscar usuarios
  
      //a cada mudança de filtro
    }, [ plan, role, status, value])
  
    const handleFilter = useCallback((val: string) => {
      setValue(val)
    }, [])
  
    const handleRoleChange = useCallback((e: SelectChangeEvent) => {
      setRole(e.target.value)
    }, [])
  
    const handlePlanChange = useCallback((e: SelectChangeEvent) => {
      setPlan(e.target.value)
    }, [])
  
    const handleStatusChange = useCallback((e: SelectChangeEvent) => {
      setStatus(e.target.value)
    }, [])
  
    const toggleAddUserDrawer = () => setAddUserOpen(!addUserOpen)
  
    return (
      <Grid container spacing={6}>
        <Grid item xs={12}>
          {/*aDATA INFO RELACIONADA AOS CLIENTES
          apiData && (
            <Grid container spacing={6}>
              {apiData.statsHorizontal.map((item: any, index: number) => {
                return (
                  <Grid item xs={12} md={3} sm={6} key={index}>
                    <CardStatisticsHorizontal {...item} icon={<Icon icon={item.icon as string} />} />
                  </Grid>
                )
              })}
            </Grid>
          )*/}
        </Grid>
        <Grid item xs={12}>
          <Card>
            <CardHeader title='Search Filters' sx={{ pb: 4, '& .MuiCardHeader-title': { letterSpacing: '.15px' } }} />
            <CardContent>
              <Grid container spacing={6}>
                <Grid item sm={4} xs={12}>
                  <FormControl fullWidth>
                    <InputLabel id='role-select'>Select Role</InputLabel>
                    <Select
                      fullWidth
                      value={role}
                      id='select-role'
                      label='Select Role'
                      labelId='role-select'
                      onChange={handleRoleChange}
                      inputProps={{ placeholder: 'Select Role' }}
                    >
                      <MenuItem value=''>Select Role</MenuItem>
                      <MenuItem value='admin'>Admin</MenuItem>
                      <MenuItem value='author'>Author</MenuItem>
                      <MenuItem value='editor'>Editor</MenuItem>
                      <MenuItem value='maintainer'>Maintainer</MenuItem>
                      <MenuItem value='subscriber'>Subscriber</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item sm={4} xs={12}>
                  <FormControl fullWidth>
                    <InputLabel id='plan-select'>Select Plan</InputLabel>
                    <Select
                      fullWidth
                      value={plan}
                      id='select-plan'
                      label='Select Plan'
                      labelId='plan-select'
                      onChange={handlePlanChange}
                      inputProps={{ placeholder: 'Select Plan' }}
                    >
                      <MenuItem value=''>Select Plan</MenuItem>
                      <MenuItem value='basic'>Basic</MenuItem>
                      <MenuItem value='company'>Company</MenuItem>
                      <MenuItem value='enterprise'>Enterprise</MenuItem>
                      <MenuItem value='team'>Team</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item sm={4} xs={12}>
                  <FormControl fullWidth>
                    <InputLabel id='status-select'>Select Status</InputLabel>
                    <Select
                      fullWidth
                      value={status}
                      id='select-status'
                      label='Select Status'
                      labelId='status-select'
                      onChange={handleStatusChange}
                      inputProps={{ placeholder: 'Select Role' }}
                    >
                      <MenuItem value=''>Select Role</MenuItem>
                      <MenuItem value='pending'>Pending</MenuItem>
                      <MenuItem value='active'>Active</MenuItem>
                      <MenuItem value='inactive'>Inactive</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
              </Grid>
            </CardContent>
            <Divider />
            <TableHeader value={value} handleFilter={handleFilter} toggle={toggleAddUserDrawer} />
            <DataGrid
              autoHeight
              rows={initialData}
              columns={columns}
              checkboxSelection
              disableRowSelectionOnClick
              pageSizeOptions={[10, 25, 50]}
              paginationModel={paginationModel}
              onPaginationModelChange={setPaginationModel}
              sx={{ '& .MuiDataGrid-columnHeaders': { borderRadius: 0 } }}
            />
          </Card>
        </Grid>
  
        <AddUserDrawer open={addUserOpen} toggle={toggleAddUserDrawer} />
      </Grid>
  )
}

export default ClientsTable