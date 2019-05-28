import styled from 'styled-components';

export default styled.button`
  background: ${props => props.primary ? '#096dd9' : "white"};
  color: ${props => props.primary ? "white" : '#096dd9'};

  font-size: 1.2em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid #096dd9;
  border-radius: 2em;
  cursor: pointer;
  outline: 0;

  i {
    padding-right: .8rem
  }
`;