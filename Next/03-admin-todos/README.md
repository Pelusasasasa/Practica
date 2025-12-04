# Development

1. Levantar la base de datos

```
docker compose up -d
```

2. Renombrar el archivo .env.example a .env

3. Remplazar Variables de Entorno

4. Ejecutar el SEED para [crear la base de datos](localhost:3000/api/seed)

# Generar el cliente de prisma

```
npx prisma init
npx prisma migrate dev
npx prisma generate
```
