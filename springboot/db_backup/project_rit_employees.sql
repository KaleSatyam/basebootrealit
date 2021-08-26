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
-- Table structure for table `employees`
--

DROP TABLE IF EXISTS `employees`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `employees` (
  `id` int NOT NULL AUTO_INCREMENT,
  `address1` varchar(255) DEFAULT NULL,
  `address2` varchar(255) DEFAULT NULL,
  `avatar` varchar(255) DEFAULT NULL,
  `city` varchar(255) DEFAULT NULL,
  `country` varchar(255) DEFAULT NULL,
  `department` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `first_name` varchar(255) DEFAULT NULL,
  `job_title` varchar(255) DEFAULT NULL,
  `last_name` varchar(255) DEFAULT NULL,
  `manager_id` int DEFAULT NULL,
  `phone` varchar(255) DEFAULT NULL,
  `postal_code` varchar(255) DEFAULT NULL,
  `state` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=221 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `employees`
--

LOCK TABLES `employees` WRITE;
/*!40000 ALTER TABLE `employees` DISABLE KEYS */;
INSERT INTO `employees` VALUES (201,'2 Bayside Drive',NULL,'https://robohash.org/modilaboriosammolestiae.bmp?size=50x50&set=set1','San Antonio','United States','Toys','gharris0@pagesperso-orange.fr','George','Administrative Assistant I','Harris',NULL,'1-(210)270-8536','78240','Texas'),(202,'30 Anhalt Street',NULL,'https://robohash.org/seddistinctiodolorem.jpg?size=50x50&set=set1','Portland','United States','Books','rhayes1@si.edu','Rachel','Design Engineer','Hayes',NULL,'1-(971)797-2729','97232','Oregon'),(203,'02809 4th Pass',NULL,'https://robohash.org/vitaererumdolore.png?size=50x50&set=set1','North Las Vegas','United States','Toys','apalmer2@posterous.com','Anthony','Health Coach II','Palmer',NULL,'1-(702)984-2108','89036','Nevada'),(204,'647 Lakeland Road',NULL,'https://robohash.org/nobisplaceatquisquam.jpg?size=50x50&set=set1','Albany','United States','Health','lalvarez3@time.com','Laura','Computer Systems Analyst II','Alvarez',NULL,'1-(518)328-2658','12210','New York'),(205,'163 Carey Street',NULL,'https://robohash.org/praesentiumdoloremrerum.png?size=50x50&set=set1','Reno','United States','Kids','areynolds4@nasa.gov','Annie','Senior Quality Engineer','Reynolds',NULL,'1-(775)838-2203','89550','Nevada'),(206,'1 Harper Circle',NULL,'https://robohash.org/earumiurevoluptas.jpg?size=50x50&set=set1','Fort Worth','United States','Electronics','jhenry5@bbb.org','Joe','Chief Design Engineer','Henry',NULL,'1-(682)563-2229','76178','Texas'),(207,'641 Kropf Parkway',NULL,'https://robohash.org/suntsitnecessitatibus.png?size=50x50&set=set1','Indianapolis','United States','Shoes','wwillis6@berkeley.edu','Willie','Structural Analysis Engineer','Willis',NULL,'1-(317)654-6888','46216','Indiana'),(208,'2184 Melby Crossing',NULL,'https://robohash.org/delenitiomnisconsequatur.jpg?size=50x50&set=set1','Little Rock','United States','Outdoors','klawrence7@discovery.com','Keith','VP Quality Control','Lawrence',NULL,'1-(501)583-8851','72222','Arkansas'),(209,'72 Hauk Road',NULL,'https://robohash.org/voluptasautmaiores.png?size=50x50&set=set1','Memphis','United States','Electronics','tjohnston8@alexa.com','Tina','Assistant Media Planner','Johnston',NULL,'1-(901)128-9976','38114','Tennessee'),(210,'99 Manufacturers Drive',NULL,'https://robohash.org/illumsinttempore.jpg?size=50x50&set=set1','Rochester','United States','Industrial','lburns9@taobao.com','Lisa','Operator','Burns',NULL,'1-(585)113-8402','14624','New York'),(211,'03 Anthes Center',NULL,'https://robohash.org/eautet.bmp?size=50x50&set=set1','Washington','United States','Electronics','hstonea@ucsd.edu','Howard','Account Executive','Stone',NULL,'1-(202)958-2516','20425','District of Columbia'),(212,'37574 4th Drive',NULL,'https://robohash.org/laborumtotameveniet.png?size=50x50&set=set1','Springfield','United States','Electronics','jbrownb@squidoo.com','Julie','Analog Circuit Design manager','Brown',NULL,'1-(217)741-6449','62705','Illinois'),(213,'3 Bultman Circle',NULL,'https://robohash.org/sedutporro.png?size=50x50&set=set1','Fargo','United States','Computers','eturnerc@theatlantic.com','Edward','Structural Engineer','Turner',NULL,'1-(701)353-1996','58122','North Dakota'),(214,'5150 Holmberg Way',NULL,'https://robohash.org/blanditiiscommodiet.png?size=50x50&set=set1','Wilmington','United States','Outdoors','dnicholsd@fda.gov','Douglas','Editor','Nichols',NULL,'1-(302)771-6486','19805','Delaware'),(215,'32 Summit Park',NULL,'https://robohash.org/providentaccusamussed.bmp?size=50x50&set=set1','Saint Cloud','United States','Baby','jgilberte@infoseek.co.jp','Jessica','Account Executive','Gilbert',NULL,'1-(320)607-0289','56372','Minnesota'),(216,'24 Merrick Way',NULL,'https://robohash.org/utfaciliset.png?size=50x50&set=set1','San Antonio','United States','Movies','khernandezf@shinystat.com','Kathy','Junior Executive','Hernandez',NULL,'1-(210)733-3380','78225','Texas'),(217,'42 Manufacturers Pass',NULL,'https://robohash.org/quiaetaut.jpg?size=50x50&set=set1','Jacksonville','United States','Sports','lsullivang@flavors.me','Lillian','Engineer I','Sullivan',NULL,'1-(904)885-2053','32215','Florida'),(218,'69255 Dakota Plaza',NULL,'https://robohash.org/voluptatemnamaliquam.bmp?size=50x50&set=set1','Austin','United States','Baby','fjenkinsh@huffingtonpost.com','Frances','Developer IV','Jenkins',NULL,'1-(512)764-3809','78769','Texas'),(219,'3 Eagle Crest Place',NULL,'https://robohash.org/consequaturutquo.png?size=50x50&set=set1','Gilbert','United States','Beauty','rmyersi@alexa.com','Roger','Account Executive','Myers',NULL,'1-(480)583-9583','85297','Arizona'),(220,'99 Arapahoe Terrace',NULL,'https://robohash.org/etfacilisquo.bmp?size=50x50&set=set1','Saint Cloud','United States','Baby','bhunterj@ucsd.edu','Bonnie','Analog Circuit Design manager','Hunter',NULL,'1-(320)933-5140','56372','Minnesota');
/*!40000 ALTER TABLE `employees` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-03-09 19:22:42
