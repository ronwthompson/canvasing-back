# Getting started

You'll need a few tools to setup this project:

- PostgreSQL [https://www.postgresql.org/download/](Installation Instructions)
- Node v18+ [https://nodejs.org/en/download/](Installation Instructions)
- pgAdmin v4+ [https://www.pgadmin.org/download/](Installation Instructions) (optional)

Once those are installed, run PostgreSQL locally and create a database in your local PostgreSQL instance. I've created one called "canvasing" but you can name it anything you'd like.

Either using pgAdmin or the command-line tool `psql`, connect to your local database and create the table this app will use by running the SQL code in `migrations/setup.sql`. This should create a table called `notes_table` with 4 columns (id, name, email, and notes).

Update the database's credentials in `src/app.js` with your user, host, database name, and password.

Navigate to the project directory and run `node src/app.js`

This will run the app in development mode.

Open [http://localhost:3001/healthCheck](http://localhost:3001/healthCheck) in your favorite browser to ensure the app is running correctly.

You will also need to download and run the frontend, which is located [https://github.com/ronwthompson/canvasing-front](here).

### `npm test`

Launches the test runner in the interactive watch mode.\
