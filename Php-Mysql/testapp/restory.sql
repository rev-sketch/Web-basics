-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Nov 11, 2023 at 05:58 AM
-- Server version: 10.4.28-MariaDB
-- PHP Version: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `restory`
--

-- --------------------------------------------------------

--
-- Table structure for table `agent`
--

CREATE TABLE `agent` (
  `ID` int(11) NOT NULL,
  `USERNAME` varchar(20) NOT NULL,
  `NAME` varchar(30) NOT NULL,
  `EMAIL` varchar(40) NOT NULL,
  `CONTACT_NUMBER` varchar(13) NOT NULL,
  `DATE_REGISTERED` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `agent`
--

INSERT INTO `agent` (`ID`, `USERNAME`, `NAME`, `EMAIL`, `CONTACT_NUMBER`, `DATE_REGISTERED`) VALUES
(1, 'agent', 'Revanth', 'revanthkumar222.reddy@gmail.com', '7236786767', '2023-09-15 15:45:43'),
(2, 'agent1', 'Janaki', 'janaki@gmail.com', '6784377437', '2023-09-15 15:45:43'),
(17, 'agent2', 'Suryaprakash', 'Suryaprakash@gmail.com', '6666666666', '2023-10-03 11:27:00');

-- --------------------------------------------------------

--
-- Table structure for table `client`
--

CREATE TABLE `client` (
  `ID` int(11) NOT NULL,
  `NAME` varchar(30) NOT NULL,
  `CONTACT_NUMBER` varchar(20) NOT NULL,
  `EMAIL` varchar(40) NOT NULL,
  `ADDRESS` varchar(200) NOT NULL,
  `AGENT_NAME` varchar(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `client`
--

INSERT INTO `client` (`ID`, `NAME`, `CONTACT_NUMBER`, `EMAIL`, `ADDRESS`, `AGENT_NAME`) VALUES
(1, 'Hello', '87878787875', '', 'Hbhui,uinca,hyderabadd', 'Revanth'),
(2, 'SGsg', '352435467567', '', 'Ag Fdzhtrhfg', 'Excuse'),
(3, 'Sgfnabfbher', '435436456548', '', 'Xbsdfgzb', 'Suryaprakash'),
(12, 'Argvfv', '3452435', '', 'Fdabdfbdfb', 'Janaki'),
(13, 'Pakka', '3244323543', '', 'F Vbfdvfc Bdf', 'Revanth'),
(14, 'Sregtf', '4254653145', '', 'Fgfdvgg', 'Janaki'),
(16, 'Evado', '5656565656', 'xcfgdf@gmail.com', 'Rthrthrgtsnh', 'Janaki'),
(17, 'Ytff', '3434343434', 'kydytj@gmail.com', 'Yufttu', 'Janaki'),
(19, 'Revanthh', '5675356756', 'revanthkumar222.reddy@gmail.com', 'Fdbaefvb', 'Janaki'),
(24, 'ARGE', '23454315143', 'induru_b191271cs@nitc.ac.in', 'Ervgfrbgh', 'Revanth'),
(25, 'Wtht', '542345243234', 'revanthkumar222.reddy@gmail.com', 'Rgrege', 'Revanth'),
(26, 'Tnbghf', '09840938034', 'induru_b191271cs@nitc.ac.in', 'Wrg4r5g', 'Revanth'),
(30, 'Eragver', '3534252355', 'induru_b191271cs@nitc.ac.in', 'Qrgfrqgr5gv', 'Janaki'),
(31, 'Jevre', '3242342424', 'revanthkumar222.reddy@gmail.com', 'Revgqr', 'Janaki'),
(32, 'Rtyjhtt', '56734734734', 'induru_b191271cs@nitc.ac.in4', '5 T6jt', 'Janaki'),
(33, 'Evado', '4556567777', 'indurivijaybhaskar@gmail.com', 'Ergvrevge', 'Suryaprakash'),
(34, 'Tikka', '1243214333', 'revanthkumar222.reddy@gmail.com', 'Th Srgbh', 'Suryaprakash'),
(36, 'First', '9390376835', 'induru_b191271cs@nitc.ac.in', '2-34,ijioj,hyd', 'Suryaprakash'),
(37, 'Kumar', '9390376834', 'revanthkumar222.reddy@gmail.com', 'Qwefqefqwe', 'Suryaprakash'),
(38, 'Divyaani', '6264152306', 'lilariyadivyani@gmail.com', 'Dfhsthsrtfbhft', 'Janaki'),
(40, 'Ertgweg', '4353453245435', 'induru_b191271cs@nitc.ac.in', 'Regerfb Ce', 'Janaki'),
(47, 'Test', '9949013813', 'h.guduru@restory.in', 'Ameerpet', 'Janaki'),
(48, 'Tertr', '435345345545', 'revanthkumar222.reddy@gmail.com', 'S5eysregt5yr', 'Janaki'),
(50, 'Rgdr', '7645675765', 'revanthkumar222.reddy@gmail.com', 'Sfgdghfx', 'Janaki'),
(51, 'Shth', '3454545344545', 'revanthkumar222.reddy@gmail.com', 'Ytjfghjgh', 'Janaki'),
(52, 'Gteeeeexs', '4564364344', 'revanthkumar222.reddy@gmail.com', 'Fhfhfj', 'Suryaprakash'),
(53, 'Rherhe', '436546565656', 'revanthkumar222.reddy@gmail.com', 'Jdrtjurtjuy', 'Suryaprakash'),
(54, 'Fghdhx', '43543543544', 'revanthkumar222.reddy@gmail.com', 'Sdfbsdgbad', 'Suryaprakash');

-- --------------------------------------------------------

--
-- Table structure for table `login`
--

CREATE TABLE `login` (
  `username` varchar(15) NOT NULL,
  `password` varchar(255) NOT NULL,
  `role` enum('admin','agent') NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `login`
--

INSERT INTO `login` (`username`, `password`, `role`) VALUES
('admin', 'admin123', 'admin'),
('agent', 'agent123', 'agent'),
('agent1', 'agent1', 'agent'),
('hloo', 'hloo', 'agent'),
('drgrdf', 'dfgdrg', 'agent'),
('agent2', 'agent2', 'agent');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `agent`
--
ALTER TABLE `agent`
  ADD PRIMARY KEY (`ID`);

--
-- Indexes for table `client`
--
ALTER TABLE `client`
  ADD PRIMARY KEY (`ID`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `agent`
--
ALTER TABLE `agent`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=18;

--
-- AUTO_INCREMENT for table `client`
--
ALTER TABLE `client`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=55;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
