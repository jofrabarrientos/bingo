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
          src="https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=800&auto=format&fit=crop" 
          alt="Parrilla con comida tradicional y asado" 
          class="w-full h-64 object-cover rounded-xl mb-8 border border-slate-200"
        />

        <h1 class="font-heading text-3xl sm:text-4xl text-[#002b7f] mb-6 leading-tight">Guía Rápida: Cómo organizar una Fonda Familiar en casa</h1>
        
        <div class="space-y-5 text-slate-700 leading-relaxed text-base sm:text-lg">
          <p>
            Si este año decidiste evitar las grandes aglomeraciones y prefieres armar tu propia <strong>fonda en casa</strong>, estás en el lugar correcto. 
          </p>
          <p>
            Te compartimos algunos consejos prácticos para que tu celebración familiar sea un éxito rotundo y no tenga absolutamente nada que envidiarle a las fondas tradicionales.
          </p>
          
          <h2 class="font-heading text-2xl text-[#d52b1e] mt-8 mb-3">1. Prepara un menú tradicional que nunca falla</h2>
          <p>
            La comida es, sin duda, el corazón de cualquier celebración chilena, especialmente durante el mes de la patria.
          </p>
          <p>
            Asegúrate de tener una buena provisión de empanadas de pino recién horneadas, anticuchos jugosos, choripanes con pebre bien cuchareado, y para refrescar la tarde, un infaltable heladito mote con huesillo.
          </p>
          <p class="text-sm italic text-slate-500 mb-4">
            *Dato clave: Contar con una buena <a href="https://meli.la/1ybpMhE" target="_blank" rel="nofollow sponsored" class="text-blue-700 font-bold hover:underline">parrilla a carbón o eléctrica</a> es vital para mantener la producción de anticuchos y choripanes fluyendo toda la tarde.*
          </p>
          
          <h2 class="font-heading text-2xl text-[#d52b1e] mt-8 mb-3">2. Decora tu patio con espíritu festivo</h2>
          <p>
            Transformar tu patio, terraza o comedor es muy sencillo pero cambia totalmente el ambiente de tu casa.
          </p>
          <p>
            Usa guirnaldas tricolores, volantines de papel colgando del techo y, por supuesto, banderas chilenas por doquier. Un <a href="https://meli.la/2dvjEEd" target="_blank" rel="nofollow sponsored" class="text-blue-700 font-bold hover:underline">pack de decoración dieciochera</a> te ahorrará mucho tiempo y vestirá tu hogar al instante.
          </p>
          <p>
            Una buena lista de reproducción con cumbias y cuecas de fondo será el toque final para encender el ambiente de tu ramada. No escatimes en sonido: un potente <a href="https://meli.la/2nPAjtd" target="_blank" rel="nofollow sponsored" class="text-blue-700 font-bold hover:underline">parlante Bluetooth</a> es imprescindible para que todos escuchen la música y se animen a bailar.
          </p>
          
          <h2 class="font-heading text-2xl text-[#d52b1e] mt-8 mb-3">3. Define la actividad principal: ¡Juegos!</h2>
          <p>
            Toda fonda necesita un evento central que reúna a los invitados más allá de la mesa y la comida.
          </p>
          <p>
            Organizar un torneo de bingo es la excusa perfecta para sentar a todos en la mesa. Puedes usar nuestros cartones gratuitos y organizar un par de partidas cortas.
          </p>
          <p>
            Prepara algunos premios entretenidos o sorpresas para los ganadores (dulces, volantines, o un pequeño aguinaldo). ¡Será sin duda el momento más esperado y divertido de la jornada!
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
  title: 'Cómo organizar una Fonda Familiar en casa | Bingo CHILENO',
  meta: [
    { name: 'description', content: 'Consejos prácticos para organizar tu propia fonda familiar en casa durante las Fiestas Patrias, incluyendo comida y juegos.' }
  ]
})
</script>
