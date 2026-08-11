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
        <h1 class="font-heading text-3xl sm:text-4xl text-[#002b7f] mb-6">Historia y Tradición de los Juegos Típicos en Fiestas Patrias</h1>
        
        <div class="space-y-6 text-slate-700 leading-relaxed">
          <p>La llegada del 18 de septiembre no solo significa el inicio de la primavera, sino también el momento perfecto para reencontrarnos y compartir en familia. Históricamente, las <strong>fiestas patrias</strong> han estado acompañadas de espacios de esparcimiento donde grandes y chicos se reúnen en torno a una mesa o en el patio de la casa para celebrar nuestras raíces.</p>
          
          <p>Los juegos de salón y de mesa, como la tradicional lotería y el bingo, son grandes clásicos de estas fechas. Su inmensa popularidad radica en que son actividades intergeneracionales: desde los abuelos hasta los nietos pueden participar en igualdad de condiciones, fortaleciendo los lazos familiares entre risas y una sana competencia.</p>
          
          <p>Además de estos juegos de salón, nuestra cultura es sumamente rica en <strong>juegos típicos chilenos</strong> que llenan de vida y energía las celebraciones. Es común que, después de una buena ronda de bingo, los más entusiastas salgan al patio a probar su destreza con el trompo, intentar achuntarle al emboque, o medir su puntería en una tradicional cancha de rayuela. Todos estos elementos, en conjunto, crean la atmósfera perfecta de chilenidad.</p>
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
  title: 'Historia y Tradición de los Juegos Típicos | Bingo CHILENO',
  meta: [
    { name: 'description', content: 'Descubre por qué los juegos típicos y de salón como el bingo son fundamentales en las celebraciones de Fiestas Patrias en Chile.' }
  ]
})
</script>
