-- MySQL dump 10.13  Distrib 8.0.34, for Win64 (x86_64)
--
-- Host: localhost    Database: jbm
-- ------------------------------------------------------
-- Server version	8.0.34

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
-- Table structure for table `account`
--

DROP TABLE IF EXISTS `account`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `account` (
  `acc_id` int NOT NULL AUTO_INCREMENT,
  `username` varchar(50) DEFAULT NULL,
  `pass` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`acc_id`)
) ENGINE=InnoDB AUTO_INCREMENT=1002 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `account`
--

LOCK TABLES `account` WRITE;
/*!40000 ALTER TABLE `account` DISABLE KEYS */;
INSERT INTO `account` VALUES (1001,'wieee','12345');
/*!40000 ALTER TABLE `account` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `charges`
--

DROP TABLE IF EXISTS `charges`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `charges` (
  `fee_id` int NOT NULL AUTO_INCREMENT,
  `fee_name` varchar(50) NOT NULL,
  `amount` int NOT NULL,
  `order_id` int NOT NULL,
  `cust_id` int NOT NULL,
  PRIMARY KEY (`fee_id`),
  KEY `fk_charges_job_order1_idx` (`order_id`),
  KEY `fk_charges_statement1_idx` (`cust_id`),
  CONSTRAINT `fk_charges_job_order1` FOREIGN KEY (`order_id`) REFERENCES `job_order` (`order_id`),
  CONSTRAINT `fk_charges_statement1` FOREIGN KEY (`cust_id`) REFERENCES `statement` (`cust_id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `charges`
--

LOCK TABLES `charges` WRITE;
/*!40000 ALTER TABLE `charges` DISABLE KEYS */;
INSERT INTO `charges` VALUES (1,'diagnostic',250,0,0),(2,'labor',300,0,0);
/*!40000 ALTER TABLE `charges` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `customer`
--

DROP TABLE IF EXISTS `customer`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `customer` (
  `cust_id` int NOT NULL AUTO_INCREMENT,
  `cust_name` varchar(60) NOT NULL,
  `cust_address` varchar(60) NOT NULL,
  `cust_phone` varchar(11) NOT NULL,
  `cust_email` varchar(60) NOT NULL,
  `cust_type` varchar(60) NOT NULL,
  `tech_id` int NOT NULL,
  PRIMARY KEY (`cust_id`),
  KEY `tech_id` (`tech_id`),
  CONSTRAINT `customer_ibfk_1` FOREIGN KEY (`tech_id`) REFERENCES `technician` (`tech_id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `customer`
--

LOCK TABLES `customer` WRITE;
/*!40000 ALTER TABLE `customer` DISABLE KEYS */;
INSERT INTO `customer` VALUES (2,'Antoine Nicholson','Koronadal City','09328473487','annn@mail.com','Personal',3);
/*!40000 ALTER TABLE `customer` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `delivery`
--

DROP TABLE IF EXISTS `delivery`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `delivery` (
  `deli_id` int NOT NULL AUTO_INCREMENT,
  `order_id` int DEFAULT NULL,
  `deli_date` date DEFAULT NULL,
  `deli_received` date DEFAULT NULL,
  `deli_description` text,
  `destination` varchar(100) DEFAULT NULL,
  `origin` varchar(100) DEFAULT NULL,
  `notes` text,
  `deli_status` varchar(100) DEFAULT NULL,
  `po_id` int DEFAULT NULL,
  PRIMARY KEY (`deli_id`),
  KEY `delivery_ibfk_1` (`order_id`),
  KEY `fk_po_id` (`po_id`),
  CONSTRAINT `delivery_ibfk_1` FOREIGN KEY (`order_id`) REFERENCES `job_order` (`order_id`) ON DELETE CASCADE,
  CONSTRAINT `fk_po_id` FOREIGN KEY (`po_id`) REFERENCES `purchase_ord` (`po_id`)
) ENGINE=InnoDB AUTO_INCREMENT=36 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `delivery`
--

LOCK TABLES `delivery` WRITE;
/*!40000 ALTER TABLE `delivery` DISABLE KEYS */;
INSERT INTO `delivery` VALUES (6,23,'2023-10-21',NULL,NULL,'abcd','efgh','aaaaa',NULL,NULL),(7,23,'2023-11-11',NULL,NULL,'d','e','lesgoo',NULL,NULL),(8,24,'2023-11-09',NULL,NULL,'dest','asfd','weeee',NULL,NULL),(9,20,'2023-11-10',NULL,NULL,'aaaaa','bbbb','noted',NULL,NULL),(10,21,'2023-11-30',NULL,NULL,'aaaaa','asfd','noteds',NULL,NULL),(11,21,'2023-11-30',NULL,NULL,'aaaaa','asfd','noteds',NULL,NULL),(12,21,'2023-11-30',NULL,NULL,'aaaaa','asfd','noteds',NULL,NULL),(13,13,'2023-12-09',NULL,NULL,'aa','bb','weee',NULL,NULL),(14,10,'2023-12-09',NULL,NULL,'aa','bb','weee',NULL,NULL),(15,14,'2023-12-08',NULL,NULL,'aaaa','bbbb','waow',NULL,NULL),(16,14,'2023-12-08',NULL,NULL,'aaaa','bbbb','waow',NULL,NULL),(17,14,'2023-12-08',NULL,NULL,'aaaa','bbbb','waow',NULL,NULL),(18,11,'2023-12-08',NULL,NULL,'wee','eeww','sdf',NULL,NULL),(19,11,'2023-12-08',NULL,NULL,'wee','eeww','sdf',NULL,NULL),(20,11,'2023-12-08',NULL,NULL,'wee','eeww','sdf',NULL,NULL),(21,11,'2023-12-08',NULL,NULL,'wee','eeww','sdf',NULL,NULL),(22,11,'2023-12-08',NULL,NULL,'wee','eeww','sdf',NULL,NULL),(30,15,'2023-12-08',NULL,NULL,'afds','asdfe','eeeeee',NULL,NULL),(31,15,'2023-12-08',NULL,NULL,'afds','asdfe','eeeeee',NULL,NULL),(32,15,'2024-01-06',NULL,NULL,'aaa','bbbb','cccccccc',NULL,NULL),(33,23,'2023-11-23',NULL,NULL,'aaaa','bbb','cc',NULL,NULL),(34,NULL,'2023-12-01',NULL,NULL,'dasd','fdf','aaaa',NULL,15),(35,NULL,'2023-12-01',NULL,NULL,'saddas','fdffdsfsdf','bbbb',NULL,15);
/*!40000 ALTER TABLE `delivery` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `job_order`
--

DROP TABLE IF EXISTS `job_order`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `job_order` (
  `order_id` int NOT NULL AUTO_INCREMENT,
  `order_date` date DEFAULT NULL,
  `job_name` varchar(50) DEFAULT NULL,
  `est_completion` date DEFAULT NULL,
  `cust_id` int NOT NULL,
  `tech_id` int NOT NULL,
  PRIMARY KEY (`order_id`),
  KEY `cust_id` (`cust_id`),
  KEY `tech_id` (`tech_id`),
  CONSTRAINT `job_order_ibfk_2` FOREIGN KEY (`cust_id`) REFERENCES `customer` (`cust_id`),
  CONSTRAINT `job_order_ibfk_3` FOREIGN KEY (`tech_id`) REFERENCES `technician` (`tech_id`)
) ENGINE=InnoDB AUTO_INCREMENT=25 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `job_order`
--

LOCK TABLES `job_order` WRITE;
/*!40000 ALTER TABLE `job_order` DISABLE KEYS */;
INSERT INTO `job_order` VALUES (10,'2023-09-24','Broken Monitor','2023-09-30',2,3),(11,'2023-09-25','Monitor Defect','2023-09-30',2,3),(12,'2023-09-25','Monitor Defect','2023-09-30',2,3),(13,'2023-09-25','Monitor Defect','2023-09-30',2,3),(14,'2023-09-25','Monitor Defect','2023-09-30',2,3),(15,'2023-09-25','plss','2023-09-30',2,3),(20,'2023-09-25','Kayuhon utok ni ninya','2023-09-29',2,3),(21,'2023-09-25','AAAAAAA','2023-10-03',2,3),(22,'2023-10-11','asdas','2023-10-25',2,3),(23,'2023-10-16','try','2023-10-25',2,3),(24,'2023-10-16','aaaaaaaa','2023-11-01',2,3);
/*!40000 ALTER TABLE `job_order` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `login_record`
--

DROP TABLE IF EXISTS `login_record`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `login_record` (
  `record_id` int NOT NULL AUTO_INCREMENT,
  `acc_id` int NOT NULL,
  `logout_date` date DEFAULT NULL,
  `login_date` date DEFAULT NULL,
  PRIMARY KEY (`record_id`),
  KEY `acc_id` (`acc_id`),
  CONSTRAINT `login_record_ibfk_1` FOREIGN KEY (`acc_id`) REFERENCES `account` (`acc_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `login_record`
--

LOCK TABLES `login_record` WRITE;
/*!40000 ALTER TABLE `login_record` DISABLE KEYS */;
/*!40000 ALTER TABLE `login_record` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `order_part`
--

DROP TABLE IF EXISTS `order_part`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `order_part` (
  `op_id` int NOT NULL AUTO_INCREMENT,
  `order_id` int NOT NULL,
  `item_id` int DEFAULT NULL,
  `item_name` varchar(200) DEFAULT NULL,
  `brand` varchar(200) DEFAULT NULL,
  `est_price` double DEFAULT NULL,
  PRIMARY KEY (`op_id`),
  KEY `item_id` (`item_id`),
  KEY `order_part_ibfk_1` (`order_id`),
  CONSTRAINT `order_part_ibfk_1` FOREIGN KEY (`order_id`) REFERENCES `job_order` (`order_id`) ON DELETE CASCADE,
  CONSTRAINT `order_part_ibfk_2` FOREIGN KEY (`item_id`) REFERENCES `part` (`item_id`)
) ENGINE=InnoDB AUTO_INCREMENT=19 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `order_part`
--

LOCK TABLES `order_part` WRITE;
/*!40000 ALTER TABLE `order_part` DISABLE KEYS */;
INSERT INTO `order_part` VALUES (7,20,NULL,'Utok','Mac',20),(8,20,NULL,'Utok','Mac',20);
/*!40000 ALTER TABLE `order_part` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `order_status`
--

DROP TABLE IF EXISTS `order_status`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `order_status` (
  `status_id` int NOT NULL AUTO_INCREMENT,
  `status_name` varchar(100) DEFAULT NULL,
  `status_date` date DEFAULT NULL,
  `deli_id` int DEFAULT NULL,
  `order_id` int NOT NULL,
  `req_id` int DEFAULT NULL,
  `cust_id` int DEFAULT NULL,
  PRIMARY KEY (`status_id`),
  KEY `deli_id` (`deli_id`),
  KEY `order_id` (`order_id`),
  KEY `req_id` (`req_id`),
  KEY `cust_id` (`cust_id`),
  CONSTRAINT `order_status_ibfk_1` FOREIGN KEY (`deli_id`) REFERENCES `delivery` (`deli_id`),
  CONSTRAINT `order_status_ibfk_2` FOREIGN KEY (`order_id`) REFERENCES `job_order` (`order_id`),
  CONSTRAINT `order_status_ibfk_3` FOREIGN KEY (`req_id`) REFERENCES `purchase_ord` (`po_id`),
  CONSTRAINT `order_status_ibfk_4` FOREIGN KEY (`cust_id`) REFERENCES `customer` (`cust_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `order_status`
--

LOCK TABLES `order_status` WRITE;
/*!40000 ALTER TABLE `order_status` DISABLE KEYS */;
/*!40000 ALTER TABLE `order_status` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `part`
--

DROP TABLE IF EXISTS `part`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `part` (
  `item_id` int NOT NULL AUTO_INCREMENT,
  `item_name` varchar(100) NOT NULL,
  `quantity` int NOT NULL,
  `price` double DEFAULT NULL,
  `po_id` int DEFAULT NULL,
  PRIMARY KEY (`item_id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `part`
--

LOCK TABLES `part` WRITE;
/*!40000 ALTER TABLE `part` DISABLE KEYS */;
INSERT INTO `part` VALUES (1,'BAT',3,30,6),(2,'TAKAB',10,20,6),(3,'aaaaa',0,NULL,NULL),(4,'bfksdf',0,NULL,NULL);
/*!40000 ALTER TABLE `part` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `parts_receipt`
--

DROP TABLE IF EXISTS `parts_receipt`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `parts_receipt` (
  `receipt_id` int NOT NULL AUTO_INCREMENT,
  `deli_received` date NOT NULL,
  `origin` varchar(100) NOT NULL,
  `quantity` int NOT NULL,
  `notes` text,
  `deli_id` int NOT NULL,
  PRIMARY KEY (`receipt_id`),
  KEY `deli_id` (`deli_id`),
  CONSTRAINT `parts_receipt_ibfk_1` FOREIGN KEY (`deli_id`) REFERENCES `delivery` (`deli_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `parts_receipt`
--

LOCK TABLES `parts_receipt` WRITE;
/*!40000 ALTER TABLE `parts_receipt` DISABLE KEYS */;
/*!40000 ALTER TABLE `parts_receipt` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `payment`
--

DROP TABLE IF EXISTS `payment`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `payment` (
  `order_id` int NOT NULL,
  `pmt_id` int NOT NULL AUTO_INCREMENT,
  `pmt_type` varchar(50) NOT NULL,
  `pmt_bank` varchar(70) DEFAULT NULL,
  `pmt_amount` double NOT NULL,
  `pmt_refnum` int DEFAULT NULL,
  `pmt_checkdate` date DEFAULT NULL,
  `cust_id` int NOT NULL,
  PRIMARY KEY (`pmt_id`),
  KEY `order_id` (`order_id`),
  KEY `fk_payment_statement1_idx` (`cust_id`),
  CONSTRAINT `fk_payment_statement1` FOREIGN KEY (`cust_id`) REFERENCES `statement` (`cust_id`),
  CONSTRAINT `payment_ibfk_1` FOREIGN KEY (`order_id`) REFERENCES `job_order` (`order_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `payment`
--

LOCK TABLES `payment` WRITE;
/*!40000 ALTER TABLE `payment` DISABLE KEYS */;
/*!40000 ALTER TABLE `payment` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `purchase_ord`
--

DROP TABLE IF EXISTS `purchase_ord`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `purchase_ord` (
  `po_id` int NOT NULL AUTO_INCREMENT,
  `order_id` int DEFAULT NULL,
  `receipt_id` int DEFAULT NULL,
  `completed` tinyint(1) DEFAULT '0',
  `vendor` varchar(200) DEFAULT NULL,
  `vendor_phone` int NOT NULL,
  `date_ordered` date NOT NULL,
  `vendor_add` varchar(200) NOT NULL,
  `vendor_email` varchar(200) DEFAULT NULL,
  PRIMARY KEY (`po_id`),
  KEY `order_id` (`order_id`),
  KEY `receipt_id` (`receipt_id`),
  CONSTRAINT `purchase_ord_ibfk_2` FOREIGN KEY (`order_id`) REFERENCES `job_order` (`order_id`),
  CONSTRAINT `purchase_ord_ibfk_3` FOREIGN KEY (`receipt_id`) REFERENCES `parts_receipt` (`receipt_id`)
) ENGINE=InnoDB AUTO_INCREMENT=19 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `purchase_ord`
--

LOCK TABLES `purchase_ord` WRITE;
/*!40000 ALTER TABLE `purchase_ord` DISABLE KEYS */;
INSERT INTO `purchase_ord` VALUES (6,NULL,NULL,0,'aaa',98473849,'2023-04-05','Kor',NULL),(10,NULL,NULL,0,'aaaa',4444,'2023-11-04','aaaaaaaaaa','hfdj@mail.com'),(11,NULL,NULL,0,'test',123123,'2023-11-04','pls work','weeee@gmail.com'),(12,NULL,NULL,0,'test',123123,'2023-11-04','pls work','weeee@gmail.com'),(13,NULL,NULL,0,'vend',84,'2023-11-04','orrr','weeoo@gmail.com'),(14,NULL,NULL,0,'venddd',75432,'2023-11-04','orrr','mailll.com'),(15,NULL,NULL,0,'maggana ka na pls',94638493,'2023-11-04','marbs','occc@gmail.com'),(18,NULL,NULL,0,'aaaaaaaaaaa',454,'2023-11-13','dddddddd','mail');
/*!40000 ALTER TABLE `purchase_ord` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `purchase_part`
--

DROP TABLE IF EXISTS `purchase_part`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `purchase_part` (
  `pp_id` int NOT NULL AUTO_INCREMENT,
  `item_name` varchar(200) DEFAULT NULL,
  `brand` varchar(200) DEFAULT NULL,
  `quantity` int DEFAULT NULL,
  `price` int DEFAULT NULL,
  `po_id` int DEFAULT NULL,
  PRIMARY KEY (`pp_id`),
  KEY `po_id` (`po_id`),
  CONSTRAINT `purchase_part_ibfk_1` FOREIGN KEY (`po_id`) REFERENCES `purchase_ord` (`po_id`)
) ENGINE=InnoDB AUTO_INCREMENT=15 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `purchase_part`
--

LOCK TABLES `purchase_part` WRITE;
/*!40000 ALTER TABLE `purchase_part` DISABLE KEYS */;
INSERT INTO `purchase_part` VALUES (1,'def','abc',40,30,6),(2,'ghj','klm',60,45,6),(3,'dfhsk','fhsdk',43,432,10),(4,'aaa','ffff',432,32,10),(5,'dfhsk','fhsdk',43,432,11),(6,'dfhsk','fhsdk',43,432,12),(7,'batt','ery',34,85,13),(8,'mon','itor',54,48,13),(9,'aaa','bbb',30,43,14),(10,'vvv','ccc',9,59,14),(11,'kkk','lll',4,90,14),(12,'aaa','bbb',30,43,15),(13,'kkk','lll',4,90,15),(14,'one','oneee',78,89,18);
/*!40000 ALTER TABLE `purchase_part` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `statement`
--

DROP TABLE IF EXISTS `statement`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `statement` (
  `cust_id` int NOT NULL,
  `order_id` int DEFAULT NULL,
  `balance` double DEFAULT NULL,
  PRIMARY KEY (`cust_id`),
  KEY `order_id` (`order_id`),
  CONSTRAINT `statement_ibfk_1` FOREIGN KEY (`cust_id`) REFERENCES `customer` (`cust_id`),
  CONSTRAINT `statement_ibfk_3` FOREIGN KEY (`order_id`) REFERENCES `job_order` (`order_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `statement`
--

LOCK TABLES `statement` WRITE;
/*!40000 ALTER TABLE `statement` DISABLE KEYS */;
/*!40000 ALTER TABLE `statement` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `technician`
--

DROP TABLE IF EXISTS `technician`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `technician` (
  `tech_id` int NOT NULL AUTO_INCREMENT,
  `tech_name` varchar(60) NOT NULL,
  `tech_number` varchar(11) NOT NULL,
  `tech_email` varchar(60) NOT NULL,
  `tech_head` tinyint(1) NOT NULL,
  `tech_address` varchar(150) NOT NULL,
  `acc_id` int NOT NULL,
  PRIMARY KEY (`tech_id`),
  KEY `acc_id` (`acc_id`),
  CONSTRAINT `technician_ibfk_1` FOREIGN KEY (`acc_id`) REFERENCES `account` (`acc_id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `technician`
--

LOCK TABLES `technician` WRITE;
/*!40000 ALTER TABLE `technician` DISABLE KEYS */;
INSERT INTO `technician` VALUES (3,'Craig Vazquez','','cree@mail.com',0,'Koronadal City',1001);
/*!40000 ALTER TABLE `technician` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `unit_item`
--

DROP TABLE IF EXISTS `unit_item`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `unit_item` (
  `unit_id` int NOT NULL AUTO_INCREMENT,
  `order_id` int NOT NULL,
  `unit_name` varchar(100) DEFAULT NULL,
  `warranty` tinyint(1) NOT NULL,
  `returning` tinyint(1) NOT NULL,
  `brand` varchar(100) NOT NULL,
  `defect_description` text,
  PRIMARY KEY (`unit_id`),
  KEY `unit_item_ibfk_1` (`order_id`),
  CONSTRAINT `unit_item_ibfk_1` FOREIGN KEY (`order_id`) REFERENCES `job_order` (`order_id`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=22 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `unit_item`
--

LOCK TABLES `unit_item` WRITE;
/*!40000 ALTER TABLE `unit_item` DISABLE KEYS */;
INSERT INTO `unit_item` VALUES (2,10,'Laptop',1,0,'ASUS','AAAAA'),(9,20,'Utok',0,0,'Mac','Kalimtanon na'),(11,21,'BBBBBB',0,0,'CCCCC','desccccc');
/*!40000 ALTER TABLE `unit_item` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-11-14 14:08:17
