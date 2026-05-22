import { render } from '@testing-library/react';
import PicoPage from '../app/pico/page';
import PicoModel from '../components/PicoModel';
import { describe, it, expect, vi, beforeAll } from 'vitest';

// Mock IntersectionObserver which is often needed for Framer Motion / in-view animations
beforeAll(() => {
  window.IntersectionObserver = class IntersectionObserver {
    constructor() {}
    observe() {}
    unobserve() {}
    disconnect() {}
  };
});

// Mock Three.js/Fiber to prevent WebGL context errors in jsdom
vi.mock('@react-three/fiber', () => ({
  Canvas: ({ children }) => <div data-testid="mock-canvas">{children}</div>,
  useFrame: () => {},
}));

vi.mock('@react-three/drei', async () => {
  const actual = await vi.importActual('@react-three/drei');
  const mockUseGLTF = () => ({ scene: {} });
  mockUseGLTF.preload = vi.fn();
  
  return {
    ...actual,
    useGLTF: mockUseGLTF,
    Environment: () => null,
    PresentationControls: ({ children }) => <div data-testid="mock-presentation-controls">{children}</div>,
    Float: ({ children }) => <div data-testid="mock-float">{children}</div>,
  };
});

describe('PicoPage and PicoModel Render Tests', () => {
  it('renders PicoModel without crashing', () => {
    const { getByTestId } = render(<PicoModel />);
    expect(getByTestId('mock-canvas')).toBeInTheDocument();
  });

  it('renders PicoPage without crashing', () => {
    const { getByText } = render(<PicoPage />);
    expect(getByText(/every emotion matters/i)).toBeInTheDocument();
  });
});
