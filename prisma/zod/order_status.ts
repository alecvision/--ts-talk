import * as z from "zod"
import { Completesale, RelatedsaleModel, Completestatus_name, Relatedstatus_nameModel } from "./index"

export const order_statusModel = z.object({
  order_status_id: z.string(),
  update_at: z.date().nullish(),
  sale_id: z.string(),
  status_name_id: z.number().int(),
})

export interface Completeorder_status extends z.infer<typeof order_statusModel> {
  sale: Completesale
  status_name: Completestatus_name
}

/**
 * Relatedorder_statusModel contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const Relatedorder_statusModel: z.ZodSchema<Completeorder_status> = z.lazy(() => order_statusModel.extend({
  sale: RelatedsaleModel,
  status_name: Relatedstatus_nameModel,
}))
