-- MySQL dump 10.13  Distrib 8.0.28, for Win64 (x86_64)
--
-- Host: localhost    Database: blood_donation
-- ------------------------------------------------------
-- Server version	8.0.28

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
-- Table structure for table `donor`
--

DROP TABLE IF EXISTS `donor`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `donor` (
  `donor_id` int NOT NULL AUTO_INCREMENT,
  `donor_name` varchar(20) DEFAULT NULL,
  `donor_blood_group` varchar(10) DEFAULT NULL,
  `donor_phone_number` varchar(12) DEFAULT NULL,
  `donor_email` varchar(50) DEFAULT NULL,
  `quantity_donated` int DEFAULT NULL,
  `donation_date` date DEFAULT NULL,
  PRIMARY KEY (`donor_id`)
) ENGINE=InnoDB AUTO_INCREMENT=20 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `donor`
--

LOCK TABLES `donor` WRITE;
/*!40000 ALTER TABLE `donor` DISABLE KEYS */;
INSERT INTO `donor` VALUES (1,'Prateek','O+','9827461732','helloprateek@gmail.com',4,'2022-11-04'),(2,'Shubham','A+','9172361612','helloshubham@gmail.com',1,'2022-11-01'),(3,'Radhika','B+','9717237643','helloradhika@gmail.com',1,'2022-11-01'),(4,'Anurag','B-','9736153265','helloanurag@gmail.com',1,'2022-11-01'),(5,'Raghav','A-','9712647246','helloraghav@gmail.com',1,'2022-11-01'),(6,'Riya','O-','9971712472','helloriya@gmail.com',2,'2022-11-01'),(7,'Tarv','AB-','9717274174','hellotarv@gmail.com',1,'2022-11-01'),(8,'Aditya','AB+','9714717497','helloaditya@gmail.com',1,'2022-11-01'),(9,'Rohit','A-','982746279','hellorohit@gmail.com',1,'2022-11-01'),(10,'Abhipsa','A-','9371283102','helloabhipsa@gmail.com',1,'2022-11-04'),(11,'Animesh','A-','93827162738','helloanimesh@gmail.com',1,'2022-11-06'),(12,'Rohan','A-','93827162739','hellorohan@gmail.com',1,'2022-11-06'),(13,'Soham','O+','9467750990','hellosoaham@gmail.com',1,'2022-01-06'),(14,'Prateek Khurana','O+','9306114415','prateekk0299@gmail.com@gmail.com',1,'2022-11-06'),(15,'Prateek Khurana','O+','9306114415','prateekk0299@gmail.com',16,'2022-01-06'),(16,'Prajvi','A-','9283716273','aashanagoel7@gmail.com',1,'2022-12-26'),(17,'Sushma','O+','9281736172','prateekkhurana.king@gmail.com',2,'2022-12-28'),(18,'Virat','O+','9483746217','prateekk0299@gmail.com',6,'2022-12-28'),(19,'Akshita','A+','9384726371','helloakshita@gmail.com',2,'2022-12-29');
/*!40000 ALTER TABLE `donor` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `hibernate_sequence`
--

DROP TABLE IF EXISTS `hibernate_sequence`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `hibernate_sequence` (
  `next_val` bigint DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `hibernate_sequence`
--

LOCK TABLES `hibernate_sequence` WRITE;
/*!40000 ALTER TABLE `hibernate_sequence` DISABLE KEYS */;
INSERT INTO `hibernate_sequence` VALUES (5);
/*!40000 ALTER TABLE `hibernate_sequence` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `hospital_staff`
--

DROP TABLE IF EXISTS `hospital_staff`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `hospital_staff` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(20) DEFAULT NULL,
  `email` varchar(50) DEFAULT NULL,
  `password` varchar(50) DEFAULT NULL,
  `blood_group` varchar(20) DEFAULT NULL,
  `designation` varchar(50) DEFAULT NULL,
  `reports_to` varchar(50) DEFAULT NULL,
  `phone_number` varchar(30) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `hospital_staff`
--

LOCK TABLES `hospital_staff` WRITE;
/*!40000 ALTER TABLE `hospital_staff` DISABLE KEYS */;
INSERT INTO `hospital_staff` VALUES (1,'PRATEEK KHURANA','prateekk0299@gmail.com','helloprateek','O+','Jr.PRODUCT SPECIALIST','ANUPAM MAITY','9306114415');
/*!40000 ALTER TABLE `hospital_staff` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `patient`
--

DROP TABLE IF EXISTS `patient`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `patient` (
  `patient_id` int NOT NULL AUTO_INCREMENT,
  `patient_name` varchar(20) DEFAULT NULL,
  `email` varchar(50) DEFAULT NULL,
  `Phonenumber` varchar(12) DEFAULT NULL,
  `Address` varchar(50) DEFAULT NULL,
  `blood_group` varchar(10) DEFAULT NULL,
  `quantity_provided` int DEFAULT NULL,
  PRIMARY KEY (`patient_id`)
) ENGINE=InnoDB AUTO_INCREMENT=16 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `patient`
--

LOCK TABLES `patient` WRITE;
/*!40000 ALTER TABLE `patient` DISABLE KEYS */;
INSERT INTO `patient` VALUES (1,'Ram','helloram@gmail.com','9301628364','Dabra Chowk,Hisar','O+',3),(2,'Shaam','helloshaam@gmail.com','9384721642','Peerahgadhi,Delhi ','A+',1),(3,'Seeta','helloseeta@gmail.com','9182471724','Chandani Chowk,Delhi','B-',1),(4,'Geeta','hellogeeta@gmail.com','9128471247','Saket,Delhi','B+',1),(5,'Mukul','hellomukul@gmail.com','9182742174','Sector-48,Gurugram','AB-',1),(6,'Satya','hellosatya@gmail.com','8171623721','Jindal Chowk , Hisar','O+',2),(10,'Ram Shrama','prateek@gmail.com','8982717362','hisar','O+',17),(11,'Naman','hellonaman@gmail.com','9283716273','Lokhandwala','O+',2),(12,'Sunita','hellosunita@gmail.com','9281736152','Delhi','O+',2),(13,'Raina','helloraina@gmail.com','9283719273','Delhi','O+',4),(14,'Dhoni','hellodhoni@gmail.com','9182738172','Bihar','A+',2),(15,'Dhawan','hellodhawan@gmail.com','9384728374','Delhi','O+',2);
/*!40000 ALTER TABLE `patient` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `storage`
--

DROP TABLE IF EXISTS `storage`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `storage` (
  `blood_group` varchar(5) NOT NULL,
  `quantity` int DEFAULT NULL,
  PRIMARY KEY (`blood_group`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `storage`
--

LOCK TABLES `storage` WRITE;
/*!40000 ALTER TABLE `storage` DISABLE KEYS */;
INSERT INTO `storage` VALUES ('A-',22),('A+',3),('AB-',1),('AB+',1),('B-',1),('B+',1),('O-',2),('O+',12);
/*!40000 ALTER TABLE `storage` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-03-30 19:03:55
