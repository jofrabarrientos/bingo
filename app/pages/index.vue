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
              <p class="text-xs text-slate-600">Genera desde 1 hasta 1.000 cartones en un solo clic sin registros.</p>
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
                max="1000"
                class="w-32 text-center text-lg font-bold border-2 border-slate-300 focus:border-[#002b7f] rounded-lg py-2 px-3 focus:outline-none transition-colors"
              />
              <span class="text-xs text-slate-500 font-semibold">(Máx. 1.000)</span>
            </div>
          </div>

          <!-- Botones de Acción -->
          <div class="flex flex-wrap items-center gap-3 w-full sm:w-auto justify-center">
            <button 
              @click="handleGenerate"
              class="flex-1 sm:flex-none bg-[#d52b1e] hover:bg-red-700 text-white font-bold py-3 px-6 rounded-xl shadow-lg transition-transform active:scale-95 flex items-center justify-center gap-2 text-base cursor-pointer"
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

        <div class="mt-4 text-center space-y-1">
          <p class="text-xs text-slate-500">
            Cartones generados actualmente: <strong class="text-slate-800 text-sm">{{ generatedCards.length.toLocaleString() }}</strong>
          </p>
          <p v-if="generatedCards.length > 50" class="text-[11px] text-blue-700 font-semibold">
            ℹ️ Vista previa paginada en pantalla. Todos los {{ generatedCards.length.toLocaleString() }} cartones se incluirán al imprimir / PDF en A4.
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

      <div v-else class="space-y-6">
        <!-- VISTA DE PANTALLA (Paginada si hay más de 24 cartones) -->
        <div class="print:hidden space-y-6">
          <!-- Barra de Navegación de Páginas (Superior) -->
          <div v-if="totalPages > 1" class="bg-amber-50 border border-amber-200 rounded-xl p-4 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-sm">
            <div class="text-xs text-amber-900 font-medium">
              Mostrando cartones <strong>{{ startIndex }}</strong> al <strong>{{ endIndex }}</strong> de <strong>{{ generatedCards.length.toLocaleString() }}</strong>
              <span class="text-amber-700 font-bold ml-1">(Página {{ currentPage }} de {{ totalPages }})</span>
            </div>

            <div class="flex items-center gap-2">
              <button 
                @click="prevPage" 
                :disabled="currentPage === 1"
                class="px-3 py-1.5 bg-white border border-slate-300 rounded-lg text-xs font-bold text-slate-700 disabled:opacity-40 disabled:cursor-not-allowed hover:bg-slate-50 transition-colors shadow-sm"
              >
                ◄ Anterior
              </button>

              <span class="text-xs font-bold text-slate-600 px-1">
                {{ currentPage }} / {{ totalPages }}
              </span>

              <button 
                @click="nextPage" 
                :disabled="currentPage === totalPages"
                class="px-3 py-1.5 bg-white border border-slate-300 rounded-lg text-xs font-bold text-slate-700 disabled:opacity-40 disabled:cursor-not-allowed hover:bg-slate-50 transition-colors shadow-sm"
              >
                Siguiente ►
              </button>
            </div>
          </div>

          <!-- Grilla Paginada para Pantalla -->
          <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div 
              v-for="(card, index) in paginatedCards" 
              :key="(currentPage - 1) * pageSize + index"
              class="print-card-wrapper mb-6"
            >
              <div class="text-xs font-bold text-slate-500 mb-1 text-center">
                Cartón #{{ (currentPage - 1) * pageSize + index + 1 }}
              </div>
              <BingoCard :card="card" :card-index="(currentPage - 1) * pageSize + index + 1" />
            </div>
          </div>

          <!-- Barra de Navegación de Páginas (Inferior) -->
          <div v-if="totalPages > 1" class="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-slate-200">
            <span class="text-xs text-slate-500">
              Página {{ currentPage }} de {{ totalPages }} ({{ generatedCards.length.toLocaleString() }} cartones en total)
            </span>
            <div class="flex items-center gap-2">
              <button 
                @click="prevPage" 
                :disabled="currentPage === 1"
                class="px-4 py-2 bg-white border border-slate-300 rounded-lg text-xs font-bold text-slate-700 disabled:opacity-40 disabled:cursor-not-allowed hover:bg-slate-50 transition-colors shadow-sm"
              >
                ◄ Anterior
              </button>

              <button 
                @click="nextPage" 
                :disabled="currentPage === totalPages"
                class="px-4 py-2 bg-white border border-slate-300 rounded-lg text-xs font-bold text-slate-700 disabled:opacity-40 disabled:cursor-not-allowed hover:bg-slate-50 transition-colors shadow-sm"
              >
                Siguiente ►
              </button>
            </div>
          </div>
        </div>

        <!-- VISTA DE IMPRESIÓN COMPLETA (Visible SOLO al imprimir en A4) -->
        <div class="hidden print:block space-y-6">
          <div class="text-center mb-4">
            <h1 class="font-heading text-xl text-[#002b7f]">Bingo CHILENO - Fiestas Patrias</h1>
            <p class="text-xs text-slate-600">Cartones de Juego para Imprimir (Formato A4)</p>
          </div>

          <div class="grid grid-cols-1 gap-6 print:grid-cols-1">
            <div 
              v-for="(card, index) in generatedCards" 
              :key="'print-' + index"
              :class="[
                'print-card-wrapper',
                (index + 1) % 2 === 0 ? 'print-page-break mb-0' : 'mb-6 print:mb-8'
              ]"
            >
              <BingoCard :card="card" :card-index="index + 1" />
            </div>
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

        <!-- Artículos de Interés (Blog) -->
        <div class="space-y-6 pt-10 border-t border-slate-200 mt-10">
          <h4 class="font-heading text-2xl text-[#d52b1e] text-center">Blog y Cultura Dieciochera</h4>
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <NuxtLink to="/blog/reglas-del-bingo-dieciochero" class="bg-white p-5 rounded-xl border-2 border-transparent hover:border-[#002b7f] shadow-sm hover:shadow-md transition-all group flex flex-col h-full">
              <h5 class="font-bold text-lg text-[#2c1d11] group-hover:text-[#002b7f] mb-2">Las Reglas del "Bingo Dieciochero"</h5>
              <p class="text-sm text-slate-600 flex-1">Aprende a jugar esta divertida variante con conceptos tradicionales en lugar de números.</p>
              <span class="text-[#002b7f] text-xs font-bold mt-3 group-hover:underline">Leer artículo →</span>
            </NuxtLink>
            <NuxtLink to="/blog/historia-y-tradicion-juegos-tipicos" class="bg-white p-5 rounded-xl border-2 border-transparent hover:border-[#002b7f] shadow-sm hover:shadow-md transition-all group flex flex-col h-full">
              <h5 class="font-bold text-lg text-[#2c1d11] group-hover:text-[#002b7f] mb-2">Juegos Típicos en Fiestas Patrias</h5>
              <p class="text-sm text-slate-600 flex-1">Descubre por qué la lotería, el bingo y otros juegos son infaltables cada 18 de septiembre.</p>
              <span class="text-[#002b7f] text-xs font-bold mt-3 group-hover:underline">Leer artículo →</span>
            </NuxtLink>
            <NuxtLink to="/blog/guia-rapida-fonda-familiar-en-casa" class="bg-white p-5 rounded-xl border-2 border-transparent hover:border-[#002b7f] shadow-sm hover:shadow-md transition-all group flex flex-col h-full">
              <h5 class="font-bold text-lg text-[#2c1d11] group-hover:text-[#002b7f] mb-2">Cómo organizar una Fonda en casa</h5>
              <p class="text-sm text-slate-600 flex-1">Consejos prácticos para armar tu propia ramada familiar con comida, decoración y juegos.</p>
              <span class="text-[#002b7f] text-xs font-bold mt-3 group-hover:underline">Leer artículo →</span>
            </NuxtLink>
            <NuxtLink to="/blog/como-usar-generador-cartones-bingo" class="bg-white p-5 rounded-xl border-2 border-transparent hover:border-[#002b7f] shadow-sm hover:shadow-md transition-all group flex flex-col h-full">
              <h5 class="font-bold text-lg text-[#2c1d11] group-hover:text-[#002b7f] mb-2">Guía: Generador de Cartones</h5>
              <p class="text-sm text-slate-600 flex-1">Un tutorial paso a paso para crear, previsualizar e imprimir tus cartones de bingo gratis.</p>
              <span class="text-[#002b7f] text-xs font-bold mt-3 group-hover:underline">Leer artículo →</span>
            </NuxtLink>
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
import { ref, computed, onMounted } from 'vue'
import { useBingo, type BingoCell } from '~/composables/useBingo'

