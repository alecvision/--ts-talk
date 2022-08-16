import * as z from "zod"
import { Completecity, RelatedcityModel } from "./index"

export const countryModel = z.object({
  country_id: z.number().int(),
  country_name: z.string(),
})

export interface Completecountry extends z.infer<typeof countryModel> {
  city: Completecity[]
}

/**
 * RelatedcountryModel contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const RelatedcountryModel: z.ZodSchema<Completecountry> = z.lazy(() => countryModel.extend({
  city: RelatedcityModel.array(),
}))
