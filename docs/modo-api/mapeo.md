---
title: Mapeo de Campos - Excel a SAGE 50
date: 2026-01-07
keywords:
  - mapeo campos excel sage 50
  - mapear columnas
  - correspondencia campos
  - mapeo automatico
aliases:
  - modo-api/mapeo.html
description: Aprenda a configurar el mapeo de campos entre su archivo Excel y los campos de SAGE 50. Incluye mapeo automático, manual y plantillas.
status: published
---

# Mapeo de Campos

El mapeo de campos es el proceso de relacionar las columnas de su archivo Excel con los campos de SAGE 50. Un mapeo correcto es esencial para una importación exitosa.

## Conceptos de Mapeo

### ¿Qué es el Mapeo?

El mapeo establece una relación entre:

```
Columna Excel  →  Campo SAGE 50
     ↓                        ↓
   "NOMBRE"       →      "NombreCliente"
   "DIRECCION"    →      "Direccion"
   "TELEFONO"     →      "Telefono1"
```

### Elementos del Mapeo

| Elemento | Descripción |
|----------|-------------|
| **Columna origen** | Nombre de la columna en el archivo Excel |
| **Campo destino** | Nombre del campo en SAGE 50 |
| **Transformación** | Conversión de formato (opcional) |
| **Validación** | Regla de validación del campo (opcional) |

## Mapeo Automático

xls2sage50 intenta detectar automáticamente el mapeo:

### Algoritmo de Detección

La aplicación utiliza:

1. **Similitud de nombres:** Coincidencia aproximada de nombres
2. **Sinónimos conocidos:** Tabla de equivalencias comunes
3. **Posición relativa:** Orden típico de columnas

### Tabla de Sinónimos

| Columna Excel | Campo SAGE 50 |
|---------------|---------------|
| NOMBRE, Nombre, Razón Social | NombreCliente |
| CIF, NIF, DNI, Identificacion | NIF |
| DIRECCION, Dir, Domicilio | Direccion |
| POBLACION, Ciudad, Localidad | Poblacion |
| CP, Codigo Postal, Postal | CodigoPostal |
| PROVINCIA, Prov | Provincia |
| TELEFONO, Tel, Tlf | Telefono1 |
| EMAIL, E-mail, Correo | Email |
| CODIGO, Codigo, Cod, Ref | CodigoCliente |

!!! tip "Use Nombres Descriptivos**

    Para mejorar el mapeo automático, use nombres de columnas claros y descriptivos en sus archivos Excel.

## Mapeo Manual

Cuando el mapeo automático no es suficiente, puede configurarlo manualmente.

### Editor de Mapeo

1. Cargue el archivo Excel en xls2sage50
2. Haga clic en **"Editar Mapeo"**
3. Configure cada columna

![Editor de mapeo](img:mapeo-editor.png)

### Pasos para Mapear Manualmente

1. **Seleccione la columna Excel** que desea mapear
2. **Elija el campo SAGE 50** correspondiente del desplegable
3. **Configure transformaciones** si es necesario
4. **Haga clic en "Agregar"** para añadir el mapeo
5. **Repita** para cada columna

### Campos Obligatorios

Algunos campos de SAGE 50 son obligatorios y deben mapearse:

| Entidad | Campos Obligatorios |
|---------|---------------------|
| **Clientes** | CodigoCliente, Nombre |
| **Proveedores** | CodigoProveedor, Nombre |
| **Artículos** | CodigoArticulo, Descripcion |
| **Asientos** | Fecha, Cuenta, Importe |

!!! warning "Campos Obligatorios**

    Si no mapea todos los campos obligatorios, la importación fallará con un error de validación.

## Transformaciones

Las transformaciones permiten modificar el formato de los datos durante la importación.

### Tipos de Transformación

| Transformación | Ejemplo Entrada | Ejemplo Salida |
|----------------|-----------------|----------------|
| **Mayúsculas** | Juan Pérez | JUAN PÉREZ |
| **Minúsculas** | JUAN PÉREZ | juan pérez |
| **Recortar** | " texto " | texto |
| **Reemplazar** | 123-456-789 | 123456789 |
| **Formato fecha** | 01/02/2024 | 2024-02-01 |

