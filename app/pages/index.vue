<template>
  <div class="main-container min-h-screen flex flex-col">
    <!-- BARRA DE NAVEGACIÓN Y CABECERA DE LA LANDING (Se oculta al imprimir) -->
    <header class="print:hidden bg-[#002b7f] text-white shadow-md border-b-4 border-[#d52b1e]">
      <div class="max-w-6xl mx-auto px-4 py-4 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div class="flex items-center gap-3">
          <span class="text-3xl">🇨🇱</span>
          <div>
            <h1 class="font-heading text-2xl sm:text-3xl tracking-wide text-white drop-shadow">
              Bingo <span class="text-[#d52b1e]">CHILENO</span>
            </h1>
            <p class="text-xs text-blue-100 font-semibold">Generador de Cartones para Fiestas Patrias</p>
          </div>
        </div>
        <div class="flex items-center gap-3">
          <a href="#generador" class="bg-[#d52b1e] hover:bg-red-700 text-white font-bold px-4 py-2 rounded-lg shadow text-sm transition-transform active:scale-95">
            ¡Crear Cartones Gratis!
          </a>
        </div>
      </div>
    </header>

    <!-- HERO SECTION / LANDING SEO (Se oculta al imprimir) -->
    <section class="print:hidden bg-gradient-to-b from-[#fbf4e6] to-[#fdf8ef] border-b border-[#e5d5bc] py-12 px-4">
      <div class="max-w-4xl mx-auto text-center space-y-6">
        <div class="inline-flex items-center gap-2 bg-red-100 border border-red-300 text-red-800 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
          <span>🎉</span> ¡Especial 18 de Septiembre! <span>🎉</span>
        </div>

        <h2 class="font-heading text-3xl sm:text-5xl text-[#2c1d11] leading-tight">
          El Juego Oficial para tus <span class="text-[#d52b1e]">Fondas</span> y <span class="text-[#002b7f]">Reuniones Familiares</span>
        </h2>

        <p class="text-base sm:text-lg text-slate-700 max-w-2xl mx-auto leading-relaxed">
          Genera e imprime al instante cartones de Bingo personalizados con las tradiciones, comidas y símbolos más queridos de Chile: Empanadas, Cueca, Terremoto, Volantines y más.
        </p>

        <!-- Características destacadas -->
        <div class="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 text-left">
          <div class="bg-white/80 backdrop-blur p-4 rounded-xl border border-[#e5d5bc] shadow-sm flex items-start gap-3">
            <span class="text-3xl">🎲</span>
            <div>
              <h3 class="font-bold text-[#2c1d11]">100% Aleatorios</h3>
              <p class="text-xs text-slate-600">Cada cartón contiene una combinación única de 24 conceptos típicos chilenos.</p>
            </div>
          </div>
          <div class="bg-white/80 backdrop-blur p-4 rounded-xl border border-[#e5d5bc] shadow-sm flex items-start gap-3">
            <span class="text-3xl">🖨️</span>
            <div>
              <h3 class="font-bold text-[#2c1d11]">Listos para Imprimir</h3>
              <p class="text-xs text-slate-600">Optimizado en formato PDF / Impresión A4 (2 cartones por página).</p>
            </div>
          </div>
          <div class="bg-white/80 backdrop-blur p-4 rounded-xl border border-[#e5d5bc] shadow-sm flex items-start gap-3">
            <span class="text-3xl">⚡</span>
            <div>
              <h3 class="font-bold text-[#2c1d11]">Gratis e ilimitado</h3>
              <p class="text-xs text-slate-600">Genera desde 1 hasta 100 cartones en un solo clic sin registros.</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- PANEL DE CONTROL / GENERADOR (Se oculta al imprimir) -->
    <section id="generador" class="print:hidden py-8 px-4 bg-[#fdf8ef]">
      <div class="max-w-3xl mx-auto bg-white rounded-2xl border-2 border-[#8c5a36] p-6 sm:p-8 shadow-xl">
        <h3 class="font-heading text-2xl text-[#002b7f] text-center mb-6 flex items-center justify-center gap-2">
          <span>⚙️</span> Panel de Control del Bingo
        </h3>

        <div class="flex flex-col sm:flex-row items-center justify-center gap-6">
          <!-- Input Cantidad -->
          <div class="flex flex-col gap-1.5 w-full sm:w-auto">
            <label for="cardCount" class="text-xs font-bold text-slate-700 uppercase tracking-wider">
              Cantidad de Cartones:
            </label>
            <div class="flex items-center gap-2">
              <input 
                id="cardCount"
                v-model.number="requestedCount"
                type="number"
                min="1"
                max="100"
                class="w-28 text-center text-lg font-bold border-2 border-slate-300 focus:border-[#002b7f] rounded-lg py-2 px-3 focus:outline-none transition-colors"
              />
              <span class="text-xs text-slate-500 font-semibold">(Máx. 100)</span>
            </div>
          </div>

          <!-- Botones de Acción -->
          <div class="flex flex-wrap items-center gap-3 w-full sm:w-auto justify-center">
            <button 
              @click="handleGenerate"
              class="flex-1 sm:flex-none bg-[#d52b1e] hover:bg-red-700 text-white font-bold py-3 px-6 rounded-xl shadow-lg transition-transform active:scale-95 flex items-center justify-center gap-2 text-base"
            >
              <span>🔄</span> Generar Cartones
            </button>

            <button 
              @click="handlePrint"
              :disabled="generatedCards.length === 0"
              class="flex-1 sm:flex-none bg-[#002b7f] hover:bg-blue-900 disabled:opacity-50 text-white font-bold py-3 px-6 rounded-xl shadow-lg transition-transform active:scale-95 flex items-center justify-center gap-2 text-base cursor-pointer disabled:cursor-not-allowed"
            >
              <span>🖨️</span> Imprimir / PDF
            </button>
          </div>
        </div>

        <div class="mt-4 text-center">
          <p class="text-xs text-slate-500">
            Cartones generados actualmente: <strong class="text-slate-800">{{ generatedCards.length }}</strong>
          </p>
        </div>
      </div>
    </section>

    <!-- ÁREA DE RENDERIZADO DE CARTONES (Visible en pantalla e impresión) -->
    <main class="flex-1 py-8 px-4 max-w-6xl mx-auto w-full">
      <div v-if="generatedCards.length === 0" class="print:hidden text-center py-12 bg-white/50 rounded-xl border border-dashed border-slate-300">
        <span class="text-5xl block mb-3">🇨🇱</span>
        <p class="text-slate-600 font-semibold text-lg">Aún no has generado ningún cartón.</p>
        <p class="text-slate-500 text-sm">Elige la cantidad arriba y presiona "Generar Cartones".</p>
      </div>

      <div v-else class="space-y-8">
        <!-- Título visible solo al imprimir -->
        <div class="hidden print:block text-center mb-4">
          <h1 class="font-heading text-xl text-[#002b7f]">Bingo CHILENO - Fiestas Patrias</h1>
          <p class="text-xs text-slate-600">Cartones de Juego para Imprimir</p>
        </div>

        <!-- Grilla de Cartones -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 print:grid-cols-1 print:gap-6">
          <div 
            v-for="(card, index) in generatedCards" 
            :key="index"
            :class="[
              'print-card-wrapper',
              (index + 1) % 2 === 0 ? 'print-page-break mb-0' : 'mb-6 print:mb-8'
            ]"
          >
            <div class="print:hidden text-xs font-bold text-slate-500 mb-1 text-center">
              Cartón #{{ index + 1 }}
            </div>
            <BingoCard :card="card" :card-index="index + 1" />
          </div>
        </div>
      </div>
    </main>

    <!-- GUÍA SEO / CONCEPTOS (Se oculta al imprimir) -->
    <section class="print:hidden bg-white border-t border-[#e5d5bc] py-12 px-4 mt-auto">
      <div class="max-w-4xl mx-auto space-y-8">
        <div class="text-center">
          <h3 class="font-heading text-2xl text-[#2c1d11] mb-2">Conceptos Tradicionales Incluidos</h3>
          <p class="text-sm text-slate-600">Cada cartón contiene 24 símbolos chileneros distribuidos al azar:</p>
        </div>

        <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 text-sm">
          <div 
            v-for="item in conceptos" 
            :key="item.id"
            class="bg-[#fdf8ef] border border-[#e5d5bc] p-2.5 rounded-lg flex items-center gap-2.5"
          >
            <span class="text-xl">{{ item.emoji }}</span>
            <span class="font-semibold text-slate-800 text-xs sm:text-sm">{{ item.nombre }}</span>
          </div>
        </div>

        <!-- FAQ SEO -->
        <div class="space-y-4 pt-6 border-t border-slate-100">
          <h4 class="font-heading text-xl text-[#002b7f] text-center">Preguntas Frecuentes sobre el Bingo Chileno</h4>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs sm:text-sm text-slate-600">
            <div class="bg-slate-50 p-4 rounded-xl border border-slate-200">
              <h5 class="font-bold text-slate-800 mb-1">¿Cómo se juega al Bingo de Fiestas Patrias?</h5>
              <p>El animador nombra al azar los conceptos típicos chilenos (ej. "¡Empanada de Pino!"). Los jugadores marcan el icono en su cartón. El primero en completar una línea o cartón lleno grita ¡BINGO! o ¡TIQUI TIQUI TI!</p>
            </div>
            <div class="bg-slate-50 p-4 rounded-xl border border-slate-200">
              <h5 class="font-bold text-slate-800 mb-1">¿Cómo guardar en PDF para imprimir?</h5>
              <p>Haz clic en "Imprimir / PDF". En la ventana de impresión de tu navegador, selecciona "Guardar como PDF" en el destino de la impresora.</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- FOOTER (Se oculta al imprimir) -->
    <footer class="print:hidden bg-[#2c1d11] text-amber-100 py-6 text-center text-xs border-t-4 border-[#002b7f]">
      <p class="font-bold">Bingo CHILENO - Celebra el 18 con Tradición 🇨🇱</p>
    </footer>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useBingo, type BingoCell } from '~/composables/useBingo'

