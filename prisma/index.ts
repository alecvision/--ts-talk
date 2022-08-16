import * as mongoose from "mongoose";
import * as client from "@prisma/client";
import type * as zson from "zod-to-json-schema";
import * as Models from "./zod";
import Airtable from "airtable";
import dotenv from "dotenv";
import {cities} from "./data"

dotenv.config();

const key = process.env.AT_API_KEY;

Airtable.configure({
    endpointUrl: "https://api.airtable.com",
    apiKey: key,
  });

Models.cityModel
  .parseAsync(cities[0])
  .then(async (city) => {
    const base = Airtable.base("appnc1JIlQKyPR64r");
    const table = base.table("EX");
    const val = await table.create(city);
    return val;
  })
  .then((x) => console.log(x))
  .catch((err) => console.log(err));
