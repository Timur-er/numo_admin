import React from 'react';
import PageContainer from "../../Components/PageContainer/PageContainer";
import CreateSegmentForm from "../../Components/CreateSegmentForm/CreateSegmentForm";

const CreateSegmentPage = () => {
    return (
        <PageContainer>
           <h1>Create a user segment</h1>
            <CreateSegmentForm />
        </PageContainer>
    );
};

export default CreateSegmentPage;