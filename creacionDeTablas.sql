DROP TABLE IF EXISTS respuestas;
DROP TABLE IF EXISTS posts;
DROP TABLE IF EXISTS usuarios;
-- Repite esta línea para cada tabla que quieras eliminar

CREATE TABLE IF NOT EXISTS usuarios (
    id INT NOT NULL AUTO_INCREMENT,
    nombre VARCHAR(20) NOT NULL,
    password VARCHAR(20) NOT NULL,
    correo VARCHAR(255) NOT NULL,
    genero ENUM('hombre', 'mujer', 'otro') NOT NULL,
    fechaNacimiento DATE NOT NULL,
    PRIMARY KEY (id),
    UNIQUE (nombre),
    UNIQUE (correo)
);

CREATE TABLE IF NOT EXISTS posts (
    id INT NOT NULL AUTO_INCREMENT,
    idUsuario INT NOT NULL,
    tema VARCHAR(20) NOT NULL,
    contenido VARCHAR(150) NOT NULL,
    momento TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY (id),
    FOREIGN KEY (idUsuario) REFERENCES usuarios(id)
);

CREATE TABLE IF NOT EXISTS respuestas (
    id INT NOT NULL AUTO_INCREMENT,
    idUsuario INT NOT NULL,
    idPostRespuesta INT NOT NULL,
    contenido VARCHAR(150) NOT NULL,
    momento TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY (id),
    FOREIGN KEY (idUsuario) REFERENCES usuarios(id),
    FOREIGN KEY (idPostRespuesta) REFERENCES posts(id)
);
