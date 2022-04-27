//Desarrollo de las visualizaciones
import { setChartHeight } from '../modules/height';
import { setChartCanvas, setChartCanvasImage } from '../modules/canvas-image';
import { setRRSSLinks } from '../modules/rrss';
import { setFixedIframeUrl } from './chart_helpers';

export function initChart() {

    //Iframe
    setFixedIframeUrl('informe_perfil_mayores_2022_economia_3_8','ejemplo_umbral_pobreza');

    //Redes sociales > Antes tenemos que indicar cuál sería el texto a enviar
    setRRSSLinks('ejemplo_umbral_pobreza');

    //Captura de pantalla de la visualización
    setChartCanvas();

    let pngDownload = document.getElementById('pngImage');

    pngDownload.addEventListener('click', function(){
        setChartCanvasImage('ejemplo_umbral_pobreza');
    });

    //Altura del frame
    setChartHeight();
}