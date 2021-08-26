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
-- Table structure for table `rn_lookup_values_t`
--

DROP TABLE IF EXISTS `rn_lookup_values_t`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `rn_lookup_values_t` (
  `ID` int NOT NULL AUTO_INCREMENT,
  `LOOKUP_CODE` longtext,
  `MEANING` longtext,
  `DESCRIPTION` longtext,
  `LOOKUP_TYPE` longtext,
  `ACTIVE_START_DATE` datetime DEFAULT NULL,
  `ACTIVE_END_DATE` datetime DEFAULT NULL,
  `ENABLED_FLAG` tinyint(1) DEFAULT NULL,
  `drop_value` varchar(255) DEFAULT NULL,
  `created_at` datetime NOT NULL,
  `created_by` bigint DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL,
  `updated_by` bigint DEFAULT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB AUTO_INCREMENT=31 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `rn_lookup_values_t`
--

LOCK TABLES `rn_lookup_values_t` WRITE;
/*!40000 ALTER TABLE `rn_lookup_values_t` DISABLE KEYS */;
INSERT INTO `rn_lookup_values_t` VALUES (1,'extn1','extn1','extn1','Form_Ext',NULL,NULL,1,NULL,'2021-01-04 16:05:00',1,'2021-01-04 16:05:00',NULL),(2,'extn2','extn2','extn2','Form_Ext',NULL,NULL,1,NULL,'2021-01-04 16:05:01',1,'2021-01-04 16:05:01',NULL),(3,'extn3','extn3','extn3','Form_Ext',NULL,NULL,1,NULL,'2021-01-04 16:05:01',1,'2021-01-04 16:05:01',NULL),(4,'extn4','extn4','extn4','Form_Ext',NULL,NULL,1,NULL,'2021-01-04 16:05:01',1,'2021-01-04 16:05:01',NULL),(5,'extn5','extn5','extn5','Form_Ext',NULL,NULL,1,NULL,'2021-01-04 16:05:01',1,'2021-01-04 16:05:01',NULL),(6,'extn6','extn6','extn6','Form_Ext',NULL,NULL,1,NULL,'2021-01-04 16:05:01',1,'2021-01-04 16:05:01',NULL),(7,'extn7','extn7','extn7','Form_Ext',NULL,NULL,1,NULL,'2021-01-04 16:05:01',1,'2021-01-04 16:05:01',NULL),(8,'extn8','extn8','extn8','Form_Ext',NULL,NULL,1,NULL,'2021-01-04 16:05:01',1,'2021-01-04 16:05:01',NULL),(9,'extn9','extn9','extn9','Form_Ext',NULL,NULL,1,NULL,'2021-01-04 16:05:01',1,'2021-01-04 16:05:01',NULL),(10,'extn10','extn10','extn10','Form_Ext',NULL,NULL,1,NULL,'2021-01-04 16:05:01',1,'2021-01-04 16:05:01',NULL),(11,'extn11','extn11','extn11','Form_Ext',NULL,NULL,1,NULL,'2021-01-04 16:05:02',1,'2021-01-04 16:05:02',NULL),(12,'extn12','extn12','extn12','Form_Ext',NULL,NULL,1,NULL,'2021-01-04 16:05:02',1,'2021-01-04 16:05:02',NULL),(13,'extn13','extn13','extn13','Form_Ext',NULL,NULL,1,NULL,'2021-01-04 16:05:02',1,'2021-01-04 16:05:02',NULL),(14,'extn14','extn14','extn14','Form_Ext',NULL,NULL,1,NULL,'2021-01-04 16:05:02',1,'2021-01-04 16:05:02',NULL),(15,'extn15','extn15','extn15','Form_Ext',NULL,NULL,1,NULL,'2021-01-04 16:05:02',1,'2021-01-04 16:05:02',NULL),(16,'FLEX1','FLEX1','FLEX1','Form_Ext',NULL,NULL,1,NULL,'2021-01-04 16:05:02',1,'2021-01-04 16:05:02',NULL),(17,'FLEX2','FLEX2','FLEX2','Form_Ext',NULL,NULL,1,NULL,'2021-01-04 16:05:02',1,'2021-01-04 16:05:02',NULL),(18,'FLEX3','FLEX3','FLEX3','Form_Ext',NULL,NULL,1,NULL,'2021-01-04 16:05:02',1,'2021-01-04 16:05:02',NULL),(19,'FLEX4','FLEX4','FLEX4','Form_Ext',NULL,NULL,1,NULL,'2021-01-04 16:05:02',1,'2021-01-04 16:05:02',NULL),(20,'FLEX5','FLEX5','FLEX5','Form_Ext',NULL,NULL,1,NULL,'2021-01-04 16:05:02',1,'2021-01-04 16:05:02',NULL),(21,'textfield','textfield','textfield','DataType',NULL,NULL,1,NULL,'2021-01-04 16:05:02',1,'2021-01-04 16:05:02',NULL),(22,'date','date','date','DataType',NULL,NULL,1,NULL,'2021-01-04 16:05:02',1,'2021-01-04 16:05:02',NULL),(23,'longText','longText','longText','DataType',NULL,NULL,1,NULL,'2021-01-04 16:05:03',1,'2021-01-04 16:05:03',NULL),(24,'textarea','textarea','textarea','DataType',NULL,NULL,0,NULL,'2021-01-04 16:05:03',1,'2021-01-04 16:05:03',NULL),(25,'checkbox','checkbox','checkbox','DataType',NULL,NULL,0,NULL,'2021-01-04 16:05:03',1,'2021-01-04 16:05:03',NULL),(26,'radiobutton','radiobutton','radiobutton','DataType',NULL,NULL,0,NULL,'2021-01-04 16:05:03',1,'2021-01-04 16:05:03',NULL),(27,'autocomplete','autocomplete','autocomplete','DataType',NULL,NULL,0,NULL,'2021-01-04 16:05:03',1,'2021-01-04 16:05:03',NULL),(28,'dropdown','dropdown','dropdown','DataType',NULL,NULL,0,NULL,'2021-01-04 16:05:03',1,'2021-01-04 16:05:03',NULL),(29,'sequence','sequence','sequence','DataType',NULL,NULL,0,NULL,'2021-01-04 16:05:03',1,'2021-01-04 16:05:03',NULL),(30,'togglebutton','togglebutton','togglebutton','DataType',NULL,NULL,0,NULL,'2021-01-04 16:05:03',1,'2021-01-04 16:05:03',NULL);
/*!40000 ALTER TABLE `rn_lookup_values_t` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-03-09 19:22:45
