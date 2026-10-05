// =====================================================================
//  TEXTOS.JS  ·  Todo lo que se lee en el juego está acá.
//  Editá solo lo que está entre comillas. No borres comas, llaves ni corchetes.
//  Para poner comillas dentro de un texto usá « » (no uses ").
//  En los diálogos:  "N: ..." narrador · "V: ..." Vale · "Y: ..." vos
//                    "A: ..." amigo · "P: ..." el Mocho
//  Las líneas tipo { mover: ... } son movimientos: no hace falta tocarlas.
// =====================================================================

const TEXTOS = {
  tituloJuego: "Nuestra historia",
  capitulo: "Capítulo 1: Alicia y el policía",
  ella: "Vale",
  el: "Niño",                 // tu nombre en los diálogos
  amigo: "Amigo",
  pablo: "El Mocho",
  rincon: "Nuestro rincón",

  // Contraseña = fecha en que se pusieron de novios.
  // Acepta 5/4/2025, 05-04-2025, 05042025, «5 de abril»...
  contrasena: { dia: 5, mes: 4, anio: 2025 },
  preguntaContrasena: "Para entrar: ¿qué día empezó lo nuestro?",
  pistasContrasena: [
    "Mmm... ¿segura? 🤨",
    "Pista: fue el día del cine 🎬",
    "Pista 2: hubo un tulipán de por medio 🌷",
    "Formato: día/mes/año. Dale, Pekeña, vos podés."
  ],

  // foto: "fotos/1.jpg" → esa foto reemplaza al dibujito en el álbum (opcional)
  niveles: [
    { id: "fiesta", titulo: "Alicia y el policía", fecha: "26/10/2024",
      teaser: "Fiesta de disfraces. Las 3 de la mañana. Un policía con sueño.",
      premio: "Reloj del conejo blanco",
      frase: "Llegaste tarde a la fiesta... pero justo a tiempo para mí.", foto: "" },
    { id: "mensaje", titulo: "Me debés un beso", fecha: "27/10/2024",
      teaser: "Tu Uber llegó. Pero la noche no terminó ahí.",
      premio: "Un VALE por un beso",
      frase: "El VALE más importante que firmé. Lo sigo pagando (con gusto).", foto: "" },
    { id: "puente", titulo: "El puente de mensajes", fecha: "Noviembre 2024",
      teaser: "Un mes de mensajes. Una invitación.",
      premio: "Nuestro chat",
      frase: "Mensaje a mensaje fuimos armando el puente. Del otro lado estabas vos.", foto: "" },
    { id: "cita", titulo: "Primera cita", fecha: "30/11/2024",
      teaser: "Una obra de arte, un auto que no llegó y un pollito frito.",
      premio: "Combo pomilón",
      frase: "Vos pollito frito, yo hamburguesa (obvio). Y en la plaza, por fin, el beso.", foto: "" },
    { id: "rosa", titulo: "La rosa", fecha: "14/02/2025",
      teaser: "San Valentín sin ser novios. Un ramo, un helado y un servidor.",
      premio: "La rosa del portaobjetos",
      frase: "Te la di en el juego, vos la guardaste y yo la pinté para que dure para siempre.", foto: "" },
    { id: "tulipan", titulo: "El tulipán", fecha: "05/04/2025",
      teaser: "Una peli de cubitos, un auto y una pregunta.",
      premio: "Tulipán de cubitos",
      frase: "Tu flor favorita, hecha a mano, para la pregunta más importante.", foto: "" }
  ],

  mensajeBeso: "ME DEBÉS UN BESO",                                        // nivel 2 (letras y espacios)
  puentePalabras: ["¿Querés", "venir", "a ver", "la obra", "de un", "amigo?"], // nivel 3 (6 pedazos)

  secretos: {
    chimichurri: { emoji: "🌿", titulo: "Chimichurri", texto: "El apodo que prometí y nunca usé. Hasta hoy, Chimichurri.", pista: "En la fiesta hay algo que va con el choripán." },
    tiktok:      { emoji: "📱", titulo: "Las 3 AM", texto: "Estaba por irme a dormir. Menos mal que no me fui.", pista: "Alguien no soltaba el celular en la fiesta." },
    uber:        { emoji: "🚗", titulo: "Viaje terminado", texto: "¿Cómo calificás la noche? ★★★★★ (yo le doy 6).", pista: "Algo cruza la calle mientras escribís." },
    bubu:        { emoji: "🐻", titulo: "Bubucita", texto: "Vos sos Bubu, yo soy Dudu. No se discute.", pista: "Una tabla del puente brilla distinto." },
    mocho:       { emoji: "🎨", titulo: "El Mocho", texto: "Artista y culpable de que te dejara sola 5 minutos. Perdón (no tanto).", pista: "Alguien saluda desde una ventana." },
    milka:       { emoji: "🐈‍⬛", titulo: "Milka", texto: "Milka se coló en la primera cita. Ahora vive en tu rincón.", pista: "Una gatita negra mira desde un muro." },
    puflito:     { emoji: "🐱", titulo: "Puflito", texto: "Tu hijo, durmiendo en el servidor. Lógico. Ahora duerme en tu rincón.", pista: "Alguien gordito duerme cerca del río." },
    cofre:       { emoji: "🎁", titulo: "El cofre", texto: "Regalos galácticos adentro de un cofre de cubitos. Esa sos vos.", pista: "En el servidor hay un cofre." },
    chanchito:   { emoji: "🐷", titulo: "Vasos temáticos", texto: "Preparaste vasos para la peli. Detallista nivel: Vale.", pista: "En el cine hay algo rosa para tomar." },
    insistente:  { emoji: "🙅", titulo: "Insistente", texto: "¿Tantas ganas de tocar el No? El botón no se iba a dejar. Yo tampoco.", pista: "Probá el botón que no querés tocar." },
    pomilona:    { emoji: "🍟", titulo: "Pomilona", texto: "Reyes de la tortilla de papa y la salchipapa. Pomilones certificados.", pista: "En tu rincón hay algo para picar." },
    mora:        { emoji: "🐩", titulo: "Mora", texto: "¡Mora estaba abajo de la cama! Ya puede jugar en tu rincón.", pista: "Algo negrito se mueve abajo de la cama." }
  },

  // Frasco para días tristes: se abre 1 por día. BORRADORES: pasalos a tus palabras.
  // Podés agregar todos los que quieras (uno por línea, entre comillas, con coma al final).
  frasco: [
    "Si estás leyendo esto, te aviso que sos la persona más linda que conozco. Y conozco a Benito.",
    "Respirá hondo. Ahora imaginá una salchipapa. ¿Ves? Ya estás un 10% mejor.",
    "Me acuerdo de tus ojos la noche de Alicia. Todavía me ponen nervioso.",
    "Hoy toca: Seventeen a todo volumen y cantar mal. Yo te banco desde acá.",
    "Sos inteligente, la peleás con todo y encima sos linda. Injusto para el resto.",
    "Abrazo de Dudu cargando... ██████ 100%. Recibido, Bubucita.",
    "Puflito te manda a decir que te ama. Yo también, pero él lo dijo primero.",
    "Lo que sea que te pasó hoy no te define. Mañana seguís siendo mi Princesa.",
    "Vale por un abrazo de los largos. Canjeable conmigo, sin vencimiento.",
    "Si estás triste, avisame. Si estás aburrida, también. Si estás pomilona, llevo papas.",
    "Gracias por esperarme todas las veces que el auto me falló. Fueron muchas.",
    "Me encanta cómo te ponés cuando te enojás. No te enojes por esto.",
    "Pensá en algo que hiciste bien esta semana. Ahora sumale que me tenés a mí. Ganaste.",
    "Hoy no hace falta poder con todo. Con poder un poquito alcanza.",
    "Todavía me acuerdo de vos haciéndome de guía en Buenos Aires. La mejor guía del mundo.",
    "Plan de emergencia: ramen, una peli y yo. Decime cuándo y voy.",
    "Te quiero un montón, Pekeña. Así de simple, sin chiste."
  ],

  // Cartas que aparecen solas ese día (formato "MM-DD"). {anios} → «1 año», «2 años»...
  fechas: {
    "10-05": { titulo: "18 meses", texto: "Hoy cumplimos 18 meses. Este juego es mi regalo: tiene un pedacito de cada cosa que me hizo enamorarme de vos.", soloAnio: 2026 },
    "10-26": { titulo: "El día que nos conocimos", texto: "Hoy hace {anios} que nos conocimos. Vos de Alicia, yo de policía y con las piernas temblando. Gracias a tu amiga por pasar el dato: la mejor jugada de la historia.", desde: 2024 },
    "11-30": { titulo: "Primera cita", texto: "Hoy hace {anios} de nuestra primera cita. El auto llegó tarde. Yo llegué enamorado.", desde: 2024 },
    "02-14": { titulo: "San Valentín", texto: "Feliz San Valentín. El primero lo pasamos sin ser novios y yo ya estaba loco por vos.", desde: 2025 },
    "04-05": { titulo: "Aniversario", texto: "Hoy cumplimos {anios} de novios. Gracias por decir que sí (y por no tocar el botón de No... tanto).", desde: 2025 },
    "05-26": { titulo: "¡Feliz cumple, Princesa!", texto: "Hoy el mundo festeja que existís. Yo lo festejo todos los días, pero hoy con torta." },
    "05-27": { titulo: "Cumple de tu Niño", texto: "Hoy cumple tu novio. Sí, el que te hizo este juego. Ya sabés qué hacer (salchipapa)." }
  },

  // Fotos del álbum (pestaña Fotos). Subí las fotos a la carpeta fotos/ y agregalas acá:
  fotos: [
    // { archivo: "fotos/01.jpg", texto: "La noche de Alicia" },
  ],

  recordEl: 150,               // tu récord en «Pomilones» (ella tiene que ganarte)
  frasesEl: ["¿Me extrañabas?", "Te sigo debiendo besos. Muchos.", "Si estás triste, abrí el frasco.", "¿Salchipapa? Salchipapa.", "Sos mi persona favorita. Benito está segundo."],

  ui: {
    frascoNuevo: "Papelito nuevo de hoy",
    frascoHoyYa: "Hoy ya abriste uno. Mañana hay otro 💌",
    frascoVacio: "Ya leíste todos. Pedile más a tu Niño 😉",
    recordDe: "Récord de tu Niño",
    leGanaste: "Le ganaste a tu Niño. Te debe una salchipapa (canjeable, sin vencimiento).",
    hamburguesa: "¡Ey, esa es mi hamburguesa!",
    brocoli: "¡Puaj! 🥦",
    ventana: "Afuera puede pasar cualquier cosa. Acá adentro siempre es de nosotros.",
    visitas: "Llegaron visitas a tu rincón 🐶🐶",
    mascota: "te manda amor 💕"
  },

  // CARTA FINAL: BORRADOR. Pasala a tus palabras (cambiá, cortá, agregá).
  carta:
`Vale:

Si llegaste hasta acá, cruzaste una fiesta llena de disfrazados, armaste un puente de mensajes, me esperaste (otra vez) porque el auto falló y armaste un tulipán de cubitos. O sea, hiciste lo mismo que en la vida real: tenerme paciencia.

Esa noche del 26 de octubre yo me quería ir a dormir. Estaba solo, mirando el celular, sin saber que a unos metros estaba la Alicia más linda que vi en mi vida. Me temblaban las piernas cuando me acerqué. A veces, cuando me mirás, todavía me pasa.

Me encanta la pasión que le ponés a todo, lo inteligente que sos, cómo la peleás y lo tierna que te ponés conmigo. Hasta cómo te ponés cuando te enojás (no se lo digas a nadie).

Gracias por decirme que sí el 5 de abril y por elegirme todos los días desde entonces. Llevamos 18 meses y te sigo debiendo besos.

Este fue el capítulo 1. Los que siguen los escribimos juntos, y el próximo destino lo elegimos los dos.

Te amo, Princesa.`,
  firma: "Nacho, tu Niño",
  finCapitulo: { titulo: "Capítulo 1 completado", sub: "Capítulo 2: próximamente", nota: "El mapa todavía tiene lugares por descubrir.", proximoLugar: "Buenos Aires" }
};

