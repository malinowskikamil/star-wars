import queryString from "query-string";
import App from "./app";
import { NotFound, Home } from "./pages";
import { fetchPeople } from "./actions/people";

export default [
  {
    component: App,
    routes: [
      {
        path: "/",
        exact: true,
        component: Home,
        loadData: ({
          req: {
            _parsedUrl: { query },
          },
        }) => [fetchPeople(queryString.parse(query))],
      },
      {
        component: NotFound,
      },
    ],
  },
];
