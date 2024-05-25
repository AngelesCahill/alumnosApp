import { Router } from "express";
import { getUsers, getThisUser, createUser, deleteUser, updateUser } from "../controllers/user.controllers.js";

const router = Router();

//obtener todos los usuarios
router.get('/users', getUsers);

//obtener un usuario por su id
router.get("/users/:id", getThisUser);

//Crear un usuario
router.post("/users", createUser);
//Eliminando un usuario
router.delete("/users/:id", deleteUser);

//Actualizar un usuario
router.put("/users/:id", updateUser);

export default router;