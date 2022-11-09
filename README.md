# Mineria de datos
Proyecto final de limpieza de datos. 
### Estructura de tablas

|bookshop||
|--|--|
|Table|Descripción|
|books|Esta tabla almacenara todo la información sobre los libros|
|authors|Esta tabla almacenara todo la información sobre los autores refrentes a los libros|
|clients|Esta tabla almacenara todo la información sobre los clintes|
|admin|Esta tabla almacenara todo la información sobre los usuarios administradores quienes son los encargados de generar el ingreso de libros, authores, clientes y generar las transacciones|
|transaction|Esta tabla almacenara todo la información sobre los prestamos de libros, ventas y las trasacciones realizadas por los clientes.|

### Diagrama de tablas 
![digrama de tablas](./images/Diagrama%20de%20tablas.png)

### Construción de tablas
**Tabla authors**
```sql
CREATE TABLE `authors` (
  `author_id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(100) NOT NULL,
  `nationality` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`author_id`),
  UNIQUE KEY `uniq_author` (`name`)
) ENGINE=InnoDB AUTO_INCREMENT=193 DEFAULT CHARSET=utf8;
```
![tablatrasaction](./images/Tabla%20authors.png)
**Tabla books**
```sql
CREATE TABLE `books` (
  `book_id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `author_id` int(10) unsigned DEFAULT NULL,
  `title` varchar(100) NOT NULL,
  `year` int(11) NOT NULL DEFAULT '1900',
  `language` varchar(2) NOT NULL COMMENT 'ISO 639-1 Language code (2 chars)',
  `cover_url` varchar(500) DEFAULT NULL,
  `price` double(6,2) DEFAULT NULL,
  `sellable` tinyint(1) NOT NULL DEFAULT '0',
  `copies` int(11) NOT NULL DEFAULT '1',
  `description` text,
  PRIMARY KEY (`book_id`),
  UNIQUE KEY `book_language` (`title`,`language`)
) ENGINE=InnoDB AUTO_INCREMENT=199 DEFAULT CHARSET=utf8;
```
![tablatrasaction](./images/Tabla%20authores.png)
**Tabla clients**
```sql
CREATE TABLE `clients` (
  `client_id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(50) DEFAULT NULL,
  `email` varchar(100) NOT NULL,
  `birthdate` date DEFAULT NULL,
  `gender` enum('M','F') DEFAULT NULL,
  `active` tinyint(1) NOT NULL DEFAULT '1',
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`client_id`),
  UNIQUE KEY `email` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=101 DEFAULT CHARSET=utf8;
```
![tablatrasaction](./images/tabla%20clients.png)
**Tabla admin**
```sql
CREATE TABLE `admin` (
  `user_id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(50) DEFAULT NULL,
  `email` varchar(100) NOT NULL,
  `gender` enum('M','F') DEFAULT NULL,
  `active` tinyint(1) NOT NULL DEFAULT '1',
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`user_id`),
  UNIQUE KEY `email` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=101 DEFAULT CHARSET=utf8;
```
![tablatrasaction](./images/Tabla%20admin.png)
**Tabla Trnsactions**
```sql
CREATE TABLE `transactions` (
  `transaction_id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `book_id` int(10) unsigned NOT NULL,
  `client_id` int(10) unsigned NOT NULL,
  `type` enum('lend','sell') NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `modified_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `finished` tinyint(1) NOT NULL DEFAULT '0',
  PRIMARY KEY (`transaction_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
```
![tablatrasaction](./images/Tabla%20transactions.png)

### Inserción de datos

Mediante el archivo [bookshopp.sql](./bookshopp.sql) con el siguiente comando
```mysql
# mysql -u root < bookshopp.sql 
```
ingresamos toda la data en nuestras tablasa de nuesta base de datos.