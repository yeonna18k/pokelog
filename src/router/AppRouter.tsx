import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import { MainPage } from "../page/MainPage";
import { PokemonDetailPage } from "../page/PokemonDetailPage";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <>
    <Route
      element={<MainPage />}
      path="/"
      // loader={async ({ params }) => {
      //   return fetch(
      //     `/fake/api/teams/${params.teamId}.json`
      //   );
      // }}
      // action={async ({ request }) => {
      //   return updateFakeTeam(await request.formData());
      // }}
      // errorElement={<ErrorBoundary />}
    />
    <Route
        element={ <PokemonDetailPage />}
        path="/detail/:id"
    />
    </>
  )
);
