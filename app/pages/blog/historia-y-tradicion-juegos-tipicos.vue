<template>
  <div class="min-h-screen flex flex-col bg-[#fdf8ef]">
    <header class="bg-[#002b7f] text-white shadow-md border-b-4 border-[#d52b1e]">
      <div class="max-w-4xl mx-auto px-4 py-4 flex items-center justify-between">
        <NuxtLink to="/blog" class="flex items-center gap-2 hover:opacity-80 transition-opacity">
          <span class="text-2xl">⬅️</span>
          <span class="font-bold text-sm sm:text-base">Volver al Blog</span>
        </NuxtLink>
        <h2 class="font-heading text-xl text-white drop-shadow hidden sm:block">
          Bingo <span class="text-[#d52b1e]">CHILENO</span>
        </h2>
      </div>
    </header>

    <main class="flex-1 max-w-3xl mx-auto px-4 py-12 w-full">
      <article class="bg-white rounded-2xl shadow-sm border border-[#e5d5bc] p-6 sm:p-10 overflow-hidden">
        
        <img 
          src="https://images.unsplash.com/photo-1582239408643-4f96d03f0b07?q=80&w=800&auto=format&fit=crop" 
          alt="Juegos tradicionales de madera" 
          class="w-full h-64 object-cover rounded-xl mb-8 border border-slate-200"
        />

        <h1 class="font-heading text-3xl sm:text-4xl text-[#002b7f] mb-6 leading-tight">Historia y Tradición de los Juegos Típicos en Fiestas Patrias</h1>
        
        <div class="space-y-5 text-slate-700 leading-relaxed text-base sm:text-lg">
          <p>
            La llegada del 18 de septiembre no solo significa el inicio de la primavera en nuestro país, sino también el momento perfecto para reencontrarnos y compartir en familia. 
          </p>
          <p>
            Históricamente, las <strong>Fiestas Patrias</strong> han estado acompañadas de espacios de esparcimiento donde grandes y chicos se reúnen en torno a una mesa o en el patio de la casa para celebrar nuestras raíces y cultura.
          </p>
          
          <h2 class="font-heading text-2xl text-[#d52b1e] mt-8 mb-3">Juegos de Salón: El Punto de Encuentro</h2>
          <p>
            Los juegos de salón y de mesa, como la tradicional lotería y el bingo, son grandes clásicos incombustibles de estas fechas.
          </p>
          <p>
            Su inmensa popularidad radica en que son actividades intergeneracionales. Desde los abuelos hasta los nietos pueden participar en total igualdad de condiciones.
          </p>
          <p>
            Esto fortalece enormemente los lazos familiares entre risas, anécdotas y una sana competencia por ganar los ansiados premios.
          </p>

          <h2 class="font-heading text-2xl text-[#d52b1e] mt-8 mb-3">Al aire libre: Trompo, Emboque y Rayuela</h2>
          <p>
            Además de estos juegos de salón, nuestra cultura es sumamente rica en <strong>juegos típicos chilenos</strong> que llenan de vida y energía las celebraciones al aire libre. 
          </p>
          <p>
            Es común que, después de una buena ronda de bingo y con la guata llena, los más entusiastas salgan al patio a probar su destreza. Si quieres revivir estas costumbres, un <a href="https://meli.la/2LHpcjz" target="_blank" rel="nofollow sponsored" class="text-blue-700 font-bold hover:underline">set de juegos tradicionales (que incluya trompo y emboque)</a> es infaltable en tu casa.
          </p>
          <p>
            Para los más grandes, medir su puntería en una tradicional cancha de rayuela es casi un rito sagrado. Solo necesitas barro, una lienza y, por supuesto, unos buenos <a href="https://meli.la/1mND6WK" target="_blank" rel="nofollow sponsored" class="text-blue-700 font-bold hover:underline">tejos de rayuela</a> para competir como corresponde.
          </p>
          <p>
            Todos estos elementos, en conjunto con nuestra gastronomía y nuestra música, crean esa atmósfera perfecta de chilenidad que tanto añoramos el resto del año.
          </p>
        </div>
      </article>
    </main>

    <footer class="bg-[#2c1d11] text-amber-100 py-6 text-center text-xs border-t-4 border-[#002b7f]">
      <p class="font-bold mb-2">Bingo CHILENO - Celebra el 18 con Tradición 🇨🇱</p>
      <NuxtLink to="/privacidad" class="text-amber-200/70 hover:text-amber-100 underline decoration-amber-200/30 hover:decoration-amber-100 transition-colors">Política de Privacidad y Cookies</NuxtLink>
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
