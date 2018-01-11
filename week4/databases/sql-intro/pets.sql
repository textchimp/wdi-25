-- This is what an SQL comment looks like

-- Create a new database with this file by running the following command:
-- sqlite3 database.db < pets.sql
-- (remove the old database file first: rm database.db)

CREATE TABLE pets (
  id INTEGER PRIMARY KEY,
  first_name TEXT,
  last_name  TEXT,
  roundness  TEXT,
  age        INTEGER
);
