---
title: Generación de SQL en Modo CSV
date: 2026-01-07
keywords:
  - generar sql sage 50
  - script sql insert
  - exportar sql
  - sentencias insert
aliases:
  - modo-csv/generacion-sql.html
description: Aprenda a generar scripts SQL con sentencias INSERT para importar datos directamente en la base de datos de SAGE 50.
status: published
---

# Generación de SQL

Además de los archivos CSV, xls2sage50 puede generar scripts SQL con sentencias INSERT listas para ejecutar en la base de datos de SAGE 50.

## Ventajas de los Scripts SQL

| Ventaja | Descripción |
|---------|-------------|
| :white_check_mark: **Importación directa** | No requiere el asistente de importación |
| :white_check_mark: **Transaccional** | Puede confirmar o deshacer toda la operación |
| :white_check_mark: **Automatizable** | Puede ejecutarse mediante scripts |
| :white_check_mark: **Reutilizable** | El script puede editarse y reutilizarse |

## Estructura del Script SQL

### Formato Básico

Cada registro genera una sentencia INSERT:

```sql
INSERT INTO Clientes (CodigoCliente, NombreCliente, NIF, Direccion, Poblacion, Provincia)
VALUES ('CLI001', 'Juan Pérez SL', 'B12345678', 'Calle Mayor 1', 'Madrid', 'Madrid');

INSERT INTO Clientes (CodigoCliente, NombreCliente, NIF, Direccion, Poblacion, Provincia)
VALUES ('CLI002', 'María López SA', 'A87654321', 'Avenida Libertad 2', 'Barcelona', 'Barcelona');
```

### Script Completo con Cabeceras

```sql
-- =====================================================
-- Importación de Clientes
-- Generado por xls2sage50
-- Fecha: 01/02/2024 10:30:00
-- Archivo origen: clientes_nuevos.xlsx
-- =====================================================

-- Deshabilitar restricciones (opcional)
ALTER TABLE Clientes NOCHECK CONSTRAINT ALL;

BEGIN TRANSACTION;

-- Cliente 1: CLI001
INSERT INTO Clientes (CodigoCliente, NombreCliente, NIF, Direccion, Poblacion, Provincia, CodigoPostal, Telefono1, Email)
VALUES ('CLI001', 'Juan Pérez SL', 'B12345678', 'Calle Mayor 1', 'Madrid', 'Madrid', '28001', '910000001', 'info@juanperez.es');

-- Cliente 2: CLI002
INSERT INTO Clientes (CodigoCliente, NombreCliente, NIF, Direccion, Poblacion, Provincia, CodigoPostal, Telefono1, Email)
VALUES ('CLI002', 'María López SA', 'A87654321', 'Avenida Libertad 2', 'Barcelona', 'Barcelona', '08001', '920000002', 'maria@lopez.com');

COMMIT TRANSACTION;

-- Rehabilitar restricciones
ALTER TABLE Clientes CHECK CONSTRAINT ALL;

-- =====================================================
-- Resumen
-- Registros procesados: 2
-- Registros exitosos: 2
-- Registros con error: 0
-- =====================================================
```

## Opciones de Generación SQL

### Transacciones

Controla si las sentencias se agrupan en una transacción:

| Opción | Descripción |
|--------|-------------|
| **Con transacción** | Todas las INSERT en una transacción |
| **Sin transacción** | Cada INSERT es independiente |

!!! tip "Use Transacciones**

    Las transacciones permiten deshacer todos los cambios si algo sale mal.

### Manejo de Errores

Configure el comportamiento ante errores:

| Opción | Descripción |
|--------|-------------|
| **Continuar** | Continua tras errores, los registra en comentarios |
| **Detener** | Incluye comandos para detener en errores |
| **Ignorar** | No incluye manejo de errores |

### Comentarios

Configure el nivel de detalle en los comentarios:

| Nivel | Descripción |
|-------|-------------|
| **Básico** | Solo cabecera y resumen |
| **Detallado** | Comentario antes de cada INSERT |
| **Completo** | Comentarios con información de cada campo |

## Tipos de Datos

### Mapeo de Tipos

