import React from 'react';
import styled from '@emotion/styled';
import { Global } from '@emotion/react';
import { globalStyles } from './styles/globalStyles';

const AppDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 3rem;
  height: 100vh;
`;

export const App: React.FC = () => (
  <>
    <Global styles={globalStyles} />
    <AppDiv>Welcome to your React App!</AppDiv>
  </>
);
