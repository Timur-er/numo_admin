import React from 'react';
import PageContainer from "../../Components/PageContainer/PageContainer";
import SegmentStats from '../../Components/stats/SegmentStats/SegmentStats'

const AnalyticsPage = () => {
    return (
        <PageContainer>
            <h1>Analytics page</h1>
            <SegmentStats />
        </PageContainer>
    );
};

export default AnalyticsPage;