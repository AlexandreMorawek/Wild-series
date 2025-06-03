import databaseClient from "../../../database/client";

import type { Result, Rows } from "../../../database/client";

type Programs = {
  id: number;
  title: string;
  synopsis: string;
  poster: string;
  country: string;
  year: number;
};

class ProgramsRepository {
  async readAll() {
    // Execute the SQL SELECT query to retrieve all categories from the "category" table
    const [rows] = await databaseClient.query<Rows>("select * from programs");

    // Return the array of categories
    return rows as Programs[];
  }
}

export default new ProgramsRepository();
