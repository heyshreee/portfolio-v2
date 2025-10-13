import React from 'react';
import styled from 'styled-components';

const Pattern = () => {
  return (
    <StyledWrapper>
      <div className="pattern" />
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .pattern {
    position: fixed;       /* covers entire page */
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    z-index: -20;          /* behind content */
    pointer-events: none;  /* clicks go through */
    --color: #1e1e1e;
    background-color: #0c0c0c;
    background-image: 
      linear-gradient(
        0deg,
        transparent 24%,
        var(--color) 25%,
        var(--color) 26%,
        transparent 27%,
        transparent 74%,
        var(--color) 75%,
        var(--color) 76%,
        transparent 77%,
        transparent
      ),
      linear-gradient(
        90deg,
        transparent 24%,
        var(--color) 25%,
        var(--color) 26%,
        transparent 27%,
        transparent 74%,
        var(--color) 75%,
        var(--color) 76%,
        transparent 77%,
        transparent
      );
    background-size: 55px 55px;
  }
`;

export default Pattern;
