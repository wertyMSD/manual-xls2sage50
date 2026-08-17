# AGENTS.md — XLS2Sage50 (manual)

## Proyecto

Manual y release de **XLS2Sage50**, importador de datos Excel/CSV hacia
SAGE 50 para Windows (vía API directa o generación CSV/SQL).

## Modelo de repo

**Modelo A — repo de distribución separado**: el manual vive en este repo
de trabajo y se publica a un repo público distinto vía remote `publish` (SSH).

- Repo de trabajo (este): `C:\Users\alfonso\@cowork\cerebro\000-PROYECTOS\010 - MANUALES\xls2sage50`
- Repo público: `alfonsoautomatiza/xls2sage50`
- Remote `origin`: `https://github.com/wertyMSD/manual-xls2sage50.git` (trabajo)
- Remote `publish`: `git@github.com:alfonsoautomatiza/xls2sage50.git` (publicación)

## Configuración del release

| Campo | Valor | Fuente |
|-------|-------|--------|
| `engram_project` | `xls2sage50` | `release-assets/product.json` |
| `release_repo` | `alfonsoautomatiza/xls2sage50` | `release-assets/product.json` |
| `product_display_name` | `XLS2Sage50` | `release-assets/product.json` |
| `publish_remote` | `publish` | Detectado por `git remote` |
| `updates_dir` | `docs/es/updates` | `release-assets/product.json` |
| `manifest_url` | `https://alfonsoautomatiza.github.io/xls2sage50/es/updates/manifest-stable.json` | `release-assets/product.json` |

## Repo de build (privado)

- Ruta: `D:\py\@produxion\@SAGE50\xls2sage50`
- Script: `c/build_exe.py` — desde 2026-08-17 usa el flujo nuevo (portado
  de backupTL): firma el manifest con `pyupdategit build-manifest` y copia
  `.zip` + `release.json` + `product.json` directamente a `release-assets/`
  de este repo (`public_repo` en `c/product.json`).
- Clave de firma: `UPDATE_PRIVATE_KEY` en `c\.env` del repo de build
  (git-ignored). Sin clave, el build salta la firma y el manifest queda
  sin firmar.
- Versión actual: `0.1.0` (canal `stable`, target `win-x64`).

## Identidad de publicación

Commits a gh-pages y main del repo público usan identidad anónima:

- Nombre: `alfonsoautomatiza`
- Email: `317563494+alfonsoautomatiza@users.noreply.github.com`

Definida en `release-assets/product.json` (`release_git_name` / `release_git_email`).

## Scripts del proyecto

- `release-crm/assets/sync_readme.py` (skill global) — sincroniza
  README + LICENSE a main del repo público (identidad anónima, sin tocar
  working tree). Ejecutar con `python <skill_dir>/assets/sync_readme.py`.

## Guardas específicas

- **NUNCA borrar imágenes de `docs/img/`**.
- **Windows OpenSSH**: antes de cualquier `git`/SSH al remote `publish`,
  fijar `$env:GIT_SSH_COMMAND = "C:/Windows/System32/OpenSSH/ssh.exe"`.
- **`manifest_url` bakeado**: no mover el destino de deploy
  (`https://alfonsoautomatiza.github.io/xls2sage50/...`) o se rompe el
  auto-update.
- **`site_url` de `mkdocs.yml` debe ser
  `https://alfonsoautomatiza.github.io/xls2sage50`** (históricamente
  apuntó a `wertymsd.github.io/manual-xls2sage50`; verificar antes de
  cada deploy).
- **`mkdocs build --strict`** debe pasar antes de cada deploy.
- **`release-assets/` JAMÁS se commitea** (ni zips ni json).
- **`site/` se elimina tras cada deploy** (`Remove-Item -Recurse -Force
  site`) y debe estar en `.gitignore`.
- **Rama master mínima** (repo público): SOLO `README.md`, `LICENSE`,
  `.gitignore` y novedades (`docs/updates/novedades-*.md`).
- **Carpetas `@eaDir/`**: metadatos de Synology — ignorar, nunca commitear.
- La carpeta `guia/` duplica contenido de `docs/` — la fuente del manual
  es `docs/`; no editar `guia/` sin confirmar con el usuario.

## Plugins de MkDocs

### Google Analytics
- **Property**: `G-9FBB0G8XHG`
- **Ubicación**: `mkdocs.yml` → `extra.analytics`
- **Verificar**: que siempre empiece con `G-`. Si falta, abortar y pedir ID.

### Cookie Consent
- **Título/Descripción**: medición con consentimiento.
- **Ubicación**: `mkdocs.yml` → `extra.consent`

## Botón de Incidencia (FAB)

**NO implementado** en este repo. Estado actual:

- `overrides/main.html` solo añade `google-site-verification`.
- `mkdocs.yml` NO declara `custom_dir: overrides` (el override no está
  activo).
- Para implementarlo: seguir la sección FAB del skill `release-crm`
  (activar `custom_dir: overrides`, fusionar `assets/fab-main.html`,
  añadir CSS de `assets/fab-button.css`).

## Notas

- Idioma único: español (`docs/`, sin i18n por ahora).
- `mkdocs.yml` tiene claves duplicadas (`markdown_extensions` y `plugins`
  aparecen dos veces): YAML aplica la última — vigilar al editar.
- El `nav` referencia `modo-csql/generacion-sql.md` (typo histórico de
  `modo-csv`); `mkdocs build --strict` fallará si no se corrige antes
  del deploy.

---

**Al iniciar cualquier sesión en este proyecto, cargar SIEMPRE el skill**
`release-crm` para detectar mejoras, actualizaciones o cambios que
puedan aplicarse al proyecto. El skill contiene:

- Flujo de release completo (Modelo A — repo distribución separado).
- Sub-skill `crm-docs-release`: novedades desde Engram, enriquecimiento
  SEO, gate de imágenes, y plugins obligatorios (analytics + consent).
- Assets del FAB (`fab-main.html`, `fab-button.css`) — referencia para
  implementarlo en `overrides/main.html`.
- Guardas: nunca borrar imágenes, identidad anónima, `manifest_url`
  bakeado, OpenSSH para remotes SSH.

Si el skill tiene cambios respecto a lo implementado en este repo,
**aplicar las mejoras o avisar al usuario** antes de continuar.
