-- MySQL dump 10.13  Distrib 8.0.23, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: project_rit
-- ------------------------------------------------------
-- Server version	8.0.23

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `rn_menu_group_line`
--

DROP TABLE IF EXISTS `rn_menu_group_line`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `rn_menu_group_line` (
  `id` int NOT NULL AUTO_INCREMENT,
  `created_at` datetime NOT NULL,
  `created_by` bigint DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL,
  `updated_by` bigint DEFAULT NULL,
  `active` tinyint DEFAULT NULL,
  `menu_id` int DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  `seq` int DEFAULT NULL,
  `type` varchar(255) DEFAULT NULL,
  `menu_group_header_id` int NOT NULL,
  PRIMARY KEY (`id`),
  KEY `FKanwl0cm9i2b53re4qd7l6630t` (`menu_group_header_id`)
) ENGINE=MyISAM AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `rn_menu_group_line`
--

LOCK TABLES `rn_menu_group_line` WRITE;
/*!40000 ALTER TABLE `rn_menu_group_line` DISABLE KEYS */;
INSERT INTO `rn_menu_group_line` VALUES (1,'2020-06-10 22:02:00',NULL,NULL,NULL,1,1,NULL,1,'admin',1),(2,'2020-06-10 22:02:00',NULL,NULL,NULL,1,2,NULL,2,'admin',1),(3,'2020-06-10 22:02:00',NULL,NULL,NULL,0,3,NULL,0,'admin',0),(4,'2020-06-10 22:02:00',NULL,NULL,NULL,0,4,NULL,0,'admin',0),(5,'2020-06-10 22:02:00',NULL,NULL,NULL,1,5,NULL,5,'admin',1),(6,'2020-12-25 14:32:13',NULL,'2020-12-25 14:32:13',NULL,0,6,NULL,0,'admin',0),(7,'2021-01-07 13:31:13',NULL,'2021-01-07 13:31:13',NULL,0,7,NULL,0,'admin',0),(8,'2021-01-25 13:31:13',NULL,'2021-01-25 13:31:13',NULL,1,8,NULL,8,'admin',1);
/*!40000 ALTER TABLE `rn_menu_group_line` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-03-09 19:22:32
