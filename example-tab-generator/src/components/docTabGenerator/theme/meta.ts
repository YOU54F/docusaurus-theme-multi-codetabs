import { TabData } from "../types/types";

const languages: TabData = {
  js: {
    iconTitle: "JavaScript",
    iconLocation:
      "https://raw.githubusercontent.com/pact-foundation/pact.io/master/pages/assets/img/languages/javascript-original.svg",
    iconLink: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
    contentUrl: "https://github.com/leachim6/hello-world/blob/main/j/JavaScript.js",
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
    contentUrl: "https://github.com/leachim6/hello-world/blob/main/v/VB.NET.vb",
    content: "",
  },
  docker: {
    iconTitle: "Docker",
    iconLocation: "https://www.svgrepo.com/show/331370/docker.svg",
    iconLink: "https://docs.docker.com/",
    contentUrl: "https://github.com/docker-library/hello-world/blob/master/Dockerfile-linux.template",
    content: "",
  },
  kotlin: {
    iconTitle: "Kotlin",
    iconLocation:
      "https://raw.githubusercontent.com/pact-foundation/pact.io/master/pages/assets/img/languages/kotlin-original.svg",
    iconLink: "https://kotlinlang.org/docs",
    contentUrl: "https://github.com/leachim6/hello-world/blob/main/k/Kotlin.kt",
    content: "",
  },
  scala: {
    iconTitle: "Scala",
    iconLocation:
      "https://raw.githubusercontent.com/pact-foundation/pact.io/master/pages/assets/img/languages/scala-original.svg",
    iconLink: "https://docs.scala-lang.org/",
    contentUrl: "https://github.com/leachim6/hello-world/blob/main/s/Scala.scala",
    content: "",
  },
  clojure: {
    iconTitle: "Clojure",
    iconLocation:
      "https://raw.githubusercontent.com/pact-foundation/pact.io/master/pages/assets/img/languages/clojure-original.svg",
    iconLink: "https://clojure.org/api/api",
    contentUrl: "https://github.com/leachim6/hello-world/blob/main/c/Clojure.clj",
    content: "",
  },
  python: {
    iconTitle: "Python",
    iconLocation:
      "https://raw.githubusercontent.com/pact-foundation/pact.io/master/pages/assets/img/languages/python-original.svg",
    iconLink: "https://docs.python.org/",
    contentUrl: "https://github.com/leachim6/hello-world/blob/main/p/Python%203.py",
    content: "",
  },
  swift: {
    iconTitle: "Swift and Objective-C",
    iconLocation:
      "https://raw.githubusercontent.com/pact-foundation/pact.io/master/pages/assets/img/languages/swift-original.svg",
    iconLink: "https://developer.apple.com/documentation/swift",
    contentUrl: "https://github.com/leachim6/hello-world/blob/main/s/Swift.swift",
    content: "",
  },
  php: {
    iconTitle: "PHP",
    iconLocation:
      "https://raw.githubusercontent.com/pact-foundation/pact.io/master/pages/assets/img/languages/php-original.svg",
    iconLink: "https://www.php.net/docs.php",
    contentUrl: "https://github.com/leachim6/hello-world/blob/main/p/PHP.php",
    content: "",
  },
  cplusplus: {
    iconTitle: "C++",
    iconLocation:
      "https://raw.githubusercontent.com/pact-foundation/pact.io/master/pages/assets/img/languages/csharp-original.svg",
    iconLink: "https://docs.microsoft.com/en-us/cpp/",
    contentUrl: "https://github.com/leachim6/hello-world/blob/main/c/C%2B%2B.cpp",
    content: "",
  },
};

const testing_tools: TabData = {
  postman: {
    iconTitle: "Postman",
    iconLocation: "https://cdn.worldvectorlogo.com/logos/postman.svg",
    iconLink: "/docs/examples/bi-directional/provider/postman/",
    contentUrl: "https://github.com/postmanlabs/postman-docs/blob/develop/src/pages/docs/getting-started/installation-and-updates.md?plain=1#L77",
    content: ""
  },
  restassured: {
    iconTitle: "REST-assured",
    iconLocation: "https://rest-assured.io/img/logo-transparent.png",
    iconLink: "/docs/examples/bi-directional/provider/restassured/",
    contentUrl: "https://github.com/rest-assured/rest-assured/blob/master/examples/spring-mvc-webapp/src/test/java/io/restassured/examples/springmvc/controller/MockMvcSecurityITest.java#L65-L77",
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
    contentUrl: "https://github.com/cypress-io/cypress-example-kitchensink/blob/master/cypress/integration/1-getting-started/todo.spec.js",
    content: "",
    language: "javascript"
  },
  wiremock: {
    iconTitle: "Wiremock",
    iconLocation: "https://wiremock.org/images/wireMockLogo.png",
    iconLink: "/docs/examples/bi-directional/consumer/wiremock/",
    contentUrl: "https://github.com/wiremock/wiremock/blob/master/README.md?plain=1#L52",
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
