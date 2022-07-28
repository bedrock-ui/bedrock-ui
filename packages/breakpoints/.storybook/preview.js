import { BreakpointsProvider } from '../src';

export const decorators = [
  (Story) => (
    <BreakpointsProvider
      breakpoints={{
        mobile: 0,
        tablet: 600,
        desktop: 1024,
      }}
    >
      <div style={{ minHeight: 240 }}>
        <Story />
      </div>
    </BreakpointsProvider>
  ),
];

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  viewMode: 'docs',
};
