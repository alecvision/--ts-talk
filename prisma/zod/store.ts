import * as z from "zod"
import { Completecity, RelatedcityModel, Completesale, RelatedsaleModel } from "./index"

export const storeModel = z.object({
  store_id: z.number().int(),
  name: z.string(),
  city_id: z.number().int(),
})

export interface Completestore extends z.infer<typeof storeModel> {
  city: Completecity
  sale: Completesale[]
}

/**
 * RelatedstoreModel contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const RelatedstoreModel: z.ZodSchema<Completestore> = z.lazy(() => storeModel.extend({
  city: RelatedcityModel,
  sale: RelatedsaleModel.array(),
}))
