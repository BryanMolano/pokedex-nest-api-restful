<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>

#ejecutar en desarrollo

1. clonar el rep
2. ejecutar

```
npm install
```

3. tener nest CLI instalado

```
npm i -g @nestjs/cli
```

4. levanta la bd

```
docker-compose up -d
```

4. reconstruir la base de datos con la semilla

```
https://localhost:3000/api/v2/seed
```

5. clonar el archivo __.env.template__ y renombrar la copia a __.env__
6. llenar las variables de entorno definiadas en el __.env__
7. ejecutar la aplicacion en dev:

```
npm run start:dev
```

## stack usado

* mongoDB
* Nest