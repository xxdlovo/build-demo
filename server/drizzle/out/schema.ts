import { mysqlTable, mysqlSchema, AnyMySqlColumn, primaryKey, varchar, tinyint, int, datetime, bigint } from "drizzle-orm/mysql-core"
import { sql } from "drizzle-orm"

export const sysUsers = mysqlTable("sys_users", {
	id: varchar({ length: 32 }).notNull(),
	userName: varchar("user_name", { length: 30 }).notNull(),
	password: varchar({ length: 100 }).default(').notNull(),
	nickName: varchar("nick_name", { length: 30 }).notNull(),
	userEmail: varchar("user_email", { length: 50 }).default('),
	userPhone: varchar("user_phone", { length: 11 }).default('),
	userGender: tinyint("user_gender").default(0),
	balance: int().default(0).notNull(),
	avatar: varchar({ length: 512 }).default('),
	status: tinyint().default(0).notNull(),
	loginIp: varchar("login_ip", { length: 50 }).default('),
	loginDate: datetime("login_date", { mode: 'string'}),
	createBy: varchar("create_by", { length: 64 }).default('),
	createTime: datetime("create_time", { mode: 'string'}).default(sql`(CURRENT_TIMESTAMP)`).notNull(),
	updateBy: varchar("update_by", { length: 64 }).default('),
	updateTime: datetime("update_time", { mode: 'string'}).default(sql`(CURRENT_TIMESTAMP)`).notNull(),
	deleted: tinyint().default(0).notNull(),
	remark: varchar({ length: 500 }),
	deptId: bigint("dept_id", { mode: "number" }),
},
(table) => [
	primaryKey({ columns: [table.id], name: "sys_users_id"}),
]);
