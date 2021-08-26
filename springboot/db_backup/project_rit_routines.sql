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
-- Temporary view structure for view `employee_orders`
--

DROP TABLE IF EXISTS `employee_orders`;
/*!50001 DROP VIEW IF EXISTS `employee_orders`*/;
SET @saved_cs_client     = @@character_set_client;
/*!50503 SET character_set_client = utf8mb4 */;
/*!50001 CREATE VIEW `employee_orders` AS SELECT 
 1 AS `order_date`,
 1 AS `order_status`,
 1 AS `paid_date`,
 1 AS `payment_type`,
 1 AS `shipping_fee`,
 1 AS `employee_id`,
 1 AS `employee_first_name`,
 1 AS `employee_last_name`,
 1 AS `employee_email`,
 1 AS `department`*/;
SET character_set_client = @saved_cs_client;

--
-- Temporary view structure for view `order_info`
--

DROP TABLE IF EXISTS `order_info`;
/*!50001 DROP VIEW IF EXISTS `order_info`*/;
SET @saved_cs_client     = @@character_set_client;
/*!50503 SET character_set_client = utf8mb4 */;
/*!50001 CREATE VIEW `order_info` AS SELECT 
 1 AS `order_id`,
 1 AS `order_date`,
 1 AS `order_status`,
 1 AS `paid_date`,
 1 AS `payment_type`,
 1 AS `shipped_date`,
 1 AS `shipping_fee`,
 1 AS `ship_name`,
 1 AS `ship_address1`,
 1 AS `ship_address2`,
 1 AS `ship_city`,
 1 AS `ship_state`,
 1 AS `ship_postal_code`,
 1 AS `ship_country`,
 1 AS `customer_id`,
 1 AS `employee_id`,
 1 AS `customer_name`,
 1 AS `customer_phone`,
 1 AS `customer_email`,
 1 AS `customer_company`,
 1 AS `employee_name`,
 1 AS `employee_department`,
 1 AS `employee_job_title`*/;
SET character_set_client = @saved_cs_client;

--
-- Temporary view structure for view `customer_orders`
--

DROP TABLE IF EXISTS `customer_orders`;
/*!50001 DROP VIEW IF EXISTS `customer_orders`*/;
SET @saved_cs_client     = @@character_set_client;
/*!50503 SET character_set_client = utf8mb4 */;
/*!50001 CREATE VIEW `customer_orders` AS SELECT 
 1 AS `order_date`,
 1 AS `order_status`,
 1 AS `paid_date`,
 1 AS `payment_type`,
 1 AS `shipping_fee`,
 1 AS `customer_id`,
 1 AS `customer_first_name`,
 1 AS `customer_last_name`,
 1 AS `customer_phone`,
 1 AS `customer_email`,
 1 AS `company`*/;
SET character_set_client = @saved_cs_client;

--
-- Temporary view structure for view `order_details`
--

DROP TABLE IF EXISTS `order_details`;
/*!50001 DROP VIEW IF EXISTS `order_details`*/;
SET @saved_cs_client     = @@character_set_client;
/*!50503 SET character_set_client = utf8mb4 */;
/*!50001 CREATE VIEW `order_details` AS SELECT 
 1 AS `order_id`,
 1 AS `product_id`,
 1 AS `quantity`,
 1 AS `unit_price`,
 1 AS `discount`,
 1 AS `date_allocated`,
 1 AS `order_item_status`,
 1 AS `order_date`,
 1 AS `order_status`,
 1 AS `paid_date`,
 1 AS `payment_type`,
 1 AS `shipped_date`,
 1 AS `shipping_fee`,
 1 AS `ship_name`,
 1 AS `ship_address1`,
 1 AS `ship_address2`,
 1 AS `ship_city`,
 1 AS `ship_state`,
 1 AS `ship_postal_code`,
 1 AS `ship_country`,
 1 AS `product_code`,
 1 AS `product_name`,
 1 AS `category`,
 1 AS `description`,
 1 AS `list_price`,
 1 AS `customer_id`,
 1 AS `customer_name`,
 1 AS `customer_phone`,
 1 AS `customer_email`,
 1 AS `customer_company`,
 1 AS `employee_id`,
 1 AS `employee_name`,
 1 AS `employee_department`,
 1 AS `employee_job_title`*/;
