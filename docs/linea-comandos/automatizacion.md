---
title: Automatización con CLI
date: 2026-01-07
keywords:
  - automatizar xls2sage50
  - tareas programadas
  - scripts batch
  - automatizacion windows
aliases:
  - linea-comandos/automatizacion.html
description: Aprenda a automatizar xls2sage50 con tareas programadas de Windows, scripts por lotes y integración con otros sistemas.
status: published
---

# Automatización

Esta guía le enseña a automatizar xls2sage50 usando tareas programadas y scripts.

## Tareas Programadas de Windows

### Crear una Tarea Básica

1. Abra el **Programador de Tareas** (Task Scheduler)
   - Presione `Windows + R`
   - Escriba `taskschd.msc`
   - Presione Enter

2. Haga clic en **"Crear tarea básica"**

3. Configure la tarea:

   **Pestaña - General:**
   - Nombre: `Importación Clientes Diaria`
   - Descripción: `Importa clientes automáticamente todos los días`
   - Ejecutar tanto si el usuario inició sesión como si no

   **Pestaña - Desencadenadores:**
   - Nuevo: **Diariamente**
   - Hora: **02:00:00 AM**

   **Pestaña - Acciones:**
   - Acción: **Iniciar un programa**
   - Programa: `python`
   - Argumentos: `"C:\ruta\a\xls2sage50.py" run --template=Clientes_Mensual --file="C:\datos\clientes.xlsx"`
   - Iniciar en: `C:\ruta\a\`

4. Haga clic en **"Finalizar"**

### Crear una Tarea Avanzada

Para configuraciones más avanzadas:

1. Abra el **Programador de Tareas**
2. Haga clic en **"Crear tarea"** (no básica)
3. Configure las pestañas:

| Pestaña | Configuración |
|---------|--------------|
| **General** | Nombre, descripción, usuario de ejecución |
| **Desencadenadores** | Cuándo ejecutar (diario, semanal, al inicio) |
| **Acciones** | Qué programa ejecutar con parámetros |
| **Condiciones** | Solo si está conectado a red, si inactivo |
| **Configuración** | Opciones de manejo de fallos |

!!! tip "Condiciones de Ejecución**

    Configure condiciones como "Ejecutar solo si el equipo está inactivo durante X minutos" para no interferir con el trabajo del usuario.

## Scripts por Lotes (Batch)

### Script Básico

```batch
@echo off
REM ============================================================================
REM Importación de Clientes - Script Básico
REM ============================================================================

setlocal

REM Configuración
set APP_PATH=C:\xls2sage50
set PYTHON_EXE=python
set TEMPLATE=Clientes_Mensual
set INPUT_FILE=C:\Datos\clientes_%date:~-4,4%%date:~-7,2%%date:~-10,2%.xlsx
set LOG_FILE=C:\Logs\importacion_%date:~-4,4%%date:~-7,2%%date:~-10,2%.log

REM Ejecutar importación
echo [%date% %time%] Iniciando importación... >> %LOG_FILE%

"%PYTHON_EXE%" "%APP_PATH%\xls2sage50.py" run ^
    --template=%TEMPLATE% ^
    --file="%INPUT_FILE%" ^
    --verbose >> %LOG_FILE% 2>&1

REM Verificar resultado
if %ERRORLEVEL% EQU 0 (
    echo [%date% %time%] Importación exitosa >> %LOG_FILE%
    exit /b 0
) else (
    echo [%date% %time%] Error en importación: %ERRORLEVEL% >> %LOG_FILE%
    exit /b %ERRORLEVEL%
)

endlocal
```

### Script con Notificaciones

```batch
@echo off
REM Script con notificación por email

set APP_PATH=C:\xls2sage50
set TEMPLATE=Clientes_Mensual
set INPUT_FILE=C:\Datos\clientes.xlsx
set LOG_FILE=C:\Logs\importacion.log
set EMAIL=admin@empresa.com

REM Ejecutar importación
python "%APP_PATH%\xls2sage50.py" run --template=%TEMPLATE% --file="%INPUT_FILE%"

