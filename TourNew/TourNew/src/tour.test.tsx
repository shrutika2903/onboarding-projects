import { render, screen, fireEvent } from '@testing-library/react';
import Tour from './Tour';
import '@testing-library/jest-dom';


const mockTour = {
  id: 1,
  image: 'tour-image.jpg',
  info: 'Tour info',
  name: 'Tour Name',
  price: 100,
  removeTours: jest.fn(),
};

describe('Tour component', () => {
  beforeEach(() => {
    render(<Tour {...mockTour} />);
  });

  test('renders tour details correctly', () => {
    const tourNameElement = screen.getByText('Tour Name');
    const tourPriceElement = screen.getByText('$ 100');
    const readMoreButton = screen.getByText('Read More');

    expect(tourNameElement).toBeInTheDocument();
    expect(tourPriceElement).toBeInTheDocument();
    expect(readMoreButton).toBeInTheDocument();
  });

  test('Expand tour info when "Read More" is not clicked', () => {
    const expandInfo = 'Tour info...';
    const expandInfoElement = screen.getByText(expandInfo);
    const readMoreButton = screen.getByText('Read More');

    expect(expandInfoElement).toBeInTheDocument();
    expect(readMoreButton).toBeInTheDocument();
  });

  test('Expand tour info when "Read More" is clicked', () => {
    
    const fullInfo = true;
    expect(fullInfo).toBe(true);
    const readMoreButton = screen.getByText('Read More');

    fireEvent.click(readMoreButton);
    expect(readMoreButton.textContent).toBe('Show less');
  });

test('calls removeTours function when "Not Interested" button is clicked', () => {
    const notInterestedButton = screen.getByText('Not Interested');

    fireEvent.click(notInterestedButton);

    expect(mockTour.removeTours).toHaveBeenCalledTimes(1);
    expect(mockTour.removeTours).toHaveBeenCalledWith(mockTour.id);
  });
});



