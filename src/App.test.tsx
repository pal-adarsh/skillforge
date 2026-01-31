// Minimal test version of App
import { BrowserRouter, Routes, Route } from "react-router-dom";

const TestApp = () => {
  console.log('TestApp rendering...');
  
  return (
    <div style={{ padding: '20px', background: 'white', minHeight: '100vh' }}>
      <h1 style={{ color: 'black' }}>Test App - If you see this, React is working!</h1>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<div style={{ color: 'black' }}>Home Route</div>} />
          <Route path="*" element={<div style={{ color: 'black' }}>404 - Not Found</div>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default TestApp;
