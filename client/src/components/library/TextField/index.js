import React from 'react';
import styled from 'styled-components';

const Label = styled.label`
  margin-top: -4px;
  margin-left: 10px;
  font-size: 16px;
  position: absolute;
  transform-origin: top left;
  transform: translate(0, 11px) scale(1);
  transition: all 0.3s ease-in-out;
`;

const Input = styled.input`
  border: none;
  font-size: 15px;
  outline: 0;
  padding: 6px 0 9px;
  width: 100%;
  background: transparent;

  :focus + label,
  :not(:empty),
  :valid + label {
    transform: translate(0, -15px) scale(0.75);
  }
`;

const Container = styled.div.attrs({
  border: props => (props.error ? 'solid 1.3px #cc0033' : 'solid 1.3px #ccc')
})`
  border-radius: 25px;
  padding: 0 8px;
  position: relative;
  display: flex;
  border: ${props => props.border};
`;

const TextField = props => {
  return (
    <div>
      <Container>
        <Input {...props} required type="text" />
        <Label>{props.title}</Label>
      </Container>
    </div>
  );
};

export default TextField;
