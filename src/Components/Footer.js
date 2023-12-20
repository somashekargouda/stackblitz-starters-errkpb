// Footer.js
import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  background-color: #6c757d; /* Light grey */
  color: #333;
  padding: 8px; /* Adjusted padding */
  text-align: center;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  bottom: 0;
  height : 13%;
  width: 100%;
`;

const LeftSection = styled.div`
  display: flex;
  align-items: center;
`;

const CompanyText = styled.div`
  color: white;
  font-size: small;
  margin-right: 16px; /* Add some space between text and links */
`;

const RightSection = styled.div`
  display: flex;
`;

const FooterLink = styled.a`
  color: white;
  font-size: small;
  margin-right: 16px; /* Add some space between links */
  text-decoration: none;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;

const Footer = () => {
  return (
    <FooterContainer>
      <LeftSection>
        <CompanyText>@2023 Company</CompanyText>
      </LeftSection>
      <RightSection>
        <FooterLink href="#">About</FooterLink>
        <FooterLink href="#">Terms of Use</FooterLink>
        <FooterLink href="#">Contact</FooterLink>
      </RightSection>
    </FooterContainer>
  );
};

export default Footer;
