import * as z from "zod"
import { Completeorder_status, Relatedorder_statusModel } from "./index"

export const status_nameModel = z.object({
  status_name_id: z.number().int(),
  status_name: z.string(),
})

export interface Completestatus_name extends z.infer<typeof status_nameModel> {
  order_status: Completeorder_status[]
}

/**
 * Relatedstatus_nameModel contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const Relatedstatus_nameModel: z.ZodSchema<Completestatus_name> = z.lazy(() => status_nameModel.extend({
  order_status: Relatedorder_statusModel.array(),
}))
