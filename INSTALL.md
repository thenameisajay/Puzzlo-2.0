# INSTALL.md

## Local Installation Guide

Follow the steps below to set up and run Puzzlo 2.0 locally on your machine.

### Prerequisites

Before you begin, make sure you have the following installed:

- **Node.js** (LTS version recommended v20)
- **Docker** (with Docker Compose)
- **Git** (optional, for cloning the repository)

### 1. **Clone the Repository**

First, clone the repository to your local machine:

```bash
git clone https://github.com/thenameisajay/Puzzlo-2.0
cd puzzlo-2.0
```

### 2. **Set Up Environment Variables**

- In the root directory, you'll find a file named `env.example`.
- Copy this file to a new file named `.env`:

```bash
cp env.example .env
```

- Open the `.env` file in your preferred text editor and enter your own values for the environment variables. This includes database connection details, JWT secrets, and any other necessary configurations.

### 3. **Set Up Docker**

- Ensure that Docker is installed and running on your machine.
- A `docker-compose.yml` file is provided in the root directory of the project. This file sets up a PostgreSQL container for the application.
- To start the PostgreSQL container, run:

```bash
docker-compose up -d  # -d flag is for running in detached mode
```

This command will start the necessary containers in the background.

### 4. **Generate Prisma Client and Migrate Database**

- After the PostgreSQL container is running, you need to generate the Prisma client and apply the database migrations.

```bash
npx prisma generate
npx prisma migrate dev
```

This will ensure that your database schema is up-to-date and that the Prisma client is generated based on the current schema.

### 5. **Run the Application**

- Finally, start the development server:

```bash
npm run dev
```

This command will start the application in development mode. The server will be accessible at `http://localhost:3000`.

### 6. **Accessing the Application**

- Open your web browser and navigate to `http://localhost:3000` to start playing Puzzlo 2.0 locally.

### 7. **Stopping the Application**

- To stop the development server, press `Ctrl + C` in the terminal where the server is running.
- To stop and remove the Docker containers, run:

```bash
docker-compose down
```

This will stop the PostgreSQL container and clean up the resources.

### Troubleshooting

- **Database Connection Issues**: Ensure that Docker is running and that the PostgreSQL container is up. Check your `.env` file to confirm that the database connection details are correct.
- **Prisma Issues**: If you encounter issues with Prisma, try running `npx prisma generate` again to regenerate the client.

---

You're all set! Your local development environment for Puzzlo 2.0 should now be up and running. Happy coding!
