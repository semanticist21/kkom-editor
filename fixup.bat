REM Copy the index.d.ts file to the dist directory
copy dist\mjs\index.d.ts dist

REM Remove the index.d.ts files from subdirectories inside dist
for /d %%i in (dist\*) do (
    del /q "%%i\index.d.ts"
)

REM Create package.json file inside dist/cjs directory for CommonJS
echo { "type": "commonjs" } > dist\cjs\package.json

REM Create package.json file inside dist/mjs directory for ES modules
echo { "type": "module" } > dist\mjs\package.json