import * as z from "zod"
import { Completesale, RelatedsaleModel } from "./index"

export const productModel = z.object({
  product_id: z.number().int(),
  name: z.string(),
})

export interface Completeproduct extends z.infer<typeof productModel> {
  sale: Completesale[]
}

/**
 * RelatedproductModel contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const RelatedproductModel: z.ZodSchema<Completeproduct> = z.lazy(() => productModel.extend({
  sale: RelatedsaleModel.array(),
}))
