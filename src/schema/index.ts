import * as z from "zod";

export const searchSchema = z
  .string({
    message: "Country name must be a set of characters.",
  })
  .trim()
  .min(1, "Country name must be at least 1 characters long.");
