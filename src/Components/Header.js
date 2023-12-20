// Header.js
import React from 'react';

import styled from 'styled-components';
import Burried from '../Utils/burried.png'

const HeaderContainer = styled.header`
  background-color: #333; /* Dark grey */
  color: white;
  padding: 8px; /* Adjusted padding */
  text-align: center;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const LeftSection = styled.div`
  display: flex;
  align-items: center;
`;

const Logo = styled.img`
  width: 30px; /* Adjust the size as needed */
  margin-right: 8px; /* Add some space between logo and text */
`;

const LogoText = styled.div`
  color: white;
  font-size: medium;
`;

const MiddleSection = styled.div`
  display: flex;
  align-items: center;
`;

const SelectedButton = styled.button`
  background-color: ${(props) => (props.selected ? '#484e53' : 'transparent')};
  color: ${(props) => (props.selected ? 'white' : '#484e53')};
  font-size: medium;
  border: ${(props) => (props.selected ? '2px solid #484e53' : 'none')};
  border-radius: 20px;
  padding: 8px 16px;
  display: flex;
  align-items: center;
  margin-right: 16px; /* Add some space between buttons */
  cursor: pointer;
  transition: background-color 0.3s, color 0.3s, border 0.3s;
`;

// const Icon = styled.img`
//   width: 20px; /* Adjust the size as needed */
//   margin-right: 8px; /* Add some space between icon and text */
// `;

const MiddleLogoContainer = styled.div`
  display: flex;
  align-items: center;
`;

const MiddleLogo = styled.img`
  width: 30px; /* Adjust the size as needed */
  margin-right: 8px; /* Add some space between logo and text */
`;

const MiddleLogoText = styled.div`
  color: ${(props) => (props.selected ? '#484e53' : 'white')};
  font-size: medium;
`;

const DownwardArrow = styled.span`
  color: white;
  font-size: 12px; /* Adjust the size as needed */
`;

const RightSection = styled.div`
  display: flex;
  align-items: center;
  margin-top: 8px; /* Add space between icons and user info on smaller screens */
`;

const Icon = styled.img`
  width: 20px; /* Adjust the size as needed */
  margin-right: 16px; /* Add some space between icons */
  cursor: pointer;
`;

const UserNameContainer = styled.div`
  display: flex;
  align-items: center;
`;

const UserName = styled.div`
  color: white;
  font-size: medium;
  margin-right: 8px; /* Add some space between user name and down arrow */
`;

const Header = () => {
  return (
    <HeaderContainer>
      <LeftSection>
        <Logo src={Burried} alt="Logo" />
        <LogoText>Grave Sites Management</LogoText>
      </LeftSection>
      <MiddleSection>
        <MiddleLogoContainer>
          <SelectedButton selected>
            <Icon src="../../Utils/four-squares.png" />

            <MiddleLogoText>
              Maintain <Icon src="path/to/your/search-icon.png" />
            </MiddleLogoText>
          </SelectedButton>
        </MiddleLogoContainer>
        <MiddleLogoContainer>
          <SelectedButton>
            <Icon src="./Utils/four-squares.png" />
            <MiddleLogoText>Payments</MiddleLogoText>
          </SelectedButton>
        </MiddleLogoContainer>
        <MiddleLogoContainer>
          <SelectedButton>
            <Icon src="../../Utils/four-squares.png" />
            <MiddleLogoText>Reports</MiddleLogoText>
          </SelectedButton>
        </MiddleLogoContainer>
      </MiddleSection>
      <RightSection>
        <Icon src="path/to/your/search-icon.png" />
        <Icon src="path/to/your/settings-icon.png" />
        <Icon src="path/to/your/help-icon.png" />
        <Icon src="path/to/your/circle-icon.png" />
        <UserNameContainer>
          <UserName>Your Name</UserName>
          <Icon src="path/to/your/search-icon.png" />
        </UserNameContainer>
      </RightSection>
    </HeaderContainer>
  );
};

export default Header;
