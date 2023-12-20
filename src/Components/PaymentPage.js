// Main Page Component
import React from 'react';
import styled from 'styled-components';

const PageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f5f5f5; /* Light grey background for the page */
`;

const PageContent = styled.div`
  max-width: 600px; /* Adjust the max-width as needed */
  width: 100%;
`;
const CardContainer = styled.div`
  background-color: white;
  padding: 16px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 16px;
`;

const Label = styled.label`
  color: #333; /* Dark grey */
  margin-bottom: 8px;
`;

const Input = styled.input`
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
  outline: none;

  &:focus {
    border-color: #007bff; /* Blue color on focus */
  }
`;

const PaymentPage = () => {
  return (
    <PageContainer>
      <PageContent>
        <CardContainer>
          <h4>Payment Details</h4>
          <InputContainer>
            <Label>Reciept Number</Label>
            <Input type="text" />
          </InputContainer>
        </CardContainer>
      </PageContent>
    </PageContainer>
  );
};

export default PaymentPage;
