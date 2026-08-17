---
title: Crear Plantillas en xls2sage50
date: 2026-01-07
keywords:
  - crear plantilla xls2sage50
  - guardar configuracion
  - nueva plantilla
  - wizard plantilla
aliases:
  - plantillas/crear.html
description: Aprenda a crear nuevas plantillas en xls2sage50 para guardar sus configuraciones de importación y reutilizarlas en el futuro.
status: published
---

# Crear Plantilla

Esta guía le enseñará a crear una plantilla nueva en xls2sage50.

## Cuándo Crear una Plantilla

!!! info "Situaciones Ideales para Plantillas"

    - Realiza la misma importación regularmente (mensual, semanal)
    - Múltiples usuarios necesitan la misma configuración
    - Desea estandarizar procesos entre departamentos
    - Procesos complejos que no desea reconfigurar

## Método 1: Guardar desde Importación Existente

El método más sencillo es crear una plantilla desde una configuración ya realizada.

### Paso 1: Configurar la Importación

1. Abra xls2sage50
2. Seleccione el archivo Excel
3. Configure el mapeo de campos
4. Configure las opciones de importación

### Paso 2: Guardar como Plantilla

1. Haga clic en **"Guardar como Plantilla"**

![Botón guardar como plantilla](img:plantillas-guardar-como.png)

2. Complete los datos:

| Campo | Descripción | Ejemplo |
|-------|-------------|---------|
| **Nombre** | Nombre identificativo | Clientes_Mensual |
| **Descripción** | Descripción del uso | Importación mensual de nuevos clientes |
| **Categoría** | Agrupación lógica | Importaciones_Rutinarias |

3. Haga clic en **"Guardar"**

!!! tip "Nombres Descriptivos**

    Use nombres que describan claramente el tipo de importación: "Clientes_Mensual", "Artículos_Precios", "Asientos_Trimestral"

## Método 2: Crear Plantilla Nueva

También puede crear una plantilla desde cero sin configurar una importación primero.

### Paso 1: Abrir el Asistente de Plantillas

1. Vaya a la sección **Plantillas**
2. Haga clic en **"Nueva Plantilla"**

### Paso 2: Configurar los Datos Básicos

Complete el formulario:

| Campo | Descripción |
|-------|-------------|
| **Nombre** | Nombre único para la plantilla |
| **Descripción** | Descripción detallada del propósito |
| **Modo** | API o CSV |
| **Entidad** | Clientes, Artículos, Proveedores, etc. |

![Nuevo asistente de plantilla](img:plantillas-nuevo-asistente.png)

### Paso 3: Configurar el Mapeo

Defina la relación entre columnas Excel y campos SAGE 50:

1. Haga clic en **"Agregar Mapeo"**
2. Para cada campo:
   - Ingrese el nombre de la columna Excel
   - Seleccione el campo SAGE 50 correspondiente
   - Configure transformaciones si es necesario
3. Repita para todos los campos

### Paso 4: Configurar Opciones

Configure las opciones de la plantilla:

```yaml
# Opciones de importación
insertar_nuevos: true
actualizar_existentes: false
manejo_errores: continuar
validar_datos: true
```

### Paso 5: Configurar Validaciones

Añada reglas de validación si es necesario:

1. Haga clic en **"Agregar Validación"**
2. Seleccione el campo a validar
3. Elija el tipo de validación
4. Configure los parámetros

### Paso 6: Guardar la Plantilla

1. Revise la configuración completa
2. Haga clic en **"Guardar"**
3. La plantilla estará disponible para usar

## Ejemplo Completo: Plantilla de Clientes

### Escenario

Creamos una plantilla para importar clientes mensualmente desde un archivo con formato estándar.

### Archivo de Entrada

| COD_CLI | RAZON_SOCIAL | NIF | DIR | POBL | PROV | CP |
|---------|--------------|-----|-----|------|------|-----|
| CLI001 | Empresa ABC | B123... | C/ A | Madrid | Madrid | 28001 |

### Configuración de la Plantilla

**Mapeo:**

| Columna Excel | Campo SAGE 50 |
|---------------|---------------|
| COD_CLI | CodigoCliente |
| RAZON_SOCIAL | NombreCliente |
| NIF | NIF |
| DIR | Direccion |
| POBL | Poblacion |
| PROV | Provincia |
| CP | CodigoPostal |

**Opciones:**

```yaml
nombre: "Clientes_Mensual_Estandar"
descripcion: "Importación estándar de clientes mensuales"
modo: "API"
insertar_nuevos: true
actualizar_existentes: false
si_existe_codigo: "omitir"
validar_nif: true
```

**Validaciones:**

```yaml
- campo: "NIF"
  tipo: "expresion_regular"
  patron: "^[0-9A-Z][0-9]{7}[A-Z0-9]$"
  mensaje: "Formato de NIF incorrecto"
```

## Buena Práctica de Nomenclatura

Use una nomenclatura consistente para sus plantillas:

### Formato Recomendado

```
[Entidad]_[Propósito]_[Frecuencia]
```

### Ejemplos

| Plantilla | Propósito |
|-----------|-----------|
| `Clientes_Nuevos_Mensual` | Nuevos clientes cada mes |
| `Articulos_Precios_Semanal` | Actualización de precios semanal |
| `Asientos_Contables_Trimestral` | Asientos trimestrales |
| `Proveedores_Alta_Único` | Alta de proveedores (único) |

!!! tip "Prefijos para Departamentos**

    Si múltiples departamentos usan la aplicación, considere prefijos: `FIN_Clientes_Mensual`, `COM_Proveedores_Semanal`

## Validar Plantilla Antes de Usar

Antes de usar una plantilla por primera vez:

1. :white_check_mark: Verifique que el mapeo es correcto
2. :white_check_mark: Pruebe con un archivo de muestra
3. :white_check_mark: Revise los resultados
4. :white_check_mark: Corrija si es necesario
5. :white_check_mark: Actualice la plantilla

## Próximo Paso

- [Usar Plantilla](usar.md) - Cargue y use una plantilla existente
