import React from 'react';
import {DataGrid} from '@mui/x-data-grid';
import st from './CustomTable.module.scss'

const CustomTable = ({ rows, columns, onRowClick }) => {
    return (
        <div>
            <div className="ml-2 mb-4 text-xs italic">
                Click on the row to open details
            </div>
            <DataGrid
                className={`bg-white p-6 border-none text-sm ${st.table}`}
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