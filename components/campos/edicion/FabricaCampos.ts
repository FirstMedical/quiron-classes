import {CampoChequeo, CampoEntradaNumerica, CampoEntradaTexto, CampoSeccion, CampoSeleccion} from "./elementos";
import {CampoTabla} from "./elementos/CampoTabla";
import {CampoTablaCompuesta} from "./elementos/CampoTablaCompuesta";
import {CampoParametro} from "./elementos/CampoParametro";
import {CampoFecha} from "./elementos/CampoFecha";
import {CampoFirma} from "./elementos/CampoFirma";
import {CampoImagen} from "./elementos/CampoImagen";
import {TiposElementos} from "../index";
import {Campo} from "./Campo";

export class FabricaCampos {
    private static camposCreables = {
        'entrada-texto': CampoEntradaTexto,
        'entrada-numerica': CampoEntradaNumerica,
        seccion: CampoSeccion,
        chequeo: CampoChequeo,
        seleccion: CampoSeleccion,
        tabla: CampoTabla,
        'tabla-compuesta': CampoTablaCompuesta,
        parametro: CampoParametro,
        fecha: CampoFecha,
        firma: CampoFirma,
        imagen: CampoImagen
    };

    public static fabricarCampoGenerico(elemento: TiposElementos): Campo {
        // @ts-ignore
        return new this.camposCreables[elemento.toString()]();
    }

    public static fabricarCampoConEtiqueta(elemento: TiposElementos, etiqueta: string): Campo {
        // @ts-ignore
        return new this.camposCreables[elemento.toString()](etiqueta);
    }

    private static fabricarCampoGenericoString(elemento: string): Campo {
        // @ts-ignore
        return new this.camposCreables[elemento.toString()]();
    }
}