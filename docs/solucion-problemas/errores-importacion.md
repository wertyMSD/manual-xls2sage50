---
title: Errores de Importación en xls2sage50
date: 2026-01-07
keywords:
  - errores importacion sage 50
  - fallos al importar
  - problemas mapeo
  - validacion datos
aliases:
  - solucion-problemas/errores-importacion.html
description: Solución de errores comunes durante la importación de datos con xls2sage50: mapeo, validación, duplicados y más.
status: published
---

# Errores de Importación

Esta sección describe los errores más comunes que ocurren durante el proceso de importación y sus soluciones.

## Tipos de Errores

Los errores de importación se clasifican en:

| Tipo | Descripción | Ejemplo |
|------|-------------|---------|
| **Estructurales** | Problemas con el archivo Excel | Columnas faltantes |
| **De mapeo** | Problemas con la relación de campos | Campo no reconocido |
| **De validación** | Datos que no cumplen las reglas | NIF inválido |
| **De negocio** | Errores de lógica de SAGE 50 | Código duplicado |
| **De conexión** | Problemas con SAGE 50 API | Pérdida de conexión |

## Errores Estructurales

### El archivo no se puede leer

!!! error "No se puede leer el archivo Excel"

    **Síntomas:**
    - Error al cargar el archivo
    - "El formato del archivo no es compatible"

    **Soluciones:**
    1. Verifique que el archivo no está abierto en Excel
    2. Asegúrese de que es un archivo .xlsx o .xls válido
    3. Abra el archivo en Excel y guárdelo de nuevo
    4. Intente exportar a CSV y usar ese archivo

### No se detectan columnas

!!! error "No se encontraron columnas en el archivo"

    **Síntomas:**
    - La lista de columnas está vacía
    - "No se puede detectar la estructura del archivo"

    **Soluciones:**
    1. Verifique que la primera fila contiene encabezados
    2. No deje filas vacías al principio del archivo
    3. Los nombres de columnas deben ser descriptivos
    4. Evite celdas combinadas en la fila de encabezados

### El archivo está vacío

!!! error "El archivo no contiene datos"

    **Síntomas:**
    - El archivo tiene encabezados pero no datos
    - "0 registros encontrados"

    **Soluciones:**
    1. Verifique que hay filas de datos después de los encabezados
    2. Elimine filas vacías al final del archivo
    3. Asegúrese de que los datos están en la primera hoja

## Errores de Mapeo

### Campo no reconocido

!!! error "Campo de SAGE 50 no reconocido"

    **Síntomas:**
    - Un campo no aparece en la lista de mapeo
    - "Campo XYZ no existe en SAGE 50"

    **Soluciones:**
    1. Verifique el nombre exacto del campo en SAGE 50
    2. Los nombres suelen diferenciar mayúsculas/minúsculas
    3. Use el mapeo manual para asignar el campo correcto
    4. Consulte la documentación de SAGE 50 para nombres correctos

### Columna sin mapear

!!! error "Columna Excel no está mapeada"

    **Síntomas:**
    - Una columna de Excel no tiene campo asociado
    - Advertencia durante la importación

    **Soluciones:**
    1. Complete el mapeo de la columna
    2. O seleccione "Ignorar" si no necesita esa columna
    3. Si es obligatoria, debe mapearse

### Conflicto de tipos

!!! error "Tipo de dato incompatible"

    **Síntomas:**
    - "El tipo de dato de Excel no es compatible con SAGE 50"
    - Intento de meter texto en campo numérico

    **Soluciones:**
    1. Verifique los tipos de datos en Excel
    2. Use transformaciones para convertir tipos
    3. Asegúrese de que los números no tengan texto
    4. Las fechas deben estar en formato válido

## Errores de Validación

### Formato de NIF incorrecto

!!! error "NIF con formato inválido"

    **Síntomas:**
    - "Formato de NIF incorrecto"
    - "NIF no válido: A1234567"

    **Soluciones:**
    1. El NIF debe tener 8 dígitos + letra (DNI)
    2. O 7 dígitos + letra (CIF/NIE)
    3. La letra de validación debe ser correcta
    4. Sin espacios ni guiones

    **Formatos válidos:**
    ```
    DNI: 12345678A
    CIF: B12345678
    NIE: X1234567A
    ```

