import { shade } from 'polished';
import styled from 'styled-components';

export const Container = styled.button`
  background: #ff9000;
  height: 56px;
  border-radius: 10px;
  border: 0;
  padding: 16px;
  color: #312e38;
  font-weight: 500;
  margin-top: 16px;
  width: 100%;
  transition: background-color 0.3s;

  &:hover {
    background-color: ${shade(0.2, '#ff9000')};
  }
`;
