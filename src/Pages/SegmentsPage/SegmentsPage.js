import React from 'react';
import PageContainer from "../../Components/PageContainer/PageContainer";
import SegmentsTable from '../../Components/SegmentsTable/SegmentsTable'
import CreateSegmentBtn from '../../Components/CreateSegmentBtn/CreateSegmentBtn'

const SegmentsPage = () => {
    return (
        <PageContainer>
            <header className='page-header flex justify-between items-end'>
                Segments
                <CreateSegmentBtn />
            </header>
            <div className='flex justify-end'>
                
            </div>
            <SegmentsTable />
        </PageContainer>
    );
};

export default SegmentsPage;