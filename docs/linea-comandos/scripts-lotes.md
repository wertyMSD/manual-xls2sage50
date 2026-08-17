---
title: Scripts por Lotes de xls2sage50
date: 2026-01-07
keywords:
  - scripts batch xls2sage50
  - ejemplos scripts
  - automatizacion procesos
  - casos practicos scripts
aliases:
  - linea-comandos/scripts-lotes.html
description: Ejemplos prácticos de scripts por lotes para automatizar procesos con xls2sage50.
status: published
---

# Scripts por Lotes

Esta sección contiene ejemplos prácticos de scripts por lotes para automatizar procesos con xls2sage50.

## Scripts por Categoría

### Importación de Clientes

#### Importación Diaria

```batch
@echo off
REM ============================================================================
REM Importación Diaria de Clientes
REM Importa automáticamente los clientes nuevos todos los días
REM ============================================================================

setlocal

REM Configuración
set PLANTILLA=Clientes_Mensual
set DIRECTORIO_DATOS=C:\Datos\Importaciones\Clientes
set DIRECTORIO_LOGS=C:\Logs\Importaciones
set DIRECTORIO_PROCESADOS=C:\Datos\Procesados

REM Crear directorios si no existen
if not exist "%DIRECTORIO_LOGS%" mkdir "%DIRECTORIO_LOGS%"
if not exist "%DIRECTORIO_PROCESADOS%" mkdir "%DIRECTORIO_PROCESADOS%"

REM Fecha actual para nombres de archivo
set FECHA=%date:~-4,4%%date:~-7,2%%date:~-10,2%

REM Buscar archivo más reciente
pushd "%DIRECTORIO_DATOS%"
for /f "delims=" %%A in ('dir /b /o-d *.xlsx') do (
    set ARCHIVO=%%A
    goto :encontrado
)

:encontrado
popd

if "%ARCHIVO%"=="" (
    echo [%date% %time%] ERROR: No se encontraron archivos en %DIRECTORIO_DATOS% >> "%DIRECTORIO_LOGS%\clientes_%FECHA%.log"
    exit /b 1
)

REM Ejecutar importación
echo [%date% %time%] Iniciando importación de %ARCHIVO% >> "%DIRECTORIO_LOGS%\clientes_%FECHA%.log"

python xls2sage50.py run --template=%PLANTILLA% --file="%DIRECTORIO_DATOS%\%ARCHIVO%" >> "%DIRECTORIO_LOGS%\clientes_%FECHA%.log" 2>&1

REM Verificar resultado
if %ERRORLEVEL% EQU 0 (
    echo [%date% %time%] Importación exitosa >> "%DIRECTORIO_LOGS%\clientes_%FECHA%.log"
    move "%DIRECTORIO_DATOS%\%ARCHIVO%" "%DIRECTORIO_PROCESADOS%\%ARCHIVO%.%FECHA%"
    exit /b 0
) else (
    echo [%date% %time%] ERROR: Importación falló (código %ERRORLEVEL%) >> "%DIRECTORIO_LOGS%\clientes_%FECHA%.log"
    exit /b %ERRORLEVEL%
)

endlocal
```

#### Importación con Validación

```batch
@echo off
REM ============================================================================
REM Importación de Clientes con Validación Previa
REM ============================================================================

setlocal

set PLANTILLA=Clientes_Mensual
set ARCHIVO=%1

if "%ARCHIVO%"=="" (
    echo Uso: %~nx0 archivo.xlsx
    exit /b 1
)

REM Validar archivo
if not exist "%ARCHIVO%" (
    echo ERROR: El archivo no existe: %ARCHIVO%
    exit /b 1
)

REM Validar plantilla
python xls2sage50.py validate --template=%PLANTILLA% --file="%ARCHIVO%"
if %ERRORLEVEL% NEQ 0 (
    echo ERROR: Validación falló. Revise el archivo.
    exit /b 1
)

REM Importar
python xls2sage50.py run --template=%PLANTILLA% --file="%ARCHIVO%" --verbose

endlocal
```

### Importación de Artículos

#### Actualización de Precios

```batch
@echo off
REM ============================================================================
REM Actualización Masiva de Precios de Artículos
REM ============================================================================

setlocal

set PLANTILLA=Articulos_Precios
set ARCHIVO=%~1

if "%ARCHIVO%"=="" (
    echo Uso: %~nx0 archivo_precios.xlsx
    exit /b 1
)

echo Actualizando precios desde %ARCHIVO%...
echo.

REM Vista previa de cambios
python xls2sage50.py run --template=%PLANTILLA% --file="%ARCHIVO%" --dry-run

echo.
set /p CONTINUAR=¿Desea continuar con la importación? (S/N):
if /i not "%CONTINUAR%"=="S" exit /b 0

REM Importación
python xls2sage50.py run --template=%PLANTILLA% --file="%ARCHIVO%"

if %ERRORLEVEL% EQU 0 (
    echo.
    echo Precios actualizados correctamente.

    REM Generar reporte
    python xls2sage50.py info --template=%PLANTILLA% --json > reporte_precios.json
    echo Reporte guardado en reporte_precios.json
) else (
    echo.
    echo ERROR: La actualización falló.
)

endlocal
```

