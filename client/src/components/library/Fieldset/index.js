import React, { Component } from 'react';

import styled from 'styled-components';

const Container = styled.fieldset`
  border: none;
  -moz-border-radius: 8px;
  -webkit-border-radius: 8px;
  border-radius: 8px;

  legend {
    max-width: 500px;
    padding: 16px;
  }
`;

export default class Fieldset extends Component {
  render() {
    return (
      <Container>
        <legend>{this.props.legend || ''}</legend>
        {this.props.children}
      </Container>
    );
  }
}
