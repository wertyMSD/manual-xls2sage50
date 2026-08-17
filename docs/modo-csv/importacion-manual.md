---
title: Importación Manual en SAGE 50
date: 2026-01-07
keywords:
  - importar csv sage 50
  - asistente importacion sage 50
  - importar archivos manualmente
  - sage 50 importar datos
aliases:
  - modo-csv/importacion-manual.html
description: Guía paso a paso para importar archivos CSV generados por xls2sage50 en SAGE 50 usando el asistente de importación.
status: published
---

# Importación Manual en SAGE 50

Después de generar los archivos CSV con xls2sage50, el siguiente paso es importarlos manualmente en SAGE 50.

## Antes de Comenzar

### Requisitos

- [ ] Archivo CSV generado por xls2sage50
- [ ] SAGE 50 instalado y configurado
- [ ] Permisos para importar datos en SAGE 50
- [ ] Copia de seguridad de la base de datos (recomendado)

!!! warning "Realice una Copia de Seguridad**

    Antes de importar datos, realice siempre una copia de seguridad de la base de datos de SAGE 50.

## Pasos Previos en SAGE 50

### Paso 1: Abrir SAGE 50

1. Inicie SAGE 50
2. Inicie sesión con su usuario
3. Cierre cualquier ventana de edición abierta

### Paso 2: Copia de Seguridad

1. Vaya a **Archivo** > **Copia de Seguridad**
2. Seleccione la ubicación y nombre del archivo
3. Haga clic en **"Guardar"**
4. Espere a que finalice la copia

![Copia de seguridad SAGE 50](img:importacion-manual-backup.png)

## Importación de Archivos CSV

### Paso 1: Abrir el Asistente de Importación

1. Vaya al módulo donde importará (por ejemplo, **Clientes**)
2. Seleccione **Archivo** > **Importar** > **Asistente de Importación**

![Asistente de importación](img:importacion-manual-asistente.png)

### Paso 2: Seleccionar el Archivo

1. Haga clic en **"Examinar"**
2. Busque el archivo CSV generado por xls2sage50
3. Seleccione el archivo
4. Haga clic en **"Siguiente"**

