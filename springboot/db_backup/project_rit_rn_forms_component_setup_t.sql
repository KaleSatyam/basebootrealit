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
-- Table structure for table `rn_forms_component_setup_t`
--

DROP TABLE IF EXISTS `rn_forms_component_setup_t`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `rn_forms_component_setup_t` (
  `component_id` int NOT NULL AUTO_INCREMENT,
  `created_at` datetime NOT NULL,
  `created_by` bigint DEFAULT NULL,
  `updated_at` datetime NOT NULL,
  `updated_by` bigint DEFAULT NULL,
  `drop_values` varchar(255) DEFAULT NULL,
  `label` varchar(255) DEFAULT NULL,
  `mandatory` varchar(255) DEFAULT NULL,
  `mapping` varchar(255) DEFAULT NULL,
  `readonly` varchar(255) DEFAULT NULL,
  `sp` varchar(255) DEFAULT NULL,
  `type` varchar(255) DEFAULT NULL,
  `form_id` int NOT NULL,
  PRIMARY KEY (`component_id`),
  KEY `FKmtx4j1faaytr7dxqv2ncwiblr` (`form_id`)
) ENGINE=MyISAM AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `rn_forms_component_setup_t`
--

LOCK TABLES `rn_forms_component_setup_t` WRITE;
/*!40000 ALTER TABLE `rn_forms_component_setup_t` DISABLE KEYS */;
INSERT INTO `rn_forms_component_setup_t` VALUES (1,'2021-01-25 16:26:57',NULL,'2021-01-27 13:41:34',NULL,'enter name','name',NULL,'comp1',NULL,NULL,'textfield',1),(2,'2021-02-02 17:30:23',NULL,'2021-02-02 17:30:23',NULL,'enter name','name',NULL,'comp1',NULL,NULL,'textfield',2),(3,'2021-02-02 17:30:23',NULL,'2021-02-02 17:30:23',NULL,'enter class','class',NULL,'comp2',NULL,NULL,'textfield',2),(4,'2021-03-09 18:41:22',NULL,'2021-03-09 18:41:22',NULL,'sample','satyam',NULL,'comp26','true',NULL,'togglebutton',3),(5,'2021-03-09 18:41:33',NULL,'2021-03-09 18:41:33',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,4);
/*!40000 ALTER TABLE `rn_forms_component_setup_t` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-03-09 19:22:46
