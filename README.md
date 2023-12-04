# Task Master

Task Master is a simple task management application with a backend built using Node.js, Express, and MongoDB, and a frontend built with React.

## Backend

### Prerequisites
- Node.js (v14.0.0 or higher)

### Setup

1. Open a terminal in the project root folder.

2. Install dependencies:
    ```bash
    npm install
    ```

3. Start the server:
    ```bash
    npm start
    ```

4. The server will be running at `http://localhost:3001`.

## Frontend

### Prerequisites
- Node.js (v14.0.0 or higher)

### Setup

1. Open a terminal and navigate to the `frontend` folder:
    ```bash
    cd frontend
    ```

2. Install dependencies:
    ```bash
    npm install
    ```

3. Start the frontend development server:
    ```bash
    npm start
    ```

4. Open your browser and visit `http://localhost:3000` to view the frontend.

## Notes

- A free MongoDB server is being hosted for you to play around with Task Master.

- You may need to update the MongoDB connection details in `dbConfig.js` or your backend configuration files.

- If you encounter any issues, check the console for error messages and make sure all dependencies are installed.

## Remarks on Project

### Backend:

- **Environment Setup**: To be completed as there is no .env file, and secrets can be maintained.

- **Local MongoDB Instance**: Local instance for MongoDB wasn't created and can be used for local testing.

- **API Documentation**: API documentation, such as Swagger, to be implemented for API testing.

- **Unit Tests and End-to-End Tests**: Additional testing is required for backend functionalities.

### Frontend:

- **Component Code Review**: The component code requires review for performance improvements.

- **Update Functionality**: Update functionality is in place, requires API call hookup, and dynamic rendering of the component.

- **Edit Icon**: The edit icon should be active while someone is editing, and an inactive icon to stop editing.

- **Confirm Symbol**: A confirm symbol to send the update and dynamically render the component.

- **Callback to Parent Component**: The callback to the parent component is set up for dynamic loading.

- **Enter Icon**: An enter icon while typing can be presented to indicate to users to press enter when done.

- **Error Handling for Frontend**: Implement error handling for frontend, a notification service that sends notifications for any errors.

- **Checkbox Fix**: Checkbox requires fixing as it doesn't uncomment the task, only when clicked on the green checkbox.

- **Component Refactoring**: Components can be further broken down, and types can be further tightened.

- **Unit Tests and End-to-End Tests**: Additional testing is required for frontend functionalities.

- **Further comments to follow**
