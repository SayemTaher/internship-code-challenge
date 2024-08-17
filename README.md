# internship-coding-challenge

This project is a simple application that interacts with a challenge API, retrieving data through multiple requests using a cursor-based mechanism until a hidden flag is found. It consists of a backend server using Node.js with Express and a frontend that displays the data received from the API.

## Project Structure

- **Backend (Node.js & Express)**: Acts as a proxy to interact with the challenge API. It handles the API calls and forwards responses to the frontend.
- **Frontend (HTML & JavaScript)**: Fetches data from the backend and displays it in the browser. The frontend handles recursive fetching based on the `nextCursor` values received in the responses until the hidden flag is discovered.

## API Challenge

The challenge involves:
1. Sending a `POST` request to the external API with an authorization token and a cursor.
2. Receiving the data from the API, which either contains a hidden flag or a `nextCursor`.
3. If a `nextCursor` is present, the process repeats until the flag is found.

## How It Works

### Backend (`check.js`) // server side

- **Route**: `/result`
- **Method**: `GET`
- **Request**: Receives a `cursor` from the frontend via query parameters and forwards it to the external API.
- **Response**: Sends the external API's response back to the frontend, which could include data such as `nextCursor` or a hidden flag.

The backend uses `axios` to make authenticated `POST` requests to the external API (`https://flag-gilt.vercel.app/api/challenge`), passing the `cursor` in both the request body and query parameters.

### Frontend (`index.html`)

- **Display**: Displays the data received from the backend.
- **Recursive Fetching**: When the frontend receives a `nextCursor`, it automatically makes another request to the backend with the updated cursor until the flag is found.
- **Flow**:
  1. Initially fetches data from the backend.
  2. Continues to request data recursively based on `nextCursor` values.
  3. Stops fetching when the flag is found and displays it.

### Technologies Used

- **Backend**: Node.js, Express, Axios, CORS
- **Frontend**: HTML, Vanilla JavaScript, Fetch API

## How to Run the Project

### Backend Setup

1. Install dependencies:
   ```bash
   npm install cors axios express 
