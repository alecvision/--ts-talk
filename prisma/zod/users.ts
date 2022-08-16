import * as z from "zod"
import { Completesale, RelatedsaleModel } from "./index"

export const usersModel = z.object({
  user_id: z.number().int(),
  name: z.string(),
})

export interface Completeusers extends z.infer<typeof usersModel> {
  sale: Completesale[]
}

/**
 * RelatedusersModel contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const RelatedusersModel: z.ZodSchema<Completeusers> = z.lazy(() => usersModel.extend({
  sale: RelatedsaleModel.array(),
}))