SET character_set_client = @saved_cs_client;

--
-- Final view structure for view `employee_orders`
--

/*!50001 DROP VIEW IF EXISTS `employee_orders`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = utf8mb4 */;
/*!50001 SET character_set_results     = utf8mb4 */;
/*!50001 SET collation_connection      = utf8mb4_0900_ai_ci */;
/*!50001 CREATE ALGORITHM=UNDEFINED */
/*!50013 DEFINER=`root`@`localhost` SQL SECURITY DEFINER */
/*!50001 VIEW `employee_orders` AS select `o`.`order_date` AS `order_date`,`o`.`order_status` AS `order_status`,`o`.`paid_date` AS `paid_date`,`o`.`payment_type` AS `payment_type`,`o`.`shipping_fee` AS `shipping_fee`,`o`.`employee_id` AS `employee_id`,`e`.`first_name` AS `employee_first_name`,`e`.`last_name` AS `employee_last_name`,`e`.`email` AS `employee_email`,`e`.`department` AS `department` from (`orders` `o` join `employees` `e`) where (`o`.`customer_id` = `e`.`id`) */;
/*!50001 SET character_set_client      = @saved_cs_client */;
/*!50001 SET character_set_results     = @saved_cs_results */;
/*!50001 SET collation_connection      = @saved_col_connection */;

--
-- Final view structure for view `order_info`
--

/*!50001 DROP VIEW IF EXISTS `order_info`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = utf8mb4 */;
/*!50001 SET character_set_results     = utf8mb4 */;
/*!50001 SET collation_connection      = utf8mb4_0900_ai_ci */;
/*!50001 CREATE ALGORITHM=UNDEFINED */
/*!50013 DEFINER=`root`@`localhost` SQL SECURITY DEFINER */
/*!50001 VIEW `order_info` AS select `o`.`id` AS `order_id`,`o`.`order_date` AS `order_date`,`o`.`order_status` AS `order_status`,`o`.`paid_date` AS `paid_date`,`o`.`payment_type` AS `payment_type`,`o`.`shipped_date` AS `shipped_date`,`o`.`shipping_fee` AS `shipping_fee`,`o`.`ship_name` AS `ship_name`,`o`.`ship_address1` AS `ship_address1`,`o`.`ship_address2` AS `ship_address2`,`o`.`ship_city` AS `ship_city`,`o`.`ship_state` AS `ship_state`,`o`.`ship_postal_code` AS `ship_postal_code`,`o`.`ship_country` AS `ship_country`,`o`.`customer_id` AS `customer_id`,`o`.`employee_id` AS `employee_id`,concat(`c`.`first_name`,' ',`c`.`last_name`) AS `customer_name`,`c`.`phone` AS `customer_phone`,`c`.`email` AS `customer_email`,`c`.`company` AS `customer_company`,concat(`e`.`first_name`,' ',`e`.`last_name`) AS `employee_name`,`e`.`department` AS `employee_department`,`e`.`job_title` AS `employee_job_title` from ((`orders` `o` join `employees` `e`) join `customers` `c`) where ((`o`.`employee_id` = `e`.`id`) and (`o`.`customer_id` = `c`.`id`)) */;
/*!50001 SET character_set_client      = @saved_cs_client */;
/*!50001 SET character_set_results     = @saved_cs_results */;
/*!50001 SET collation_connection      = @saved_col_connection */;

--
-- Final view structure for view `customer_orders`
--

