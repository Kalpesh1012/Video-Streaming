import "./App.css";
import Header from "./components/Header";
import Body from "./components/Body";
import store from "./utils/store";
import { Provider } from "react-redux";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainContainer from "./components/MainContainer";
import WatchVideo from "./components/WatchVideo";
import SuggestionVideos from "./components/SuggestionVideos";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Header />
        <Body />
      </>
    ),
    children: [
      {
        path: "/",
        element: <MainContainer />,
      },
      {
        path: "watch",
        element: <WatchVideo />,
      },
      {
        path: "result",
        element: <SuggestionVideos />,
      },
    ],
  },
]);

function App() {
  return (
    <div className="">
      <Provider store={store}>
        <RouterProvider router={appRouter} />
      </Provider>
    </div>
  );
}

export default App;
