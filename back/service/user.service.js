import dbConnect from "../mongo.js";
import { User, validate } from "../models/User.js";
import Joi from "joi";
import bcrypt from "bcrypt";
import dotenv from "dotenv";
dotenv.config();

export const logIn = async (body) => {
  await dbConnect();

  try {
    const { error } = validateData(body);
    if (error) {
      throw new Error({ message: error.message }); // Lanza el error con el mensaje
    }

    const user = await User.findOne({ email: body.email });
    if (!user) {
      throw new Error({ message: "Invalid Email or Password" }); // Lanza el error con el mensaje
    }

    const validPassword = await bcrypt.compare(body.password, user.password);
    if (!validPassword) {
      throw new Error({ message: "Invalid Email or Password" }); // Lanza el error con el mensaje
    }

    const token = user.generateAuthToken();
    const loggedUser = {
      data: token,
      id: user._id,
      name: `${user.firstName} ${user.lastName}`,
      message: "Logged in successfully",
      role: user.role,
    };
    return loggedUser;
  } catch (error) {
    throw new Error({ message: error.message }); // Lanza el mensaje de error
  }
};

const validateData = (data) => {
  const schema = Joi.object({
    email: Joi.string().email().required().label("Email"),
    password: Joi.string().required().label("Password"),
  });
  return schema.validate(data);
};

export const createUser = async (body) => {
  await dbConnect();

  try {
    const { error } = validate(body);
    if (error) {
      throw new Error({ message: error.message });
    }
    const user = await User.findOne({ email: body.email });
    if (user) {
      throw new Error({ message: "Please try another Email!" });
    }
    // eslint-disable-next-line no-undef
    const salt = await bcrypt.genSalt(Number(process.env.SALT));

    const hashPassword = await bcrypt.hash(body.password, salt);

    await new User({ ...body, password: hashPassword }).save();
    return { message: "User Created Successfully" };
  } catch (error) {
    throw new Error({ message: error.message }); // Lanza el mensaje de error
  }
};

export const getUsers = async () => {
  await dbConnect();

  try {
    const users = await User.find();
    return users;
  } catch (error) {
    throw new Error({ message: error.message }); // Lanza el mensaje de error
  }
};
