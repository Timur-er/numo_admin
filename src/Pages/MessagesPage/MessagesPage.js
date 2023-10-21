import React from 'react';
import PageContainer from "../../Components/PageContainer/PageContainer";
import CreateMessageForm from "../../Components/CreateMessageForm/CreateMessageForm";

const MessagesPage = () => {
    return (
        <PageContainer>
            <header className='page-header flex justify-between items-end'>
                Create a message
            </header>

            <CreateMessageForm />
        </PageContainer>
    );
};

export default MessagesPage;