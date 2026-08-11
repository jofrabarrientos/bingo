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
        <h1 class="font-heading text-3xl sm:text-4xl text-[#002b7f] mb-6">Guía Rápida: Cómo organizar una Fonda Familiar en casa</h1>
        
        <div class="space-y-6 text-slate-700 leading-relaxed">
          <p>Si este año decidiste evitar las grandes aglomeraciones y prefieres armar tu propia <strong>fonda en casa</strong>, te compartimos algunos consejos prácticos para que tu celebración sea un éxito rotundo y no tenga nada que envidiarle a las fondas tradicionales:</p>
          
          <h2 class="font-heading text-2xl text-[#d52b1e] mt-8 mb-3">1. Prepara un menú tradicional</h2>
          <p>La comida es el corazón de cualquier celebración chilena. Asegúrate de tener una buena provisión de empanadas de pino recién horneadas, anticuchos jugosos, choripanes con pebre bien cuchareado, y para refrescar la tarde, un heladito mote con huesillo.</p>
          
          <h2 class="font-heading text-2xl text-[#d52b1e] mt-8 mb-3">2. Decora con espíritu festivo</h2>
          <p>Transforma tu patio, terraza o comedor usando guirnaldas tricolores, volantines de papel colgando del techo y, por supuesto, banderas chilenas. Una buena lista de reproducción con cumbias y cuecas de fondo será el toque final para encender el ambiente de tu ramada.</p>
          
          <h2 class="font-heading text-2xl text-[#d52b1e] mt-8 mb-3">3. Define la actividad principal</h2>
          <p>Toda fonda necesita un evento central que reúna a los invitados. Organizar un torneo de bingo es la excusa perfecta para sentar a todos en la mesa. Prepara algunos premios entretenidos o sorpresas para los ganadores, ¡será el momento más esperado y divertido de la tarde!</p>
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
  title: 'Cómo organizar una Fonda Familiar en casa | Bingo CHILENO',
  meta: [
    { name: 'description', content: 'Consejos prácticos para organizar tu propia fonda familiar en casa durante las Fiestas Patrias, incluyendo comida y juegos.' }
  ]
})
</script>
