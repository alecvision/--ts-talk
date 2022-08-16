import * as z from "zod"
import { Decimal } from "decimal.js"
import { Completeproduct, RelatedproductModel, Completestore, RelatedstoreModel, Completeusers, RelatedusersModel, Completeorder_status, Relatedorder_statusModel } from "./index"

// Helper schema for Decimal fields
z
  .instanceof(Decimal)
  .or(z.string())
  .or(z.number())
  .refine((value) => {
    try {
      return new Decimal(value)
    } catch (error) {
      return false
    }
  })
  .transform((value) => new Decimal(value))

export const saleModel = z.object({
  sale_id: z.string(),
  amount: z.number(),
  date_sale: z.date().nullish(),
  product_id: z.number().int(),
  user_id: z.number().int(),
  store_id: z.number().int(),
})

export interface Completesale extends z.infer<typeof saleModel> {
  product: Completeproduct
  store: Completestore
  users: Completeusers
  order_status: Completeorder_status[]
}

/**
 * RelatedsaleModel contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const RelatedsaleModel: z.ZodSchema<Completesale> = z.lazy(() => saleModel.extend({
  product: RelatedproductModel,
  store: RelatedstoreModel,
  users: RelatedusersModel,
  order_status: Relatedorder_statusModel.array(),
}))
