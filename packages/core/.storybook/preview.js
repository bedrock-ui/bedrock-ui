import '../lib/css/bedrock-ui.css';

export const decorators = [
  (Story) => (
    <div style={{ minHeight: 240 }}>
      <Story />
    </div>
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
