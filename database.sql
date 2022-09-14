CREATE DATABASE IF NOT EXISTS `test` /*!40100 DEFAULT CHARACTER SET utf8mb4 */;

use test;

-- test.colaborador definition

CREATE TABLE IF NOT EXISTS `colaborador` (
  `codigo` int(11) NOT NULL AUTO_INCREMENT,
  `cpf` varchar(11) NOT NULL,
  `empresaCodigo` int(11) DEFAULT NULL,
  `nome` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `telefone` varchar(255) NOT NULL,
  `endereco` varchar(255) NOT NULL,
  PRIMARY KEY (`codigo`),
  KEY `FK_07c98eb47e065e79b1398f910f5` (`empresaCodigo`),
  CONSTRAINT `FK_07c98eb47e065e79b1398f910f5` FOREIGN KEY (`empresaCodigo`) REFERENCES `empresa` (`codigo`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8mb4;

-- test.empresa definition
CREATE TABLE IF NOT EXISTS `empresa` (
  `codigo` int(11) NOT NULL AUTO_INCREMENT,
  `cnpj` varchar(14) NOT NULL,
  `nome` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `telefone` varchar(255) NOT NULL,
  `endereco` varchar(255) NOT NULL,
  PRIMARY KEY (`codigo`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4;
