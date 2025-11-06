# Frontend ↔ Backend Integration Notes

This React (CRA) frontend is wired to your Express backend.

## API Base URL
- Uses `REACT_APP_API_BASE_URL` (CRA) or `VITE_API_BASE_URL` (Vite) if present.
- Defaults to `http://localhost:8080/api`.

## Auth
- `Login` page keeps the same UI (single name input). On submit:
  - Tries to `POST /api/auth/login` using email `${name}@example.com` and a secret stored locally.
  - If the user doesn't exist, it automatically `POST /api/auth/register` with the same credentials.
- JWT is stored at `localStorage.pv_token` and attached automatically to all requests.

## Connected Endpoints
- `GET /products`, `POST /products`
- `GET /projects`, `POST /projects`
- `GET /posts`, `POST /posts`
- `GET /orders`, `POST /orders`
- `GET /chats`, `POST /chats`

## Loading & Error Handling
- Data fetching uses React Query. Errors propagate to the console; you can add UI alerts using the existing `Alert` component if desired.

## Local Development
```
cp .env.example .env
# optionally edit REACT_APP_API_BASE_URL
npm install
npm start
```

## Deploy to Render
- Add this repo to Render as a **Static Site**.
- Render will run `npm install && npm run build` and publish the `build/` folder automatically.
- Set env var `REACT_APP_API_BASE_URL` to your backend like `https://your-backend.onrender.com/api`.
- `render.yaml` is included for Infrastructure as Code.
