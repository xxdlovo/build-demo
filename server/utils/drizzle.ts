import { drizzle, MySql2Database } from 'drizzle-orm/mysql2';
import mysql from 'mysql2/promise'
import * as schema  from '../drizzle/user'

let _db: MySql2Database<typeof schema> | null = null;

export async function useDrizzle() {
  if (_db) return _db

  const config = useRuntimeConfig()
    const connection = mysql.createPool({
        host: config.db.host,
        user: config.db.user,
        password: config.db.password,
        database: config.db.name,
        waitForConnections: true,
        connectionLimit: 10, // 根据你的并发需求调整
        queueLimit: 0,
    });

  _db = drizzle(connection,{
        schema,
        mode: "default",
        logger: false
    })
  return _db
}
