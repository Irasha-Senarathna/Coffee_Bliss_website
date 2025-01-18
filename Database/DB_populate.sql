-- Populate User Table
USE coffee_shop;

INSERT INTO user (user_name, password, email) VALUES
('Alice', 'alice123', 'alice@example.com'),
('Bob', 'bob123', 'bob@example.com'),
('Charlie', 'charlie123', 'charlie@example.com'),
('Diana', 'diana123', 'diana@example.com'),
('Eve', 'eve123', 'eve@example.com'),
('Frank', 'frank123', 'frank@example.com'),
('Grace', 'grace123', 'grace@example.com'),
('Hank', 'hank123', 'hank@example.com'),
('Ivy', 'ivy123', 'ivy@example.com'),
('Jake', 'jake123', 'jake@example.com');

-- Populate Item Table
INSERT INTO item (name, price, image, category, description)
VALUES
  ('Classic Espresso', 5, 'D:\Projects\Coffee-Shop\client\src\assets\classic_espresso.jpg', 'Espresso', 'A rich, bold shot of pure espresso for a true coffee lover'),
  ('Double Espresso', 7, 'D:\Projects\Coffee-Shop\client\src\assets\double_espresso.jpg', 'Espresso', 'A double shot of robust espresso for an extra kick'),
  ('Cappuccino Classic', 6, 'D:\Projects\Coffee-Shop\client\src\assets\cappuccino_classic.jpg', 'Cappuccino', 'Creamy, foamy milk combined with a shot of espresso'),
  ('Vanilla Cappuccino', 7, 'D:\Projects\Coffee-Shop\client\src\assets\vanila_cappuccino.jpg', 'Cappuccino', 'A deliciously sweet vanilla twist on the classic cappuccino'),
  ('Latte Classic', 6, 'D:\Projects\Coffee-Shop\client\src\assets\latte_classic.jpg', 'Latte', 'Smooth and creamy steamed milk with a shot of espresso'),
  ('Caramel Latte', 8, 'D:\Projects\Coffee-Shop\client\src\assets\caramel_latte.jpg', 'Latte', 'Rich caramel syrup blended into a smooth latte'),
  ('Mocha Classic', 7, 'D:\Projects\Coffee-Shop\client\src\assets\mocha_classic.jpg', 'Mocha', 'A luscious blend of chocolate and espresso topped with whipped cream'),
  ('Hazelnut Mocha', 8, 'D:\Projects\Coffee-Shop\client\src\assets\hazelnut_mocha.jpg', 'Mocha', 'Hazelnut flavoring enhances the richness of a classic mocha');

-- Populate Cart Table
INSERT INTO cart (user_id, total) VALUES
(1, 20.00),
(2, 32.00),
(3, 14.00),
(4, 51.00),
(5, 16.00),
(6, 11.00),
(7, 33.00),
(8, 39.00),
(9, 21.00),
(10, 38.00);

-- Populate Cart_Items Table
INSERT INTO cart_item (cart_id, item_id, quantity, sub_total) VALUES
(1, 1, 2, 10.00),
(1, 2, 1, 7.00),
(2, 3, 3, 18.00),
(2, 4, 2, 14.00),
(3, 5, 1, 6.00),
(3, 6, 1, 8.00),
(4, 7, 5, 35.00),
(4, 8, 2, 16.00),
(5, 1, 2, 10.00),
(5, 3, 1, 6.00),
(6, 1, 1, 5.00),
(6, 3, 1, 6.00),
(7, 2, 3, 21.00),
(7, 5, 2, 12.00),
(8, 6, 4, 32.00),
(8, 4, 1, 7.00),
(9, 4, 2, 14.00),
(9, 7, 1, 7.00),
(10, 8, 3, 24.00),
(10, 4, 2, 14.00);

-- Populate Delivery Table
INSERT INTO delivery (cart_id, user_id, street, city, state, zip, phone_num, tot_with_delivery) VALUES
(1, 1, '123 Main St', 'Metropolis', 'NY', 12345, 1234567890, 22.00),
(2, 2, '456 Elm St', 'Gotham', 'CA', 54321, 9876543210, 34.00),
(3, 3, '789 Oak St', 'Star City', 'TX', 67890, 2345678901, 16.00),
(4, 4, '101 Maple St', 'Central City', 'FL', 34567, 8765432109, 53.00),
(5, 5, '202 Pine St', 'Smallville', 'WA', 45678, 3456789012, 18.00),
(6, 6, '303 Cedar St', 'Coast City', 'IL', 56789, 7654321098, 13.00),
(7, 7, '404 Birch St', 'Blüdhaven', 'NV', 67891, 4567890123, 35.00),
(8, 8, '505 Walnut St', 'Fawcett City', 'OR', 78912, 6543210987, 41.00),
(9, 9, '606 Cherry St', 'Keystone City', 'CO', 89012, 5678901234, 23.00),
(10, 10, '707 Aspen St', 'Hub City', 'AZ', 90123, 8901234567, 40.00);
