import React from 'react';
import PageContainer from "../../Components/PageContainer/PageContainer";
import FilterInput from "../../Components/FilterInput/FilterInput";

const SegmentsPage = () => {
    return (
        <PageContainer>
            <div>
                <FilterInput label="Search by segments"/>
            </div>
        </PageContainer>
    );
};

export default SegmentsPage;