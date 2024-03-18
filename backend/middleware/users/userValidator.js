import { body } from "express-validator";
import validate from "../validate.js";

const userValidationRules = [
  body(userName)
    .isLength({ min: 2, max: 30 })
    .withMessage("Username must contain at least 2 an max 30 characters."),
  body(fName)
    .isLength({ min: 2, max: 30 })
    .withMessage("First name must contain at least 2 an max 30 characters."),
  body(lName)
    .isLength({ min: 2, max: 30 })
    .withMessage("Last Name must contain at least 2 an max 30 characters."),
  body(email).isEmail(),
  body(password),
  body(profilePicture),
  body(about),
  validate,
];

export { userValidationRules };
