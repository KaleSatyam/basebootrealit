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
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user` (
  `user_id` int NOT NULL AUTO_INCREMENT,
  `username` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `password` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `first_name` varchar(50) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `last_name` varchar(50) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `email` varchar(70) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `security_provider_id` int DEFAULT NULL,
  `default_customer_id` int DEFAULT NULL,
  `company` varchar(50) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `phone` varchar(20) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `address1` varchar(100) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `address2` varchar(100) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `country` varchar(20) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `postal` varchar(20) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `role` varchar(20) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `other_roles` varchar(80) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `is_active` tinyint DEFAULT NULL,
  `is_blocked` tinyint DEFAULT NULL,
  `secret_question` varchar(100) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `secret_answer` varchar(100) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `enable_beta_testing` tinyint DEFAULT NULL,
  `enable_renewal` tinyint DEFAULT NULL,
  `created_at` datetime NOT NULL,
  `created_by` bigint DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL,
  `updated_by` bigint DEFAULT NULL,
  `about` varchar(255) DEFAULT NULL,
  `department` varchar(255) DEFAULT NULL,
  `full_name` varchar(255) DEFAULT NULL,
  `menu_group_id` int DEFAULT NULL,
  `photos` varchar(255) DEFAULT NULL,
  `status` varchar(255) DEFAULT NULL,
  `account_id` int DEFAULT NULL,
  PRIMARY KEY (`user_id`),
  UNIQUE KEY `username` (`username`),
  KEY `FKrhfovtciq1l558cw6eee3` (`account_id`),
  CONSTRAINT `FKrhfovtciq1l558cw6eee3` FOREIGN KEY (`account_id`) REFERENCES `sys_accounts` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES (1,'admin','$2b$10$AkngMoFbJhllHomzUFdwAehsPzbHxY31XXtWTr0Cnpo9OYs7enn0q','Theresa','Russell','admin@gmail.com',10001,20000,'Glover, Adams and Bins','383-(779)851-3208','30874 Graceland Terrace','99152','USA','51065','ADMIN',NULL,1,0,'knowledge base','Mauv',1,0,'2020-06-10 22:02:00',NULL,'2020-12-18 16:53:44',NULL,NULL,NULL,NULL,1,'profile-pic-1.jpg',NULL,1),(2,'user','$2b$10$AK/siGGl4ITIq0dZHDck0uAyLJHkGPOeLBSAyUL8j5OU5vlf79wjq','Virginia','Reynolds','user@gmail.com',10001,20000,'Rippin, Osinski and Beatty','84-(228)809-9998','0118 Burrows Plaza','496','USA','94086','USER',NULL,1,0,'Innovative','Turquoise',1,1,'2020-06-10 22:02:00',NULL,'2020-06-10 22:02:00',NULL,NULL,NULL,NULL,2,NULL,NULL,2),(3,NULL,'jowens3','Judy','Owens','jowens3@hp.com',10001,20001,'Altenwerth, Fisher and Heidenreich','30-(772)268-8227','98 Loeprich Way','447','Greece',NULL,'USER',NULL,0,0,'capacity','Fuscia',1,1,'2020-06-10 22:02:00',NULL,'2020-06-10 22:02:00',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(4,NULL,'kburns4','Kelly','Burns','kburns4@icio.us',10000,20002,'McCullough-Morar','86-(857)185-5740','1638 Basil Alley','56297','China',NULL,'ADMIN',NULL,1,0,'user-facing','Crimson',1,1,'2020-06-10 22:02:00',NULL,'2020-06-10 22:02:00',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(5,NULL,'jshaw5','Julie','Shaw','jshaw5@opera.com',10000,20000,'Steuber-Okuneva','1-(871)375-6188','389 Myrtle Pass','41444','Canada',NULL,'ADMIN',NULL,1,1,'software','Green',0,1,'2020-06-10 22:02:00',NULL,'2020-06-10 22:02:00',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(6,NULL,'pgilbert6','Peter','Gilbert','pgilbert6@eepurl.com',10000,20000,'Robel Inc','52-(372)555-4687','11522 Fuller Avenue','5','Mexico','39230','ADMIN',NULL,1,1,'multi-state','Puce',1,1,'2020-06-10 22:02:00',NULL,'2020-06-10 22:02:00',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(7,NULL,'jjacobs7','Justin','Jacobs','jjacobs7@google.co.uk',10000,20002,'Harris-Bashirian','963-(199)359-2552','95012 Hanover Street','2377','India',NULL,'USER',NULL,1,0,'motivating','Crimson',1,0,'2020-06-10 22:02:00',NULL,'2020-06-10 22:02:00',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(8,NULL,'kbennett8','Kevin','Bennett','kbennett8@hostgator.com',10001,20000,'Leannon Inc','62-(892)710-5713','459 Coleman Drive','397','Indonesia',NULL,'ADMIN',NULL,0,0,'Exclusive','Purple',1,1,'2020-06-10 22:02:00',NULL,'2020-06-10 22:02:00',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(9,NULL,'demo','Mrinmoy','Majumdar','arivera2@joomla.org',10001,20000,'Abshire Inc','7-(740)701-4547','80429 Garrison Crossing','4967','USA','64890','USER',NULL,1,0,'Diverse','Yellow',0,0,'2020-06-10 22:02:00',NULL,'2020-06-10 22:02:00',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(10,NULL,'$2b$10$AK/siGGl4ITIq0dZHDck0uAyLJHkGPOeLBSAyUL8j5OU5vlf79wjq','Chris','Murphy','dummy@gmail.com',10000,20000,'Mosciski LLC','64-(272)961-0086','2 Ludington Point','7','New Zealand',NULL,'ADMIN',NULL,1,1,'empowering','Maroon',0,1,'2020-06-10 22:02:00',NULL,'2020-06-10 22:02:00',NULL,NULL,NULL,NULL,2,NULL,'INVITED',1),(11,NULL,'$2a$10$vBFw1tbeg/e.97tMR./MPuwwdDQJSRrY2VuMNVoN.e0r5c7aO1gD.','Niladri','Sen','niladri@gmail.com',0,0,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,1,0,NULL,NULL,0,0,'2020-12-18 16:40:42',NULL,'2020-12-18 18:52:59',NULL,'I AM FROM KOLKATA','DEVELOPER','Niladri Sen',1,NULL,NULL,3);
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-03-09 19:22:47