!!! tip "Ubicación del Archivo**

    Los archivos CSV se generan en `%USERPROFILE%\Documents\xls2sage50\csv\` por defecto.

### Paso 3: Configurar el Formato del Archivo

Configure las opciones del archivo CSV:

| Opción | Valor Correcto |
|--------|----------------|
| **Separador de campo** | Punto y coma (;) |
| **Separador de texto** | Comilla doble (") |
| **Codificación** | UTF-8 |
| **Fila inicial** | 2 (fila 1 = encabezados) |
| **Tiene encabezados** | Sí |

![Configurar formato](img:importacion-manual-formato.png)

### Paso 4: Mapear los Campos

El asistente mostrará los campos del archivo CSV:

1. Seleccione cada campo del archivo CSV
2. Seleccione el campo correspondiente de SAGE 50
3. Haga clic en **"Asignar"**
4. Repita para todos los campos

![Mapeo de campos](img:importacion-manual-mapeo.png)

### Mapeo de Clientes

| Campo CSV | Campo SAGE 50 |
|-----------|---------------|
| CodigoCliente | Código |
| NombreCliente | Razón Social |
| NIF | NIF/CIF |
| Direccion | Dirección |
| Poblacion | Población |
| Provincia | Provincia |
| CodigoPostal | Código Postal |
| Telefono1 | Teléfono 1 |
| Email | E-mail |

### Paso 5: Configurar Opciones de Importación

Configure las opciones avanzadas:

| Opción | Recomendación | Descripción |
|--------|---------------|-------------|
| **Insertar nuevos** | Sí | Crear registros que no existen |
| **Actualizar existentes** | Según necesidad | Modificar registros existentes |
| **Validar NIF** | Sí | Verificar formato del NIF |
| **Detener ante errores** | No | Continuar aunque haya errores |
| **Crear log** | Sí | Generar archivo de registro |

### Paso 6: Vista Previa

Revise los datos antes de importar:

1. El asistente muestra los primeros registros
2. Verifique que los campos están correctos
3. Verifique los formatos (fechas, números)
4. Haga clic en **"Siguiente"**

!!! warning "Revise Siempre la Vista Previa**

    La vista previa le permite detectar problemas antes de la importación final.

### Paso 7: Importar

1. Haga clic en **"Importar"**
2. Espere a que finalice el proceso
3. Revise el resumen de resultados

![Resultados de importación](img:importacion-manual-resultados.png)

## Verificar la Importación

### Paso 1: Buscar un Registro Importado

1. En SAGE 50, vaya al módulo correspondiente
2. Use el buscador
3. Ingrese el código de un registro importado
4. Verifique que todos los datos son correctos

### Paso 2: Verificar la Cantidad

1. Genere un listado en SAGE 50
2. Cuente la cantidad de registros
3. Verifique que coincide con el archivo CSV

### Paso 3: Revisar el Log de Importación

Si habilitó el log:

1. Abra el archivo de registro
2. Revise los errores y advertencias
3. Corrija los problemas si es necesario

## Solución de Problemas

### Problema: El archivo no aparece

!!! error "No se puede leer el archivo"

    **Causas posibles:**
    - El archivo está abierto en otra aplicación
    - La codificación no es correcta
    - El separador no coincide

    **Solución:**
    1. Cierre el archivo en Excel o editor de texto
    2. Verifique que la codificación es UTF-8
    3. Confirme que el separador es punto y coma

### Problema: Caracteres incorrectos

!!! error "Caracteres raros (, , )"

    **Causa:** El archivo no está en UTF-8

    **Solución:**
    1. Abra el archivo en un editor de texto (Notepad++)
    2. Convierta a UTF-8 con BOM
    3. Guarde y cierre
    4. Reimporte en SAGE 50

### Problema: Fechas incorrectas

!!! error "Las fechas no se importan correctamente"

    **Causa:** El formato de fecha no coincide

    **Solución:**
    1. Revise el formato de fecha en el archivo CSV
    2. Configure SAGE 50 para usar el mismo formato
    3. O reformatee las fechas en el archivo

### Problema: Campos no mapeados

!!! error "Algunos campos no se importan"

    **Causa:** El mapeo no está completo

    **Solución:**
    1. Vuelva a ejecutar el asistente
    2. Verifique que todos los campos están mapeados
    3. Asegúrese de que los nombres coinciden

## Importación Masiva

Para grandes cantidades de datos:

### Dividir en Lotes

Si el archivo es muy grande:

1. Divida el archivo CSV en varios más pequeños
2. Impórtelos uno a uno
3. Verifique cada lote antes de continuar

!!! tip "Lotes de 1000 Registros**

    Para archivos con más de 1000 registros, divídalos en lotes para facilitar la detección de errores.

### Automatización con Macros

SAGE 50 permite automatizar importaciones mediante macros:

```basic
' Ejemplo de macro para importar clientes
Sub ImportarClientes()
    Dim fso As Object
    Set fso = CreateObject("Scripting.FileSystemObject")
    Dim archivo As String
    archivo = "C:\xls2sage50\csv\clientes.csv"

    If fso.FileExists(archivo) Then
        ' Ejecutar importación
        Sage50.ImportarArchivo archivo, "Clientes"
    End If
End Sub
```

## Checklist Post-Importación

Después de importar:

- [ ] Verificar que todos los registros se importaron
- [ ] Buscar algunos registros al azar
- [ ] Verificar los datos de los registros
- [ ] Revisar el log de errores
- [ ] Realizar una copia de seguridad post-importación
- [ ] Notificar a los usuarios del cambio

## Próximo Paso

- [Plantillas](../plantillas/index.md) - Aprenda a guardar configuraciones para reutilizar

!!! question "¿Problemas con la Importación?**

    Consulte [Solución de Problemas](../../solucion-problemas/errores-importacion.md) para más ayuda.
