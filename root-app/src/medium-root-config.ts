import { registerApplication, start, LifeCycles } from "single-spa";

registerApplication({
  name: "@medium/navbar",
  app: () =>
    System.import<LifeCycles>(
      "http://localhost:9001/medium-navbar.js"
    ),
  activeWhen: ["/"],
});

// registerApplication({
//   name: "@medium/navbar",
//   app: () => System.import("@medium/navbar"),
//   activeWhen: ["/"]
// });

start({
  urlRerouteOnly: true,
});
