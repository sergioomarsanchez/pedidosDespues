import { z } from "zod";

const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

// const passwordComplexityRegex =
//   /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

export const logInInfoSchemaValidator = z.object({
  email: z.string().min(3, "Agrega tu mail").regex(emailRegex, { message: "Ingresa un correo válido" }),
  password: z.string().min(3, "Agrega tu password"),
});

export type logInInfo = z.infer<typeof logInInfoSchemaValidator>;
