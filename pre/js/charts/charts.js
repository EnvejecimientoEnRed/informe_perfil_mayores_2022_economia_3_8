//Desarrollo de las visualizaciones
//import * as d3 from 'd3';
//import { numberWithCommas2 } from './helpers';
//import { getInTooltip, getOutTooltip, positionTooltip } from './modules/tooltip';
import { setChartHeight } from '../modules/height';
import { setChartCanvas, setChartCanvasImage } from '../modules/canvas-image';
import { setRRSSLinks } from '../modules/rrss';
import { setFixedIframeUrl } from './chart_helpers';

export function initChart(iframe, position) {
    //Desarrollo de funciones asociadas al gráfico > Título, subtítulo, notas, fuente de datos
    document.getElementById('title').textContent = 'Ejemplo sobre el umbral de pobreza';
    document.getElementById('subtitle').textContent = 'Figura 3.9. Ilustración.';
    document.getElementById('data-source').textContent = 'Datos inventados';
    document.getElementById('data-note').textContent = '';

    //Desarrollo del gráfico   


    //Animación del gráfico
    document.getElementById('replay').addEventListener('click', function() {
        animateChart();
    });

    //Iframe
    setFixedIframeUrl('ejemplo_umbral_pobreza');

    //Redes sociales > Antes tenemos que indicar cuál sería el texto a enviar
    setRRSSLinks('ejemplo_umbral_pobreza');

    //Captura de pantalla de la visualización
    setChartCanvas();

    let pngDownload = document.getElementById('pngImage');

    pngDownload.addEventListener('click', function(){
        setChartCanvasImage('ejemplo_umbral_pobreza');
    });

    //Altura del frame
    setChartHeight(iframe);
}