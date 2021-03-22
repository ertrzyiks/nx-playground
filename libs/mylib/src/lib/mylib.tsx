import React from 'react';

import styled from 'styled-components';

/* eslint-disable-next-line */
export interface MylibProps {}

const StyledMylib = styled.div`
  color: pink;
`;

export function Mylib(props: MylibProps) {
  return (
    <StyledMylib>
      <h1>Welcome to mylib!</h1>
    </StyledMylib>
  );
}

export { default as Button } from './components/button'
export { default as Modal } from './components/modal'

export default Mylib;