REM Verificar resultado
if %ERRORLEVEL% EQU 0 (
    blat %LOG_FILE% -to %EMAIL% -subject "Importacion exitosa" -body "La importacion se completo correctamente."
) else (
    blat %LOG_FILE% -to %EMAIL% -subject "ERROR en importacion" -body "Ocurrio un error durante la importacion."
)
```

### Script con Manejo de Errores

```batch
@echo off
setlocal enabledelayedexpansion

REM Función para manejar errores
:handle_error
echo [%date% %time%] ERROR: %~1 >> %LOG_FILE%
echo [%date% %time%] ERROR: %~1
REM Enviar notificación
goto :eof

REM Principal
set LOG_FILE=C:\Logs\importacion.log"
echo [%date% %time%] Iniciando script >> %LOG_FILE%

REM Verificar que existe el archivo
if not exist "%INPUT_FILE%" (
    call :handle_error "Archivo no encontrado: %INPUT_FILE%"
    exit /b 1
)

REM Verificar que existe la plantilla
python "%APP_PATH%\xls2sage50.py" info --template=%TEMPLATE% >nul 2>&1
if %ERRORLEVEL% NEQ 0 (
    call :handle_error "Plantilla no encontrada: %TEMPLATE%"
    exit /b 1
)

REM Ejecutar importación
python "%APP_PATH%\xls2sage50.py" run --template=%TEMPLATE% --file="%INPUT_FILE%"

if %ERRORLEVEL% EQU 0 (
    echo [%date% %time%] Importacion exitosa >> %LOG_FILE%
) else (
    call :handle_error "Error en importacion (codigo %ERRORLEVEL%)"
    exit /b %ERRORLEVEL%
)

endlocal
```

## Scripts PowerShell

### Script Básico de PowerShell

```powershell
# ============================================================================
# Importación de Clientes - PowerShell
# ============================================================================

# Configuración
$AppPath = "C:\xls2sage50"
$Template = "Clientes_Mensual"
$InputFile = "C:\Datos\clientes.xlsx"
$LogFile = "C:\Logs\importacion_$(Get-Date -Format 'yyyyMMdd').log"

# Función para escribir log
function Write-Log {
    param([string]$Message)
    $timestamp = Get-Date -Format "yyyy-MM-dd HH:mm:ss"
    "$timestamp $Message" | Out-File -FilePath $LogFile -Append
    Write-Host $Message
}

# Iniciar
Write-Log "Iniciando importación..."

# Verificar archivo
if (-not (Test-Path $InputFile)) {
    Write-Log "ERROR: Archivo no encontrado: $InputFile"
    exit 1
}

# Ejecutar importación
$process = Start-Process -FilePath "python" `
    -ArgumentList "`"$AppPath\xls2sage50.py`" run --template=$Template --file=`"$InputFile`"" `
    -Wait -PassThru -NoNewWindow

# Verificar resultado
if ($process.ExitCode -eq 0) {
    Write-Log "Importación exitosa"
    exit 0
} else {
    Write-Log "ERROR: Importación falló (código $($process.ExitCode))"
    exit $process.ExitCode
}
```

### Script con Envío de Email (PowerShell)

```powershell
# Script con envío de email usando Gmail

$EmailFrom = "xls2sage50@empresa.com"
$EmailTo = "admin@empresa.com"
$SMTPServer = "smtp.gmail.com"
$SMTPPort = 587
$Username = "usuario@gmail.com"
$Password = ConvertTo-SecureString "contraseña" -AsPlainText -Force
$Credential = New-Object System.Management.Automation.PSCredential($Username, $Password)

$Subject = "Reporte de Importación"
$Body = Get-Content "C:\Logs\importacion.log" -Raw

Send-MailMessage -From $EmailFrom -To $EmailTo -Subject $Subject -Body $Body `
    -SmtpServer $SMTPServer -Port $SMTPPort -Credential $Credential `
    -UseSsl
```

## Integración con Otros Sistemas

### Python

