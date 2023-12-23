import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import App from "./App";
import LaunchesList from "./pages/launches-list";
import LaunchDetails from "./pages/launch-details";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route element={<App />}>
        <Route path="/">
          <Route index element={<LaunchesList />} />
        </Route>
        <Route path="/launches">
          <Route index element={<LaunchesList />} />
          <Route path=":id" element={<LaunchDetails />} />
        </Route>
      </Route>
      <Route path="*" element={<>Not Found</>} />
    </>
  )
);
