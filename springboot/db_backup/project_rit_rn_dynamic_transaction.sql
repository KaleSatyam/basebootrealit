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
-- Table structure for table `rn_dynamic_transaction`
--

DROP TABLE IF EXISTS `rn_dynamic_transaction`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `rn_dynamic_transaction` (
  `id` int NOT NULL AUTO_INCREMENT,
  `created_at` datetime NOT NULL,
  `created_by` bigint DEFAULT NULL,
  `updated_at` datetime NOT NULL,
  `updated_by` bigint DEFAULT NULL,
  `comp1` varchar(255) DEFAULT NULL,
  `comp10` varchar(255) DEFAULT NULL,
  `comp11` varchar(255) DEFAULT NULL,
  `comp12` varchar(255) DEFAULT NULL,
  `comp13` varchar(255) DEFAULT NULL,
  `comp14` varchar(255) DEFAULT NULL,
  `comp15` varchar(255) DEFAULT NULL,
  `comp16` varchar(255) DEFAULT NULL,
  `comp17` varchar(255) DEFAULT NULL,
  `comp18` varchar(255) DEFAULT NULL,
  `comp19` varchar(255) DEFAULT NULL,
  `comp2` varchar(255) DEFAULT NULL,
  `comp20` varchar(255) DEFAULT NULL,
  `comp21` varchar(255) DEFAULT NULL,
  `comp22` varchar(255) DEFAULT NULL,
  `comp23` varchar(255) DEFAULT NULL,
  `comp24` varchar(255) DEFAULT NULL,
  `comp25` varchar(255) DEFAULT NULL,
  `comp3` varchar(255) DEFAULT NULL,
  `comp4` varchar(255) DEFAULT NULL,
  `comp5` varchar(255) DEFAULT NULL,
  `comp6` varchar(255) DEFAULT NULL,
  `comp7` varchar(255) DEFAULT NULL,
  `comp8` varchar(255) DEFAULT NULL,
  `comp9` varchar(255) DEFAULT NULL,
  `comp_l26` longtext,
  `comp_l27` longtext,
  `comp_l28` longtext,
  `comp_l29` longtext,
  `comp_l30` longtext,
  `form_id` int DEFAULT NULL,
  `form_version` int DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `rn_dynamic_transaction`
--

LOCK TABLES `rn_dynamic_transaction` WRITE;
/*!40000 ALTER TABLE `rn_dynamic_transaction` DISABLE KEYS */;
INSERT INTO `rn_dynamic_transaction` VALUES (1,'2021-02-02 17:30:56',NULL,'2021-02-02 17:30:56',NULL,'Niladri',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'10',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,2,0),(2,'2021-03-09 18:42:00',NULL,'2021-03-09 18:42:00',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,3,0),(3,'2021-03-09 18:42:11',NULL,'2021-03-09 18:42:11',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,3,0);
/*!40000 ALTER TABLE `rn_dynamic_transaction` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-03-09 19:22:48
