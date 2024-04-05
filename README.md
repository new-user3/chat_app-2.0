# Group Chat Application

This is a simple group chat application built using Node.js, Express.js, Socket.IO, and SQLite3 for database management. It allows users to authenticate into chat rooms and engage in real-time messaging with other users.

## Features

- **User Authentication**: Users can authenticate into chat rooms by providing a valid chat room ID and password.
- **Real-time Messaging**: Once authenticated, users can send and receive messages in real-time within the chat room.
- **Persistent Data Storage**: Chat room data is stored in an SQLite3 database, ensuring persistence across server restarts.

## Installation

1. Clone the repository:

    ```bash
    git clone <repository-url>
    ```

2. Navigate to the project directory:

    ```bash
    cd <project-directory>
    ```

3. Install dependencies:

    ```bash
    npm install
    ```

## Usage

1. Start the server:

    ```bash
    npm start
    ```

2. Open a web browser and navigate to `http://localhost:3000`.
3. Enter the chat room ID and password to authenticate.
4. Start chatting with other users in real-time!

## File Structure

- **`app.js`**: Contains the server-side code responsible for handling HTTP requests, WebSocket connections, and database operations.
- **`index.html`**: The landing page for user authentication.
- **`chatroom.html`**: The chat room page where users can send and receive messages.
- **`package.json`**: Configuration file for npm dependencies and scripts.
- **`database.db`**: SQLite3 database file storing chat room information.

## Dependencies

- **Express.js**: Web application framework for Node.js used for handling HTTP requests and routing.
- **Socket.IO**: JavaScript library for real-time web applications, facilitating real-time bidirectional event-based communication.
- **SQLite3**: Node.js driver for SQLite3 database management.
- **Body-parser**: Middleware for parsing incoming request bodies in a middleware before handlers.

## Contributing

Contributions are welcome! If you have any suggestions, bug reports, or feature requests, please open an issue or submit a pull request.

## License

This project is licensed under the [MIT License](LICENSE).
