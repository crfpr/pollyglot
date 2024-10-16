import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

const rootElement = document.getElementById("root");

if (rootElement) {
  try {
    createRoot(rootElement).render(<App />);
  } catch (error) {
    console.error("Error rendering the app:", error);
    rootElement.innerHTML = '<div>An error occurred while loading the application. Please check the console for more details.</div>';
  }
} else {
  console.error("Root element not found");
}

