-- MySQL dump 10.13  Distrib 8.0.21, for Win64 (x86_64)
--
-- Host: localhost    Database: yuguo
-- ------------------------------------------------------
-- Server version	8.0.21

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `_mysql_session_store`
--

DROP TABLE IF EXISTS `_mysql_session_store`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `_mysql_session_store` (
  `id` varchar(255) NOT NULL,
  `expires` bigint DEFAULT NULL,
  `data` text,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `_mysql_session_store`
--

LOCK TABLES `_mysql_session_store` WRITE;
/*!40000 ALTER TABLE `_mysql_session_store` DISABLE KEYS */;
/*!40000 ALTER TABLE `_mysql_session_store` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `yg_users`
--

DROP TABLE IF EXISTS `yg_users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `yg_users` (
  `user_id` varchar(255) NOT NULL COMMENT '用户ID',
  `username` varchar(100) NOT NULL COMMENT '用户名',
  `password` varchar(100) NOT NULL COMMENT '密码',
  `avatar` varchar(100) NOT NULL COMMENT '头像',
  `create_time` varchar(100) NOT NULL COMMENT '注册时间',
  `login_status` varchar(100) NOT NULL COMMENT '登录状态',
  `user_rule` varchar(100) NOT NULL COMMENT '用户角色',
  PRIMARY KEY (`user_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `yg_users`
--

LOCK TABLES `yg_users` WRITE;
/*!40000 ALTER TABLE `yg_users` DISABLE KEYS */;
INSERT INTO `yg_users` VALUES ('0d01eec0-f26a-47e9-8fd3-96039d12e957','admin','1112222','头像','2021-02-04 09:26:41','0','1'),('17821fd4-7f52-42c7-8961-01d004545d66','admin','1112222','头像','2021-02-04 09:26:45','0','1'),('275d52c3-220f-4f34-afbc-2715ae147ee8','admin','1112222','头像','2021-02-04 09:26:45','0','1'),('2dcf1c35-75bf-4ba7-afc9-0fc9ffb2f4d5','admin','1112222','头像','2021-02-04 09:26:39','0','1'),('376a71df-e057-4804-9b0c-ed161ebba006','游客','123456','头像','2021-02-07 11:12:53','0','1'),('4488d55a-f1bb-484f-bcf4-cd42c1c79a07','admin','1112222','头像','2021-02-04 09:26:52','0','1'),('4c91f8e7-9d19-493f-9857-ac54372916b6','admin','1112222','头像','2021-02-04 09:26:44','0','1'),('5c2ff291-1f36-43f5-bdc7-a6abce946ff2','admin','1112222','头像','2021-02-04 09:26:38','0','1'),('774ac858-0ff9-4c9d-a90c-01ccebd8cae2','admin','1112222','头像','2021-02-04 09:26:49','0','1'),('8a0870ac-a2f7-4692-9978-43edd4404221','游客','123456','头像','2021-02-07 11:12:32','0','1'),('8d77c380-4e5c-4bcd-a404-5ab9103c8cbe','admin','1112222','头像','2021-02-04 09:26:41','0','1'),('97e8ca71-c629-4616-afa1-a6205861d22a','admin','1112222','头像','2021-02-04 09:26:00','0','1'),('a2033d39-4ba2-4bb7-a45e-d1b40f2ae29e','admin','1112222','头像','2021-02-04 09:26:42','0','1'),('a8a2be20-2a47-49ba-8073-8ef7f612f8d0','admin','1112222','头像','2021-02-04 09:26:43','0','1'),('ad90bd36-940d-4133-b311-9217516689e8','admin','1112222','头像','2021-02-04 09:26:40','0','1'),('bc407959-f533-4fd6-ba93-8ba94c24ab9d','游客','123456','头像','2021-02-07 11:12:54','0','1'),('cda5301b-2b65-4796-9c63-3695d24348d4','admin','1112222','头像','2021-02-04 09:26:50','0','1'),('d6236d64-178b-4738-af3e-e078b3b1327e','游客','123456','头像','2021-02-07 11:12:52','0','1'),('f170db23-14ea-4760-80ab-a6da9a1b8001','admin','1112222','头像','2021-02-04 09:26:43','0','1'),('f26c4a64-3f29-4315-a795-735e440a43e2','admin','1112222','头像','2021-02-04 09:26:49','0','1'),('fabeb7fe-97be-4a4d-84de-d883db68b9ed','admin','1112222','头像','2021-02-04 09:26:51','0','1');
/*!40000 ALTER TABLE `yg_users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-02-07 13:43:24
