import styled from 'styled-components';


export const Wrapper = styled.div`
div {
    flex: 1;
  }

  img {
    width: 75px;
  height: 75px;
  object-fit: cover;
  border-radius: 50%;
  box-shadow: var(--light-shadow);
  }

  button {
    color: var(--clr-white);
    display: block;
    width: 100%;
    background: pink;
    margin: 2rem auto 0 auto;
    text-transform: capitalize;
    font-size: 1.2rem;
    padding: 0.5rem 0;
    letter-spacing: var(--spacing);
    border-radius: var(--radius);
    outline: 1px solid rgba(242, 138, 178, 0.8);
    cursor: pointer;
  }

  .css-1v5z4dq-MuiPaper-root-MuiCard-root{
    max-width: var(--fixed-width);
    background: #EC7063;
    border-radius: var(--radius);
    padding: 1.5rem 2rem;
    box-shadow: var(--dark-shadow);  }

  
 container h3 {
    font-weight: normal;
    text-transform: none;
    margin-bottom: 2rem;
  }

  .project {
    display: grid;
    grid-template-columns: auto 1fr;
    column-gap: 0.75rem;
    margin-bottom: 1.5rem;
    align-items: center;
  }


`
