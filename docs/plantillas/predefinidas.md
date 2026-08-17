---
title: Plantillas Predefinidas de xls2sage50
date: 2026-01-07
keywords:
  - plantillas predefinidas
  - plantillas incluidas
  - plantillas por defecto
  - ejemplos plantillas
aliases:
  - plantillas/predefinidas.html
description: Lista de plantillas predefinidas incluidas con xls2sage50 para los casos más comunes de importación.
status: published
---

# Plantillas Predefinidas

xls2sage50 incluye un conjunto de plantillas predefinidas para los casos más comunes de importación. Estas plantillas están listas para usar o pueden servir como base para sus propias configuraciones.

## Lista de Plantillas Incluidas

### Clientes

#### Clientes_Estandar

Plantilla básica para importación de clientes.

| Columna Excel | Campo SAGE 50 |
|---------------|---------------|
| CODIGO | CodigoCliente |
| NOMBRE | NombreCliente |
| NIF | NIF |
| DIRECCION | Direccion |
| POBLACION | Poblacion |
| PROVINCIA | Provincia |
| CP | CodigoPostal |
| TELEFONO | Telefono1 |
| EMAIL | Email |

**Opciones:**
- Insertar nuevos: Sí
- Actualizar existentes: No
- Validar NIF: Sí

#### Clientes_Completo

Plantilla para clientes con información completa.

Incluye además:
- Teléfono 2
- Fax
- Móvil
- Página web
- Contacto
- Observaciones

### Proveedores

#### Proveedores_Estandar

Plantilla básica para importación de proveedores.

| Columna Excel | Campo SAGE 50 |
|---------------|---------------|
| CODIGO | CodigoProveedor |
| RAZON_SOCIAL | Nombre |
| NIF | NIF |
| DIRECCION | Direccion |
| POBLACION | Poblacion |
| PROVINCIA | Provincia |
| CP | CodigoPostal |
| TELEFONO | Telefono |
| EMAIL | Email |

### Artículos

#### Articulos_Basico

Plantilla básica para artículos.

| Columna Excel | Campo SAGE 50 |
|---------------|---------------|
| CODIGO | CodigoArticulo |
| DESCRIPCION | Descripcion |
| PRECIO_VENTA | PrecioVenta |
| PRECIO_COSTE | PrecioCoste |
| STOCK | StockActual |
| IVA | TipoIVA |

#### Articulos_Completo

Plantilla para artículos con información completa.

Incluye además:
- Familia
- Subfamilia
- Unidad de medida
- Peso
- Descuento
- Margen
- Proveedor principal

### Asientos

#### Asientos_Contables

Plantilla para asientos contables.

| Columna Excel | Campo SAGE 50 |
|---------------|---------------|
| FECHA | Fecha |
| CUENTA | Cuenta |
| CONCEPTO | Concepto |
| DEBE | ImporteDebe |
| HABER | ImporteHaber |
| DIARIO | Diario |
| ASIENTO | NumeroAsiento |

### Facturas

#### Facturas_Venta

Plantilla para facturas de venta.

| Columna Excel | Campo SAGE 50 |
|---------------|---------------|
| SERIE | Serie |
| NUMERO | Numero |
| FECHA | Fecha |
| CLIENTE | CodigoCliente |
| BASE_IMPORTE | BaseImponible |
| IVA | ImporteIVA |
| TOTAL | TotalFactura |

#### Facturas_Compra

Plantilla para facturas de compra.

| Columna Excel | Campo SAGE 50 |
|---------------|---------------|
| SERIE | Serie |
| NUMERO | Numero |
| FECHA | Fecha |
| PROVEEDOR | CodigoProveedor |
| BASE_IMPORTE | BaseImponible |
| IVA | ImporteIVA |
| TOTAL | TotalFactura |

## Usar las Plantillas Predefinidas

### Cargar una Plantilla Predefinida

