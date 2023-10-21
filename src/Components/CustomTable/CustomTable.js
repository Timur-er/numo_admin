import React from 'react';
import {DataGrid} from '@mui/x-data-grid';

const CustomTable = ({ rows, columns, onRowClick }) => {
    return (
        <div>
            <span>
                Click on the row to open details
            </span>
            <DataGrid
                rows={rows}
                columns={columns}
                pageSize={5}
                rowsPerPageOptions={[5]}
                checkboxSelection={false}
                onRowClick={onRowClick}
                rowSelection={false}
            />
        </div>
    );
};

export default CustomTable;