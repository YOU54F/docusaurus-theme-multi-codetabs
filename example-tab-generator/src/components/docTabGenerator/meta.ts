import { TabData } from "./types";

const languages: TabData = {
  js: {
    iconTitle: "JavaScript",
    iconLocation:
      "https://raw.githubusercontent.com/pact-foundation/pact.io/master/pages/assets/img/languages/javascript-original.svg",
    iconLink: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
    contentUrl: "https://github.com/leachim6/hello-world/blob/main/j/Java.java",
    content: "",
  },
  java: {
    iconTitle: "Java",
    iconLocation:
      "https://raw.githubusercontent.com/pact-foundation/pact.io/master/pages/assets/img/languages/java-original.svg",
    iconLink: "https://docs.oracle.com/en/java/",
    contentUrl: "https://github.com/leachim6/hello-world/blob/main/j/Java.java#L1-L5",
    content: "",
  },
  golang: {
    iconTitle: "Golang",
    iconLocation:
      "https://raw.githubusercontent.com/pact-foundation/pact.io/master/pages/assets/img/languages/go-original.svg",
    iconLink: "https://go.dev/",
    contentUrl: "https://github.com/leachim6/hello-world/blob/main/g/Go.go#L1-L7",
    content: "",
  },
  ruby: {
    iconTitle: "Ruby",
    iconLocation:
      "https://raw.githubusercontent.com/pact-foundation/pact.io/master/pages/assets/img/languages/ruby-original.svg",
    iconLink: "https://www.ruby-lang.org/en/documentation/",
    contentUrl: "https://github.com/leachim6/hello-world/blob/main/r/Ruby.rb#L1-L2",
    content: "",
  },
  dotnet: {
    iconTitle: ".NET",
    iconLocation:
      "https://raw.githubusercontent.com/pact-foundation/pact.io/master/pages/assets/img/languages/csharp-original.svg",
    iconLink: "https://docs.microsoft.com/en-us/dotnet/",
    contentUrl: "",
    content: "",
  },
  docker: {
    iconTitle: "Docker",
    iconLocation: "https://www.svgrepo.com/show/331370/docker.svg",
    iconLink: "https://docs.docker.com/",
    contentUrl: "",
    content: "",
  },
  kotlin: {
    iconTitle: "Kotlin",
    iconLocation:
      "https://raw.githubusercontent.com/pact-foundation/pact.io/master/pages/assets/img/languages/kotlin-original.svg",
    iconLink: "https://kotlinlang.org/docs",
    contentUrl: "",
    content: "",
  },
  scala: {
    iconTitle: "Scala",
    iconLocation:
      "https://raw.githubusercontent.com/pact-foundation/pact.io/master/pages/assets/img/languages/scala-original.svg",
    iconLink: "https://docs.scala-lang.org/",
    contentUrl: "",
    content: "",
  },
  clojure: {
    iconTitle: "Clojure",
    iconLocation:
      "https://raw.githubusercontent.com/pact-foundation/pact.io/master/pages/assets/img/languages/clojure-original.svg",
    iconLink: "https://clojure.org/api/api",
    contentUrl: "",
    content: "",
  },
  python: {
    iconTitle: "Python",
    iconLocation:
      "https://raw.githubusercontent.com/pact-foundation/pact.io/master/pages/assets/img/languages/python-original.svg",
    iconLink: "https://docs.python.org/",
    contentUrl: "",
    content: "",
  },
  swift: {
    iconTitle: "Swift and Objective-C",
    iconLocation:
      "https://raw.githubusercontent.com/pact-foundation/pact.io/master/pages/assets/img/languages/swift-original.svg",
    iconLink: "https://developer.apple.com/documentation/swift",
    contentUrl: "",
    content: "",
  },
  php: {
    iconTitle: "PHP",
    iconLocation:
      "https://raw.githubusercontent.com/pact-foundation/pact.io/master/pages/assets/img/languages/php-original.svg",
    iconLink: "https://www.php.net/docs.php",
    contentUrl: "",
    content: "",
  },
  cplusplus: {
    iconTitle: "C++",
    iconLocation:
      "https://raw.githubusercontent.com/pact-foundation/pact.io/master/pages/assets/img/languages/csharp-original.svg",
    iconLink: "https://docs.microsoft.com/en-us/cpp/",
    contentUrl: "",
    content: "",
  },
};