1. Vaya a la sección **Plantillas**
2. Las plantillas predefinidas aparecen con un icono especial :material.star:
3. Seleccione la plantilla deseada
4. Haga clic en **"Cargar"**

### Modificar una Plantilla Predefinida

Las plantillas predefinidas son puntos de partida. Puede:

1. Cargar la plantilla
2. Modificar el mapeo según sus necesidades
3. Hacer clic en **"Guardar como"** con un nuevo nombre

!!! tip "No Modifique las Predefinidas**

    En lugar de modificar las plantillas predefinidas, use **"Guardar como"** para crear su propia versión. Esto preserva las originales.

## Personalizar Plantillas Predefinidas

### Ejemplo: Clientes con Campos Personalizados

Si su empresa usa campos adicionales:

1. Cargue **Clientes_Estandar**
2. Añada los mapeos adicionales:
   - `SEGMENTO` → `SegmentoCliente`
   - `CANAL_VENTA` → `CanalVenta`
   - `DESCUENTO` → `DescuentoCliente`
3. Guárdelo como **Clientes_Empresa**

### Ejemplo: Artículos con Múltiples Precios

Si gestiona múltiples listas de precios:

1. Cargue **Articulos_Completo**
2. Añada mapeos para:
   - `PRECIO_MAYORISTA` → `PrecioMayorista`
   - `PRECIO_DISTRIBUIDOR` → `PrecioDistribuidor`
   - `PRECIO_TIENDA` → `PrecioTienda`
3. Guárdelo como **Articulos_MultiplesPrecios**

## Crear Variaciones

### Variaciones por Tipo de Cliente

```
Clientes_Estandar
├── Clientes_Retail (modificado)
├── Clientes_Wholesale (modificado)
└── Clientes_Online (modificado)
```

### Variaciones por Zona Geográfica

```
Clientes_Estandar
├── Clientes_Nacional (modificado)
├── Clientes_UnionEuropea (modificado)
└── Clientes_Exportacion (modificado)
```

## Plantillas para Sectores Específicos

### Comercio Electrónico

| Plantilla | Descripción |
|-----------|-------------|
| `Ecommerce_Pedidos` | Importación de pedidos online |
| `Ecommerce_Clientes` | Registro de clientes web |
| `Ecommerce_Productos` | Sincronización de catálogo |

### Hostelería

| Plantilla | Descripción |
|-----------|-------------|
| `Hosteleria_Mesesas` | Gestión de mesas |
| `Hosteleria_Reservas` | Reservas y bookings |
| `Hosteleria_Proveedores` | Proveedores de alimentos |

### Servicios

| Plantilla | Descripción |
|-----------|-------------|
| `Servicios_Proyectos` | Proyectos y trabajos |
| `Servicios_Horas` | Control de horas |
| `Servicios_Facturacion` | Facturas por servicios |

## Actualizaciones de Plantillas

Las plantillas predefinidas se actualizan con nuevas versiones de xls2sage50:

| Versión | Cambios |
|---------|---------|
| 1.0.0 | Versión inicial |
| 1.1.0 | Añadidas plantillas de facturas |
| 1.2.0 | Añadida validación de NIF mejorada |
| 1.3.0 | Nuevas plantillas para sectores |

!!! info "Actualizaciones Automáticas**

    Las plantillas predefinidas se actualizan automáticamente al actualizar xls2sage50, sin afectar sus plantillas personalizadas.

## Contribuir con Nuevas Plantillas

Si ha creado una plantilla que podría ser útil para otros usuarios:

1. Exporte la plantilla
2. Elimine información confidencial
3. Envíela al equipo de xls2sage50
4. Incluya una descripción de su uso

!!! tip "Compartir Conocimiento**

    Contribuir con plantillas ayuda a toda la comunidad de usuarios de xls2sage50.

## Próximo Paso

- [Solución de Problemas](../solucion-problemas/index.md) - Resolver problemas comunes
