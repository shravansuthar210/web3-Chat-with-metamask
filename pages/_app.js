import "@/styles/globals.css";
import "@/styles/tailwindOutput.css";
import { Provider } from "react-redux";
import { store, wrapper } from "@/redux/store";

// import { ChatAppProvider } from "@/context/ChatAppContext";

const App = ({ Component, pageProps }) => {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
};

export default wrapper.withRedux(App);
