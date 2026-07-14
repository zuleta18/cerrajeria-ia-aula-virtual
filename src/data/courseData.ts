import { CourseUnit } from '../types';

// ─────────────────────────────────────────────────────────────────────────────
// INSTRUCCIONES PARA EL INSTRUCTOR:
// 1. Reemplaza cada "PENDIENTE_LINK_DRIVE_MODULO_X" con el link de Google Drive
//    del PDF correspondiente a ese módulo.
// 2. Reemplaza cada "PENDIENTE_LINK_YOUTUBE_MODULO_X" con el link del video
//    de YouTube de esa clase.
// ─────────────────────────────────────────────────────────────────────────────

export const courseData: CourseUnit[] = [
  {
    id: "unit-1",
    title: "Historia y fundamentos de la cerrajería",
    description: "Conoce los orígenes de la cerrajería, desde sus inicios rudimentarios hasta las aportaciones romanas y modernas.",
    driveLink: "PENDIENTE_LINK_DRIVE_MODULO_1",
    youtubeLink: "PENDIENTE_LINK_YOUTUBE_MODULO_1",
    blocks: [
      {
        type: "idea",
        title: "Idea Clave",
        content: "La necesidad de sentirse seguro es algo natural del ser humano. En teoría se cree que los cerrojos fueron inventados por los chinos hace más de 4.000 años, siendo implementados en Egipto y Babilonia con llaves de madera. La cerradura no es solo un mecanismo: es el resultado de miles de años de ingeniería aplicada a la seguridad humana."
      },
      {
        type: "case",
        title: "Evolución Histórica",
        content: "Fueron los romanos quienes crearon un sistema de seguridad con cierres y la vuelta de la llave. Desarrollaron los pernos, guardas y un elemento clave: los muelles. En la Edad Media, los herreros europeos perfeccionaron las cerraduras con guardas múltiples. Siglos después, Linus Yale Sr. y su hijo Linus Yale Jr. revolucionaron el mundo inventando el modelo de tambor de pines (1848-1865), que sigue siendo la base de la mayoría de cerraduras modernas. En el siglo XX surgieron las cerraduras de seguridad, magnéticas, electrónicas y biométricas."
      },
      {
        type: "activity",
        title: "Actividad Práctica",
        content: "Consigue una cerradura vieja o de bajo costo. Obsérvala por fuera e identifica: el bombín, el frontal, el picaporte y el escudo. Luego investiga si es de incrustar o sobreponer. Fotografía cada parte y describe con tus palabras la función que cumple cada elemento visible. Esta observación inicial es fundamental para desarrollar ojo técnico como cerrajero profesional."
      },
      {
        type: "quiz",
        title: "Evaluación Módulo 1 — 10 preguntas (MÍNIMO 10 CORRECTAS — 100% REQUERIDO)",
        questions: [
          {
            question: "¿Quiénes inventaron los primeros cerrojos hace más de 4.000 años usando llaves de madera?",
            options: ["Los romanos", "Los chinos", "Los griegos", "Los egipcios"],
            correctAnswerIndex: 1
          },
          {
            question: "¿Qué civilización antigua implementó por primera vez cerrojos de madera en sus construcciones?",
            options: ["Los aztecas y los mayas", "Los egipcios y los babilonios", "Los vikingos", "Los persas"],
            correctAnswerIndex: 1
          },
          {
            question: "¿Qué aportación fundamental realizaron los romanos al sistema de cerraduras?",
            options: ["Inventaron las cerraduras digitales", "Desarrollaron pernos, guardas y muelles metálicos", "Crearon las llaves magnéticas", "Fabricaron las primeras cerraduras de plástico"],
            correctAnswerIndex: 1
          },
          {
            question: "¿Quién inventó el modelo de tambor de pines que sigue siendo base de las cerraduras modernas?",
            options: ["Leonardo da Vinci", "Linus Yale Jr.", "Thomas Edison", "James Watt"],
            correctAnswerIndex: 1
          },
          {
            question: "¿En qué siglo se popularizaron las cerraduras de seguridad con múltiples guardas en Europa?",
            options: ["Siglo V", "Edad Media (siglos XI-XV)", "Siglo XX", "Siglo I a.C."],
            correctAnswerIndex: 1
          },
          {
            question: "¿Cuál es la función principal de los muelles dentro de una cerradura?",
            options: ["Decorar el interior del mecanismo", "Mantener los pernos o pistones en posición y permitir el accionamiento con la llave correcta", "Conectar la cerradura a la corriente eléctrica", "Sujetar la puerta al marco"],
            correctAnswerIndex: 1
          },
          {
            question: "¿Qué tipo de cerradura surgió en el siglo XX como evolución tecnológica?",
            options: ["Cerraduras de madera tallada", "Cerraduras de hueso y marfil", "Cerraduras electrónicas y biométricas", "Cerraduras de barro cocido"],
            correctAnswerIndex: 2
          },
          {
            question: "¿Cuál es la diferencia principal entre una cerradura romana y una cerradura moderna de pines?",
            options: ["Las romanas eran más seguras", "Las modernas usan pines de diferentes alturas que solo alinea la llave correcta", "No hay diferencia, son iguales", "Las romanas eran electrónicas"],
            correctAnswerIndex: 1
          },
          {
            question: "¿Por qué es importante que un cerrajero conozca la historia de las cerraduras?",
            options: ["No tiene ninguna utilidad práctica", "Porque permite entender la evolución de los mecanismos y anticipar cómo funcionan distintos modelos", "Solo sirve para ganar apuestas", "Para decorar el taller con datos históricos"],
            correctAnswerIndex: 1
          },
          {
            question: "¿Cuál de estas afirmaciones sobre la cerrajería es CORRECTA?",
            options: ["La cerrajería es una profesión que desaparecerá pronto por la tecnología", "La cerrajería combina conocimiento histórico, mecánico y práctico siendo siempre necesaria", "Solo se necesita fuerza física para ser cerrajero", "Las cerraduras modernas no tienen relación con las antiguas"],
            correctAnswerIndex: 1
          }
        ]
      }
    ]
  },
  {
    id: "unit-2",
    title: "Herramientas esenciales para empezar",
    description: "Lo que necesitas para iniciar tu negocio de cerrajería sin invertir una fortuna.",
    driveLink: "PENDIENTE_LINK_DRIVE_MODULO_2",
    youtubeLink: "PENDIENTE_LINK_YOUTUBE_MODULO_2",
    blocks: [
      {
        type: "idea",
        title: "Idea Clave",
        content: "Las herramientas necesarias son pocas y no requieren grandes inversiones. El equipo básico completo no cuesta más de $1.000.000 COP (aprox. 250 USD). A diferencia de otras profesiones, en cerrajería puedes comenzar con lo mínimo y escalar progresivamente según crezca tu clientela. La clave está en conocer cada herramienta y sacarle el máximo provecho."
      },
      {
        type: "case",
        title: "La Inversión Inicial Inteligente",
        content: "Para iniciar, lo ideal es una duplicadora de llaves de buena calidad (marca Silca, Errebi o equivalente). Si solo vas a probar el negocio, una máquina china económica permite recuperar la inversión rápidamente. El kit básico incluye: taladro con brocas (5/64, 1/8, 3/16, 1/4), pulidora pequeña, extensión eléctrica, destornilladores de estrella y plano (varios tamaños), alicates de punta y de presión, llave expansiva, limas triangular y redonda, remachadora y martillo. Con esto puedes enfrentar el 80% de los trabajos del mercado."
      },
      {
        type: "activity",
        title: "Actividad Práctica",
        content: "Elabora tu inventario personal: Lista cada herramienta que ya tienes, su estado (buena, regular, mala) y las que te faltan. Investiga precios en ferreterías locales y en Mercado Libre de las herramientas faltantes. Calcula tu inversión total necesaria. Este ejercicio te permitirá planificar tu entrada al negocio de forma ordenada y sin gastos innecesarios."
      },
      {
        type: "quiz",
        title: "Evaluación Módulo 2 — 10 preguntas (MÍNIMO 10 CORRECTAS — 100% REQUERIDO)",
        questions: [
          {
            question: "¿Cuál es la herramienta más costosa e importante al iniciar en cerrajería?",
            options: ["El martillo", "La máquina duplicadora de llaves", "El alicate de punta", "El destornillador estrella"],
            correctAnswerIndex: 1
          },
          {
            question: "¿Cuánto es la inversión básica estimada para comenzar según el manual?",
            options: ["Más de 5.000 USD", "No más de 250 USD (aprox. 1 millón COP)", "Se necesitan mínimo 10.000 USD", "Es gratis si consigues herramientas prestadas"],
            correctAnswerIndex: 1
          },
          {
            question: "¿Qué tipos de lima son esenciales en el kit básico de cerrajería?",
            options: ["Lima de madera y lima de papel", "Lima triangular y lima redonda (rabo de ratón)", "Lima cuadrada grande únicamente", "No se necesitan limas en cerrajería"],
            correctAnswerIndex: 1
          },
          {
            question: "¿Para qué sirve la pulidora pequeña en trabajos de cerrajería?",
            options: ["Para pulir zapatos del cliente", "Para cortar, desbastar metal y facilitar el acceso a mecanismos atascados", "Para decorar las llaves", "Para hacer ruido y asustar"],
            correctAnswerIndex: 1
          },
          {
            question: "¿Qué tamaño de broca se recomienda para perforar el bombín en caso de emergencia?",
            options: ["Broca de 1/2 pulgada", "Broca de 1/4 pulgada", "Broca de 3/4 pulgada", "Cualquier broca sirve igual"],
            correctAnswerIndex: 1
          },
          {
            question: "¿Cuál es la ventaja de empezar con una duplicadora china económica?",
            options: ["Es más precisa que las profesionales", "Dura más de 20 años sin mantenimiento", "Permite recuperar la inversión rápidamente mientras se construye clientela", "Tiene garantía de por vida"],
            correctAnswerIndex: 2
          },
          {
            question: "¿Para qué se usa la llave expansiva (llave inglesa) en cerrajería?",
            options: ["Para duplicar llaves de seguridad", "Para ajustar y aflojar tuercas y tornillos de distintos tamaños", "Para abrir cerraduras de alta seguridad", "Para marcar el metal antes de soldar"],
            correctAnswerIndex: 1
          },
          {
            question: "¿Qué porcentaje aproximado de trabajos del mercado puede enfrentar un cerrajero con el kit básico?",
            options: ["El 10%", "El 30%", "El 80%", "El 100% sin excepción"],
            correctAnswerIndex: 2
          },
          {
            question: "¿Cuál es la estrategia correcta para escalar el negocio en cuanto a herramientas?",
            options: ["Comprar todas las herramientas posibles antes de empezar", "Comenzar con lo mínimo indispensable y reinvertir las ganancias en mejores herramientas", "Pedir prestado siempre y nunca comprar", "Esperar a tener 10.000 USD ahorrados"],
            correctAnswerIndex: 1
          },
          {
            question: "¿Para qué sirve la remachadora en el kit del cerrajero?",
            options: ["Para cortar llaves", "Para fijar piezas metálicas mediante remaches cuando los tornillos no son viables", "Para estirar el metal de las llaves", "Para marcar el bombín"],
            correctAnswerIndex: 1
          }
        ]
      }
    ]
  },
  {
    id: "unit-3",
    title: "Tipos de cerraduras y sus componentes",
    description: "Conoce desde cero la anatomía de las cerraduras de incrustar y sobreponer.",
    driveLink: "PENDIENTE_LINK_DRIVE_MODULO_3",
    youtubeLink: "PENDIENTE_LINK_YOUTUBE_MODULO_3",
    blocks: [
      {
        type: "idea",
        title: "Idea Clave",
        content: "Existen tres tipos principales: cerraduras de incrustar (embutir), cerraduras de sobreponer y cerrojos/pasadores. También son muy comunes las cerraduras cilíndricas o de alcobas. Todas comparten un sistema mecánico universal basado en los mismos principios. Conocer la anatomía exacta de cada tipo te permitirá diagnosticar y reparar cualquier cerradura con eficiencia y profesionalismo."
      },
      {
        type: "case",
        title: "Componentes Universales de una Cerradura",
        content: "Partes EXTERNAS: frontal (placa visible en el canto), picaporte (pieza biselada que entra al marco), émbolo o bulón (seguro principal), bombín (cilindro donde entra la llave), manillar (palanca de accionamiento) y cerradero (pieza fija en el marco). Partes INTERNAS: tapa de ajuste, muelle primario, leva del pestillo, nuez (pieza giratoria accionada por la llave). El bombín es la pieza clave: contiene los pines de diferentes alturas que solo la llave correcta puede alinear."
      },
      {
        type: "activity",
        title: "Actividad Práctica",
        content: "Consigue una cerradura de sobreponer vieja o económica. Desmóntala completamente con destornillador. A medida que extraes cada pieza, colócala de izquierda a derecha en orden. Fotografía cada paso. Cuando hayas sacado todas las piezas, identifica cada una por su nombre. Luego, vuelve a montarla tomando las piezas de derecha a izquierda (orden inverso). Si la cerradura funciona al final, habrás completado exitosamente la actividad."
      },
      {
        type: "quiz",
        title: "Evaluación Módulo 3 — 10 preguntas (MÍNIMO 10 CORRECTAS — 100% REQUERIDO)",
        questions: [
          {
            question: "¿Cuáles son los tres tipos principales de cerraduras que describe el manual?",
            options: ["Mecánicas, magnéticas y electrónicas", "De incrustar, de sobreponer y cerrojos/pasadores", "De madera, de aluminio y de vidrio", "Antiguas, modernas y futuristas"],
            correctAnswerIndex: 1
          },
          {
            question: "¿Qué pieza externa entra y sale al accionar el manillar, asegurando la puerta en el marco?",
            options: ["El bombín", "El picaporte o pestillo biselado", "La nuez interna", "El muelle primario"],
            correctAnswerIndex: 1
          },
          {
            question: "¿Qué es el bombín y cuál es su función principal?",
            options: ["Es la pieza decorativa exterior sin función mecánica", "Es el cilindro extraíble donde entra la llave y que contiene los pines de seguridad", "Es el tornillo que sujeta la cerradura a la puerta", "Es el muelle que empuja el picaporte"],
            correctAnswerIndex: 1
          },
          {
            question: "¿Cómo sugiere el manual organizar las piezas al desarmar una cerradura?",
            options: ["Mezclarlas todas en un recipiente con agua para limpiarlas", "De izquierda a derecha en orden de extracción para no confundirse al armar", "Guardarlas en bolsas separadas sin orden específico", "Tirarlas y comprar piezas nuevas"],
            correctAnswerIndex: 1
          },
          {
            question: "¿Cuál es la técnica correcta para VOLVER A ARMAR una cerradura después de desarmarla?",
            options: ["Comenzar por la primera pieza que se sacó", "Tomar las piezas de derecha a izquierda (orden inverso al desmontaje)", "Armar al azar hasta que funcione", "Solo un técnico certificado puede volver a armarla"],
            correctAnswerIndex: 1
          },
          {
            question: "¿Qué diferencia hay entre una cerradura de incrustar y una de sobreponer?",
            options: ["No hay ninguna diferencia práctica", "La de incrustar va embutida dentro de la puerta; la de sobreponer va atornillada por fuera", "La de sobreponer es siempre más segura", "La de incrustar solo se usa en autos"],
            correctAnswerIndex: 1
          },
          {
            question: "¿Qué es el cerradero y dónde se ubica?",
            options: ["Es el nombre del oficio del cerrajero", "Es la pieza fija instalada en el marco de la puerta que recibe el picaporte y el bulón", "Es la herramienta para abrir cerraduras", "Es el manual de instrucciones de la cerradura"],
            correctAnswerIndex: 1
          },
          {
            question: "¿Para qué sirve el muelle primario dentro de la cerradura?",
            options: ["Para decorar el interior y ocultar las otras piezas", "Para mantener el picaporte en posición salida y devolverlo automáticamente al soltar el manillar", "Para conectar el bombín con la corriente eléctrica", "Para bloquear permanentemente la cerradura"],
            correctAnswerIndex: 1
          },
          {
            question: "¿Qué tipo de cerradura se usa comúnmente en puertas de baño o alcoba?",
            options: ["Cerradura de alta seguridad multipunto", "Cerradura cilíndrica de alcoba (con botón de bloqueo interior)", "Cerrojo de barra de acero doble", "Cerradura biométrica de huella"],
            correctAnswerIndex: 1
          },
          {
            question: "¿Por qué es fundamental conocer la anatomía interna de una cerradura para ser cerrajero profesional?",
            options: ["No es necesario, basta con saber usar un taladro", "Porque permite diagnosticar fallas, reparar piezas específicas y no destruir la cerradura innecesariamente", "Solo sirve para impresionar a los clientes con vocabulario técnico", "Porque las piezas internas son las más caras y se pueden revender"],
            correctAnswerIndex: 1
          }
        ]
      }
    ]
  },
  {
    id: "unit-4",
    title: "Instalación de cerraduras paso a paso",
    description: "Método profesional para instalar correctamente cerraduras en puertas metálicas o de madera.",
    driveLink: "PENDIENTE_LINK_DRIVE_MODULO_4",
    youtubeLink: "PENDIENTE_LINK_YOUTUBE_MODULO_4",
    blocks: [
      {
        type: "idea",
        title: "Idea Clave",
        content: "La instalación profesional de cerraduras requiere precisión en las medidas antes de hacer cualquier corte o perforación. La medida estándar internacional para la altura de instalación es de 90 cm a 1 metro contado desde el piso. Una mala medición puede arruinar una puerta costosa. El lema del profesional es: medir dos veces, taladrar una vez."
      },
      {
        type: "case",
        title: "Proceso Completo de Instalación",
        content: "Paso 1: Verifica el espacio entre marco y puerta (debe ser exactamente 1 cm). Paso 2: Mide y marca la altura (90 cm a 1 metro). Paso 3: Coloca la cerradura sobre la puerta y traza el contorno del frontal. Paso 4: Con taladro y broca 1/4, haz los huecos guía. Paso 5: En madera usa formón y martillo para el alojamiento; en metal usa pulidora y cincel. Paso 6: Perfora el agujero del bombín con copa sierra de 32 mm. Paso 7: Instala y ajusta la cerradura. Paso 8: Instala el cerradero en el marco alineado perfectamente con el bulón."
      },
      {
        type: "activity",
        title: "Actividad Práctica",
        content: "Practica en una tabla de madera gruesa (mínimo 4 cm de grosor) antes de hacerlo en una puerta real. Marca la posición, usa el formón para crear el alojamiento y perfora con la copa sierra. Instala una cerradura económica completa. Verifica que el picaporte y el bulón entren y salgan libremente. Prueba con la llave que los seguros funcionen correctamente. Si logras una instalación limpia y funcional en la tabla, estás listo para trabajar en puertas reales."
      },
      {
        type: "quiz",
        title: "Evaluación Módulo 4 — 10 preguntas (MÍNIMO 10 CORRECTAS — 100% REQUERIDO)",
        questions: [
          {
            question: "¿A qué altura del piso se debe instalar la cerradura por norma general?",
            options: ["A 50 centímetros del piso", "A 2 metros de altura", "De 90 centímetros a 1 metro del piso", "A cualquier altura según preferencia"],
            correctAnswerIndex: 2
          },
          {
            question: "¿Qué espacio ideal debe existir entre el marco y la puerta para una correcta instalación?",
            options: ["5 centímetros para que haya espacio", "Ninguno, deben estar en contacto directo", "1 centímetro exacto", "3 centímetros mínimo"],
            correctAnswerIndex: 2
          },
          {
            question: "¿Qué herramientas se usan para crear el alojamiento de la cerradura en una puerta de MADERA?",
            options: ["Pulidora y cincel solamente", "Formón y martillo", "Taladro de impacto y cemento", "Solo la sierra eléctrica"],
            correctAnswerIndex: 1
          },
          {
            question: "¿Qué diámetro de copa sierra se recomienda para perforar el agujero del bombín?",
            options: ["Copa sierra de 10 mm", "Copa sierra de 50 mm", "Copa sierra de 32 mm", "Cualquier copa sierra disponible"],
            correctAnswerIndex: 2
          },
          {
            question: "¿Cuál es el error más común al instalar una cerradura por primera vez?",
            options: ["Usar demasiados tornillos", "No verificar las medidas antes de taladrar, arruinando la puerta", "Instalar el cerradero antes que la cerradura", "Usar una broca muy pequeña"],
            correctAnswerIndex: 1
          },
          {
            question: "¿Por qué es importante que el cerradero quede perfectamente alineado con el bulón?",
            options: ["Por razones estéticas únicamente", "Para que la puerta se vea bien cerrada desde afuera", "Para que el bulón entre sin esfuerzo y la cerradura funcione con suavidad y seguridad", "No importa la alineación si los tornillos están bien apretados"],
            correctAnswerIndex: 2
          },
          {
            question: "¿Qué se debe hacer ANTES de marcar y taladrar según el procedimiento profesional?",
            options: ["Lubricar abundantemente la puerta con aceite", "Verificar espacio entre marco y puerta, medir la altura y marcar con precisión", "Instalar primero el cerradero en el marco", "Pintar la puerta para ver mejor las marcas"],
            correctAnswerIndex: 1
          },
          {
            question: "¿Qué herramienta adicional se necesita para instalar cerraduras en puertas METÁLICAS?",
            options: ["Solo el formón", "Pulidora angular y cincel para metal", "Tijeras de hojalata y pegante", "Sierra para madera adaptada"],
            correctAnswerIndex: 1
          },
          {
            question: "¿Qué debe verificarse después de instalar completamente la cerradura?",
            options: ["Que se vea bonita desde afuera", "Que el picaporte y bulón entren y salgan libremente y que la llave accione todos los seguros correctamente", "Que el color combine con la puerta", "Que el cliente no vea cómo se instaló"],
            correctAnswerIndex: 1
          },
          {
            question: "¿Por qué se recomienda practicar en una tabla antes de instalar en una puerta real?",
            options: ["Porque las tablas son más baratas de reemplazar si cometes errores durante el aprendizaje", "Porque las puertas reales no se pueden taladrar", "Porque el formón no funciona en puertas reales", "No se recomienda, es mejor practicar directo en puertas reales"],
            correctAnswerIndex: 0
          }
        ]
      }
    ]
  },
  {
    id: "unit-5",
    title: "Apertura de puertas — técnicas profesionales",
    description: "Estrategias de apertura limpias sin necesidad de usar llaves ni romper mecanismos.",
    driveLink: "PENDIENTE_LINK_DRIVE_MODULO_5",
    youtubeLink: "PENDIENTE_LINK_YOUTUBE_MODULO_5",
    blocks: [
      {
        type: "idea",
        title: "Idea Clave",
        content: "La apertura de puertas es uno de los servicios más solicitados y mejor pagados en cerrajería. Un cerrajero profesional domina múltiples técnicas no destructivas antes de recurrir al taladro. Las técnicas limpias incluyen: ganzúa, bumping, tarjeta/radiografía, varilla y apertura por desbloqueo del bombín. Cada técnica aplica a una situación específica. El diagnóstico correcto de la situación ahorra tiempo y preserva la cerradura del cliente."
      },
      {
        type: "case",
        title: "Técnicas Profesionales de Apertura",
        content: "TÉCNICA DE LA RADIOGRAFÍA: Ideal cuando la puerta se cerró de golpe (solo picaporte activo). Corta la radiografía por la mitad, dóblala para darle rigidez. Introdúcela por la parte superior entre marco y puerta deslizándola hacia el pestillo mientras jalas la puerta hacia ti. TÉCNICA DE LA VARILLA: Consigue una varilla de 1.5 metros, haz un doblez en un extremo. Introdúcela por debajo de la puerta, ubica el manillar interior y jala hacia abajo. GANZÚA: Para bombines de pines, se usa tensión controlada con un giro suave mientras se manipulan los pines uno a uno."
      },
      {
        type: "activity",
        title: "Actividad Práctica",
        content: "Practica la técnica de la radiografía con una puerta de tu casa donde tengas permiso. Cierra la puerta solo con el picaporte (sin pasar el seguro). Prepara la radiografía doblada. Cronométrate: ¿cuánto tardas en abrir? Un profesional lo hace en menos de 30 segundos. Repite hasta lograrlo con fluidez. Recuerda: estas técnicas SOLO deben usarse con autorización del propietario. El uso no autorizado es un delito."
      },
      {
        type: "quiz",
        title: "Evaluación Módulo 5 — 10 preguntas (MÍNIMO 10 CORRECTAS — 100% REQUERIDO)",
        questions: [
          {
            question: "¿En qué situación específica es más efectiva la técnica de la radiografía?",
            options: ["Cuando la puerta tiene 5 vueltas de seguro pasadas", "Cuando la llave está partida dentro del bombín", "Cuando la puerta se cerró de golpe y solo está activo el picaporte biselado", "Cuando la cerradura es electrónica"],
            correctAnswerIndex: 2
          },
          {
            question: "¿Por qué se dobla la radiografía antes de introducirla entre el marco y la puerta?",
            options: ["Para que quepa en espacios más pequeños", "Para darle rigidez y mayor fuerza al deslizarla contra el pestillo", "Para que no se vea desde adentro", "Para poderla reutilizar múltiples veces"],
            correctAnswerIndex: 1
          },
          {
            question: "¿Qué longitud debe tener la varilla para la técnica de apertura por debajo de la puerta?",
            options: ["30 centímetros", "Medio metro", "Un metro y medio (1.5 metros)", "Tres metros o más"],
            correctAnswerIndex: 2
          },
          {
            question: "¿Qué forma debe tener el extremo de la varilla para la técnica de apertura?",
            options: ["Recto y afilado como una aguja", "Doblado en forma de manivela o gancho para poder accionar el manillar interior", "En forma de T para mayor agarre", "Plano y ancho como una espátula"],
            correctAnswerIndex: 1
          },
          {
            question: "¿Cuál es el principio básico de la técnica de ganzúa?",
            options: ["Romper los pines del bombín para que gire libremente", "Aplicar tensión de giro controlada mientras se manipulan los pines uno a uno hasta alinearlos", "Introducir un líquido para lubricar los pines y que giren solos", "Golpear el bombín repetidamente hasta que ceda"],
            correctAnswerIndex: 1
          },
          {
            question: "¿Cuándo NO debe usarse la técnica de la varilla por debajo de la puerta?",
            options: ["Cuando la puerta abre hacia afuera desde el exterior", "Cuando no hay espacio suficiente bajo la puerta para introducir la varilla", "Cuando el manillar interior es de palanca estándar", "Solo cuando el cliente no está presente"],
            correctAnswerIndex: 1
          },
          {
            question: "¿Qué debe hacer el cerrajero SIEMPRE antes de aplicar cualquier técnica de apertura?",
            options: ["Taladrar directamente para ahorrar tiempo", "Verificar la identidad y autorización del propietario del inmueble", "Cobrar el precio completo por adelantado", "Intentar las técnicas más destructivas primero"],
            correctAnswerIndex: 1
          },
          {
            question: "¿Qué ventaja principal tienen las técnicas no destructivas sobre el taladrado?",
            options: ["Son más rápidas en todos los casos", "Preservan la cerradura y la puerta, generando mayor confianza y satisfacción del cliente", "Cuestan más y por eso dan mejor imagen", "Solo funcionan en cerraduras modernas"],
            correctAnswerIndex: 1
          },
          {
            question: "¿Qué es el método de bumping en cerrajería?",
            options: ["Golpear la puerta hasta que el marco ceda", "Usar una llave bumping con golpe controlado para mover los pines del bombín momentáneamente", "Empujar el bombín hacia adentro con un destornillador", "Técnica de masaje para aflojar bisagras oxidadas"],
            correctAnswerIndex: 1
          },
          {
            question: "¿Cuál es la consecuencia legal de usar estas técnicas sin autorización del propietario?",
            options: ["Ninguna, son técnicas públicas y legales siempre", "Se considera allanamiento o robo y puede implicar consecuencias penales graves", "Solo genera una multa económica menor", "Es ilegal solo si el vecino lo reporta"],
            correctAnswerIndex: 1
          }
        ]
      }
    ]
  },
  {
    id: "unit-6",
    title: "Reparación del bombín y extracción de llaves",
    description: "Técnicas avanzadas para afrontar emergencias como llaves partidas o bombines atascados.",
    driveLink: "PENDIENTE_LINK_DRIVE_MODULO_6",
    youtubeLink: "PENDIENTE_LINK_YOUTUBE_MODULO_6",
    blocks: [
      {
        type: "idea",
        title: "Idea Clave",
        content: "La extracción de llaves rotas y la reparación de bombines son emergencias que el cerrajero profesional resuelve con calma y metodología. El error más común del cliente es intentar empujar el trozo de llave rota con la otra mitad: esto lo introduce más y complica enormemente la extracción. La regla de oro es: primero abrir la puerta si es posible, luego desmontar el bombín y trabajar cómodamente en el banco de trabajo."
      },
      {
        type: "case",
        title: "Protocolos de Intervención",
        content: "LLAVE ROTA ACCESIBLE: Usa un extractor de llaves comercial (herramienta fina con gancho) o fabrica uno con alambre acerado. Introduce junto al trozo roto, engancha y extrae con firmeza. BOMBÍN ATASCADO: Lubrica con WD-40 o grafito en polvo. Mueve suavemente la llave mientras aplicas el lubricante. Si persiste, desmonta el bombín para inspección. ÚLTIMO RECURSO - TALADRADO: Taladra en el centro de la 'lentejaqueta' del bombín con broca 1/4, extrayendo los pines uno a uno hasta poder girar el núcleo."
      },
      {
        type: "activity",
        title: "Actividad Práctica",
        content: "Consigue un bombín viejo o económico. Introduce un trozo de llave rota intencionalmente. Practica la extracción con un alambre acerado doblado en forma de uña. Cronométrate. Luego desmonta el bombín completo e identifica cada pin y muelle por su posición. Fotografía el interior. Intenta rearmar el bombín. Esta práctica te prepara para resolver estas emergencias bajo presión real con un cliente esperando."
      },
      {
        type: "quiz",
        title: "Evaluación Módulo 6 — 10 preguntas (MÍNIMO 10 CORRECTAS — 100% REQUERIDO)",
        questions: [
          {
            question: "¿Qué acción debe evitarse a toda costa cuando se rompe una llave dentro del bombín?",
            options: ["Llamar inmediatamente a un cerrajero profesional", "Empujar el trozo de llave rota hacia adentro con la otra mitad de la llave", "Intentar extraer el trozo con una pinza de punta fina", "Lubricar el bombín antes de intentar cualquier extracción"],
            correctAnswerIndex: 1
          },
          {
            question: "¿Qué forma debe tener el extremo del alambre acerado para extraer efectivamente un trozo de llave rota?",
            options: ["Recto y afilado en punta de aguja", "En forma de uña o gancho curvo hacia atrás para enganchar el trozo y halarlo", "En forma de espiral para perforar alrededor del trozo", "Plano y ancho como una espátula pequeña"],
            correctAnswerIndex: 1
          },
          {
            question: "¿Con qué broca recomienda el manual taladrar el bombín como último recurso?",
            options: ["Broca para mampostería de 3/4 pulgada", "Broca de metal de 1/4 pulgada", "Broca de 1/2 pulgada de alta velocidad", "Cualquier broca disponible del mismo diámetro que la llave"],
            correctAnswerIndex: 1
          },
          {
            question: "¿Dónde exactamente se debe taladrar el bombín cuando se usa este método de último recurso?",
            options: ["En los costados del bombín para debilitarlo", "En el centro de la lentejaqueta o 'tabaquito' hasta alcanzar los primeros pines", "En la parte trasera del bombín", "En cualquier punto que permita introducir el taladro"],
            correctAnswerIndex: 1
          },
          {
            question: "¿Qué lubricante se recomienda para un bombín atascado?",
            options: ["Aceite de cocina o mantequilla", "WD-40 o grafito en polvo específico para cerraduras", "Agua con jabón para lavaplatos", "Cualquier aceite industrial pesado"],
            correctAnswerIndex: 1
          },
          {
            question: "¿Cuál es la ventaja de desmontar el bombín antes de intentar extraer la llave rota?",
            options: ["Permite cobrar más por el trabajo de desmontaje adicional", "Permite trabajar cómodamente en el banco con mejor visibilidad y acceso a la llave rota", "Es más rápido que extraer en sitio", "El cliente no puede ver lo que se hace con el bombín desmontado"],
            correctAnswerIndex: 1
          },
          {
            question: "¿Qué indica que un bombín debe ser reemplazado en lugar de reparado?",
            options: ["Cuando tiene más de 5 años de uso", "Cuando los pines están desgastados, dañados por taladrado o el cilindro está fuera de tolerancia y no puede asegurar correctamente", "Cuando el cliente así lo prefiere por estética", "Cuando el precio del bombín nuevo es inferior a 10.000 pesos"],
            correctAnswerIndex: 1
          },
          {
            question: "¿Qué es el extractor de llaves comercial y cuándo se usa?",
            options: ["Es una máquina grande de taller para extraer llaves en serie", "Es una herramienta delgada con dientes o ganchos diseñada para insertar junto a la llave rota y extraerla sin dañar el bombín", "Es un químico disolvente que derrite el metal de la llave rota", "Es el nombre técnico del destornillador de punta plana fino"],
            correctAnswerIndex: 1
          },
          {
            question: "¿Por qué el grafito en polvo es superior al aceite para lubricar cerraduras?",
            options: ["Es más económico y fácil de conseguir", "No atrae polvo ni suciedad como los aceites líquidos, lubricando sin ensuciar el mecanismo a largo plazo", "Tiene un olor más agradable", "El grafito es más viscoso y dura más tiempo"],
            correctAnswerIndex: 1
          },
          {
            question: "¿Qué se debe hacer después de extraer exitosamente una llave rota del bombín?",
            options: ["Cobrar y marcharse inmediatamente", "Inspeccionar el interior del bombín por daños, lubricar, probar con llave nueva y verificar que funciona correctamente antes de entregar al cliente", "Taladrar igualmente como medida preventiva", "Recomendar al cliente cambiar toda la puerta"],
            correctAnswerIndex: 1
          }
        ]
      }
    ]
  },
  {
    id: "unit-7",
    title: "Llaves — referencias, modelos y duplicación",
    description: "Identificación de llaves, candados y cómo crear una llave de la nada (labrado).",
    driveLink: "PENDIENTE_LINK_DRIVE_MODULO_7",
    youtubeLink: "PENDIENTE_LINK_YOUTUBE_MODULO_7",
    blocks: [
      {
        type: "idea",
        title: "Idea Clave",
        content: "El dominio de los tipos de llaves y su duplicación es fundamental para la rentabilidad del negocio. Las llaves se clasifican en: llaves de sierra (bordes dentados estándar), llaves de seguridad/puntos (caras planas con hoyuelos), llaves de paletón (cuello largo cilíndrico para puertas blindadas), llaves cruciformes (forma de cruz) y llaves de alta seguridad (patentadas, con cortes en múltiples dimensiones). Conocer la referencia exacta ahorra tiempo y dinero en el proceso de duplicación."
      },
      {
        type: "case",
        title: "Labrado: Fabricar una Llave Sin Copia Original",
        content: "El labrado es la técnica más avanzada y mejor pagada. Cuando un cliente pierde la única llave de su candado Yale o Globe: Paso 1 - Lima el lateral del candado para exponer los tapones de plomo. Paso 2 - Taladra los 6 primeros tapones con broca 1/4 para extraer resortes y guardas. Paso 3 - Introduce una llave virgen del modelo correcto en el tambor vacío. Paso 4 - Coloca la primera guarda y marca con la lima. Paso 5 - Desbasta hasta que la guarda quede a ras. Paso 6 - Repite para cada guarda (5-6 total). Paso 7 - Sella las cámaras con plomo nuevo."
      },
      {
        type: "activity",
        title: "Actividad Práctica",
        content: "Adquiere 3 llaves vírgenes de diferentes tipos (sierra, seguridad y paletón). Estúdialas e identifica: perfil del corte, número de dientes, referencia en el catálogo. Luego, con una llave de sierra original como modelo, intenta duplicarla manualmente con la lima en una llave virgen del mismo perfil. Compara la llave fabricada con la original bajo una lupa. Este ejercicio desarrolla la precisión manual indispensable para el labrado profesional."
      },
      {
        type: "quiz",
        title: "Evaluación Módulo 7 — 10 preguntas (MÍNIMO 10 CORRECTAS — 100% REQUERIDO)",
        questions: [
          {
            question: "¿Cómo se identifican las llaves de seguridad o 'llaves de puntos'?",
            options: ["Por tener dientes largos en forma de sierra en ambos lados", "Por tener superficies planas con hendiduras circulares o puntos en una o ambas caras", "Por su forma cruciforme o de cruz", "Por ser de color diferente al resto de llaves"],
            correctAnswerIndex: 1
          },
          {
            question: "¿Qué tipo de llave se usa típicamente en puertas blindadas de alta seguridad?",
            options: ["Llave de sierra estándar económica", "Llave de paletón: cuello largo y cilíndrico con dientes al final", "Llave cruciforme estándar", "Llave magnética sin cortes físicos"],
            correctAnswerIndex: 1
          },
          {
            question: "¿Qué es el 'labrado' en cerrajería?",
            options: ["El proceso de limpiar y pulir llaves usadas para revenderlas", "La técnica de fabricar una llave nueva para una cerradura sin tener la llave original como copia", "El nombre del proceso de duplicación en máquina automática", "La decoración artística que se hace en llaves de colección"],
            correctAnswerIndex: 1
          },
          {
            question: "¿Por qué se lima el lateral del candado al inicio del proceso de labrado?",
            options: ["Para debilitar el candado y romperlo más fácilmente", "Para exponer los tapones de plomo que sellan las cámaras de los pines y poder acceder a ellos", "Para marcar el candado con el nombre del cliente", "Para verificar que el candado es de buena calidad"],
            correctAnswerIndex: 1
          },
          {
            question: "¿Cuántas guardas tiene aproximadamente un candado Yale o Globe estándar?",
            options: ["Entre 1 y 2 guardas", "Entre 5 y 6 guardas", "Entre 10 y 12 guardas", "Solo tiene 3 guardas en total"],
            correctAnswerIndex: 1
          },
          {
            question: "¿Cómo se marca correctamente la primera guarda en la llave virgen durante el labrado?",
            options: ["Con un marcador permanente de color", "Introduciendo la llave virgen en el tambor con solo la primera guarda instalada y dando un golpe suave con la lima para hacer la marca", "Midiendo con un calibrador digital y calculando el corte matemáticamente", "Copiando el corte de una foto del candado"],
            correctAnswerIndex: 1
          },
          {
            question: "¿Cómo se sellan las cámaras del candado después de fabricar la nueva llave?",
            options: ["Con pegante epóxico o silicona transparente", "Incrustando nuevos tapones de plomo y martillándolos a ras para dejar el candado como nuevo", "Con cinta adhesiva resistente al agua", "No es necesario sellarlas, pueden quedar abiertas"],
            correctAnswerIndex: 1
          },
          {
            question: "¿Qué es una 'llave virgen' en el contexto de la cerrajería?",
            options: ["Una llave nueva que nunca se ha usado para abrir ninguna cerradura", "Una llave en blanco sin cortes, del perfil correcto, lista para ser cortada o labrada", "Una llave de colección que no debe usarse", "La primera llave que se duplica de una nueva cerradura"],
            correctAnswerIndex: 1
          },
          {
            question: "¿Por qué es importante conocer las referencias de las llaves al trabajar con duplicadoras?",
            options: ["Para poder cobrar más por la duplicación", "Para seleccionar la llave virgen del perfil exacto que encaja en la máquina y produce una copia precisa", "Las referencias solo importan para las llaves de autos", "Para impresionar al cliente con conocimiento técnico"],
            correctAnswerIndex: 1
          },
          {
            question: "¿Cuál es la diferencia práctica entre duplicar una llave y labrar una llave?",
            options: ["No hay ninguna diferencia, son términos sinónimos", "Duplicar requiere una llave original como modelo; labrar es crear la llave desde cero sin copia original, directamente de la cerradura", "El labrado solo lo hacen las máquinas automáticas", "La duplicación es ilegal mientras que el labrado sí está permitido"],
            correctAnswerIndex: 1
          }
        ]
      }
    ]
  },
  {
    id: "unit-8",
    title: "Cómo montar tu negocio de cerrajería",
    description: "Inicia y estabiliza tu negocio aprovechando que tu conocimiento es puro valor.",
    driveLink: "PENDIENTE_LINK_DRIVE_MODULO_8",
    youtubeLink: "PENDIENTE_LINK_YOUTUBE_MODULO_8",
    blocks: [
      {
        type: "idea",
        title: "Idea Clave",
        content: "La cerrajería es uno de los negocios más nobles, rentables y con menor riesgo de saturación del mercado. No requiere local físico inmediato: puedes comenzar como servicio ambulante o a domicilio desde el primer día. Las ventajas competitivas son: baja inversión inicial, alta demanda constante (las cerraduras siempre se dañan), servicio de emergencia 24/7 (los mejores momentos son madrugadas y festivos), y la posibilidad de escalar con empleados o franquicias."
      },
      {
        type: "case",
        title: "Estrategia de Lanzamiento y Crecimiento",
        content: "SEMANA 1-4 (Lanzamiento): Crea tu imagen: nombre del negocio, logo simple, tarjetas de presentación. WhatsApp Business con foto profesional. Ofrece tus servicios a vecinos, familiares y conocidos con precios competitivos. MES 2-3 (Crecimiento): Crea perfil en Google My Business (gratis y muy efectivo). Publica en Facebook Marketplace y grupos locales. MES 4-6 (Consolidación): Busca contratos con conjuntos residenciales, colegios, pequeñas empresas. Considera capacitar un ayudante para ampliar la cobertura y los ingresos."
      },
      {
        type: "activity",
        title: "Actividad Práctica — Plan de Negocio Personal",
        content: "Crea tu plan de negocio básico respondiendo: 1) ¿Cuál será el nombre de tu negocio? 2) ¿Cuál es tu zona geográfica de cobertura? 3) Lista los 5 servicios principales que ofrecerás con sus precios. 4) ¿Cuántos clientes necesitas por semana para cubrir tus gastos básicos? 5) ¿Cómo comunicarás tu servicio en los primeros 30 días? Escribe esto en un documento. Este ejercicio es el primer paso real hacia tu negocio propio."
      },
      {
        type: "quiz",
        title: "Evaluación Final Módulo 8 — 10 preguntas (MÍNIMO 10 CORRECTAS — 100% REQUERIDO)",
        questions: [
          {
            question: "¿Es absolutamente necesario alquilar un local comercial para iniciar el negocio de cerrajería?",
            options: ["Sí, los clientes solo confían en negocios con local físico visible", "No, puedes iniciar en modalidad ambulante o a domicilio exitosamente y abrir local cuando el negocio lo justifique", "Sí, es un requisito legal en Colombia", "Solo si vas a ofrecer duplicación de llaves"],
            correctAnswerIndex: 1
          },
          {
            question: "¿Cuál es la herramienta de marketing GRATUITA más efectiva para un cerrajero que inicia?",
            options: ["Anuncios en televisión nacional", "Google My Business: perfil gratuito que aparece cuando alguien busca 'cerrajero cerca de mí'", "Vallas publicitarias en autopistas", "Página web propia con dominio .com premium"],
            correctAnswerIndex: 1
          },
          {
            question: "¿Por qué los servicios de madrugada y festivos son una oportunidad de oro en cerrajería?",
            options: ["Porque se puede cobrar el doble o triple al no tener competencia disponible en esos momentos", "Porque los clientes están más tranquilos de noche", "Porque las cerraduras se dañan más de noche", "No son buenos momentos, mejor no trabajar en esos horarios"],
            correctAnswerIndex: 0
          },
          {
            question: "¿Qué tipo de clientes representan contratos recurrentes y estables para el cerrajero?",
            options: ["Turistas y visitantes ocasionales de la ciudad", "Conjuntos residenciales, colegios, empresas y centros comerciales con necesidades permanentes de mantenimiento", "Solo clientes de emergencia puntuales", "Personas mayores con problemas de memoria"],
            correctAnswerIndex: 1
          },
          {
            question: "¿Cuál es el mejor punto de partida para conseguir los primeros clientes?",
            options: ["Esperar a que los clientes lleguen solos al no tener local", "Ofrecer servicios a vecinos, familiares y conocidos con precios competitivos para generar primeros testimonios y referencias", "Publicar en periódicos impresos de gran circulación", "Participar en subastas de servicios en línea"],
            correctAnswerIndex: 1
          },
          {
            question: "¿Por qué la cerrajería tiene bajo riesgo de saturación del mercado?",
            options: ["Porque nadie más quiere aprender esta profesión", "Porque la demanda es constante: siempre habrá puertas, cerraduras que se dañan y personas que pierden llaves en todas las ciudades", "Porque el gobierno protege el gremio con leyes especiales", "Porque las cerraduras modernas nunca fallan"],
            correctAnswerIndex: 1
          },
          {
            question: "¿Qué información mínima debe tener una tarjeta de presentación de cerrajero profesional?",
            options: ["Solo el nombre del cerrajero es suficiente", "Nombre del negocio, teléfono/WhatsApp, servicios principales y zona de cobertura", "Solo el número de teléfono y el precio de apertura", "Dirección del local, horario y RUT"],
            correctAnswerIndex: 1
          },
          {
            question: "¿Cuándo es el momento adecuado para capacitar un ayudante o empleado?",
            options: ["Antes de conseguir el primer cliente", "Cuando la demanda supera tu capacidad individual y hay suficientes ingresos para pagar el salario sin comprometer la operación", "Nunca, es mejor trabajar solo siempre", "Desde el primer día para aprender juntos"],
            correctAnswerIndex: 1
          },
          {
            question: "¿Cuál es la estrategia de precios más efectiva al iniciar el negocio?",
            options: ["Cobrar los precios más altos del mercado para aparentar alta calidad desde el inicio", "Cobrar precios competitivos (ni los más baratos ni los más caros) garantizando calidad y construyendo reputación", "Regalar los primeros 50 servicios para conseguir clientes", "Esperar a tener más experiencia antes de definir precios"],
            correctAnswerIndex: 1
          },
          {
            question: "Completaste el curso. ¿Cuál es el primer paso real que debes dar HOY para iniciar tu negocio de cerrajería?",
            options: ["Esperar a terminar otros cursos antes de empezar", "Elegir el nombre de tu negocio, crear tu WhatsApp Business y ofrecer tu primer servicio esta semana", "Ahorrar durante 2 años antes de invertir en herramientas", "Solicitar una licencia especial del gobierno para ejercer"],
            correctAnswerIndex: 1
          }
        ]
      }
    ]
  }
];
