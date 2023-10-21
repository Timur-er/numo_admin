import React from 'react';
import PageContainer from "../../Components/PageContainer/PageContainer";
import CreateSegmentForm from "../../Components/CreateSegmentForm/CreateSegmentForm";

const CreateSegmentPage = () => {
    return (
        <PageContainer>
            <header className='page-header flex justify-between items-end'>
                Create a user segment
            </header>
            <CreateSegmentForm />
        </PageContainer>
    );
};

export default CreateSegmentPage;