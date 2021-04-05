import 'reflect-metadata';
import * as components from './components';
import * as entities from './entities';
import * as errors from './errors';
import {CampoSeccion , CampoEntradaTexto, CampoChequeo} from "./components/campos/edicion/elementos";
import {Dependiente} from "./components/campos/edicion";
import {classToPlain, plainToClass, serialize} from "class-transformer";

// const texto = new CampoEntradaTexto('texto', new Dependiente());
// const check = new CampoChequeo('chequeo', new Dependiente(), ['1', '2', '3']);
//
// const seccion = new CampoSeccion('seccion', new Dependiente(), [texto, check]);
//
// console.log(seccion);
//
// //const json = classToPlain(seccion);
//
// const json = JSON.parse(JSON.stringify(seccion));
//
// console.log(json);
//
// const reconstructed = <CampoSeccion><unknown>plainToClass<CampoSeccion, any>(CampoSeccion, json);
//
// console.log(reconstructed.elementos);

export {
    entities,
    errors
};