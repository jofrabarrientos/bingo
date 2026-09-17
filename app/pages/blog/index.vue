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

    <main class="flex-1 max-w-4xl mx-auto px-4 py-12 w-full">
      <div class="text-center mb-10">
        <h1 class="font-heading text-4xl sm:text-5xl text-[#002b7f] mb-4">Blog y Cultura Dieciochera</h1>
        <p class="text-slate-600 text-lg">Descubre artículos sobre tradiciones chilenas, juegos típicos y guías para armar tus fondas en casa.</p>
      </div>
      
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <NuxtLink to="/blog/como-animar-un-bingo-y-ser-el-alma-de-la-fiesta" class="bg-white p-6 rounded-2xl border border-[#e5d5bc] shadow-sm hover:shadow-lg hover:border-[#002b7f] transition-all group flex flex-col h-full">
          <h2 class="font-heading text-2xl text-[#2c1d11] group-hover:text-[#002b7f] mb-3">Guía Definitiva: Cómo Animar un Bingo</h2>
          <p class="text-base text-slate-600 flex-1">Descubre los mejores consejos, cantos tradicionales y tips para animar un bingo chileno con mucho éxito.</p>
          <span class="text-[#d52b1e] font-bold mt-4 flex items-center gap-2 group-hover:gap-3 transition-all">Leer artículo <span>→</span></span>
        </NuxtLink>

        <NuxtLink to="/blog/reglas-del-bingo-dieciochero" class="bg-white p-6 rounded-2xl border border-[#e5d5bc] shadow-sm hover:shadow-lg hover:border-[#002b7f] transition-all group flex flex-col h-full">
          <h2 class="font-heading text-2xl text-[#2c1d11] group-hover:text-[#002b7f] mb-3">Las Reglas del "Bingo Dieciochero"</h2>
          <p class="text-base text-slate-600 flex-1">Aprende a jugar esta divertida variante con conceptos tradicionales en lugar de números.</p>
          <span class="text-[#d52b1e] font-bold mt-4 flex items-center gap-2 group-hover:gap-3 transition-all">Leer artículo <span>→</span></span>
        </NuxtLink>
        
        <NuxtLink to="/blog/historia-y-tradicion-juegos-tipicos" class="bg-white p-6 rounded-2xl border border-[#e5d5bc] shadow-sm hover:shadow-lg hover:border-[#002b7f] transition-all group flex flex-col h-full">
          <h2 class="font-heading text-2xl text-[#2c1d11] group-hover:text-[#002b7f] mb-3">Juegos Típicos en Fiestas Patrias</h2>
          <p class="text-base text-slate-600 flex-1">Descubre por qué la lotería, el bingo y otros juegos son infaltables cada 18 de septiembre.</p>
          <span class="text-[#d52b1e] font-bold mt-4 flex items-center gap-2 group-hover:gap-3 transition-all">Leer artículo <span>→</span></span>
        </NuxtLink>
        
        <NuxtLink to="/blog/guia-rapida-fonda-familiar-en-casa" class="bg-white p-6 rounded-2xl border border-[#e5d5bc] shadow-sm hover:shadow-lg hover:border-[#002b7f] transition-all group flex flex-col h-full">
          <h2 class="font-heading text-2xl text-[#2c1d11] group-hover:text-[#002b7f] mb-3">Cómo organizar una Fonda en casa</h2>
          <p class="text-base text-slate-600 flex-1">Consejos prácticos para armar tu propia ramada familiar con comida, decoración y juegos.</p>
          <span class="text-[#d52b1e] font-bold mt-4 flex items-center gap-2 group-hover:gap-3 transition-all">Leer artículo <span>→</span></span>
        </NuxtLink>
        
        <NuxtLink to="/blog/como-usar-generador-cartones-bingo" class="bg-white p-6 rounded-2xl border border-[#e5d5bc] shadow-sm hover:shadow-lg hover:border-[#002b7f] transition-all group flex flex-col h-full">
          <h2 class="font-heading text-2xl text-[#2c1d11] group-hover:text-[#002b7f] mb-3">Guía: Generador de Cartones</h2>
          <p class="text-base text-slate-600 flex-1">Un tutorial paso a paso para crear, previsualizar e imprimir tus cartones de bingo gratis.</p>
          <span class="text-[#d52b1e] font-bold mt-4 flex items-center gap-2 group-hover:gap-3 transition-all">Leer artículo <span>→</span></span>
        </NuxtLink>

        <NuxtLink to="/blog/mejores-cortes-de-carne-para-el-18" class="bg-white p-6 rounded-2xl border border-[#e5d5bc] shadow-sm hover:shadow-lg hover:border-[#002b7f] transition-all group flex flex-col h-full">
          <h2 class="font-heading text-2xl text-[#2c1d11] group-hover:text-[#002b7f] mb-3">Cortes de Carne para el 18</h2>
          <p class="text-base text-slate-600 flex-1">Descubre los mejores cortes de carne (lomo vetado, entraña, punta picana) para lucirte en la parrilla en Fiestas Patrias.</p>
          <span class="text-[#d52b1e] font-bold mt-4 flex items-center gap-2 group-hover:gap-3 transition-all">Leer artículo <span>→</span></span>
        </NuxtLink>
      </div>
    </main>

    <footer class="bg-[#2c1d11] text-amber-100 py-6 text-center text-xs border-t-4 border-[#002b7f]">
      <p class="font-bold mb-2">Bingo CHILENO - Celebra el 18 con Tradición 🇨🇱</p>
      <NuxtLink to="/privacidad" class="text-amber-200/70 hover:text-amber-100 underline decoration-amber-200/30 hover:decoration-amber-100 transition-colors">Política de Privacidad y Cookies</NuxtLink>
    </footer>
  </div>
</template>

<script setup lang="ts">
useHead({
  title: 'Blog y Cultura Dieciochera | Bingo CHILENO',
  meta: [
    { name: 'description', content: 'Explora artículos sobre las tradiciones de Fiestas Patrias en Chile, guías para fondas en casa y cómo jugar a juegos típicos chilenos.' }
  ]
})
</script>
