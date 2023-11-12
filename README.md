# FinderProperty
> Desarrollado por Joel Alexander Trinidad
## Indice
 - [Información General](#información-general)
 - [Screenshot](#screenshot)
 - [Dependencias](#dependencias)
 - [Correr la aplicación en forma local](#correr-la-aplicación-en-forma-local)
 - [Base de datos](#base-de-datos)
 - [Demo online](#demo-online)


### Información General
***
Sitio para buscar/crear propiedades. Creado con:
  * Backend
    - NodeJS
    - ExpressJs
    - MySql
    - ORM - Sequelize - sequelize-cli
  * Frontend
    - Vite - ReactJS
    - Tailwind - CSS
    - Autenticación y Autorización con Firebase
### Screenshot
    
    -App web
![image](https://github.com/JoelAlexanderTrinidad/FinderProperty/assets/84977429/0a6f1241-1965-46e8-ba2a-ee09b2972eb0)
![image](https://github.com/JoelAlexanderTrinidad/FinderProperty/assets/84977429/9739a4fc-c4c1-4ac4-a64d-88cd877ad3a7)
![image](https://github.com/JoelAlexanderTrinidad/FinderProperty/assets/84977429/2109cb44-af87-49b2-9528-84247372fef1)
![image](https://github.com/JoelAlexanderTrinidad/FinderProperty/assets/84977429/bdf56585-83e7-46b7-b174-a1c190e9bae3)

    -DER base de datos
![image](https://github.com/JoelAlexanderTrinidad/FinderProperty/assets/84977429/0db8d32e-8527-4ea9-9363-7cb86d950dc6)

### Dependencias
  - Backend
    * "bcryptjs": "^2.4.3",
    * "cors": "^2.8.5",
    * "dotenv": "^16.3.1",
    * "express": "^4.18.2",
    * "method-override": "^3.0.0",
    * "multer": "^1.4.5-lts.1",
    * "mysql": "^2.18.1",
    * "mysql2": "^3.6.2",
    * "sequelize": "^6.33.0",
    * "sequelize-cli": "^6.6.1"
    * "nodemon": "^3.0.1"
  - Frontend
    * "@mui/material": "^5.14.17",
    * "axios": "^1.6.0",
    * "firebase": "^10.5.2",
    * "formik": "^2.4.5",
    * "prop-types": "^15.8.1",
    * "react-image-gallery": "^1.3.0",
    * "react-router-dom": "^6.18.0",
    * "react-toastify": "^9.1.3",
    * "yup": "^1.3.2"
### Correr la aplicación en forma local
Clonar el proyecto e instalar las dependencias
```
$ git clone https://github.com/JoelAlexanderTrinidad/FinderProperty.git
$ cd FinderProperty
$ npm i
```
Crear el arhivo <code>.env</code> y darle valor a las variables de entorno según corresponda.
```
DB_USERNAME=
DB_PASSWORD=
DB_DATABASE=property_rents
DB_PORT=3306
DB_HOST=127.0.0.1

NODE_ENV=development
PORT=3000
LOCAL=http://localhost
```
## Base de datos
***
### Crear la base de datos con **migraciones**
Es necesario tener instalado [sequelize-cli](https://www.npmjs.com/package/sequelize-cli)
```
$ npm install --save-dev sequelize-cli
```
Crear la base de datos
```
$ sequelize db:create
```
Correr migraciones y seeders
```
$ sequelize db:migrate
$ sequelize db:seed:all
```
# Demo online
 - Advertencia - el host render puede tardar la primera vez en iniciar, por favor si esto sucede esperar un ratito y recargar la página, luego irá todo normal :)
   * Backend deploy: https://finderpropertiesapi.onrender.com
   * Frontend deploy: https://property-finder-u6yf.onrender.com
