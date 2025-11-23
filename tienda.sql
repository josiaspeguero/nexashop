CREATE TABLE Usuarios (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre_completo VARCHAR(150) NOT NULL,
    fecha_nacimiento DATE NOT NULL,
    correo VARCHAR(150) NOT NULL UNIQUE,
    contrasena VARCHAR(255) NOT NULL,
    correo_secundario VARCHAR(150),
    refreshToken VARCHAR(255),
    accessToken VARCHAR(255),
    expirationDateToken DATETIME
);

CREATE TABLE Direcciones (
    id INT AUTO_INCREMENT PRIMARY KEY,
    usuario_id INT NOT NULL,
    direccion VARCHAR(255) NOT NULL,
    codigo_postal VARCHAR(20),
    FOREIGN KEY (usuario_id) REFERENCES Usuarios(id)
);

CREATE TABLE Productos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(150) NOT NULL,
    categoria VARCHAR(100),
    descripcion TEXT,
    photo_url VARCHAR(300),
    precio DECIMAL(10,2) NOT NULL,
    fecha_entrada DATETIME DEFAULT NOW(),
    isVendido TINYINT(1) DEFAULT 0,
    stock INT DEFAULT 0
);

CREATE TABLE Carritos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    usuario_id INT NOT NULL,
    fecha_creacion DATETIME DEFAULT NOW(),
    FOREIGN KEY (usuario_id) REFERENCES Usuarios(id)
);

CREATE TABLE Orden_Productos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    carrito_id INT NOT NULL,
    producto_id INT NOT NULL,
    nombre_producto VARCHAR(150),
    cantidad INT NOT NULL DEFAULT 1,
    isComprado TINYINT(1) DEFAULT 0,
    fecha_agregado DATETIME DEFAULT NOW(),
    FOREIGN KEY (carrito_id) REFERENCES Carritos(id),
    FOREIGN KEY (producto_id) REFERENCES Productos(id)
);

CREATE TABLE Compras (
    id INT AUTO_INCREMENT PRIMARY KEY,
    usuario_id INT NOT NULL,
    carrito_id INT,
    total_monto_compra DECIMAL(12,2) NOT NULL,
    total_puntos_ganados INT DEFAULT 0,
    fecha_compra DATETIME DEFAULT NOW(),
    fecha_pago DATETIME,
    FOREIGN KEY (usuario_id) REFERENCES Usuarios(id),
    FOREIGN KEY (carrito_id) REFERENCES Carritos(id)
);

CREATE TABLE CodigosVerificacion (
    id INT AUTO_INCREMENT PRIMARY KEY,
    usuario_id INT NOT NULL,
    codigo VARCHAR(50) NOT NULL,
    fecha_expiracion DATETIME NOT NULL,
    codigo_usado TINYINT(1) DEFAULT 0,
    FOREIGN KEY (usuario_id) REFERENCES Usuarios(id)
);

CREATE TABLE CompraProductos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    compra_id INT NOT NULL,
    producto_id INT NOT NULL,
    cantidad INT NOT NULL DEFAULT 1,
    FOREIGN KEY (compra_id) REFERENCES Compras(id),
    FOREIGN KEY (producto_id) REFERENCES Productos(id)
);

CREATE TABLE Ventas (
    id INT AUTO_INCREMENT PRIMARY KEY,
    producto_id INT NOT NULL,
    fecha_venta DATETIME DEFAULT NOW(),
    FOREIGN KEY (producto_id) REFERENCES Productos(id)
);
