import styled from 'styled-components'

export const SingleArrow = styled.span`
  display: inline-block;
  height: 0;
  width: 0;
  border-left: 5.5px solid rgba(0, 0, 0, 0);
  border-right: 5.5px solid rgba(0, 0, 0, 0);
  border-top: 5.5px solid rgba(0, 0, 0, 0.25);
  position: relative;
`

export const DoubleArrow = styled.span`
  position: relative;
  margin: 0 12px;

  &::before {
    content: '';
    display: inline-block;
    height: 0;
    width: 0;
    position: absolute;
    top: -8.5px;
    border-left: 5.5px solid rgba(0, 0, 0, 0);
    border-right: 5.5px solid rgba(0, 0, 0, 0);
    border-bottom: 5.5px solid rgba(0, 0, 0, 0.25);
  }

  &::after {
    content: '';
    display: inline-block;
    height: 0;
    width: 0;
    position: absolute;
    top: 1.5px;
    border-left: 5.5px solid rgba(0, 0, 0, 0);
    border-right: 5.5px solid rgba(0, 0, 0, 0);
    border-top: 5.5px solid rgba(0, 0, 0, 0.25);
  }
`