// Configuración SEO Mejorada
useHead({
  title: 'Bingo CHILENO - Generador de Cartones de Fiestas Patrias 🇨🇱',
  meta: [
    { name: 'description', content: 'Generador gratis e ilimitado de cartones de Bingo para Fiestas Patrias de Chile. Imprime cartones con empanadas, cueca, terremoto y más tradiciones.' },
    { property: 'og:title', content: 'Bingo CHILENO - Generador de Cartones de Fiestas Patrias' },
    { property: 'og:description', content: 'Crea e imprime cartones aleatorios de Bingo costumbrista para celebrar el 18 de Septiembre en familia y fondas.' },
    { property: 'og:type', content: 'website' },
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'keywords', content: 'bingo chileno, fiestas patrias, 18 de septiembre, fondas, cartones de bingo para imprimir, juegos chilenos, cueca, terremoto' }
  ],
  script: [
    {
      type: 'application/ld+json',
      children: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'WebApplication',
        'name': 'Bingo CHILENO',
        'applicationCategory': 'GameApplication',
        'operatingSystem': 'All',
        'description': 'Generador e impresor de cartones de bingo festivo para Fiestas Patrias de Chile.'
      })
    }
  ]
})

const { conceptos, generateCards } = useBingo()

const requestedCount = ref<number>(4)
const generatedCards = ref<BingoCell[][]>([])

const handleGenerate = () => {
  const count = Math.min(Math.max(1, requestedCount.value || 1), 100)
  requestedCount.value = count
  generatedCards.value = generateCards(count)
}

const handlePrint = () => {
  if (typeof window !== 'undefined') {
    window.print()
  }
}

// Generar 4 cartones por defecto al iniciar
onMounted(() => {
  handleGenerate()
})
</script>
