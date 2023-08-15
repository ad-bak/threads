import * as z from "zod";

export const ThreadValidation = z.object({
  thread: z.string().nonempty().min(3).max(1000),
  accountId: z.string().nonempty().min(1).max(1000),
});

export const CommentValidation = z.object({
  thread: z.string().nonempty().min(3).max(1000),
});
