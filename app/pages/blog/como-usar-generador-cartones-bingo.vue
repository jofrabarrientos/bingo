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
        <h1 class="font-heading text-3xl sm:text-4xl text-[#002b7f] mb-6">¿Cómo usar nuestro Generador de Cartones de Bingo?</h1>
        
        <div class="space-y-6 text-slate-700 leading-relaxed">
          <p>Nuestra plataforma es una herramienta gratuita y fácil de usar, diseñada especialmente para que tengas tus <strong>cartones de bingo para imprimir</strong> listos en cuestión de segundos, sin complicaciones. Solo debes seguir estos 3 simples pasos:</p>
          
          <h2 class="font-heading text-2xl text-[#d52b1e] mt-8 mb-3">Paso 1: Seleccionar la cantidad de cartones</h2>
          <p>Ingresa a nuestra herramienta principal y elige cuántos cartones distintos necesitas generar, dependiendo de la cantidad de familiares y amigos que vayan a participar en el juego.</p>
          
          <h2 class="font-heading text-2xl text-[#d52b1e] mt-8 mb-3">Paso 2: Generar y previsualizar en pantalla</h2>
          <p>Haz clic en el botón de generar. Nuestro sistema creará automáticamente cartones únicos y aleatorios con nuestra colorida temática de fiestas patrias. Podrás ver una previsualización de cómo lucen directamente en tu pantalla para asegurarte de que todo esté perfecto.</p>
          
          <h2 class="font-heading text-2xl text-[#d52b1e] mt-8 mb-3">Paso 3: Imprimir o guardar como PDF</h2>
          <p>Una vez que estés conforme con el resultado, tienes dos opciones: puedes enviarlos directamente a tu impresora si estás conectado a una, o guardarlos como un archivo PDF. Esta última opción es ideal si deseas llevar el archivo en tu celular o en un pendrive a una imprenta local para obtener una calidad profesional y un papel más grueso.</p>
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
  title: 'Cómo usar nuestro Generador de Cartones | Bingo CHILENO',
  meta: [
    { name: 'description', content: 'Manual rápido de 3 pasos para generar, previsualizar e imprimir cartones de bingo chileno gratis para Fiestas Patrias.' }
  ]
})
</script>
