import { logIn, getUsers, createUser } from "../service/user.service.js";

export const logInUser = async (req, res, next) => {
  const { body } = req;
  try {
    const result = await logIn(body);
    return res.status(200).send(result || "Log in successful");
  } catch (error) {
    next(error);
  }
};
export const createNewUser = async (req, res, next) => {
  const { body } = req;

  try {
    const result = await createUser(body);
    return res.status(200).send(result || "The user was not created");
  } catch (error) {
    next(error);
  }
};
export const getAllUsers = async (req, res, next) => {
  try {
    const result = await getUsers();
    return res.status(200).send(result || "No users found");
  } catch (error) {
    next(error);
  }
};
