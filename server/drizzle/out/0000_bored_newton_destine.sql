-- Current sql file was generated after introspecting the database
-- If you want to run this migration please uncomment this code before executing migrations
/*
CREATE TABLE `sys_users` (
	`id` varchar(32) NOT NULL,
	`user_name` varchar(30) NOT NULL,
	`password` varchar(100) NOT NULL DEFAULT '',
	`nick_name` varchar(30) NOT NULL,
	`user_email` varchar(50) DEFAULT '',
	`user_phone` varchar(11) DEFAULT '',
	`user_gender` tinyint DEFAULT 0,
	`balance` int NOT NULL DEFAULT 0,
	`avatar` varchar(512) DEFAULT '',
	`status` tinyint NOT NULL DEFAULT 0,
	`login_ip` varchar(50) DEFAULT '',
	`login_date` datetime,
	`create_by` varchar(64) DEFAULT '',
	`create_time` datetime NOT NULL DEFAULT (CURRENT_TIMESTAMP),
	`update_by` varchar(64) DEFAULT '',
	`update_time` datetime NOT NULL DEFAULT (CURRENT_TIMESTAMP),
	`deleted` tinyint NOT NULL DEFAULT 0,
	`remark` varchar(500),
	`dept_id` bigint,
	CONSTRAINT `sys_users_id` PRIMARY KEY(`id`)
);

*/