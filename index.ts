import 'reflect-metadata';
import * as entities from './entities';
import * as errors from './errors';
// import {plainToClass, classToPlain} from "class-transformer";
//
// const object = {
//     "identificacion": "1013632535",
//     "nombres": "Jairo Hernan",
//     "apellidos": "Vanegas Garcia",
//     "password": "hola_mundo",
//     "cambiar_password": false,
//     "no_informacion": false,
//     "roles": [
//         {
//             "identificador": "Admin",
//             "descripcion": "Admin",
//             "permisos": 0
//         },
//         {
//             "identificador": "Creador",
//             "descripcion": "Ser supremo en el sistema",
//             "permisos": -1
//         }
//     ],
//     "firma": "soy_una_firma"
// }
//
// const objectClass = plainToClass(entities.Usuario, object);
// console.log(objectClass);
// const classObject = classToPlain(objectClass);
// console.log(classObject);

export {
    entities,
    errors
};