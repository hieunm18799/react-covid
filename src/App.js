import React from 'react'

/* スタイルシート */
import './styles/main.css';

/* コンポーネント */
import CovidInfor from './components/CovidInfor';

function App() {
  return (
    <div className="container is-fluid">
      <CovidInfor />
    </div>
  );
}

export default App;
