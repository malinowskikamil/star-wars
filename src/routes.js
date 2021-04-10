import queryString from "query-string";
import App from "./app";
import { NotFound, Home, Person } from "./pages";
import { fetchPeople } from "./actions/people";
import { fetchPerson } from "./actions/person";

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
        path: "/:id",
        exact: true,
        component: Person,
        loadData: ({ params: { id } }) => [fetchPerson(id)],
      },
      {
        component: NotFound,
      },
    ],
  },
];