```python
import subprocess
import sys

def ejecutar_importacion(plantilla, archivo):
    """Ejecuta una importación desde Python"""
    cmd = [
        sys.executable,
        "xls2sage50.py",
        "run",
        "--template", plantilla,
        "--file", archivo
    ]

    resultado = subprocess.run(cmd, capture_output=True, text=True)

    if resultado.returncode == 0:
        print("Importación exitosa")
        print(resultado.stdout)
        return True
    else:
        print(f"Error en importación: {resultado.stderr}")
        return False

# Uso
if ejecutar_importacion("Clientes_Mensual", "clientes.xlsx"):
    print("Proceso completado")
else:
    print("Proceso fallido")
```

### Node.js

```javascript
const { exec } = require('child_process');
const fs = require('fs');

function ejecutarImportacion(plantilla, archivo) {
    return new Promise((resolve, reject) => {
        const comando = `python xls2sage50.py run --template=${plantilla} --file=${archivo}`;

        exec(comando, (error, stdout, stderr) => {
            if (error) {
                reject(error);
                return;
            }
            resolve(stdout);
        });
    });
}

// Uso
ejecutarImportacion('Clientes_Mensual', 'clientes.xlsx')
    .then(resultado => {
        console.log('Importación exitosa:', resultado);
    })
    .catch(error => {
        console.error('Error en importación:', error);
    });
```

## Casos de Uso de Automatización

### Importación Diaria Nocturna

```batch
REM Ejecutar a las 2 AM todos los días
SCHTASKS /Create /TN "Importacion Diaria" /TR "python C:\xls2sage50\xls2sage50.py run --template=Clientes_Mensual --file=C:\Datos\clientes.xlsx" /SC DAILY /ST 02:00
```

### Importación Semanal

```batch
REM Ejecutar cada lunes a las 6 AM
SCHTASKS /Create /TN "Importacion Semanal" /TR "python C:\xls2sage50\xls2sage50.py run --template=Articulos --file=C:\Datos\articulos.xlsx" /SC WEEKLY /D MON /ST 06:00
```

### Importación al Inicio de Sesión

```batch
REM Ejecutar cuando el usuario inicia sesión
SCHTASKS /Create /TN "Importacion al Inicio" /TR "python C:\xls2sage50\xls2sage50.py run --template=Proveedores --file=C:\Datos\proveedores.xlsx" /SC ONLOGON
```

## Monitoreo y Alertas

### Script con Alerta por Error

```batch
@echo off
python xls2sage50.py run --template=Clientes --file=clientes.xlsx

if %ERRORLEVEL% NEQ 0 (
    REM Enviar alerta
    powershell -Command "Send-MailMessage -From 'bot@empresa.com' -To 'admin@empresa.com' -Subject 'ALERTA: Fallo en importacion' -Body 'La importacion de clientes fallo con codigo %ERRORLEVEL%' -SmtpServer 'smtp.empresa.com'"
)
```

### Script con Reintentos

```batch
@echo off
set MAX_RETRIES=3
set RETRY_COUNT=0

:retry
python xls2sage50.py run --template=Clientes --file=clientes.xlsx

if %ERRORLEVEL% EQU 0 (
    echo Importacion exitosa
    exit /b 0
)

set /a RETRY_COUNT+=1
if %RETRY_COUNT% LSS %MAX_RETRIES% (
    echo Reintento %RETRY_COUNT% de %MAX_RETRIES%...
    timeout /t 60 /nobreak >nul
    goto retry
)

echo Agotados todos los reintentos
exit /b 1
```

## Prácticas Recomendadas

1. **Siempre registre logs** para auditoría y diagnóstico
2. **Use rutas absolutas** en tareas programadas
3. **Verifique la existencia de archivos** antes de procesar
4. **Implemente manejo de errores** robusto
5. **Configure alertas** para fallos críticos
6. **Pruebe los scripts** manualmente antes de automatizar
7. **Documente los scripts** con comentarios detallados

!!! warning "Seguridad de Credenciales**

    Nunca incluya contraseñas en texto plano en sus scripts. Use variables de entorno o el Administrador de Credenciales de Windows.

## Próximo Paso

- [Scripts por Lotes](scripts-lotes.md) - Ejemplos prácticos de scripts
