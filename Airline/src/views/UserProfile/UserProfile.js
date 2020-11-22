import * as React from 'react';
import { DataGrid } from '@material-ui/data-grid';
import {Checkbox } from '@material-ui/core';

const columns = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'name', headerName: 'Name', width: 180 },
  { field: 'ancillary', headerName: 'Ancillary service', width: 270 },
  {
    field: 'seatN',
    headerName: 'Seat Number',
    type: 'number',
    width: 90,
  },
  {
    field: 'checkin',
    headerName: 'Checked in',
    description: 'Check In',
    sortable: false,
    width: 160,
    // valueGetter: () => <Checkbox></Checkbox>
    // valueGetter: (params) =>
    //   `${params.getValue('firstName') || ''} ${params.getValue('lastName') || ''}`,
  },
  { field: 'wheel', headerName: 'Wheel chair', width: 130 },
  { field: 'infant', headerName: 'Infant', width: 130 },
];

const rows = [
  { id: 1, name: 'Snow', ancillary: 'Jon', seatN: 35 , checkin: 'checked' , wheel: 'Yes'},
  { id: 2, name: 'Lannister', ancillary: 'Cersei', seatN: 42, checkin: 'checked', infant:'Yes' },
  { id: 3, name: 'Lannister', ancillary: 'Jaime', seatN: 45 , wheel: 'Yes'},
  { id: 4, name: 'Stark', ancillary: 'Arya', seatN: 16 , checkin: 'checked'},
  { id: 5, name: 'Targaryen', ancillary: 'Daenerys', seatN: 93, wheel: 'Yes', infant:'Yes' },
  { id: 6, name: 'Melisandre', ancillary: 'Harvey', seatN: 150, checkin: 'checked', wheel: 'Yes' },
  { id: 7, name: 'Clifford', ancillary: 'Ferrara', seatN: 44, checkin: 'checked' },
  { id: 8, name: 'Frances', ancillary: 'Rossini', seatN: 36, wheel: 'Yes' },
  { id: 9, name: 'Lannister', ancillary: 'Cersei', seatN: 45, checkin: 'checked', infant:'Yes' },
  { id: 10, name: 'Targaryen', ancillary: 'Daenerys', seatN: 37 },
  { id: 11, name: 'Roxie', ancillary: 'Harvey', seatN: 65, wheel: 'Yes', infant:'Yes' },
  { id: 12, name: 'Lannister', ancillary: 'Cersei', seatN: 29 , wheel: 'Yes'},
  { id: 13, name: 'Lannister', ancillary: 'Jaime', seatN: 49, checkin: 'checked', infant:'Yes'},
  { id: 14, name: 'Stark', ancillary: 'Arya', seatN: 18, checkin: 'checked' },
  { id: 15, name: 'Targaryen', ancillary: 'Daenerys', seatN: 17 , infant:'Yes'},
  { id: 16, name: 'Melisandre', ancillary: 'Jon', seatN: 157, checkin: 'checked'},
  { id: 17, name: 'Clifford', ancillary: 'Ferrara', seatN: 82, wheel: 'Yes' },
  { id: 18, name: 'Frances', ancillary: 'Rossini', seatN: 39, wheel: 'Yes' },
  { id: 19, name: 'Roxie', ancillary: 'Harvey', seatN: 68 , checkin: 'checked', infant:'Yes'},
];

export default function DataTable() {
  return (
    <div style={{ height: 500, width: '100%' }}>
      <DataGrid rows={rows} columns={columns} pageSize={7} checkboxSelection />
    </div>
  );
}