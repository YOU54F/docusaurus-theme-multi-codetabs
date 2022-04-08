import React from "react";

export interface TableDataItem {
  
    linkTitle: string;
    linkUrl: string;
    badges: string[];
    language: string;
    useCase: string;
    side: string;
    compatible_clients: {
        name: string;
        link: string;
    }[];
}

export const tableData:TableDataItem[] = [
  {
    linkTitle: "React JS Website tested using Pact to generate consumer pacts",
    linkUrl: "/docs/examples/js/consumer",
    badges: [
      "https://testdemo.pactflow.io/pacts/provider/pactflow-example-provider/consumer/pactflow-example-consumer/latest/badge.svg",
    ],
    language: "JS/NodeJS",
    useCase: "Web",
    side: "Consumer",
    compatible_clients: [
      {
        name: "Example Provider",
        link: "/docs/examples/js/provider",
      },
    ],
  },
  {
    linkTitle:
      "React JS Website tested using Cypress to generate consumer pacts",
    linkUrl: "/docs/examples/cypress",
    badges: [
      "https://testdemo.pactflow.io/pacts/provider/pactflow-example-provider/consumer/example-consumer-cypress/latest/badge.svg",
    ],
    language: "JS/NodeJS",
    useCase: "Web",
    side: "Consumer",
    compatible_clients: [
      {
        name: "Example Provider",
        link: "/docs/examples/js/provider",
      },
    ],
  },
  {
    linkTitle: "ExpressJS API provider tested with Pact Verifier",
    linkUrl: "/docs/examples/js/provider",
    badges: [
      "https://testdemo.pactflow.io/pacts/provider/pactflow-example-provider/consumer/pactflow-example-consumer/latest/badge.svg",
      "https://testdemo.pactflow.io/pacts/provider/pactflow-example-provider/consumer/example-consumer-cypress/latest/badge.svg",
    ],
    language: "JS/NodeJS",
    useCase: "API",
    side: "Provider",
    compatible_clients: [
      {
        name: "Example Consumer Cypress",
        link: "/docs/examples/cypress/",
      },
      {
        name: "Example Consumer",
        link: "/docs/examples/js/consumer",
      },
    ],
  },
];

export const columns = [
  {
    Header: "Language",
    accessor: "language",
    className: "data-table",
  },
  {
    Header: "Type",
    accessor: "side",
    className: "data-table",
  },
  {
    Header: "Use Case",
    accessor: "useCase",
    className: "data-table",
  },
  {
    Header: "Demo",
    accessor: "linkTitle",
    className: "data-table left",
    Cell: ({ cell: { value }, row: { original } }) => (
      <a href={`${original.linkUrl}`} rel="noreferrer noopener">
        {value}
      </a>
    ),
  },
  {
    Header: "Contracts",
    accessor: "badges",
    className: "data-table",
    Cell: ({ row: { original } }) => {
      const badges = original.badges;
      if (!badges) return "";
      return badges.map((w) => (
        <a href={w.replace("/badge.svg", "")} key={w}>
          {" "}
          <img src={w}/>
        </a>
      ));
    },
  },
  {
    Header: "Compatible With",
    accessor: "compatible_clients",
    className: "data-table",
    Cell: ({ row: { original } }) => {
      const compatible_clients = original.compatible_clients;
      if (!compatible_clients) return "";
      return compatible_clients.map((w) => <li key={w.name}><a href={w.link}>{w.name}</a></li>);
    },
  },
];
