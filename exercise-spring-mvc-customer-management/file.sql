CREATE DATABASE  IF NOT EXISTS `exercisespringdata` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `exercisespringdata`;
-- MySQL dump 10.13  Distrib 8.0.24, for Win64 (x86_64)
--
-- Host: localhost    Database: exercisespringdata
-- ------------------------------------------------------
-- Server version	8.0.24

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
-- Table structure for table `countries`
--

DROP TABLE IF EXISTS `countries`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `countries` (
  `country_id` bigint NOT NULL AUTO_INCREMENT,
  `country_name` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`country_id`)
) ENGINE=MyISAM AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `countries`
--

LOCK TABLES `countries` WRITE;
/*!40000 ALTER TABLE `countries` DISABLE KEYS */;
INSERT INTO `countries` VALUES (1,'VN'),(2,'US'),(3,'UK');
/*!40000 ALTER TABLE `countries` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `countries_customers`
--

DROP TABLE IF EXISTS `countries_customers`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `countries_customers` (
  `Country_country_id` bigint NOT NULL,
  `customers_id` bigint NOT NULL,
  UNIQUE KEY `UK_14g06cxmbh3fg4u226q513w0i` (`customers_id`),
  KEY `FK5ft2u2yblqkvd2w1icnghy1rq` (`Country_country_id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `countries_customers`
--

LOCK TABLES `countries_customers` WRITE;
/*!40000 ALTER TABLE `countries_customers` DISABLE KEYS */;
/*!40000 ALTER TABLE `countries_customers` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `customers`
--

DROP TABLE IF EXISTS `customers`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `customers` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `address` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `fullName` varchar(255) DEFAULT NULL,
  `phone` varchar(255) DEFAULT NULL,
  `country_id` bigint DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FK7b7p2myt0y31l4nyj1p7sk0b1` (`country_id`)
) ENGINE=MyISAM AUTO_INCREMENT=61 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `customers`
--

LOCK TABLES `customers` WRITE;
/*!40000 ALTER TABLE `customers` DISABLE KEYS */;
INSERT INTO `customers` VALUES (15,'Eligendi fugiat dol','weric@mailinator.com','Vance Strong','+1 (517) 173-1264',3),(16,'Quae commodi corrupt','pipeq@mailinator.com','Sawyer Farmer','+1 (305) 541-8735',2),(17,'Consectetur quas sin','tesuzy@mailinator.com','Demetrius Bowman','+1 (222) 784-5263',3),(19,'Non amet sint debi','motovah@mailinator.com','Ann Washington','+1 (194) 711-3841',3),(25,'Quis sapiente quidem','hiterev@mailinator.com','Baxter Good','+1 (292) 227-8695',2),(57,'Amet doloribus inci','levolejyzi@mailinator.com','Tad Hogan','+1 (406) 116-4474',3),(30,'Dolor quasi aut cupi','zugewo@mailinator.com','Caleb Hampton','+1 (993) 284-4973',3),(31,'Enim nihil nulla pro','kopyzifuwu@mailinator.com','Evangeline Conway','+1 (996) 506-5079',3),(33,'Duis tempore earum ','kanite@mailinator.com','Unity Branch','+1 (171) 502-9057',3),(35,'Dolore deserunt occa','nazu@mailinator.com','Selma Giles','+1 (192) 714-2539',2),(36,'Exercitation qui ver','vakix@mailinator.com','Ferdinand Fields','+1 (736) 437-7379',1),(37,'Exercitation qui ver','vakix@mailinator.com','Ferdinand Fields','+1 (736) 437-7379',1),(38,'Omnis pariatur Temp','tihod@mailinator.com','Kenyon Macdonald','+1 (685) 834-5931',1),(39,'In tempora voluptate','zyficamu@mailinator.com','Janna Mitchell','+1 (134) 816-9965',1),(40,'In tempora voluptate','zyficamu@mailinator.com','Janna Mitchell','+1 (134) 816-9965',1),(41,'Nulla ut consectetur','tazoja@mailinator.com','Geraldine Mcguire','+1 (366) 449-3117',3),(42,'Est officiis excepte','rujinakyki@mailinator.com','Odessa Booker','+1 (378) 356-8655',1),(43,'Ut pariatur Quam qu','ropeb@mailinator.com','Desiree Camacho','+1 (887) 581-8617',2),(44,'Voluptatem Distinct','quxyzagyso@mailinator.com','Eleanor Lester','+1 (791) 851-5706',1),(45,'Laboris distinctio ','vuqiqug@mailinator.com','Sylvia Bryan','+1 (149) 917-8362',2),(46,'In ut fugiat quas eo','wezeki@mailinator.com','Melodie Wheeler','+1 (204) 156-5456',3),(47,'Eligendi sit rerum ','tyzux@mailinator.com','Dolan Coleman','+1 (556) 155-3899',2),(48,'Molestias pariatur ','bunocekux@mailinator.com','Tucker Fox','+1 (394) 173-6519',3),(49,'Nisi anim optio ull','kinuzu@mailinator.com','Phelan Mosley','+1 (401) 588-9727',1),(58,'Architecto iusto adi','gakivy@mailinator.com','Courtney James','+1 (972) 192-6201',2),(51,'Quis enim adipisci o','zejuwal@mailinator.com','Quon Mayer','+1 (326) 609-8742',1),(52,'Quis enim adipisci o','zejuwal@mailinator.com','Quon Mayer','+1 (326) 609-8742',1),(53,'Elit neque enim deb','fibilur@mailinator.com','Castor Gregory','+1 (899) 811-3417',3),(54,'Vel ut non alias qui','ripywun@mailinator.com','Garth Maxwell','+1 (251) 332-4668',3),(59,'Sint soluta nostrum ','dozawap@mailinator.com','Yeo Lowe','+1 (847) 838-5224',1);
/*!40000 ALTER TABLE `customers` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-06-24 21:19:35
