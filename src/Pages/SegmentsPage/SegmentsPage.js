import React from 'react';
import PageContainer from "../../Components/PageContainer/PageContainer";
import SegmentsTable from '../../Components/SegmentsTable/SegmentsTable'
import CreateSegmentBtn from '../../Components/CreateSegmentBtn/CreateSegmentBtn'

const SegmentsPage = () => {
    return (
        <PageContainer>
            <header className='page-header flex justify-between'>
                Segments
                <CreateSegmentBtn />
            </header>
            <SegmentsTable />
        </PageContainer>
    );
};

export default SegmentsPage;