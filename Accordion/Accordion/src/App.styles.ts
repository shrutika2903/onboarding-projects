import styled from 'styled-components';


export const Wrapper = styled.div`
.container {
    margin: 5rem auto;
    background: var(--clr-white);
    border-radius: var(--radius);
    padding: 2.5rem 2rem;
    max-width: var(--fixed-width);
    display: grid;
    gap: 1rem 2rem;
  }
  .container h3 {
    line-height: 1.2;
    font-weight: 200;
  }
 .question {
    padding: 1rem 1.5rem;
    border: 2px solid grey;
    margin-bottom: 1rem;
    box-shadow: var(--light-shadow);
    font-weight: 20rem;
    color: black
    font-size: 0.5rem;
  }
  
  .question h4 {
    text-transform: none;
    line-height: 1.5;
  }
  .question p {
    color: var(--clr-grey-3);
    margin-bottom: 0;
    margin-top: 0.5rem;
  }
  .question header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .question header h4 {
    margin-bottom: 0;
  }
  .btn {
    background: transparent;
    border-color: transparent;
    width: 2rem;
    height: 2rem;
    background: var(--clr-grey-special);
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    color: black;
    cursor: pointer;
    margin-left: 1rem;
    align-self: center;
    min-width: 2rem;
  }
  
  `

