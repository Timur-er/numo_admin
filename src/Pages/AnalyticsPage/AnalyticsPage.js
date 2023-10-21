import React from 'react';
import PageContainer from "../../Components/PageContainer/PageContainer";
import SegmentStats from '../../Components/stats/SegmentStats/SegmentStats'

const AnalyticsPage = () => {
    return (
        <PageContainer>
            <h1 className='page-header mb-7'>Analytics</h1>
            <SegmentStats />
        </PageContainer>
    );
};

export default AnalyticsPage;