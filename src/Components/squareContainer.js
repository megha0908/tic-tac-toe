// import React from 'react';
import styled from 'styled-components';
const Button = styled.button`
  width: 100px;
  height: 100px;
  font-size: 2rem;
  background: #fff;
  border: 1px solid #999;
  cursor: pointer;

  &:focus {
    outline: none;
  }
`;
const Square = ({value,onClick}) =>{
  return <Button onClick={onClick}>{value}</Button>
}

export default Square;


