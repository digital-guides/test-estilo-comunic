export interface Question {
  id: number;
  question: string;
  options: {
    A: string;
    B: string;
    C: string;
  };
}

export const questions: Question[] = [
  {
    id: 1,
    question: "Cuando alguien te contradice en una reunión…",
    options: {
      A: "Levanto la voz para dejar claro mi punto.",
      B: "Prefiero callar para evitar conflictos.",
      C: "Expreso mi opinión con firmeza pero con respeto."
    }
  },
  {
    id: 2,
    question: "Si un compañero comete un error que te afecta…",
    options: {
      A: "Se lo digo sin filtro, aunque suene duro.",
      B: "No le digo nada, me lo guardo.",
      C: "Le comento lo sucedido de forma calmada, buscando soluciones."
    }
  },
  {
    id: 3,
    question: "Cuando necesitas pedir ayuda o apoyo…",
    options: {
      A: "Lo exijo, porque considero que es su obligación.",
      B: "No lo pido para no molestar.",
      C: "Lo solicito con claridad y gratitud."
    }
  },
  {
    id: 4,
    question: "Ante una crítica hacia ti…",
    options: {
      A: "Me defiendo de inmediato.",
      B: "Me la creo aunque no sea justa.",
      C: "Escucho, analizo y respondo si lo considero necesario."
    }
  },
  {
    id: 5,
    question: "En una conversación tensa…",
    options: {
      A: "Intento dominar la situación y tener la última palabra.",
      B: "Me paralizo o cedo aunque no esté de acuerdo.",
      C: "Respiro, escucho y busco un punto medio."
    }
  },
  {
    id: 6,
    question: "Si alguien se salta tus límites personales o laborales…",
    options: {
      A: "Reacciono con enojo o sarcasmo.",
      B: "Dejo pasar para no generar incomodidad.",
      C: "Pongo límites de manera respetuosa y firme."
    }
  },
  {
    id: 7,
    question: "Cuando te piden algo que no puedes hacer…",
    options: {
    A: "Digo \"no\" de forma brusca.",
    B: "Digo \"sí\" aunque no pueda, y luego me arrepiento.",
      C: "Explico con claridad mis motivos y propongo alternativas."
    }
  },
  {
    id: 8,
    question: "En un conflicto…",
    options: {
      A: "Busco ganar, sin importar cómo.",
      B: "Evito el tema y espero que se solucione solo.",
      C: "Busco que ambas partes se escuchen y lleguen a un acuerdo."
    }
  },
  {
    id: 9,
    question: "En tu lenguaje corporal y tono habitual…",
    options: {
      A: "Suelo ser dominante o tajante.",
      B: "Suelo ser retraído, bajo el tono.",
      C: "Suelo mantener contacto visual y tono firme pero amable."
    }
  },
  {
    id: 10,
    question: "Al finalizar una conversación difícil…",
    options: {
      A: "Me quedo con enojo o sensación de triunfo.",
      B: "Me quedo frustrado por no haber dicho lo que pensaba.",
      C: "Me quedo tranquilo porque pude expresarme con respeto."
    }
  }
];

export const results = {
  aggressive: {
    title: "Predominancia Agresiva",
    emoji: "🟥",
    description: "Tu estilo de comunicación tiende a ser directo, pero a veces impulsivo o dominante.",
    strengths: "decisión, claridad, liderazgo.",
    risks: "puedes generar resistencia o distancia emocional.",
    recommendation: "Practica la técnica del \"lenguaje yo\" y la escucha activa. Antes de responder, respira y piensa si tu mensaje construye o hiere."
  },
  passive: {
    title: "Predominancia Pasiva",
    emoji: "🟦",
    description: "Tiendes a evitar el conflicto, lo que te lleva a callar tus necesidades o permitir abusos.",
    strengths: "empatía, colaboración.",
    risks: "acumular frustración y sentirte poco valorado.",
    recommendation: "Entrena la expresión directa de tus opiniones. Empieza por frases simples como \"Yo pienso que…\" o \"Me gustaría proponer…\"."
  },
  assertive: {
    title: "Predominancia Asertiva",
    emoji: "🟩",
    description: "Tu estilo de comunicación muestra equilibrio entre respeto y firmeza.",
    strengths: "autocontrol, empatía, liderazgo sano.",
    risks: "caer en sobreexigencia o agotamiento emocional al mantener siempre la calma.",
    recommendation: "Mantén tus prácticas de escucha activa, autoconfianza y límites claros. Eres un modelo positivo de comunicación consciente."
  }
};
