DROP TABLE IF EXISTS usuarios;
DROP TABLE IF EXISTS posts;
DROP TABLE IF EXISTS respuestas;
-- Repite esta línea para cada tabla que quieras eliminar

CREATE TABLE IF NOT EXISTS usuarios (
    id INT NOT NULL AUTO_INCREMENT,
    nombre VARCHAR(20),
    password VARCHAR(20),
    correo VARCHAR(255),
    genero ENUM('hombre', 'mujer', 'otro') NOT NULL,
    fechaNacimiento DATE NOT NULL,
    PRIMARY KEY (id)
);

CREATE TABLE IF NOT EXISTS posts (
    id INT NOT NULL AUTO_INCREMENT,
    idUsuario INT NOT NULL,
    tema VARCHAR(20),
    PRIMARY KEY (id),
    FOREIGN KEY (idUsuario) REFERENCES usuarios(id)
);

CREATE TABLE IF NOT EXISTS respuestas (
    id INT NOT NULL AUTO_INCREMENT,
    idUsuario INT NOT NULL,
    idPostRespuesta INT,
    contenido VARCHAR(150) NOT NULL,
    PRIMARY KEY (id),
    FOREIGN KEY (idUsuario) REFERENCES usuarios(id),
    FOREIGN KEY (idPostRespuesta) REFERENCES posts(id)
);