const GUION = {
  bienvenida: [
    "N: Bienvenida a tu rincón, Princesa.",
    "N: Acá se guarda todo lo que consigas en cada recuerdo.",
    "N: Para empezar, abrí el mapa de la pared.",
    "N: Ah... y hay secretos escondidos por todos lados. 👀"
  ],
  fiesta: {
    antes: [
      "N: 26 de octubre de 2024. Cumpleaños de un amigo de un amigo (que terminó siendo amigo).",
      "N: Fiesta de disfraces. 3 de la mañana.",
      { emo: "Y", tipo: "zzz" },
      "Y: Ya fue... me quiero ir a dormir.",
      { mostrar: "V" }, { mover: "V", x: 132, y: 200 },
      "N: Ella llegó tarde. Muy tarde. Como el conejo blanco.",
      "N: Pero llegó vestida de Alicia, y eso lo perdonaba todo.",
      { mostrar: "A" }, { mover: "A", x: 70, y: 236 },
      "A: Che... a la chica de Alicia le parecés lindo. Andá a hablarle.",
      { emo: "Y", tipo: "excl" },
      "Y: ¿¿Qué?? ¿A mí?",
      { temblar: "Y" },
      "N: Le temblaban las piernas. Literal.",
      { mover: "Y", x: 104, y: 214 },
      "Y: Ehh... hola. ¿Quién pone la música?",
      "V: Ni idea, ¡pero está re fuerte!",
      { mover: "A", x: 230, y: 236 },
      "N: Y de repente, todos desaparecieron.",
      "Y: Hay mucha música... ¿vamos afuera a hablar?",
      { emo: "V", tipo: "corazon" },
      "V: Dale.",
      "N: Para salir hay que cruzar la pista. Ojo con los disfrazados."
    ],
    despues: [
      "N: Afuera, por fin, se escuchaban.",
      "N: Hablaron un montón. Se rieron más.",
      "Y: ...¿Te puedo dar un beso?",
      { opciones: ["Sí 💋", "Obvio"] },
      { efecto: "corazones" },
      "N: Y esa noche se quedaron juntos, hablando y besándose."
    ]
  },
  mensaje: {
    antes: [
      "N: Al final de la noche, él tuvo que ir a cambiarse.",
      "Y: ¡Ya vengo! No te vayas.",
      { mover: "Y", x: 240, y: 256 },
      "N: Pero el Uber de ella llegó... y sus amigas ya no esperaban más.",
      { emo: "V", tipo: "gota" },
      "V: Ay, no...",
      { mover: "V", x: -40, y: 256 },
      "N: Se fue sin despedirse. Pero en el auto sacó el celular...",
      "N: Ayudala a escribirle. Letra por letra."
    ],
    despues: [
      "N: Del otro lado, a él le vibró el celular.",
      "N: «Me debés un beso la próxima».",
      { emo: "Y", tipo: "corazon" },
      "Y: ...¿La próxima? ¡¡Hay próxima!!",
      "N: Y así empezaron a hablar."
    ]
  },
  puente: {
    antes: [
      "N: Después de esa noche empezaron a hablar. Todos los días.",
      "N: Mensajes a la mañana, audios a la noche, memes a cualquier hora.",
      "Y: (Tengo que invitarla a algo... ¿pero a qué?)",
      { emo: "Y", tipo: "excl" },
      "Y: (¡Ya sé! La obra de arte del Mocho.)",
      "N: Cada mensaje es una tabla. Armen el puente."
    ],
    despues: [
      { mover: "V", x: 84, y: 176 }, { mover: "Y", x: 108, y: 176 },
      "Y: ¿Querés venir a ver la obra de arte de un amigo?",
      { emo: "V", tipo: "corazon" },
      "V: ¡Dale!",
      "N: Primera cita: confirmada. Ahora solo falta que el auto no falle.",
      "N: (Spoiler: falló.)"
    ]
  },
  cita: {
    antes: [
      "N: 30 de noviembre de 2024. Primera cita.",
      "N: El plan: buscarla en auto. El auto: «no». (Llegadas tarde: 1)",
      { mover: "Y", x: 120, y: 262 },
      { emo: "Y", tipo: "gota" },
      "Y: ¡Perdón, perdón! El auto...",
      { emo: "V", tipo: "corazon" },
      "N: Ella lo esperaba en la puerta. Abrazo.",
      "N: La obra de arte del Mocho. Todo bien... hasta que él se fue a saludarlo.",
      { mover: "Y", x: 220, y: 262 },
      { emo: "V", tipo: "enojo" },
      "V: ...",
      { mover: "Y", x: 120, y: 262 },
      "Y: ¿Qué pasó?",
      "V: Nada.",
      "N: (No era nada.)",
      "N: Pero a la salida, ella le agarró el brazo. Como jarritas.",
      "N: Lleguen juntos a comer. Ojo con los charcos."
    ],
    despues: [
      "V: Pollito frito, por favor.",
      "Y: Hamburguesa. Obvio.",
      "N: Comieron, hablaron un montón y salieron a caminar.",
      { fondo: "plaza" },
      "N: En la plaza, sentados en un banco...",
      "N: ...él, por fin, se animó.",
      { efecto: "corazones" },
      { esperar: 900 }
    ]
  },
  rosa: {
    antes: [
      "N: Febrero de 2025. Primera merienda.",
      "Y: Che... ¿querés hacer algo el 14?",
      { emo: "V", tipo: "corazon" },
      "V: Dale.",
      "Y: (Ya estaba loco por ella.)",
      "N: 14 de febrero. Ella ya lo estaba esperando. Otra vez el auto. (Llegadas tarde: 2)",
      "Y: Te traje esto... 💐",
      "N: Wrap de pollo para él, de cerdo para ella. Y compartieron.",
      "N: Después, helado. Y un regalo con historia...",
      "N: Flashback: el último día en el servidor, antes de verse.",
      "N: Agarrá la rosa y llevala al portaobjetos."
    ],
    despues: [
      "N: Esa rosa ella la guardó en un portaobjetos.",
      "N: Y él la pintó en un cuadro.",
      { emo: "V", tipo: "corazon" },
      "V: ¡¿La pintaste?!",
      "N: Ella le regaló un cofre de cubitos lleno de cosas galácticas.",
      "Y: (Esta chica es perfecta.)"
    ]
  },
  tulipan: {
    antes: [
      "N: 5 de abril de 2025. Estreno de la peli de los cubitos.",
      "N: Ella preparó vasos temáticos para tomar durante la peli.",
      "Y: (En el juego, antes de desconectarme, le di un tulipán rosa. Sus favoritas.)",
      "Y: (Pero el de verdad... lo hice con cubitos de madera.)",
      "Y: Vamos un toque al auto, te tengo que dar algo.",
      "N: Ayudalo a terminar el tulipán, cubito por cubito."
    ],
    pregunta: [
      "Y: Llevamos mucho tiempo conociéndonos...",
      "Y: Y yo estoy dispuesto a dar el paso a que seamos algo más.",
      "Y: Quiero saber si estás en la misma página."
    ],
    textoPregunta: "¿Querés ser mi novia?",
    despues: [
      "N: Dijo que sí. (Los dos dijeron que sí: ya estaban enamorados.)",
      "N: 5 de abril de 2025. Oficialmente novios.",
      { fondo: "combo" },
      "N: Y lo festejaron con el combo de cubitos.",
      "V: Ya somos novios jeje."
    ]
  }
};