### Configurar Transformaciones

En el editor de mapeo:

1. Seleccione el campo a transformar
2. Haga clic en **"Agregar Transformación"**
3. Seleccione el tipo de transformación
4. Configure los parámetros
5. Haga clic en **"Aceptar"**

## Campos Calculados

Los campos calculados permiten generar valores a partir de otros campos:

### Ejemplos de Campos Calculados

| Campo | Fórmula | Descripción |
|-------|---------|-------------|
| **Nombre completo** | NOMBRE + " " + APELLIDOS | Concatenación |
| **Código concatenado** | PREFIJO + "-" + NUMERO | Con separador |
| **Precio con IVA** | PRECIO * 1.21 | Cálculo matemático |

!!! tip "Use Campos Calculados**

    Los campos calculados le permiten derivar información sin modificar el archivo Excel original.

## Validaciones

Configure reglas de validación para cada campo mapeado:

### Tipos de Validación

| Validación | Descripción | Parámetros |
|------------|-------------|------------|
| **Longitud** | Número de caracteres | Mín, Máx |
| **Rango** | Valor numérico en rango | Mín, Máx |
| **Lista** | Valor en lista permitida | Valores |
| **Expresión regular** | Formato específico | Patrón |
| **Único** | Sin duplicados | - |

### Ejemplo: Validar NIF

Para validar el formato del NIF:

1. Seleccione el campo NIF en el mapeo
2. Haga clic en **"Agregar Validación"**
3. Seleccione **"Expresión regular"**
4. Ingrese el patrón: `^[0-9]{8}[A-Za-z]$`
5. Haga clic en **"Aceptar"**

## Guardar Mapeo como Plantilla

Para reutilizar el mapeo en futuras importaciones:

1. Configure el mapeo completo
2. Haga clic en **"Guardar como Plantilla"**
3. Asigne un nombre descriptivo
4. Añada una descripción opcional
5. Haga clic en **"Guardar"**

!!! tip "Nombres Descriptivos de Plantillas**

    Use nombres que describan el tipo de importación, como "Clientes_Mensual" o "Artículos_Precios".

## Mapeos Comunes

### Importación de Clientes

| Columna Excel | Campo SAGE 50 | Obligatorio |
|---------------|---------------|-------------|
| CODIGO | CodigoCliente | Sí |
| NOMBRE | NombreCliente | Sí |
| NIF | NIF | No |
| DIRECCION | Direccion | No |
| POBLACION | Poblacion | No |
| PROVINCIA | Provincia | No |
| CP | CodigoPostal | No |
| TELEFONO | Telefono1 | No |
| EMAIL | Email | No |

### Importación de Artículos

| Columna Excel | Campo SAGE 50 | Obligatorio |
|---------------|---------------|-------------|
| CODIGO | CodigoArticulo | Sí |
| DESCRIPCION | Descripcion | Sí |
| PRECIO | PrecioVenta | No |
| COSTE | PrecioCoste | No |
| STOCK | StockActual | No |
| FAMILIA | Familia | No |
| IVA | TipoIVA | No |

### Importación de Asientos

| Columna Excel | Campo SAGE 50 | Obligatorio |
|---------------|---------------|-------------|
| FECHA | Fecha | Sí |
| CUENTA | Cuenta | Sí |
| CONCEPTO | Concepto | No |
| DEBE | ImporteDebe | No |
| HABER | ImporteHaber | No |

## Problemas Comunes de Mapeo

### Problema: Columna No Reconocida

!!! error "Columna no reconocida"

    **Causa:** El nombre de la columna no coincide con ningún campo conocido

    **Solución:**
    - Verifique que el nombre está escrito correctamente
    - Use el mapeo manual para asignar el campo
    - Añada un sinónimo a la tabla

### Problema: Tipo de Dato Incorrecto

!!! error "Tipo de dato incorrecto"

    **Causa:** El tipo de dato de Excel no coincide con el esperado por SAGE 50

    **Solución:**
    - Verifique el formato de las celdas en Excel
    - Use una transformación para convertir el tipo
    - Asegúrese de que los números no tengan texto

## Próximo Paso

- [Proceso de Importación](proceso.md) - Ejecute la importación con el mapeo configurado
