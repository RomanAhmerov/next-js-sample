import "../styles/globals.css";

const MyApp = ({ Component, pageProps }) => (
  <div>
    <h2>Header</h2>
    <Component {...pageProps} />
    <h2>Footer</h2>
  </div>
  
);

export default MyApp;
