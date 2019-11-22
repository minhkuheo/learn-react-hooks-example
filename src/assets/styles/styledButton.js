import styled from 'styled-components';

const Button = styled.button`
  pading: 10px;
`;

const Button__Icon = styled.span`
  ${Button}:hover & {
    background-color: green;
  }
`;

const Button__Text = styled.span`
  
`;