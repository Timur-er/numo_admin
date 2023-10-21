import React from 'react';
import PageContainer from "../../Components/PageContainer/PageContainer";
import { useParams } from 'react-router'

const SegmentDetailsPage = () => {
    const a = useParams();
    console.log(a)
  
    return (
        <PageContainer>
          One segment
        </PageContainer>
    );
};

export default SegmentDetailsPage;