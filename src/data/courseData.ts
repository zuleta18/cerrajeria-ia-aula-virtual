import { CourseUnit } from '../types';

export const courseData: CourseUnit[] = [
  {
    id: "unit-1",
    title: "Historia y fundamentos de la cerrajería",
    description: "Conoce los orígenes de la cerrajería, desde sus inicios rudimentarios hasta las aportaciones romanas y modernas.",
    blocks: [
      {
        type: "idea",
        title: "Idea Clave",
        content: "Es una necesidad el de sentirse seguro es algo natural del ser humano. En teoría se cree que los cerrojos fueron inventados por los chinos hace más de 4,000 años, y fueron implementados en Egipto y Babilonia con llaves de madera."
      },
      {
        type: "case",
        title: "Evolución Histórica",
        content: "Fueron los romanos quienes crearon un sistema de seguridad con cierres y la vuelta de la llave. Desarrollaron los pernos, guardas y un elemento importante: los muelles. Siglos después, Linos Yale y su hijo revolucionaron el mundo de las cerraduras inventando el modelo de tambor de pines."
      },
      {
        type: "activity",
        title: "Actividad Práctica",
        content: "La finalidad de este paso a paso es realizar los trabajos de cerrajería con previo conocimiento. Prepárate para aprender a reparar cerraduras y aplicar técnicas para cambiar componentes basados en el desarrollo histórico hasta llegar a las llaves maestras modernas."
      },
      {
        type: "quiz",
        title: "Test Rápido",
        questions: [
          {
            question: "¿Quiénes inventaron los cerrojos hace más de 4,000 años usando llaves de madera?",
            options: ["Los romanos", "Los chinos", "Los griegos"],
            correctAnswerIndex: 1
          },
          {
            question: "¿Qué aportación importante desarrollaron los romanos para las cerraduras metálicas?",
            options: ["Los muelles y pernos", "Las tarjetas magnéticas", "Los pasadores de plástico"],
            correctAnswerIndex: 0
          },
          {
            question: "¿Quiénes revolucionaron el mundo de las cerraduras en el siglo XVIII con el tambor de pines?",
            options: ["Los egipcios", "Los romanos", "Linos Yale y su hijo"],
            correctAnswerIndex: 2
          }
        ]
      }
    ]
  },
  {
    id: "unit-2",
    title: "Herramientas esenciales para empezar",
    description: "Lo que necesitas para iniciar tu negocio de cerrajerío sin invertir una fortuna.",
    blocks: [
      {
        type: "idea",
        title: "Idea Clave",
        content: "Las herramientas que necesitas son muy pocas, no requieren grandes cantidades de dinero. El equipo más básico no cuesta más de $1.000.000 COP (aprox 350 USD)."
      },
      {
        type: "case",
        title: "La inversión inicial",
        content: "Para iniciar tu negocio, lo ideal sería invertir en una duplicadora de llaves de buena calidad, pero si solo vas a probar cómo te va, una máquina china es la más conveniente y económica para recuperar tu inversión rápidamente."
      },
      {
        type: "activity",
        title: "Actividad Práctica",
        content: "Arma tu kit de trabajo: Adquiere un taladro (con brocas 5/64, 1/8, 3/16, 1/4), una pulidora pequeña, extensión eléctrica, destornilladores, alicates, llave expansiva, limas (triangular y redonda o rabo de ratón), remachadora y un martillo."
      },
      {
        type: "quiz",
        title: "Test Rápido",
        questions: [
          {
            question: "¿Cuál de estas herramientas es esencial y más costosa al iniciar?",
            options: ["Máquina duplicadora de llaves", "Torno industrial", "Soldadora eléctrica"],
            correctAnswerIndex: 0
          },
          {
            question: "¿Cuánto es la inversión básica estimada para herramientas según el manual?",
            options: ["Más de 5000 USD", "No más de 350 USD (1 millón COP)", "Se necesitan 10.000 USD"],
            correctAnswerIndex: 1
          },
          {
            question: "¿Qué tipos de lima recomienda el manual para la cerrajería?",
            options: ["Lima cuadrada y pulidora manual", "Lima de madera", "Lima triangular y lima redonda (rabo de ratón)"],
            correctAnswerIndex: 2
          }
        ]
      }
    ]
  },
  {
    id: "unit-3",
    title: "Tipos de cerraduras y sus componentes",
    description: "Conoce desde cero la anatomía de las cerraduras de incrustar y sobreponer.",
    blocks: [
      {
        type: "idea",
        title: "Idea Clave",
        content: "Existen tres tipos principales: cerraduras de incrustar (embutir), cerraduras de sobreponer y cerrojos/pasadores. También son comunes las cerraduras cilíndricas o de alcobas. Todas comparten un sistema mecánico universal."
      },
      {
        type: "case",
        title: "Componentes Universales",
        content: "Las partes externas incluyen el frontal, picaporte, émbolo (o bulón), bombín, manillar y cerradero. Las internas: tapa de ajuste, muelle primario, leva del pestillo y la nuez. El bombín es la pieza clave extraíble donde entra la llave."
      },
      {
        type: "activity",
        title: "Actividad Práctica",
        content: "Para desmontar partes internas, quita pieza por pieza y organízalas ordenadamente de izquierda a derecha. Al volver a armar, utiliza la técnica inversa: toma la última pieza que quitaste (a la derecha) y monta hacia la izquierda."
      },
      {
        type: "quiz",
        title: "Test Rápido",
        questions: [
          {
            question: "¿Cuáles son los tres tipos de cerraduras principales que describe el manual?",
            options: ["Mecánicas, magnéticas y electrónicas", "De incrustar, de sobreponer y cerrojos/pasadores", "De madera, de aluminio y de vidrio"],
            correctAnswerIndex: 1
          },
          {
            question: "¿Qué pieza externa entra y sale al accionar el manillar o la llave?",
            options: ["El picaporte o pestillo", "La caja de ajuste", "El muelle primario"],
            correctAnswerIndex: 0
          },
          {
            question: "¿Cómo sugiere el manual organizar las piezas al desarmar una cerradura?",
            options: ["Mezcladas en agua para limpiarlas", "De izquierda a derecha para no confundirte al armar", "No importa el orden"],
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
    blocks: [
      {
        type: "idea",
        title: "Idea Clave",
        content: "Para instalar la cerradura de incrustar o sobreponer, la medida estándar para la altura es de 90 centímetros a 1 metro, contado desde el piso hacia arriba."
      },
      {
        type: "case",
        title: "Toma de Medidas",
        content: "Antes de taladrar, es vital comprobar el espacio entre el marco y la puerta: debe haber 1 centímetro. Saca el centro del cerradero y de la cerradura para que los bulones y picaportes se enfrenten perfectamente en un ángulo recto."
      },
      {
        type: "activity",
        title: "Actividad Práctica",
        content: "Sobrepón la cerradura y marca el perfil de la puerta. Utiliza el taladro (con broca 1/4) para delinear y con ayuda del formón (en madera) o cincel/pulidora (en metal) extrae el sobrante. Finalmente haz el hueco para el bombín con copa sierra de 32 mm."
      },
      {
        type: "quiz",
        title: "Test Rápido",
        questions: [
          {
            question: "¿A qué altura del piso se debe instalar la cerradura por norma general?",
            options: ["A 50 centímetros", "A 2 metros de altura", "De 90 centímetros a 1 metro"],
            correctAnswerIndex: 2
          },
          {
            question: "¿Qué espacio ideal debe haber entre el marco y la puerta para instalar?",
            options: ["1 centímetro", "Ninguno, deben rozar", "5 centímetros"],
            correctAnswerIndex: 0
          },
          {
            question: "¿Qué herramientas perfecionan la caja para incrustar en puertas de madera?",
            options: ["Prensa y alicate", "Formón y martillo", "Lima redonda únicamente"],
            correctAnswerIndex: 1
          }
        ]
      }
    ]
  },
  {
    id: "unit-5",
    title: "Apertura de puertas — técnicas profesionales",
    description: "Estrategias de apertura limpias sin necesidad de usar llaves ni de romper mecanismos.",
    blocks: [
      {
        type: "idea",
        title: "Idea Clave",
        content: "Uno de los trabajos más comunes. Las cerraduras más viejas suelen ser fáciles de abrir sin llave mediante técnicas limpias. Hay varios métodos: ganzúa, método bumping y apertura con tarjeta/radiografía o varilla."
      },
      {
        type: "case",
        title: "La Técnica de la Radiografía",
        content: "Sirve cuando la cerradura se cerró 'de golpe' (solo picaporte). Corta una radiografía por la mitad y dóblala para que sea más fuerte. Introdúcela por la parte superior entre marco y puerta, y deslízala hacia el pestillo mientras jalas la puerta hacia ti."
      },
      {
        type: "activity",
        title: "Actividad Práctica",
        content: "Método de la varilla: Consigue una varilla de un metro y medio (1.1/2). Hazle un doblez en un extremo como manivela. Introdúcela por debajo de la puerta, levántala suavemente, ubica desde adentro el manillar y jala hacia abajo para abrir."
      },
      {
        type: "quiz",
        title: "Test Rápido",
        questions: [
          {
            question: "¿Qué debe hacerse a la radiografía antes de introducirla por el marco?",
            options: ["Cortarla por la mitad y doblarla para que tenga más fuerza", "Mojarla con agua", "Quemar los bordes para afilarlos"],
            correctAnswerIndex: 0
          },
          {
            question: "¿En qué situación es más eficaz el método de la varilla por debajo de la puerta?",
            options: ["Cuando una puerta blindada tiene todas las vueltas pasadas", "Cuando la llave está partida dentro", "Cuando la puerta se cerró solo del picaporte o jaladera por accidente"],
            correctAnswerIndex: 2
          },
          {
            question: "¿Qué longitud aproximada requiere la varilla para la técnica por debajo de la puerta?",
            options: ["Medio metro", "Un metro y medio (1.5 m)", "Tres metros"],
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
    blocks: [
      {
        type: "idea",
        title: "Idea Clave",
        content: "Si una llave se rompe, intentar usar la otra mitad para empujarla y abrir solo empeorará el problema. Cuanto más lejos empujes la pieza, más difícil será retirarla. En última instancia, si se puede abrir la puerta, el bombín se desmonta."
      },
      {
        type: "case",
        title: "El Recurso del Taladro",
        content: "Si todos los métodos de apertura no destructivos fallan, el último recurso es taladrar el bombín. Se debe taladrar en el centro de la lentejaqueta o 'tabaquito' hasta el primer pistón con broca de 1/4, extrayendo los muelles uno a uno."
      },
      {
        type: "activity",
        title: "Actividad Práctica",
        content: "Para extracción con alambre: Toma un trozo de alambre acerado y haz en su punta una pequeña curva en forma de uña. Introdúcelo suavemente junto al trozo de llave rota y jala firmemente hacia atrás para enganchar y extraer el trozo."
      },
      {
        type: "quiz",
        title: "Test Rápido",
        questions: [
          {
            question: "¿Qué acción se debe evitar a toda costa cuando se rompe una llave dentro?",
            options: ["Llamar a un profesional inmediatamente", "Empujar el resto de la llave rota con la otra mitad", "Usar un extractor o alambre con punta"],
            correctAnswerIndex: 1
          },
          {
            question: "¿Qué forma debe tener el alambre acerado para extraer el pedazo de llave?",
            options: ["En forma de cruz", "En forma de uña hacia atrás para enganchar y halar", "Redonda y plana"],
            correctAnswerIndex: 1
          },
          {
            question: "¿Con qué broca recomienda el manual taladrar el bombín en caso de ser estrictamente necesario?",
            options: ["Broca de 1/4", "Broca de 3/4 o más grande", "Broca para mampostería"],
            correctAnswerIndex: 0
          }
        ]
      }
    ]
  },
  {
    id: "unit-7",
    title: "Llaves — referencias, modelos y duplicación",
    description: "Identificación de llaves, candados y cómo crear una llave de la nada (labrado).",
    blocks: [
      {
        type: "idea",
        title: "Idea Clave",
        content: "Aprende a diferenciar: Llaves de sierra (bordes dentados), de seguridad/puntos (caras planas con hoyuelos), paletón (cuello largo para puertas blindadas) y cruciformes (forma de cruz). Conocer las referencias te ahorra tiempo."
      },
      {
        type: "case",
        title: "Fabricar Llave para Candado Sin Copia",
        content: "Un cliente pierde la llave de su candado Yale o Globe. La técnica maestra es limar el lateral del candado para ver los tapones de plomo. Se taladran los 6 primeros para sacar resortes y guardas y así labrar la nueva llave virgen."
      },
      {
        type: "activity",
        title: "Actividad Práctica",
        content: "Para labrar la llave: Introduce la llave virgen en el tabaquito vacío del candado. Pon solo la primera guarda y da un golpe suave con la lima para marcar. Desbasta con la lima hasta que la guarda quede a ras. Así hasta cubrir las 5 o 6 guardas."
      },
      {
        type: "quiz",
        title: "Test Rápido",
        questions: [
          {
            question: "¿Cómo se identifica a las llaves denominadas 'de seguridad'?",
            options: ["Tienen dientes largos en la punta de un tubo", "Por poseer bordes planos con hendiduras o puntos en ambas caras", "Forma de cruz cilíndrica"],
            correctAnswerIndex: 1
          },
          {
            question: "¿Qué nombre recibe la llave de diseño alargado y cilíndrico que termina en dientes para puertas blindadas?",
            options: ["Llave paleta o paletón", "Llave estándar sierra", "Llave automotriz"],
            correctAnswerIndex: 0
          },
          {
            question: "¿Cómo vuelves a sellar las cámaras de un candado tras fabricarle llave nueva?",
            options: ["Con silicona y pegante", "Incrustando trozos de plomo y martillándolos a ras", "Dejándolas abiertas"],
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
    blocks: [
      {
        type: "idea",
        title: "Idea Clave",
        content: "El arte de la cerrajería es un negocio noble y muy rentable que exige poca inversión. No es necesario disponer de un local físico de inmediato; lo puedes ejercer desde tu casa como servicio ambulante o a domicilio."
      },
      {
        type: "case",
        title: "Clientes en Toda Parte",
        content: "Piensa, ¿cuántas puertas hay solo en tu cuadra? Museos, colegios, condominios, carros. Prestar un buen servicio de forma rápida genera alta confianza. La gente prefiere gastar dinero asegurando sus bienes que arriesgándose."
      },
      {
        type: "activity",
        title: "Actividad Práctica",
        content: "Diseña tu publicidad para redes sociales y el 'voz a voz'. Enfócate en ofrecer estos servicios inmediatos: apertura sin llave, extracción, instalaciones completas y copias de seguridad. Garantiza siempre precios claros para evitar desconfianza."
      },
      {
        type: "quiz",
        title: "Test Rápido",
        questions: [
          {
            question: "¿Es absolutamente necesario alquilar un local para iniciar el negocio?",
            options: ["Sí, para que las personas confíen", "No, puedes operar en modalidad ambulante o por domicilio de manera exitosa", "Sí, es requisito legal"],
            correctAnswerIndex: 1
          },
          {
            question: "¿Cuál es el mejor punto a favor para construir una clientela como cerrajero?",
            options: ["Cobrar excesivamente caro para aparentar calidad", "Prestar un buen servicio de forma rápida", "Solo cobrar si requiere destruir la puerta"],
            correctAnswerIndex: 1
          },
          {
            question: "¿Qué oportunidad de mercado aprovechan los cerrajeros independientes?",
            options: ["La poca cantidad de puertas en las ciudades", "La escasez extrema de llaves vírgenes", "La alta densidad de puertas y candados presentes en casas, edificios y oficinas"],
            correctAnswerIndex: 2
          }
        ]
      }
    ]
  }
];
