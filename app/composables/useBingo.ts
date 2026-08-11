export interface BingoConcept {
  id: number
  nombre: string
  emoji: string
}

export interface BingoCell {
  id: number
  nombre: string
  emoji: string
  isFree?: boolean
  displayNumber?: number | string
}

export const CONCEPTOS_BASE: BingoConcept[] = [
  { id: 1, nombre: "Cueca Dancer", emoji: "💃" },
  { id: 2, nombre: "Empanada de Pino", emoji: "🥟" },
  { id: 3, nombre: "Bandera Chilena", emoji: "🇨🇱" },
  { id: 4, nombre: "Terremoto", emoji: "🍹" },
  { id: 5, nombre: "Anticucho", emoji: "🍢" },
  { id: 6, nombre: "Volantín", emoji: "🪁" },
  { id: 7, nombre: "Pareja de Cueca", emoji: "👫" },
  { id: 8, nombre: "Guirnalda", emoji: "🎊" },
  { id: 9, nombre: "Mote con Huesillo", emoji: "🥤" },
  { id: 10, nombre: "Huaso Chileno", emoji: "🤠" },
  { id: 11, nombre: "Poncho Chileno", emoji: "🧥" },
  { id: 12, nombre: "Chicha en Cacho", emoji: "🍷" },
  { id: 13, nombre: "Fondas", emoji: "🎪" },
  { id: 14, nombre: "Trompo", emoji: "🪀" },
  { id: 15, nombre: "Yegua Corralera", emoji: "🐎" },
  { id: 16, nombre: "Empanadas y Vino", emoji: "🥟🍷" },
  { id: 17, nombre: "Bandera Flameando", emoji: "🚩" },
  { id: 18, nombre: "Zapateo", emoji: "👞" },
  { id: 19, nombre: "Fiesta en Parque", emoji: "🌳" },
  { id: 20, nombre: "Botellas de Vino", emoji: "🍾" },
  { id: 21, nombre: "Volantines Colores", emoji: "🪁✨" },
  { id: 22, nombre: "Banda de Cueca", emoji: "🎸" },
  { id: 23, nombre: "Fuegos Artificiales", emoji: "🎆" },
  { id: 24, nombre: "Copihue y Cóndor", emoji: "🦅🌺" }
]

export const useBingo = () => {
  // Algoritmo Fisher-Yates para barajar el array sin mutar el original
  const shuffle = <T>(array: T[]): T[] => {
    const arr = [...array]
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1))
      ;[arr[i], arr[j]] = [arr[j], arr[i]]
    }
    return arr
  }

  // Genera X cartones de Bingo
  const generateCards = (count: number = 1): BingoCell[][] => {
    const cards: BingoCell[][] = []

    for (let c = 0; c < count; c++) {
      const shuffled = shuffle(CONCEPTOS_BASE)
      const cardCells: BingoCell[] = []

      let conceptIdx = 0
      for (let i = 0; i < 25; i++) {
        // En el índice 12 (fila 3, columna 3 - posición 13 en base 1) va la casilla LIBRE
        if (i === 12) {
          cardCells.push({
            id: 0,
            nombre: "LIBRE",
            emoji: "🇨🇱",
            isFree: true,
            displayNumber: "12"
          })
        } else {
          const item = shuffled[conceptIdx]
          cardCells.push({
            id: item.id,
            nombre: item.nombre,
            emoji: item.emoji,
            isFree: false,
            displayNumber: item.id
          })
          conceptIdx++
        }
      }
      cards.push(cardCells)
    }

    return cards
  }

  return {
    conceptos: CONCEPTOS_BASE,
    generateCards,
    shuffle
  }
}
