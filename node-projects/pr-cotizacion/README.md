Por favor hagan una aplicación básica en node y vean como cargar el HTML de una página. Buscarán una página que muestre la cotización de la libra esterlina. Y revisando el código fuente trararan de ubicar cómo identificar el lugar donde se muestra la cotización. En el código de node buscarán ese texto

Descripción del problema: la empresa LaMejorCotizacion ha decidido iniciar la compra y venta
de divisas, asegurando que sus precios son un 10% mejor que las cotizaciones existentes en el
momento de una operación. La mencionada empresa basa toda su operación en una aplicación
multiplataforma.
Para lograr esto, el arquitecto de la solución ha planteado el siguiente requerimiento para el
grupo de desarrollo del Backend.
Se deben crear los servicios web necesarios para realizar lo siguiente:
1. Realizar una investigación de campo para determinar el sitio más confiable que muestre
en una página Web las cotizaciones de las principales divisas.
2. Analizar la estructura del Sitio Web para aplicar una técnica de Web Scraping para
recuperar el valor de compra y venta de una divisa. El caso de estudio y validación de la
solución se hará con la moneda de Libra Esterlina.
3. Los valores recuperados usando Web Scraping serán alterados a la baja con una razón del
10%. Menos el 10% para que un usuario pueda comprar, y un 10% más para que el usuario
pueda vender.
4. Se deben definir al menos dos servicios: uno para recuperar el valor de compra, y el otro
para recuperar el valor de venta de la divisa.
5. Realizar una serie de pruebas para validar el funcionamiento de los servicios.
6. Documentar la implementación y describir lo necesario para agregar más divisas.
