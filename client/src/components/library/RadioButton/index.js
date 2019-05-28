import React from 'react';
import styled from 'styled-components';

const Label = styled.label`
  margin: 16px 0;
  display: block;
  cursor: pointer;
  input {
    display: none;
    + span {
      line-height: 22px;
      height: 22px;
      padding-left: 35px;
      display: block;
      position: relative;
      &:not(:empty) {
        padding-left: 22px + 8;
      }
      &:before,
      &:after {
        content: '';
        width: 22px;
        height: 22px;
        display: block;
        border-radius: 50%;
        left: 0;
        top: 0;
        position: absolute;
      }
      &:before {
        background: #d1d7e3;
        transition: background 0.2s ease,
          transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 2);
      }
      &:after {
        background: #fff;
        transform: scale(0.78);
        transition: transform 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.4);
      }
    }
    &:checked + span {
      &:before {
        transform: scale(1.04);
        background: #5d9bfb;
      }
      &:after {
        transform: scale(0.4);
        transition: transform 0.3s ease;
      }
    }
  }
  &:hover {
    input {
      & + span {
        &:before {
          transform: scale(0.92);
        }
        &:after {
          transform: scale(0.74);
        }
      }
      &:checked + span {
        &:after {
          transform: scale(0.4);
        }
      }
    }
  }
`;

const Input = styled.input.attrs({
  type: 'radio',
  name: props => props.name || 'r',
  value: props => props.value || ''
})``;

const RadioButton = props => (
  <Label>
    <Input {...props} />
    <span>{props.title}</span>
  </Label>
);

export default RadioButton;
