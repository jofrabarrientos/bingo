<template>
  <div class="min-h-screen flex flex-col bg-[#fdf8ef]">
    <header class="bg-[#002b7f] text-white shadow-md border-b-4 border-[#d52b1e]">
      <div class="max-w-4xl mx-auto px-4 py-4 flex items-center justify-between">
        <NuxtLink to="/" class="flex items-center gap-2 hover:opacity-80 transition-opacity">
          <span class="text-2xl">⬅️</span>
          <span class="font-bold text-sm sm:text-base">Volver al Generador</span>
        </NuxtLink>
        <h2 class="font-heading text-xl text-white drop-shadow hidden sm:block">
          Bingo <span class="text-[#d52b1e]">CHILENO</span>
        </h2>
      </div>
    </header>

    <main class="flex-1 max-w-3xl mx-auto px-4 py-12 w-full">
      <article class="bg-white rounded-2xl shadow-sm border border-[#e5d5bc] p-6 sm:p-10">
        <h1 class="font-heading text-3xl sm:text-4xl text-[#002b7f] mb-6">Las Reglas del "Bingo Dieciochero"</h1>
        
        <div class="space-y-6 text-slate-700 leading-relaxed">
          <p>El clásico juego de salón se viste de gala para celebrar a nuestro país. A diferencia del formato tradicional con números, nuestro <strong>bingo dieciochero</strong> está diseñado con los conceptos y tradiciones más arraigadas, ofreciendo una experiencia única y cultural. Si te preguntas cómo se juega esta variante tan popular de <strong>bingo Chile</strong>, aquí te explicamos las reglas básicas.</p>
          
          <p>En lugar de que el locutor o animador grite el clásico "¡O-75!", en este juego tendrá que "cantar" en voz alta elementos de nuestra identidad nacional. Imagina la emoción al escuchar "¡Mote con Huesillo!", "¡La Cueca!" o "¡El Copihue!". Cada vez que se cante un concepto, los jugadores deben buscarlo y marcarlo en sus cartones.</p>
          
          <h2 class="font-heading text-2xl text-[#d52b1e] mt-8 mb-4">Modalidades para Ganar</h2>
          <p>Para ganar y gritar "¡Bingo!" con orgullo, existen varias modalidades que puedes acordar con tu familia antes de empezar:</p>
          
          <ul class="list-disc pl-6 space-y-3">
            <li><strong>Línea Horizontal o Vertical:</strong> El primer jugador en completar una fila o columna entera.</li>
            <li><strong>Línea Diagonal:</strong> Quien logre marcar una línea cruzada de extremo a extremo en su cartón.</li>
            <li><strong>Cartón Lleno:</strong> El premio mayor. Se lo lleva quien sea el primero en marcar todos los conceptos de su tarjeta. ¡Es el momento perfecto para entregar el premio principal de la jornada!</li>
          </ul>
        </div>
      </article>
    </main>

    <footer class="bg-[#2c1d11] text-amber-100 py-6 text-center text-xs border-t-4 border-[#002b7f]">
      <p class="font-bold">Bingo CHILENO - Celebra el 18 con Tradición 🇨🇱</p>
    </footer>
  </div>
</template>

<script setup lang="ts">
useHead({
  title: 'Reglas del Bingo Dieciochero | Bingo CHILENO',
  meta: [
    { name: 'description', content: 'Aprende cómo jugar al bingo dieciochero, una variante tradicional del bingo en Chile ideal para Fiestas Patrias.' }
  ]
})
</script>
