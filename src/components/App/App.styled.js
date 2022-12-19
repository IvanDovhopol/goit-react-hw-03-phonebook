import styled from 'styled-components';

export const Btn = styled.button`
  padding: 5px;
  background: #2a2a2a;
  color: white;
  letter-spacing: 0px;
  text-transform: none;
  padding: ${p => p.theme.space[4]}px;
  letter-spacing: 1px;
  cursor: pointer;

  &:hover {
    background-color: #516391;
  }
`;
