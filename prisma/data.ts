import * as Models from "./zod"
import z from "zod"

export const cities: Array<z.infer<typeof Models.cityModel>> = [
    {
      city_id: 0,
      city_name: "Tulsa",
      country_id: 0,
    },
    {
      city_id: 1,
      city_name: "Oklahoma City",
      country_id: 0,
    },
  ];
  
export const countries: Array<z.infer<typeof Models.countryModel>> = [
    {
      country_id: 0,
      country_name: "United States",
    },
  ];
  
export const products: Array<z.infer<typeof Models.productModel>> = [
    {
      name: "Rubber Ducky",
      product_id: 0,
    },
    {
      name: "Coffee Mug",
      product_id: 1,
    },
  ];
  
export const stores: Array<z.infer<typeof Models.storeModel>> = [
    {
      city_id: 0,
      name: "Coder's Corner",
      store_id: 0,
    },
  ];
  
export const users: Array<z.infer<typeof Models.usersModel>> = [{
      name: "alec",
      user_id: 0
  }]