/*!50001 DROP VIEW IF EXISTS `customer_orders`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = utf8mb4 */;
/*!50001 SET character_set_results     = utf8mb4 */;
/*!50001 SET collation_connection      = utf8mb4_0900_ai_ci */;
/*!50001 CREATE ALGORITHM=UNDEFINED */
/*!50013 DEFINER=`root`@`localhost` SQL SECURITY DEFINER */
/*!50001 VIEW `customer_orders` AS select `o`.`order_date` AS `order_date`,`o`.`order_status` AS `order_status`,`o`.`paid_date` AS `paid_date`,`o`.`payment_type` AS `payment_type`,`o`.`shipping_fee` AS `shipping_fee`,`o`.`customer_id` AS `customer_id`,`c`.`first_name` AS `customer_first_name`,`c`.`last_name` AS `customer_last_name`,`c`.`phone` AS `customer_phone`,`c`.`email` AS `customer_email`,`c`.`company` AS `company` from (`orders` `o` join `customers` `c`) where (`o`.`customer_id` = `c`.`id`) */;
/*!50001 SET character_set_client      = @saved_cs_client */;
/*!50001 SET character_set_results     = @saved_cs_results */;
/*!50001 SET collation_connection      = @saved_col_connection */;

--
-- Final view structure for view `order_details`
--

/*!50001 DROP VIEW IF EXISTS `order_details`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = utf8mb4 */;
/*!50001 SET character_set_results     = utf8mb4 */;
/*!50001 SET collation_connection      = utf8mb4_0900_ai_ci */;
/*!50001 CREATE ALGORITHM=UNDEFINED */
/*!50013 DEFINER=`root`@`localhost` SQL SECURITY DEFINER */
/*!50001 VIEW `order_details` AS select `oi`.`order_id` AS `order_id`,`oi`.`product_id` AS `product_id`,`oi`.`quantity` AS `quantity`,`oi`.`unit_price` AS `unit_price`,`oi`.`discount` AS `discount`,`oi`.`date_allocated` AS `date_allocated`,`oi`.`order_item_status` AS `order_item_status`,`o`.`order_date` AS `order_date`,`o`.`order_status` AS `order_status`,`o`.`paid_date` AS `paid_date`,`o`.`payment_type` AS `payment_type`,`o`.`shipped_date` AS `shipped_date`,`o`.`shipping_fee` AS `shipping_fee`,`o`.`ship_name` AS `ship_name`,`o`.`ship_address1` AS `ship_address1`,`o`.`ship_address2` AS `ship_address2`,`o`.`ship_city` AS `ship_city`,`o`.`ship_state` AS `ship_state`,`o`.`ship_postal_code` AS `ship_postal_code`,`o`.`ship_country` AS `ship_country`,`p`.`product_code` AS `product_code`,`p`.`product_name` AS `product_name`,`p`.`category` AS `category`,`p`.`description` AS `description`,`p`.`list_price` AS `list_price`,`o`.`customer_id` AS `customer_id`,concat(`c`.`first_name`,' ',`c`.`last_name`) AS `customer_name`,`c`.`phone` AS `customer_phone`,`c`.`email` AS `customer_email`,`c`.`company` AS `customer_company`,`o`.`employee_id` AS `employee_id`,concat(`e`.`first_name`,' ',`e`.`last_name`) AS `employee_name`,`e`.`department` AS `employee_department`,`e`.`job_title` AS `employee_job_title` from ((((`orders` `o` join `products` `p`) join `order_items` `oi`) join `employees` `e`) join `customers` `c`) where ((`oi`.`order_id` = `o`.`id`) and (`oi`.`product_id` = `p`.`id`) and (`o`.`employee_id` = `e`.`id`) and (`o`.`customer_id` = `c`.`id`)) */;
/*!50001 SET character_set_client      = @saved_cs_client */;
/*!50001 SET character_set_results     = @saved_cs_results */;
/*!50001 SET collation_connection      = @saved_col_connection */;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-03-09 19:22:51
