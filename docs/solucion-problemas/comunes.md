---
title: Problemas Comunes de xls2sage50
date: 2026-01-07
keywords:
  - problemas comunes xls2sage50
  - errores frecuentes
  - solucionar errores
  - troubleshooting basico
aliases:
  - solucion-problemas/comunes.html
description: Lista de problemas comunes al usar xls2sage50 y sus soluciones. Errores frecuentes de instalación, configuración y uso.
status: published
---

# Problemas Comunes

Esta sección lista los problemas más frecuentes que encuentran los usuarios de xls2sage50 y sus soluciones.

## Problemas de Instalación

### La aplicación no se inicia

!!! error "xls2sage50 no se inicia al hacer doble clic"

    **Síntomas:**
    - No ocurre nada al hacer clic en el icono
    - Aparece un error brevemente y se cierra

    **Soluciones:**
    1. Verifique que tiene Python 3.12+ instalado
    2. Ejecute como administrador
    3. Deshabilite temporalmente el antivirus
    4. Reinstale la aplicación

### Error de dependencias faltantes

!!! error "ModuleNotFoundError: No module named 'flet'"

    **Síntomas:**
    - Error al iniciar indicando módulos faltantes
    - La aplicación no carga completamente

    **Soluciones:**
    ```bash
    # Reinstalar dependencias
    pip install -r requirements.txt

    # O actualizar pip e instalar
    python -m pip install --upgrade pip
    pip install -r requirements.txt
    ```

### Error de permisos

!!! error "Access denied" o "Permission denied"

    **Síntomas:**
    - No se puede instalar en Program Files
    - No se puede escribir en archivos de configuración

    **Soluciones:**
    1. Ejecute el instalador como administrador
    2. O instale en una carpeta de usuario (Documentos)

## Problemas de Archivos Excel

### El archivo Excel no se puede leer

!!! error "No se puede leer el archivo Excel"

    **Síntomas:**
    - Error al cargar el archivo
    - Las hojas no se muestran

    **Soluciones:**
    1. Verifique que el archivo no está abierto en Excel
    2. Asegúrese de que el formato es .xlsx o .xls
    3. Abra el archivo en Excel y guárdelo de nuevo
    4. Verifique que el archivo no está corrupto

### Las columnas no se detectan correctamente

!!! error "Las columnas no coinciden con la plantilla"

    **Síntomas:**
    - El mapeo automático no funciona
    - Columnas sin mapear

    **Soluciones:**
    1. Verifique que la primera fila contiene encabezados
    2. Use nombres de columnas sin espacios ni caracteres especiales
    3. Configure el mapeo manualmente
    4. Cree una nueva plantilla con el formato correcto

### Caracteres especiales incorrectos

!!! error "Caracteres raros como , , , ?"

    **Síntomas:**
    - Vocales acentuadas o ñ se muestran incorrectamente
    - Caracteres de otros idiomas no aparecen

    **Soluciones:**
    1. Configure la codificación como UTF-8
    2. Use UTF-8 con BOM para máxima compatibilidad
    3. Verifique que el archivo Excel está guardado en UTF-8

## Problemas de Conexión

### No se puede conectar con SAGE 50

!!! error "Error de conexión con SAGE 50 API"

    **Síntomas:**
    - Timeout al intentar conectar
    - Mensaje de "Conexión rechazada"

    **Soluciones:**
    1. Verifique que SAGE 50 está instalado
    2. Habilite el módulo API en SAGE 50
    3. Configure el firewall para permitir la conexión
    4. Verifique que el puerto 16500 no está bloqueado
    5. Reinicie SAGE 50 y xls2sage50

### Conexión intermitente

!!! error "La conexión se pierde durante la importación"

    **Síntomas:**
    - La importación comienza pero falla a mitad
    - Errores de timeout aleatorios

    **Soluciones:**
    1. Reduzca el tamaño de lote
    2. Aumente el valor de timeout
    3. Verifique la estabilidad de la red
    4. Cierre otras aplicaciones que usen SAGE 50

