import * as z from "zod"
import { Completecountry, RelatedcountryModel, Completestore, RelatedstoreModel } from "./index"

export const cityModel = z.object({
  city_id: z.number().int(),
  city_name: z.string(),
  country_id: z.number().int(),
})

export interface Completecity extends z.infer<typeof cityModel> {
  country: Completecountry
  store: Completestore[]
}

/**
 * RelatedcityModel contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const RelatedcityModel: z.ZodSchema<Completecity> = z.lazy(() => cityModel.extend({
  country: RelatedcountryModel,
  store: RelatedstoreModel.array(),
}))
