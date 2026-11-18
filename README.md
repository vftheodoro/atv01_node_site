# DW2 — Node.js, Express and EJS (Activity 01)

Academic project from the first Web Development II activity. It exercises a server-rendered Node.js application built with Express and EJS, using separate route controllers.

## Stack and layout

- **Runtime:** Node.js with ES modules.
- **Web framework:** Express 5.
- **Templates:** EJS views.
- **Controllers:** club, player, and stadium routes.

Project code is located under [`atv01/`](atv01/):

| Path | Responsibility |
| --- | --- |
| `atv01/index.js` | App entry point and server startup |
| `atv01/controllers/` | Domain-specific route handlers |
| `atv01/views/` | EJS page templates |
| `atv01/public/` | Static assets |

## Run locally

```bash
git clone https://github.com/vftheodoro/atv01_node_site.git
cd atv01_node_site/atv01
npm ci
node index.js
```

Open http://localhost:8080. The server port is defined directly in `atv01/index.js`.

## Learning goals

Understand HTTP routing, Express middleware, template rendering, static assets, and basic project organization. This is coursework and should not be treated as a production API.

## Verification and limitations

The current `npm test` script is a placeholder that intentionally fails; automated tests are not configured. Routes and views should be checked manually when running locally.

## Credits

The package metadata names Mario as the author and links to an upstream repository. This repository is maintained under Victor Theodoro's account as an academic copy/collaboration; original authorship and attribution should be preserved.