| Tipo Excel | Tipo SQL | Ejemplo |
|------------|-----------|---------|
| Texto | NVARCHAR(255) | 'Juan Pérez' |
| Número entero | INT | 100 |
| Decimal | DECIMAL(18,2) | 1234.56 |
| Fecha | DATETIME | '2024-02-01 00:00:00' |
| Booleano | BIT | 1 (true) o 0 (false) |

### Manejo de Valores Especiales

| Valor | Representación SQL |
|-------|-------------------|
| NULL | NULL |
| Cadena vacía | '' |
| Fecha nula | NULL |
| Comilla simple | '' (doble comilla simple) |

```sql
-- Ejemplo con valores especiales
INSERT INTO Clientes (CodigoCliente, NombreCliente, Telefono, FechaAlta)
VALUES ('CLI003', 'Empresa D''Amico', NULL, NULL);
```

## Ejecutar el Script SQL

### Método 1: SQL Server Management Studio

1. Abra SSMS y conéctese al servidor de SAGE 50
2. Abra el archivo SQL generado
3. Verifique que está seleccionada la base de datos correcta
4. Haga clic en **"Ejecutar"**
5. Revise los mensajes de resultado

![Ejecutar en SSMS](img:sql-ejecutar-ssms.png)

### Método 2: sqlcmd (Línea de Comandos)

```bash
sqlcmd -S localhost\SAGE50 -d sage50 -i C:\Export\clientes.sql -o C:\Export\resultados.txt
```

Parámetros:

| Parámetro | Descripción |
|-----------|-------------|
| `-S` | Servidor SQL |
| `-d` | Base de datos |
| `-i` | Archivo de entrada |
| `-o` | Archivo de salida (opcional) |

### Método 3: Desde SAGE 50

1. Abra SAGE 50
2. Vaya a **Herramientas** > **Utilidades** > **Ejecutar SQL**
3.Seleccione el archivo SQL generado
4. Haga clic en **"Ejecutar"**

## Verificación Post-Ejecución

### Verificar Registros Insertados

```sql
-- Contar registros insertados
SELECT COUNT(*) as TotalClientes
FROM Clientes
WHERE CodigoCliente LIKE 'CLI%';

-- Verificar un registro específico
SELECT * FROM Clientes
WHERE CodigoCliente = 'CLI001';
```

### Verificar Integridad

```sql
-- Verificar claves duplicadas
SELECT CodigoCliente, COUNT(*) as Total
FROM Clientes
GROUP BY CodigoCliente
HAVING COUNT(*) > 1;
```

## Problemas Comunes

### Error: Clave Primaria Duplicada

!!! error "Violation of PRIMARY KEY constraint"

    **Causa:** Ya existe un registro con el mismo código

    **Solución:**
    - Use una sentencia UPDATE en lugar de INSERT
    - O elimine el registro existente primero

### Error: Constraint de Foreign Key

!!! error "Conflictión con FOREIGN KEY**

    **Causa:** Se referencia a un registro que no existe

    **Solución:**
    - Verifique que las familias, provincias, etc. existen
    - Importe primero los datos maestros

### Error: Tipo de Dato Incorrecto

!!! error "Error converting data type**

    **Causa:** El tipo de dato no coincide

    **Solución:**
    - Revise el formato de fechas y números
    - Asegúrese de que los textos estén entre comillas simples

## Script de Actualización

Para actualizar registros existentes:

```sql
-- Actualizar cliente existente
UPDATE Clientes
SET NombreCliente = 'Nuevo Nombre',
    Direccion = 'Nueva Dirección',
    Telefono1 = '930000003'
WHERE CodigoCliente = 'CLI001';
```

## Script Hibrido (Insertar o Actualizar)

```sql
-- Insertar si no existe, actualizar si existe
IF NOT EXISTS (SELECT 1 FROM Clientes WHERE CodigoCliente = 'CLI001')
BEGIN
    INSERT INTO Clientes (CodigoCliente, NombreCliente, NIF)
    VALUES ('CLI001', 'Juan Pérez SL', 'B12345678');
END
ELSE
BEGIN
    UPDATE Clientes
    SET NombreCliente = 'Juan Pérez SL',
        NIF = 'B12345678'
    WHERE CodigoCliente = 'CLI001';
END
```

## Próximo Paso

- [Importación Manual](importacion-manual.md) - Importar los archivos en SAGE 50
