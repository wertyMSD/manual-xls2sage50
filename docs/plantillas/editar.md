---
title: Editar y Eliminar Plantillas
date: 2026-01-07
keywords:
  - editar plantilla xls2sage50
  - eliminar plantilla
  - modificar plantilla
  - gestionar plantillas
aliases:
  - plantillas/editar.html
description: Aprenda a editar plantillas existentes en xls2sage50 para ajustar su configuración o eliminar las que ya no necesita.
status: published
---

# Editar y Eliminar Plantillas

Esta guía le enseñará a modificar plantillas existentes y eliminar las que ya no necesita.

## Editar una Plantilla

### Cuándo Editar una Plantilla

!!! info "Motivos para Editar"

    - La estructura del archivo de origen ha cambiado
    - Desea añadir o quitar campos del mapeo
    - Las opciones de importación han cambiado
    - Corregir errores en la configuración

### Paso 1: Abrir la Plantilla

1. Vaya a la sección **Plantillas**
2. Seleccione la plantilla que desea editar
3. Haga clic en **"Editar"**

![Editar plantilla](img:plantillas-editar.png)

### Paso 2: Modificar la Configuración

Puede modificar todos los aspectos de la plantilla:

#### Datos Básicos

| Campo | Descripción |
|-------|-------------|
| **Nombre** | Cambiar el nombre de la plantilla |
| **Descripción** | Actualizar la descripción |
| **Categoría** | Cambiar la categoría |

#### Mapeo de Campos

1. En la sección de mapeo, puede:
   - **Añadir** nuevo mapeo (botón "+")
   - **Eliminar** mapeo existente (botón "X")
   - **Modificar** mapeo (clic en la fila)

![Editar mapeo](img:plantillas-editar-mapeo.png)

#### Opciones de Importación

Modifique las opciones según necesite:

```yaml
# Opciones modificables
insertar_nuevos: true/false
actualizar_existentes: true/false
si_existe_codigo: omitir/actualizar/error
manejo_errores: detener/continuar
```

#### Validaciones

Añada, elimine o modifique validaciones:

1. Haga clic en **"Editar Validaciones"**
2. Para cada validación:
   - Modifique el campo, tipo o parámetros
   - Elimine la validación si no la necesita
3. Añada nuevas validaciones si es necesario

### Paso 3: Guardar los Cambios

Cuando termine de editar:

| Opción | Descripción |
|--------|-------------|
| **Guardar** | Sobrescribe la plantilla actual |
| **Guardar como** | Crea una nueva plantilla con los cambios |

!!! tip "Guardar Como para Versiones**

    Use **"Guardar como"** con un nombre diferente para mantener versiones de la plantilla: `Clientes_v1`, `Clientes_v2`, etc.

### Paso 4: Confirmación

Si selecciona **"Guardar"**, se le pedirá confirmación:

```
¿Está seguro de que desea sobrescribir la plantilla "Clientes_Mensual"?
Esta acción no se puede deshacer.

[Cancelar]  [Sobrescribir]
```

## Eliminar una Plantilla

### Cuándo Eliminar

!!! warning "Antes de Eliminar"

    Elimine una plantilla solo si:
    - Ya no se usa el proceso
    - Ha sido reemplazada por una nueva versión
    - Contiene errores que no se pueden corregir

### Paso 1: Seleccionar la Plantilla

1. Vaya a la sección **Plantillas**
2. Seleccione la plantilla que desea eliminar

### Paso 2: Eliminar

Haga clic en **"Eliminar"** o presione la tecla `Supr`.

### Paso 3: Confirmación

Se le pedirá confirmación:

```
¿Está seguro de que desea eliminar la plantilla "Clientes_Mensual"?

Esta acción es permanente y no se puede deshacer.

[Cancelar]  [Eliminar]
```

!!! danger "Eliminación Permanente**

    Una vez eliminada, la plantilla no se puede recuperar. Asegúrese de hacer una copia si puede necesitarla en el futuro.

## Exportar antes de Eliminar

Para seguridad, exporte la plantilla antes de eliminarla:

1. Seleccione la plantilla
2. Haga clic en **"Exportar"**
3. Guarde el archivo `.PREDEFINIDO`
4. Ahora puede eliminar la plantilla original

Si necesita recuperarla:

1. Haga clic en **"Importar"**
2. Seleccione el archivo exportado
3. La plantilla se restaurará

## Gestión de Versiones

### Estrategia de Versionado

Para mantener control sobre los cambios:

| Versión | Convención | Ejemplo |
|---------|-------------|---------|
| **Principal** | `Nombre` | `Clientes_Mensual` |
| **Versiones** | `Nombre_vN` | `Clientes_Mensual_v2` |
| **Fechas** | `Nombre_AAAAMMDD` | `Clientes_Mensual_20240201` |

### Copia de Seguridad Automática

xls2sage50 crea automáticamente copias de seguridad:

```
plantillas/
├── Clientes_Mensual.PREDEFINIDO
├── Clientes_Mensual.backup.20240201.PREDEFINIDO
├── Clientes_Mensual.backup.20240115.PREDEFINIDO
└── ...
```

## Comparar Plantillas

Para ver las diferencias entre dos plantillas:

1. Seleccione ambas plantillas (mantenga `Ctrl` presionado)
2. Haga clic en **"Comparar"**
3. Verá una tabla con las diferencias

| Campo | Plantilla 1 | Plantilla 2 |
|-------|-------------|-------------|
| Nombre | Clientes_Mensual | Clientes_Completo |
| Insertar nuevos | Sí | Sí |
| Actualizar existentes | No | Sí |

## Duplicar Plantilla

Para crear una copia de una plantilla:

1. Seleccione la plantilla
2. Haga clic en **"Duplicar"**
3. Ingrese un nuevo nombre
4. Haga clic en **"Aceptar"**

La copia es idéntica a la original, pero con un nombre diferente.

!!! tip "Duplicar para Variaciones**

    Use duplicar para crear variantes de una plantilla sin modificar la original: `Clientes_Espana`, `Clientes_Portugal`, etc.

## Organizar Plantillas

### Por Categorías

Organice sus plantillas en categorías:

| Categoría | Plantillas Ejemplo |
|-----------|-------------------|
| **Rutinarias** | Importaciones diarias, semanales, mensuales |
| **Exceptionales** | Importaciones únicas o anuales |
| **Por Departamento** | Financiero, Compras, Ventas |
| **Por Entidad** | Clientes, Artículos, Asientos |

### Usar Prefijos

Use prefijos para ordenar alfabéticamente:

```
01_Clientes_Mensual
02_Proveedores_Semanal
03_Articulos_Precios
04_Asientos_Trimestral
```

## Problemas Comunes

### Problema: No se Puede Editar

!!! error "La plantilla está bloqueada"

    **Causa:** Otro usuario está usando la plantilla

    **Solución:**
    - Espere a que el otro usuario termine
    - O use **"Guardar como"** con otro nombre

### Problema: Eliminación Fallida

!!! error "No se puede eliminar la plantilla"

    **Causa:** La plantilla está en uso

    **Solución:**
    - Cierre todas las instancias de xls2sage50
    - Intente eliminar nuevamente
    - O elimine el archivo manualmente desde la carpeta

## Próximo Paso

- [Plantillas Predefinidas](predefinidas.md) - Conozca las plantillas incluidas con la aplicación

!!! question "¿Necesita Más Ayuda?**

    Consulte la sección de [Solución de Problemas](../../solucion-problemas/index.md) para resolver problemas específicos.