const testing_tools: TabData = {
  postman: {
    iconTitle: "Postman",
    iconLocation: "https://cdn.worldvectorlogo.com/logos/postman.svg",
    iconLink: "/docs/examples/bi-directional/provider/postman/",
    contentUrl: "",
    content: ""
  },
  restassured: {
    iconTitle: "REST-assured",
    iconLocation: "https://rest-assured.io/img/logo-transparent.png",
    iconLink: "/docs/examples/bi-directional/provider/restassured/",
    contentUrl: "",
    content: ""
  },
  dredd: {
    iconTitle: "Dredd",
    iconLocation: "https://dredd.org/en/latest/_images/dredd.png",
    iconLink: "/docs/examples/bi-directional/provider/dredd/",
    contentUrl: "",
    content: ""
  },
  schemathesis: {
    iconTitle: "Schemathesis",
    iconLocation:
      "https://res.cloudinary.com/apideck/image/upload/w_200,f_auto/v1626657729/icons/schemathesis.png",
    iconLink: "/docs/examples/bi-directional/provider/dotnet/",
    contentUrl: "",
    content: ""
  },
  cypress: {
    iconTitle: "Cypress",
    iconLocation: "https://seekicon.com/free-icon-download/cypress_1.svg",
    iconLink: "/docs/examples/bi-directional/consumer/cypress/",
    contentUrl: "",
    content: ""
  },
  wiremock: {
    iconTitle: "Wiremock",
    iconLocation: "https://wiremock.org/images/wireMockLogo.png",
    iconLink: "/docs/examples/bi-directional/consumer/wiremock/",
    contentUrl: "",
    content: ""
  },
  nock: {
    iconTitle: "Nock",
    iconLocation: "https://www.svgrepo.com/show/263799/replay.svg",
    iconLink: "/docs/examples/bi-directional/consumer/recordreplay/",
    contentUrl: "",
    content: "",
  },
  mountebank: {
    iconTitle: "Mountebank",
    iconLocation: "http://www.mbtest.org/images/mountebank.png",
    iconLink: "/docs/examples/bi-directional/consumer/mountebank/",
    contentUrl: "",
    content: ""
  },
  pact: {
    iconTitle: "Pact",
    iconLocation:
      "https://raw.githubusercontent.com/pact-foundation/pact-logo/master/media/link.svg",
    iconLink: "/docs/examples/bi-directional/consumer/dotnet/",
    contentUrl: "",
    content: "",
  },
  msw: {
    iconTitle: "Mock Service Worker",
    iconLocation:
      "https://raw.githubusercontent.com/mswjs/msw/main/media/msw-logo.svg",
    iconLink: "/docs/examples/bi-directional/consumer/msw/",
    contentUrl: "",
    content: ""
  },
};

const testing_tools_providers = [
  "dredd",
  "restassured",
  "postman",
  "schemathesis",
];
const testing_tools_consumers = [
  "cypress",
  "wiremock",
  "nock",
  "mountebank",
  "pact",
  "msw",
];

const testing_tools_provider_side: TabData = Object.keys(testing_tools)
  .filter((key) => testing_tools_providers.includes(key))
  .reduce((obj:TabData, key) => {
    obj[key] = testing_tools[key];
    return obj;
  }, {});
const testing_tools_consumer_side: TabData = Object.keys(testing_tools)
  .filter((key) => testing_tools_consumers.includes(key))
  .reduce((obj:TabData, key) => {
    obj[key] = testing_tools[key];
    return obj;
  }, {});

export const meta = {
  languages,
  testing_tools,
  testing_tools_provider_side,
  testing_tools_consumer_side,
};
