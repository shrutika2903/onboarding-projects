import { render, screen, fireEvent } from '@testing-library/react';
import Review from './Review';

const mockReviewsData = [
  {
    name: 'John Doe',
    job: 'Software Engineer',
    image: 'john-doe.jpg',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
];

describe('Review component', () => {
  test('renders the first review by default', () => {
    render(<Review />);
    const { name, job, text } = mockReviewsData[0];
    const nameElement = screen.getByText(name);
    const jobElement = screen.getByText(job);
    const textElement = screen.getByText(text);

    expect(nameElement).toBeInTheDocument();
    expect(jobElement).toBeInTheDocument();
    expect(textElement).toBeInTheDocument();
  });

  test('renders the next review when "Next" button is clicked', () => {
    render(<Review />);
    const { name: currentName, job: currentJob, text: currentText } = mockReviewsData[0];
    const nextButton = screen.getByTestId('next-button');

    fireEvent.click(nextButton);

    const { name: nextName, job: nextJob, text: nextText } = mockReviewsData[1];
    const nameElement = screen.getByText(nextName);
    const jobElement = screen.getByText(nextJob);
    const textElement = screen.getByText(nextText);

    expect(nameElement).toBeInTheDocument();
    expect(jobElement).toBeInTheDocument();
    expect(textElement).toBeInTheDocument();

    // Verify that the previous review elements are no longer visible
    expect(screen.queryByText(currentName)).toBeNull();
    expect(screen.queryByText(currentJob)).toBeNull();
    expect(screen.queryByText(currentText)).toBeNull();
  });

  test('renders the previous review when "Previous" button is clicked', () => {
    render(<Review />);
    const { name: currentName, job: currentJob, text: currentText } = mockReviewsData[0];
    const prevButton = screen.getByTestId('prev-button');

    fireEvent.click(prevButton);

    const lastIndex = mockReviewsData.length - 1;
    const { name: prevName, job: prevJob, text: prevText } = mockReviewsData[lastIndex];
    const nameElement = screen.getByText(prevName);
    const jobElement = screen.getByText(prevJob);
    const textElement = screen.getByText(prevText);

    expect(nameElement).toBeInTheDocument();
    expect(jobElement).toBeInTheDocument();
    expect(textElement).toBeInTheDocument();

    // Verify that the next review elements are no longer visible
    expect(screen.queryByText(currentName)).toBeNull();
    expect(screen.queryByText(currentJob)).toBeNull();
    expect(screen.queryByText(currentText)).toBeNull();
  });

})



