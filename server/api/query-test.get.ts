import { sql } from 'drizzle-orm'
import { useDrizzle } from '../utils/drizzle'

export default defineEventHandler(async (event) => {
  try {
    const db = await useDrizzle()
    const result = await db.execute(sql`SELECT * FROM my_test LIMIT 1`)
    return { success: true, data: result[0] }
  } catch (error: any) {
    return { success: false, error: error.message }
  }
})
