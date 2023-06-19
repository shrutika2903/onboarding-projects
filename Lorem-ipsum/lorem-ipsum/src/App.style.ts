import styled from 'styled-components';


export const Wrapper = styled.div`
.btn {
    text-transform: uppercase;
    background: var(--clr-primary-5);
    color: var(--clr-primary-1);
    padding: 0.375rem 0.75rem;
    letter-spacing: 1px;
    display: inline-block;
    transition: var(--transition);
    font-size: 0.875rem;
    border: 2px solid var(--clr-primary-5);
    cursor: pointer;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
    border-radius: var(--radius);
  }
  .section-center {
    width: 90vw;
    margin: 0 auto;
    max-width: 40rem;
    margin-top: 5rem;
    text-align: center;
  }
  .lorem-form {
    text-transform: capitalize;
    letter-spacing: var(--spacing);
    margin-top: 2rem;
    margin-bottom: 4rem;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  input {
    padding: 0.25rem 0.5rem;
    width: 4rem;
    border-radius: var(--radius);
    border: none;
    margin: 0 0.5rem;
    font-size: 1.25rem;
  }
  
`