#### Actualización de Stock

```batch
@echo off
REM ============================================================================
REM Actualización de Stock de Artículos
REM ============================================================================

setlocal

set PLANTILLA=Articulos_Stock
set DIRECTORIO=C:\Datos\Stock

REM Procesar todos los archivos Excel del directorio
for %%F in ("%DIRECTORIO%\*.xlsx") do (
    echo Procesando: %%~nxF

    python xls2sage50.py run --template=%PLANTILLA% --file="%%F"

    if %ERRORLEVEL% EQU 0 (
        echo OK: %%~nxF >> "%DIRECTORIO%\procesados.log"
        move "%%F" "%DIRECTORIO%\Procesados\"
    ) else (
        echo ERROR: %%~nxF >> "%DIRECTORIO%\errores.log"
    )
)

endlocal
```

### Importación de Asientos

#### Asientos Contables

```batch
@echo off
REM ============================================================================
REM Importación de Asientos Contables
REM ============================================================================

setlocal

set PLANTILLA=Asientos_Contables
set ARCHIVO=%~1

if "%ARCHIVO%"=="" (
    echo Uso: %~nx0 asientos.xlsx [ejercicio]
    exit /b 1
)

set EJERCICIO=%~2

if "%EJERCICIO%"=="" set EJERCICIO=2024

echo Importando asientos al ejercicio %EJERCICIO%...
python xls2sage50.py run --template=%PLANTILLA% --file="%ARCHIVO%"

if %ERRORLEVEL% EQU 0 (
    echo.
    echo Asientos importados correctamente.

    REM Generar libro diario
    python xls2sage50.py run --template=Libro_Diario --file="%ARCHIVO%"
) else (
    echo ERROR: La importación falló.
)

endlocal
```

### Múltiples Importaciones

#### Importación en Cascada

```batch
@echo off
REM ============================================================================
REM Importación en Cascada (Múltiples Entidades)
REM ============================================================================

setlocal

set DIRECTORIO_DATOS=C:\Datos\Importaciones
set FECHA=%date:~-4,4%%date:~-7,2%%date:~-10,2%
set LOG_FILE=C:\Logs\cascada_%FECHA%.log

echo [%date% %time%] Iniciando importación en cascada > %LOG_FILE%

REM Lista de importaciones en orden
set IMPORTACIONES=^
    Clientes_Mensual:clientes.xlsx^
    Proveedores_Mensual:proveedores.xlsx^
    Articulos_Precios:articulos.xlsx

REM Procesar cada importación
for %%I in (%IMPORTACIONES%) do (
    for /f "tokens=1,2 delims=:" %%a in ("%%I") do (
        set PLANTILLA=%%a
        set ARCHIVO=%%b

        echo [%date% %time%] Importando: !PLANTILLA! >> %LOG_FILE%

        python xls2sage50.py run --template=!PLANTILLA! --file="%DIRECTORIO_DATOS%\!ARCHIVO!" >> %LOG_FILE% 2>&1

        if !ERRORLEVEL! EQU 0 (
            echo [%date% %time%] OK: !PLANTILLA! >> %LOG_FILE%
        ) else (
            echo [%date% %time%] ERROR: !PLANTILLA! >> %LOG_FILE%
            REM Continuar con la siguiente importación
        )
    )
)

echo [%date% %time%] Importación en cascada finalizada >> %LOG_FILE%

endlocal
```

### Mantenimiento

#### Limpieza de Archivos Temporales

