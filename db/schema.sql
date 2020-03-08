DROP DATABASE IF EXISTS burger_db;


CREATE DATABASE burger_db;

USE burger_db;

CREATE TABLE burgers (
  id INT NOT NULL AUTO_INCREMENT,
  burger_menu_item VARCHAR(55) NOT NULL,
  PRIMARY KEY (id)
);

INSERT INTO burgers
(burger_menu_item)
VALUES
('CheeseBurger'),
('VeggieBurger'),
('TripleDoubleBurger'),
('HeartAttackBurger'),
('DiabetisBurger');

SELECT * FROM burgers;

