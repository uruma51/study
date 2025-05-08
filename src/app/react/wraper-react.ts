
import ReactDOM from "react-dom/client";
// import MyReactComponent from './myReact';
import MyReactApp from './reactApp';

class ReactWrapper {
  static mount(elementId: string) {
    if (typeof document !== "undefined") { // Ensure document exists
      const container = document.getElementById(elementId);
      if (container) {
        const root = ReactDOM.createRoot(container);
        root.render(MyReactApp());
      }
    }
  }

  static unmount(elementId: string) {
    if (typeof document !== "undefined") { // Ensure document exists
      const container = document.getElementById(elementId);
      if (container) {
        ReactDOM.createRoot(container).unmount();
      }
    }
  }
}

export default ReactWrapper;
