import styled from 'styled-components';


export const Wrapper = styled.div`
div {
    flex: 1;
  }
  h1,
  h2,
  h3,
  h4 {
    letter-spacing: var(--spacing);
    text-transform: capitalize;
    line-height: 1.25;
    margin-bottom: 0.75rem;
  }
  p {
    margin-bottom: 1.25rem;
    color: var(--clr-grey-5);
  }
  .tour-price {
    color: #6c79ac;
    background: var(--clr-primary-10);
    padding: 0.25rem 0.5rem;
    border-radius: var(--radius);
  }
  .single-tour .delete-btn{
        display: block;
    width: 200px;
    margin: 1rem auto 0 auto;
    color: var(--clr-red-dark);
    letter-spacing: var(--spacing);
    background: pink;
    border: 1px solid var(--clr-red-dark);
    padding: 0.25rem 0.5rem;
    border-radius: var(--radius);
  }
  img {
    width: 100%;
    height: 20rem;
    object-fit: cover;
    border-top-right-radius: var(--radius);
    border-top-left-radius: var(--radius);
  }

  .single-tour {
    background: var(--clr-white);
    border-radius: var(--radius);
    margin: 2rem 0;
    box-shadow: var(--light-shadow);
    transition: var(--transition);
  }
  .underline {
    width: 6rem;
    height: 0.25rem;
    background: #6c79ac;
    margin-left: auto;
    margin-right: auto;
  }

 


 


`
