import React from 'react';
import {DataGrid} from '@mui/x-data-grid';

const columns = [
    {field: 'segment_name', headerName: 'Segment name', width: 300},
    {field: 'users', headerName: 'Users', width: 300},
    {
        field: "actions",
        headerName: "Actions",
        width: 300,
        renderCell: () => {
            return (
                <div>
                    <button>download</button>
                    <button>open details??</button>
                </div>
            )
        }
    }
];

const rows = [
    {id: 1, segment_name: 'segment 1', users: '00001',},
    {id: 2, segment_name: 'segment 2', users: '00002',},
    {id: 3, segment_name: 'segment 3', users: '00003',},
    {id: 4, segment_name: 'segment 4', users: '00004',},
    {id: 5, segment_name: 'segment 5', users: '00005',},
    {id: 6, segment_name: 'segment 6', users: '00006',},
    {id: 7, segment_name: 'segment 7', users: '00007',},
    {id: 8, segment_name: 'segment 8', users: '00008',},
    {id: 9, segment_name: 'segment 9', users: '00009',},
];
const CustomTable = () => {
    return (
        <div>
            <DataGrid
                rows={rows}
                columns={columns}
                pageSize={5}
                rowsPerPageOptions={[5]}
                checkboxSelection={false}
            />
        </div>
    );
};

export default CustomTable;