## Problemas de Importación

### Errores de validación

!!! error "Error de validación: Campo obligatorio vacío"

    **Síntomas:**
    - Registros rechazados por validación
    - Campos marcados como obligatorios faltantes

    **Soluciones:**
    1. Verifique que todos los campos obligatorios tienen datos
    2. Revise el formato de los datos (NIF, códigos postales)
    3. Use la vista previa antes de importar
    4. Corrija los datos en el archivo Excel

### Errores de duplicados

!!! error "Violación de clave primaria: El código ya existe"

    **Síntomas:**
    - Registros rechazados por código duplicado
    - Intento de insertar registros ya existentes

    **Soluciones:**
    1. Use el modo "Actualizar existentes" en lugar de "Insertar"
    2. O filtre el archivo para eliminar duplicados
    3. O use "Omitir duplicados" en las opciones

### Importación muy lenta

!!! warning "La importación tarda demasiado"

    **Síntomas:**
    - Miles de registros tardan horas
    - La aplicación parece colgada

    **Soluciones:**
    1. Aumente el tamaño de lote
    2. Deshabilite validaciones no necesarias
    3. Impórtate en horarios de menor actividad
    4. Verifique que el equipo cumple los requisitos mínimos

## Problemas de Memoria

### Error de memoria insuficiente

!!! error "MemoryError" o aplicación se cierra inesperadamente"

    **Síntomas:**
    - La aplicación se cierra con archivos grandes
    - Mensaje de memoria insuficiente

    **Soluciones:**
    1. Divida el archivo en partes más pequeñas
    2. Cierre otras aplicaciones
    3. Aumente la memoria RAM del equipo
    4. Use el modo CSV (usa menos memoria)

### Archivo muy grande no se procesa

!!! warning "Archivos > 10MB se procesan lentamente"

    **Soluciones:**
    1. Divida el archivo en varios de 5000 registros
    2. Impórtelos secuencialmente
    3. Elimine filas vacías o columnas no usadas

## Problemas de Plantillas

### No se puede guardar una plantilla

!!! error "Error al guardar la plantilla"

    **Síntomas:**
    - No se guarda la configuración
    - Error de escritura

    **Soluciones:**
    1. Verifique permisos en la carpeta de plantillas
    2. Asegúrese de que hay espacio en disco
    3. Use un nombre sin caracteres especiales
    4. Verifique que no existe otra plantilla con el mismo nombre

### La plantilla no funciona con otro archivo

!!! error "Error al usar la plantilla con archivo diferente"

    **Síntomas:**
    - Columnas no encontradas
    - Mapeo incorrecto

    **Soluciones:**
    1. Verifique que el nuevo archivo tiene las mismas columnas
    2. Los nombres de columnas deben ser idénticos
    3. Use el mapeo inteligente para adaptar
    4. O cree una nueva plantilla para el nuevo formato

## Obtener Más Ayuda

Si después de intentar estas soluciones el problema persiste:

1. **Revisar los logs:**
   ```
   %USERPROFILE%\Documents\xls2sage50\logs\xls2sage50.log
   ```

2. **Ejecutar el diagnóstico:**
   - Abra xls2sage50
   - Vaya a **Ayuda** > **Diagnóstico**
   - Exporte el informe

3. **Contactar soporte:**
   - Tenga a mano el número de versión
   - Adjunte los logs y el informe de diagnóstico
   - Describa el problema con detalle

!!! question "¿Problema no Listado?**

    Consulte las secciones específicas:
    - [Errores de Conexión](errores-conexion.md) - Problemas con SAGE 50 API
    - [Errores de Importación](errores-importacion.md) - Problemas durante la importación
    - [Contacto y Soporte](soporte.md) - Cómo obtener ayuda técnica
