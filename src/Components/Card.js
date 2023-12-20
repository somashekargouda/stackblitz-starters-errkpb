// Card.js
import React from 'react';
import styled from 'styled-components';

const CardContainer = styled.div`
  background-color: white;
  padding: 16px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const Card = () => {
  //icons8.com/icons/set/coffin--static--black
  https: return (
    <CardContainer>
      {/* Add your card content here */}
      <h2>Your Card Content</h2>
      <p>This is a white card in the middle of the page.</p>
    </CardContainer>
  );
};

export default Card;