```batch
@echo off
REM ============================================================================
REM Limpieza de Archivos Temporales y Logs Antiguos
REM ============================================================================

setlocal

REM Directorios a limpiar
set DIR_TEMP=%USERPROFILE%\Documents\xls2sage50\procesos\uploads
set DIR_LOGS=%USERPROFILE%\Documents\xls2sage50\logs
set DIR_CSV=%USERPROFILE%\Documents\xls2sage50\csv

REM Días a retener
set DIAS_RETENER=30

REM Calcular fecha límite
powershell -command "$fecha = (Get-Date).AddDays(-%DIAS_RETENER%); Write-Output $fecha.ToString('yyyyMMdd-HHmmss')" > temp.txt
set /p FECHA_LIMITE=<temp.txt
del temp.txt

echo Limpiando archivos anteriores a %FECHA_LIMITE%...

REM Limpiar uploads (archivos más antiguos de 7 días)
forfiles /P "%DIR_TEMP%" /M *.* /D -7 /C "cmd /c echo Eliminando @path... & del @path" 2>nul

REM Limpiar logs antiguos
forfiles /P "%DIR_LOGS%" /M *.log /D -%DIAS_RETENER% /C "cmd /c echo Eliminando @path... & del @path" 2>nul

REM Limpiar CSV antiguos
forfiles /P "%DIR_CSV%" /M *.csv /D -%DIAS_RETENER% /C "cmd /c echo Eliminando @path... & del @path" 2>nul

echo Limpieza completada.

endlocal
```

#### Copia de Seguridad de Plantillas

```batch
@echo off
REM ============================================================================
REM Copia de Seguridad de Plantillas
REM ============================================================================

setlocal

set DIR_PLANTILLAS=%USERPROFILE%\Documents\xls2sage50\plantillas
set DIR_BACKUP=%USERPROFILE%\Documents\xls2sage50\backups\plantillas
set FECHA=%date:~-4,4%%date:~-7,2%%date:~-10,2%

REM Crear directorio de backup
if not exist "%DIR_BACKUP%" mkdir "%DIR_BACKUP%"

REM Copiar plantillas
echo Copiando plantillas a backup...
xcopy "%DIR_PLANTILLAS%\*.PREDEFINIDO" "%DIR_BACKUP%\%FECHA%\" /Y /I

echo Backup completado en: %DIR_BACKUP%\%FECHA%

endlocal
```

### Monitoreo

#### Verificación de Importaciones

```batch
@echo off
REM ============================================================================
REM Verificación de Importaciones del Día
REM ============================================================================

setlocal

set DIR_LOGS=C:\Logs\Importaciones
set FECHA_HOY=%date:~-4,4%%date:~-7,2%%date:~-10,2%

echo Verificando importaciones del %FECHA_HOY%...
echo.

REM Buscar logs del día
if exist "%DIR_LOGS%\*%FECHA_HOY%.log" (
    for %%F in ("%DIR_LOGS%\*%FECHA_HOY%.log") do (
        echo.
        echo Archivo: %%~nxF
        echo ----------------------------------------
        type "%%F"
        echo ----------------------------------------
    )
) else (
    echo No se encontraron logs de hoy.
)

REM Contar importaciones exitosas y fallidas
set EXITOSOS=0
set FALLIDOS=0

for %%F in ("%DIR_LOGS%\*%FECHA_HOY%.log") do (
    findstr /C:"Importacion exitosa" "%%F" >nul
    if %ERRORLEVEL% EQU 0 set /a EXITOSOS+=1

    findstr /C:"ERROR" "%%F" >nul
    if %ERRORLEVEL% EQU 0 set /a FALLIDOS+=1
)

echo.
echo Resumen del día:
echo   Exitosos: %EXITOSOS%
echo   Fallidos: %FALLIDOS%

endlocal
```

#### Alerta de Errores

```batch
@echo off
REM ============================================================================
REVISA LOGS EN BUSCA DE ERRORES Y ENVÍA ALERTA
REM ============================================================================

setlocal

set DIR_LOGS=C:\Logs\Importaciones
set FECHA_HOY=%date:~-4,4%%date:~-7,2%%date:~-10,2%
set EMAIL=admin@empresa.com

set HAY_ERRORES=0

REM Buscar errores en logs de hoy
for %%F in ("%DIR_LOGS%\*%FECHA_HOY%.log") do (
    findstr /C:"ERROR" "%%F" >nul
    if !ERRORLEVEL! EQU 0 (
        set HAY_ERRORES=1
        echo ERROR encontrado en: %%~nxF >> errores_temp.txt
        type "%%F" >> errores_temp.txt
        echo. >> errores_temp.txt
    )
)

REM Si hay errores, enviar alerta
if %HAY_ERRORES% EQU 1 (
    echo Enviando alerta de errores...

    REM Usar blat o similar para enviar email
    blat errores_temp.txt -to %EMAIL% -subject "ALERTA: Errores en importaciones" -priority 1

    del errores_temp.txt
) else (
    echo No se encontraron errores hoy.
)

endlocal
```

!!! tip "Requiere Blat**

    Para enviar emails desde scripts batch, necesita [Blat](https://www.blat.net/), una herramienta de línea de comandos para enviar emails.

## Próximo Paso

- [Automatización](automatizacion.md) - Configurar tareas programadas