### Código postal inválido

!!! error "Código postal no válido"

    **Síntomas:**
    - "El código postal debe tener 5 dígitos"
    - "CP inválido para la provincia"

    **Soluciones:**
    1. El CP español tiene exactamente 5 dígitos
    2. Los dos primeros dígitos indican la provincia (01-52)
    3. Sin letras ni caracteres especiales

### Teléfono con formato incorrecto

!!! error "Formato de teléfono incorrecto"

    **Síntomas:**
    - "El teléfono debe tener 9 dígitos"
    - "Caracteres no permitidos en teléfono"

    **Soluciones:**
    1. Solo dígitos (9 dígitos para España)
    2. Prefijo internacional opcional: +34 912345678
    3. Sin espacios ni guiones: 912345678

## Errores de Negocio

### Código duplicado

!!! error "Violación de clave primaria: Código duplicado"

    **Síntomas:**
    - "El código ya existe en SAGE 50"
    - "No se puede insertar: clave duplicada"

    **Soluciones:**
    1. Use el modo "Actualizar existentes"
    2. O use "Omitir duplicados"
    3. O filtre el Excel para eliminar duplicados antes de importar

### Referencia inexistente

!!! error "Violación de clave externa"

    **Síntomas:**
    - "La familia de artículos no existe"
    - "La provincia no está definida"

    **Soluciones:**
    1. Verifique que las referencias existen en SAGE 50
    2. Importe primero los datos maestros
    3. O desmarque la validación de referencias

### Saldo incorrecto

!!! error "El asiento no cuadra"

    **Síntomas:**
    - "El debe y el haber no coinciden"
    - "El asiento descuadra: 0.01 euros"

    **Soluciones:**
    1. Verifique que la suma del debe = suma del haber
    2. Los decimales pueden causar pequeños errores
    3. Use redondeo a 2 decimales en Excel
    4. Revise las fórmulas del Excel

## Errores de Conexión

### Pérdida de conexión durante importación

!!! error "Conexión perdida durante la importación"

    **Síntomas:**
    - La importación comienza pero falla a mitad
    - "Conexión con SAGE 50 perdida"

    **Soluciones:**
    1. Reduzca el tamaño de lote
    2. Aumente el timeout
    3. Cierre otras aplicaciones que usen SAGE 50
    4. Verifique la estabilidad de red

### Timeout en importación grande

!!! error "Timeout al importar muchos registros"

    **Síntomas:**
    - Archivos con muchos registros fallan
    - "Tiempo de espera agotado"

    **Soluciones:**
    1. Divida el archivo en varios más pequeños
    2. Aumente `API_TIMEOUT` en config.ini
    3. Reduzca `CHUNK_SIZE` para lotes más pequeños

## Solución de Problemas Comunes

### Importación muy lenta

Si la importación es muy lenta:

1. **Verifique el tamaño de lote:**
   ```ini
   [PERFORMANCE]
   CHUNK_SIZE = 500  # Aumentar para más velocidad
   ```

2. **Deshabilite validaciones no necesarias:**
   ```ini
   [VALIDATION]
   VALIDATE_NIF = false  # Si no necesita validar NIF
   ```

3. **Use el modo API** si usa CSV (es más rápido)

### Importación se queda "colgada"

Si la importación parece colgada:

1. Verifique que hay progreso en la barra de progreso
2. Revise el log para ver si hay errores
3. Puede ser un timeout largo, espere un poco más
4. Si después de 10 minutos no hay progreso, cancele

## Recuperación de Errores

### Reintentar Registros con Error

Para reintentar solo los registros que fallaron:

1. En el reporte de errores, exporte las filas con error
2. Se genera un archivo Excel solo con esos registros
3. Corrija los datos en ese archivo
4. Importe ese archivo nuevamente

### Importación por Lotes

Para grandes importaciones con errores:

1. Divida el archivo en lotes de 1000 registros
2. Impórtelos uno a uno
3. Si un lote falla, continúe con el siguiente
4. Corrija los lotes fallidos después

## Próximo Paso

- [Contacto y Soporte](soporte.md) - Obtener ayuda del equipo técnico

!!! tip "Exporte el Informe de Errores**

    Siempre exporte el informe de errores al tener problemas. Incluye información detallada que ayuda a resolver el problema.
