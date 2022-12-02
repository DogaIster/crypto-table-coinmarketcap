import React from 'react';
import { MantineProvider } from '@mantine/core';
import './App.css';
import CryptoTable from "./components/Table/CryptoTable";

function App() {
  return (
      <MantineProvider withGlobalStyles withNormalizeCSS>
        <CryptoTable />
      </MantineProvider>
  )
}

export default App;
