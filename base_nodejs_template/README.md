# Base Node.js Project Template

A minimal, layered Node.js backend template using Express. Use this as a starting point for REST APIs with clear separation of concerns (routes → controllers → repositories), centralized config, and structured logging.

---

## Tech Stack

- **Runtime:** Node.js  
- **Framework:** Express 5  
- **Logging:** Winston  
- **Database (optional):** Sequelize + MySQL2  
- **Env:** dotenv  

---

## Project Structure

```
base_nodejs_template/
├── src/
│   ├── config/           # Application configuration
│   ├── controllers/      # Request handlers (business logic entry)
│   ├── middlewares/      # Express middleware (auth, validation, etc.)
│   ├── repositories/     # Data access layer (DB / external APIs)
│   ├── routes/           # API route definitions
│   │   └── v1/           # Versioned API (e.g. /api/v1/...)
│   └── index.js          # App entry point (Express setup, mount routes)
├── .env                  # Environment variables (not committed)
├── .gitignore
├── package.json
└── README.md
```

### Folder Descriptions

| Folder / File | Purpose |
|---------------|--------|
| **`src/`** | Application source code. Keeps all app logic under one root for clarity and tooling. |
| **`src/config/`** | Centralized configuration: server (port, env), logger, and any shared settings. Loads from environment (e.g. `.env`) so config stays environment-specific and out of code. |
| **`src/controllers/`** | **Controller layer** — handles HTTP request/response. Parses input, calls services/repositories, and returns status codes and JSON. Keeps route handlers thin. |
| **`src/middlewares/`** | **Middleware** — reusable functions that run before route handlers (e.g. auth, request validation, error handling, logging). Composable and shared across routes. |
| **`src/repositories/`** | **Repository layer** — data access only. Talks to DB (e.g. via Sequelize) or external APIs. Controllers call repositories, not raw DB code, which improves testability and keeps business logic in controllers/services. |
| **`src/routes/`** | **Route definitions** — maps URL paths and HTTP methods to controllers. `routes/index.js` mounts under `/api`; `routes/v1/` provides versioned endpoints (e.g. `/api/v1/info`). |
| **`src/index.js`** | **Entry point** — creates Express app, applies config, mounts routes, and starts the server. |

---

## Getting Started

### Prerequisites

- Node.js (v18+ recommended)

### Install

```bash
npm install
```

### Configure

Copy or create a `.env` in the project root (see `.env.example` if present). Example:

```env
PORT=3000
```

### Run

```bash
# Development (with file watch)
npm run dev
```

Server runs at `http://localhost:<PORT>`. Example health-style endpoint: `GET /api/v1/info`.

---

## API Overview

| Method | Path           | Description        |
|--------|----------------|--------------------|
| GET    | `/api/v1/info` | Simple “API is live” response |

---

## Conventions

- **API prefix:** All API routes are under `/api` (e.g. `/api/v1/...`).
- **Versioning:** Use `routes/v1/`, `routes/v2/`, etc., for API versions.
- **Layers:** Routes → Controllers → Repositories; keep business logic in controllers or a future `services/` layer.
- **Config:** Use `src/config` and `process.env`; avoid hardcoding ports and secrets.
- **Logging:** Use the shared logger from `src/config` for consistent log format and destinations (console, file).

---

## License

ISC
