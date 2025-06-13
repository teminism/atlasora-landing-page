import { render, screen, fireEvent } from '@testing-library/react'
import Home from '../page'

// Mock Framer Motion
jest.mock('framer-motion', () => {
  const passthrough = (Tag = 'div') =>
    // eslint-disable-next-line react/display-name
    ({ children, ...rest }) => <Tag {...rest}>{children}</Tag>;
  return {
    motion: new Proxy(
      {},
      {
        get: (_, prop) => passthrough(prop),
      },
    ),
  };
});

describe('Home', () => {
  beforeEach(() => {
    render(<Home />);
  });

  describe('Hero Section', () => {
    it('renders the main hero headline', () => {
      expect(screen.getByText(/Revolutionize Your/i)).toBeInTheDocument();
    });

    it('renders the hero subtitle', () => {
      expect(screen.getByText(/Connect hosts and guests with confidence/i)).toBeInTheDocument();
    });

    it('renders call-to-action buttons', () => {
      expect(screen.getByRole('button', { name: /Start Hosting Today/i })).toBeInTheDocument();
      expect(screen.getByRole('button', { name: /Explore Properties/i })).toBeInTheDocument();
    });
  });

  describe('Feature Cards', () => {
    it('renders the three selling points', () => {
      expect(screen.getByText('Only 5% Booking Fees', { selector: 'h3' })).toBeInTheDocument();
      expect(screen.getByText('Instant Payouts', { selector: 'h3' })).toBeInTheDocument();
      expect(screen.getByText('Check-in Shield', { selector: 'h3' })).toBeInTheDocument();
    });

    it('renders feature card descriptions', () => {
      expect(screen.getByText(/Keep more of your earnings with industry-low fees/i)).toBeInTheDocument();
      expect(screen.getByText(/Get paid immediately after checkout/i)).toBeInTheDocument();
      expect(screen.getByText(/Advanced verification and safety protocols/i)).toBeInTheDocument();
    });

    it('renders learn more links for each feature', () => {
      const learnMoreLinks = screen.getAllByText(/Learn More/i);
      expect(learnMoreLinks).toHaveLength(3);
      learnMoreLinks.forEach(link => {
        expect(link).toHaveAttribute('href', '#');
      });
    });
  });

  describe('Stats Section', () => {
    it('renders all statistics', () => {
      expect(screen.getByText('50K+')).toBeInTheDocument();
      expect(screen.getByText('25K+')).toBeInTheDocument();
      expect(screen.getByText('500K+')).toBeInTheDocument();
      expect(screen.getByText('99%')).toBeInTheDocument();
    });

    it('renders stat labels', () => {
      expect(screen.getByText('Properties Listed')).toBeInTheDocument();
      expect(screen.getByText('Happy Hosts')).toBeInTheDocument();
      expect(screen.getByText('Bookings Completed')).toBeInTheDocument();
      expect(screen.getByText('Satisfaction Rate')).toBeInTheDocument();
    });
  });

  describe('Newsletter Section', () => {
    it('renders newsletter form elements', () => {
      expect(screen.getByPlaceholderText(/Enter your email/i)).toBeInTheDocument();
      expect(screen.getByRole('button', { name: /Subscribe/i })).toBeInTheDocument();
    });

    it('handles email input', () => {
      const emailInput = screen.getByPlaceholderText(/Enter your email/i);
      fireEvent.change(emailInput, { target: { value: 'test@example.com' } });
      expect(emailInput.value).toBe('test@example.com');
    });

    it('renders newsletter section text', () => {
      expect(screen.getByText(/Stay Updated/i)).toBeInTheDocument();
      expect(screen.getByText(/Get the latest updates, tips, and exclusive offers/i)).toBeInTheDocument();
    });
  });

  describe('Analytics Section', () => {
    it('renders analytics image', () => {
      const analyticsImage = screen.getByAltText(/Analytics dashboard illustration/i);
      expect(analyticsImage).toBeInTheDocument();
      expect(analyticsImage).toHaveAttribute('src', '/dashboard.svg');
    });
  });
})