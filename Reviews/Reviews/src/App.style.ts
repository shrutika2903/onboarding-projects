import styled from 'styled-components';


export const Wrapper = styled.div`
.container {
    width: 80vw;
    max-width: var(--fixed-width);
  }
  .underline {
    height: 0.25rem;
    width: 10rem;
    background: pink;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 1rem;
  }
  .prev-btn,
  .next-btn {
    color: var(--clr-primary-7);
    font-size: 1.25rem;
    background: transparent;
    border-color: transparent;
    margin: 0 0.5rem;
    transition: var(--transition);
    cursor: pointer;
  }
  .random-btn {
    margin-top: 0.5rem;
    background: pink;
    color: var(--clr-primary-5);
    padding: 0.25rem 0.5rem;
    text-transform: capitalize;
    border-radius: var(--radius);
    transition: var(--transition);
    border-color: pink;
    cursor: pointer;
  }
`