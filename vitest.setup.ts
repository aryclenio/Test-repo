import '@testing-library/jest-dom';
import { vi } from 'vitest';
import React from 'react';

// Mock next/image to render a standard img tag in tests
vi.mock('next/image', () => ({
  __esModule: true,
  default: function MockImage({ src, alt, fill, ...props }: any) {
    // eslint-disable-next-line @next/next/no-img-element
    return React.createElement('img', {
      src,
      alt,
      data_fill: fill ? 'true' : undefined,
      ...props
    });
  },
}));

// Mock next/link to render a standard anchor tag in tests
vi.mock('next/link', () => ({
  __esModule: true,
  default: function MockLink({ children, href, ...props }: any) {
    return React.createElement('a', { href, ...props }, children);
  },
}));
