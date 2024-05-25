import { pool } from "../conection.db.js";

export const getUsers = async (req, res) => {
    const { rows } = await pool.query('SELECT * FROM estudiantes');
    res.json(rows);
};

export const getThisUser = async (req, res) => {
    const { id } = req.params;
    const { rows } = await pool.query(`SELECT * FROM estudiantes WHERE id = ${id}`);
    if (rows.length === 0) {
        return res.status(404).json("Usuario no encontrado");
    }
    res.json(rows);
};

export const createUser = async (req, res) => {
    const data = req.body;
    const { rows } = await pool.query('INSERT INTO estudiantes (name, email) VALUES($1, $2)', [data.name, data.email]);
    return res.json(rows[0]);
};

export const deleteUser = async (req, res) => {
    const { id } = req.params;
    const { rowCount } = await pool.query(
        "DELETE FROM estudiantes WHERE id = $1 RETURNING *", [id]);
    if (rowCount === 0) {
        return res.status(404).json("Usuario no encontrado");
    }
    return res.status(204).json(`Se ha eliminado el usuario con id: ${id}`);
};

export const updateUser = async (req, res) => {
  const { id } = req.params;
  const data = req.body;
  const { rows } = await pool.query(
    "UPDATE estudiantes SET name=$1, email=$2 WHERE id = $3",
    [data.name, data.email, id]
  );
  return res.json(rows[0]);
};