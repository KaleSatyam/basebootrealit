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
-- Table structure for table `products`
--

DROP TABLE IF EXISTS `products`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `products` (
  `id` int NOT NULL AUTO_INCREMENT,
  `category` varchar(255) DEFAULT NULL,
  `description` varchar(255) DEFAULT NULL,
  `discontinued` int DEFAULT NULL,
  `list_price` bigint DEFAULT NULL,
  `minimum_reorder_quantity` int DEFAULT NULL,
  `product_code` varchar(255) DEFAULT NULL,
  `product_name` varchar(255) DEFAULT NULL,
  `quantity_per_unit` varchar(255) DEFAULT NULL,
  `reorder_level` int DEFAULT NULL,
  `standard_cost` bigint DEFAULT NULL,
  `target_level` int DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=621 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `products`
--

LOCK TABLES `products` WRITE;
/*!40000 ALTER TABLE `products` DISABLE KEYS */;
INSERT INTO `products` VALUES (601,'Camera',NULL,1,1123,10,'P1','Nikon D810','50',10,1167,75),(602,'Camera',NULL,0,1294,15,'P2','Canon EOS 5D Mark IV','56',15,1383,90),(603,'Laptop',NULL,0,1394,30,'P3','Dell XPS 13','56',20,1483,95),(604,'Tablet',NULL,0,294,50,'P4','iPad Air','56',75,383,180),(605,'Laptop',NULL,0,794,15,'P5','Acer Aspire S 13','56',15,883,40),(606,'Phone',NULL,1,512,20,'P6','Nexus 6','79',10,634,75),(607,'Laptop',NULL,1,1309,10,'P7','ThinkPad T365','92',30,1441,100),(608,'Phone',NULL,1,462,20,'P8','Moto Z','54',20,538,75),(609,'Tablet',NULL,1,482,15,'P9','HTC 10','58',5,548,50),(610,'Laptop',NULL,1,1577,30,'P10','MacBook Pro 13.3','11',40,1626,120),(611,'Camera',NULL,1,723,15,'P11','Nikon D500','50',25,867,75),(612,'Camera',NULL,0,794,5,'P12','Pentax K-1','56',10,883,50),(613,'Laptop',NULL,0,1094,5,'P13','Asus Zenbook Ux305','56',10,1183,55),(614,'Laptop',NULL,0,1294,10,'P14','HP Envy m7-n109dx 17.3','56',10,1383,50),(615,'Tablet',NULL,0,1594,50,'P15','Microsft Surface Book','56',80,1683,200),(616,'Phone',NULL,1,712,50,'P16','Apple iPhone 7','79',100,834,250),(617,'Phone',NULL,1,609,20,'P17','Google Pixel','92',30,641,100),(618,'Phone',NULL,1,562,10,'P18','Samsung Galaxy S7','54',15,538,75),(619,'Tablet',NULL,1,482,15,'P19','Samasung Note','58',15,548,75),(620,'Laptop',NULL,1,1009,10,'P20','Chromebook 11.6','11',14,1079,80);
/*!40000 ALTER TABLE `products` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-03-09 19:22:50
