## Certificando que estamos usando o banco certo
use nunes;

## Cria a tabela de Produtos
CREATE TABLE tb_produtos (
    id bigint NOT NULL AUTO_INCREMENT,
    product_price float(30) not null,
    product_desc varchar(255),
    product_name varchar(255) not null,
    primary key (id)
);

## Populando a db
INSERT INTO tb_produtos (product_price, product_desc, product_name) VALUES
(49.99, 'High-performance running shoes with advanced cushioning technology', 'Running Shoes - Model A'),
(89.99, 'Durable and lightweight tennis racket for competitive players', 'Tennis Racket - Pro Series'),
(29.99, 'Moisture-wicking and breathable sportswear for intense workouts', 'Performance T-Shirt - Men'),
(39.99, 'Comfortable and supportive sports bra for active women', 'Sports Bra - Ultimate Support'),
(149.99, 'Premium quality basketball with superior grip and durability', 'Basketball - Pro Grip'),
(79.99, 'Versatile fitness tracker with heart rate monitoring and GPS', 'Smart Fitness Tracker - Elite Edition'),
(199.99, 'Adjustable dumbbell set for home gym workouts', 'Dumbbell Set - Powerlifters Edition'),
(69.99, 'Sleek and aerodynamic cycling helmet for maximum protection', 'Cycling Helmet - Aero Series');
INSERT INTO tb_produtos (product_price, product_desc, product_name) VALUES
(54.99, 'All-weather soccer ball designed for professional play', 'Soccer Ball - Professional Series'),
(129.99, 'High-end golf clubs set with precision-engineered irons and woods', 'Golf Clubs Set - Precision Pro'),
(19.99, 'Durable and non-slip yoga mat for a comfortable practice', 'Yoga Mat - Non-Slip Comfort'),
(44.99, 'Water-resistant and spacious sports backpack with multiple compartments', 'Sports Backpack - All Terrain'),
(34.99, 'Compression sleeves for joint support during intense workouts', 'Compression Sleeves - Performance Plus'),
(149.99, 'Premium quality swimming goggles with anti-fog and UV protection', 'Swimming Goggles - Pro Vision'),
(79.99, 'Lightweight and breathable soccer jersey for optimum performance', 'Soccer Jersey - Elite Edition'),
(24.99, 'Adjustable jump rope for cardio and agility training', 'Jump Rope - Adjustable Speed'),
(89.99, 'Professional-grade weightlifting gloves for enhanced grip and protection', 'Weightlifting Gloves - Pro Grip'),
(59.99, 'Classic design skateboard for smooth rides and tricks', 'Skateboard - Classic Cruiser');
