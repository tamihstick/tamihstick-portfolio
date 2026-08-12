import ReactDOM from 'react-dom/client'
import AppLayout from './app/layout'
import Page from './app/page'



ReactDOM.createRoot(document.getElementById("root")!).render(
  <AppLayout>
    <Page />
  </AppLayout>,
);