// Configuración SEO Mejorada
useHead({
  title: 'Bingo CHILENO - Generador de Cartones de Fiestas Patrias 🇨🇱',
  meta: [
    { name: 'description', content: 'Generador gratis e ilimitado de cartones de Bingo para Fiestas Patrias de Chile. Imprime desde 1 hasta 1.000 cartones en PDF A4 con empanadas, cueca y más.' },
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

// Paginación en Pantalla
const currentPage = ref<number>(1)
const pageSize = ref<number>(24)

const totalPages = computed(() => Math.ceil(generatedCards.value.length / pageSize.value))

const paginatedCards = computed(() => {
  const start = (currentPage.value - 1) * pageSize.value
  return generatedCards.value.slice(start, start + pageSize.value)
})

const startIndex = computed(() => (currentPage.value - 1) * pageSize.value + 1)
const endIndex = computed(() => Math.min(currentPage.value * pageSize.value, generatedCards.value.length))

const handleGenerate = () => {
  const count = Math.min(Math.max(1, requestedCount.value || 1), 1000)
  requestedCount.value = count
  generatedCards.value = generateCards(count)
  currentPage.value = 1
}

const nextPage = () => {
  if (currentPage.value < totalPages.value) {
    currentPage.value++
  }
}

const prevPage = () => {
  if (currentPage.value > 1) {
    currentPage.value--
  }
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
