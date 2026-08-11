<template>
  <div 
    class="bingo-card print-card-wrapper relative bg-[#fdf8ef] border-4 border-[#4a2e1b] rounded-lg p-3 sm:p-4 shadow-xl max-w-md mx-auto select-none font-body text-[#2c1d11]"
  >
    <!-- Esquinas decorativas festivas (opcional/CSS) -->
    <div class="border-2 border-[#8c5a36] rounded p-2 bg-[#fbf4e6]">

      <!-- ENCABEZADO SUPERIOR -->
      <div class="text-center mb-2 border-b-2 border-[#8c5a36] pb-2">
        <!-- Título Principal -->
        <h2 class="font-heading text-2xl sm:text-3xl tracking-wider text-red-700 uppercase drop-shadow-sm flex items-center justify-center gap-1">
          <span class="text-[#002b7f]">BINGO</span>
          <span class="text-[#d52b1e]">FIESTAS</span>
          <span class="text-[#002b7f]">PATRIAS</span>
        </h2>
        
        <!-- Subtítulo con Banderas -->
        <div class="flex items-center justify-center gap-2 text-xs sm:text-sm font-bold text-slate-800 tracking-widest mt-0.5">
          <span>★</span>
          <span>🇨🇱</span>
          <span class="uppercase tracking-widest text-[#002b7f]">Chile Celebra</span>
          <span>🇨🇱</span>
          <span>★</span>
        </div>
      </div>

      <!-- LETRAS B - I - N - G - O -->
      <div class="grid grid-cols-5 gap-1 mb-1 text-center font-heading text-xl sm:text-2xl font-black">
        <div class="bg-[#f0e2cd] border-2 border-[#4a2e1b] text-[#d52b1e] rounded py-1">B</div>
        <div class="bg-[#f0e2cd] border-2 border-[#4a2e1b] text-[#002b7f] rounded py-1">I</div>
        <div class="bg-[#002b7f] border-2 border-[#4a2e1b] text-white rounded py-1">N</div>
        <div class="bg-[#f0e2cd] border-2 border-[#4a2e1b] text-[#002b7f] rounded py-1">G</div>
        <div class="bg-[#f0e2cd] border-2 border-[#4a2e1b] text-[#d52b1e] rounded py-1">O</div>
      </div>

      <!-- CUADRÍCULA 5x5 DE CASILLAS UNIFORMES -->
      <div class="grid grid-cols-5 grid-rows-5 aspect-square gap-1 border-2 border-[#4a2e1b] bg-[#4a2e1b] p-0.5 rounded">
        <div 
          v-for="(cell, index) in card" 
          :key="index"
          :class="[
            'relative flex flex-col justify-between items-center p-1 rounded-sm border border-[#8c5a36] text-center transition-all w-full h-full overflow-hidden select-none',
            cell.isFree ? 'bg-[#ffe4b5] border-2 border-[#d52b1e]' : 'bg-[#fffdf7]'
          ]"
        >
          <!-- Número de Casilla / ID en la esquina superior derecha -->
          <span class="absolute top-0.5 right-1 text-[10px] sm:text-xs font-bold text-slate-700 leading-none z-10">
            {{ cell.displayNumber }}
          </span>

          <!-- Casilla Central "LIBRE" -->
          <template v-if="cell.isFree">
            <div class="flex-1 flex flex-col justify-center items-center w-full my-auto min-h-0">
              <span class="text-xl sm:text-2xl leading-none">🇨🇱</span>
              <span class="font-heading text-sm sm:text-base text-[#d52b1e] font-black tracking-wider leading-tight mt-0.5">
                LIBRE
              </span>
            </div>
          </template>

          <!-- Casilla Regular -->
          <template v-else>
            <!-- Emoji / Icono Central -->
            <div class="flex-1 flex items-center justify-center pt-2 pb-0.5 min-h-0">
              <span class="text-xl sm:text-2xl md:text-3xl select-none transform hover:scale-110 transition-transform leading-none">
                {{ cell.emoji }}
              </span>
            </div>

            <!-- Nombre del Concepto -->
            <span class="text-[9px] sm:text-[11px] font-extrabold text-[#2c1d11] leading-tight line-clamp-2 px-0.5 mb-0.5 shrink-0">
              {{ cell.nombre }}
            </span>
          </template>
        </div>
      </div>

      <!-- PIE DE CARTÓN -->
      <div class="mt-2 text-center text-xs font-black text-[#002b7f] tracking-widest flex items-center justify-center gap-2">
        <span>🥟</span>
        <span>★ 🇨🇱 ¡A JUGAR! 🇨🇱 ★</span>
        <span>🍷</span>
      </div>

    </div>
  </div>
</template>

<script setup lang="ts">
import type { BingoCell } from '~/composables/useBingo'

defineProps<{
  card: BingoCell[]
  cardIndex?: number
}>()
</script>

<style scoped>
/* Asegurar proporciones idóneas */
.bingo-card {
  box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.15), 0 8px 10px -6px rgba(0, 0, 0, 0.1);
}
</style>
