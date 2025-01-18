DROP DATABASE IF EXISTS coffee_shop;
CREATE DATABASE coffee_shop;
USE coffee_shop;

-- User Table
DROP TABLE IF EXISTS user;
CREATE TABLE user (
  user_id INT AUTO_INCREMENT,
  user_name VARCHAR(50) NOT NULL,
  password VARCHAR(255) NOT NULL,
  email VARCHAR(100) NOT NULL UNIQUE,
  PRIMARY KEY (user_id)
);

-- Item Table
DROP TABLE IF EXISTS item;
CREATE TABLE item (
  item_id INT AUTO_INCREMENT,
  name VARCHAR(50),
  image BLOB,
  price DECIMAL(10,2) NOT NULL,
  category VARCHAR(50),
  description VARCHAR(255),
  PRIMARY KEY (item_id)
);

-- Cart Table
DROP TABLE IF EXISTS cart;
CREATE TABLE cart (
  cart_id INT AUTO_INCREMENT,
  user_id INT NOT NULL,  
  total DECIMAL(10,2) DEFAULT 0.00,
  PRIMARY KEY (cart_id),
  FOREIGN KEY (user_id) REFERENCES user(user_id) ON UPDATE CASCADE
);

-- Cart_Items Table
DROP TABLE IF EXISTS cart_item;
CREATE TABLE cart_item (
  cart_id INT NOT NULL,
  item_id INT NOT NULL,
  quantity INT NOT NULL,
  sub_total DECIMAL(10,2) NOT NULL,
  PRIMARY KEY (cart_id, item_id),
  FOREIGN KEY (cart_id) REFERENCES cart(cart_id) ON UPDATE CASCADE,
  FOREIGN KEY (item_id) REFERENCES item(item_id) ON UPDATE CASCADE
);

-- Delivery Table
DROP TABLE IF EXISTS delivery;
CREATE TABLE delivery (
  delivery_id INT AUTO_INCREMENT,
  cart_id INT NOT NULL,
  user_id INT NOT NULL,
  street VARCHAR(100) NOT NULL,
  city VARCHAR(100) NOT NULL,
  state VARCHAR(100) NOT NULL,
  zip INT NOT NULL,
  phone_num BIGINT NOT NULL,
  tot_with_delivery DECIMAL(10,2) NOT NULL,
  PRIMARY KEY (delivery_id),
  FOREIGN KEY (cart_id) REFERENCES cart(cart_id) ON UPDATE CASCADE,
  FOREIGN KEY (user_id) references user(user_id) ON UPDATE CASCADE
);
