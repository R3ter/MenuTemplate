import "./App.css";
import { ThemeProvider } from "@mui/material";
import MenuPage from "./pages/MenuPage";
import DefaultTheme from "./themes/DefaultTheme";
import { ApolloClient, InMemoryCache, ApolloProvider, createHttpLink } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import getSubDomain from "./utils/getSubDomain";
import { USER_LANGUAGE_KEY } from "./utils/constants";

const httpLink = createHttpLink({
  uri: import.meta.env.VITE_API_URL,
});

const userLang = localStorage.getItem(USER_LANGUAGE_KEY);

const authLink = setContext((_, { headers }) => {
  const originalSubdomain = getSubDomain();
  console.log(originalSubdomain);
  const ourHeaders = {
    ...headers,
    authorization: "",
    "X-Original-Subdomain": originalSubdomain,
  };
  if (userLang) {
    ourHeaders.lang = userLang;
  }
  return {
    headers: ourHeaders,
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  
  return (
    <ApolloProvider client={client}>
      <ThemeProvider theme={DefaultTheme("light")}>
        <MenuPage />
      </ThemeProvider>
    </ApolloProvider>
  );
}

export default App;
