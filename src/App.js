import * as React from 'react';
import { QueryClientProvider } from 'react-query';
import { queryClient } from './queries';

import Layout from './layout';

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Layout />
    </QueryClientProvider>
  );
}

export default App;
