//conectarnos a la base de datos. El objeto pool nos permitirá hacer consultas a la bd.
// Esto se exportará user.routes.js

import pg from "pg";
import {
  DB_DATABASE,
  DB_HOST,
  DB_PASSWORD,
  DB_PORT,
  DB_USER,
} from "./configDb.js";

export const pool = new pg.Pool({
  user: DB_USER,
  host: DB_HOST,
  password: DB_PASSWORD,
  database: DB_DATABASE,
  port: DB_PORT,
});