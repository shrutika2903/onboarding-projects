import styled from 'styled-components';


export const Wrapper = styled.div`


.underline {
  width: 5rem;
  height: 0.25rem;
  margin-bottom: 1.25rem;
  background: pink;
  margin-left: auto;
  margin-right: auto;
}
.title {
  margin-bottom: 4rem;
  text-align: center;
}
.jobs-center {
    width: 80vw;
    margin: 0 auto;
    max-width: var(--max-width);
  }
  .btn-container {
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin-bottom: 4rem;
    flex-wrap: wrap;
  }
  .job-btn {
    background: transparent;
    border-color: transparent;
    text-transform: capitalize;
    font-size: 1.25rem;
    letter-spacing: var(--spacing);
    margin: 0 0.5rem;
    transition: var(--transition);
    cursor: pointer;
    padding: 0.25rem 0;
    line-height: 1;
    outline-color: var(--clr-primary-10);
  }
  .job-info h3 {
    font-weight: 400;
  }
  .job-date {
    letter-spacing: var(--spacing);
  }
  .btn-container {
    flex-direction: row;
    justify-content: flex-start;
  }
  .job-desc {
    display: grid;
    grid-template-columns: auto 1fr;
    column-gap: 2rem;
    align-items: center;
    margin-bottom: 1.25rem;
  }
  .job-desc p {
    margin-bottom: 0;
    color: var(--clr-grey-3);
  }



`
