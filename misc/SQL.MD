CREATE DATABASE menu CHARACTER SET utf8 COLLATE utf8_general_ci;
USE menu;

CREATE TABLE items (
id int(11) NOT NULL AUTO_INCREMENT,
name varchar(50),
price int(11)
description varchar(200)
image varchar(500)
PRIMARY KEY (id)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=5 ;

INSERT INTO items (id, name, price, description, image) VALUES
(1, 'Burger', 599, 'Tasty', 'https://cdn.auth0.com/blog/whatabyte/burger-sm.png')
(2, 'Pizza', 299, 'Cheesy', 'https://cdn.auth0.com/blog/whatabyte/pizza-sm.png')
(3, 'Tea', 199, 'Informative', 'https://cdn.auth0.com/blog/whatabyte/tea-sm.png')
