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
          src="https://images.unsplash.com/photo-1599839619722-39751411ea63?q=80&w=800&auto=format&fit=crop" 
          alt="Juego de Bingo tradicional con bolas" 
          class="w-full h-64 object-cover rounded-xl mb-8 border border-slate-200"
        />

        <h1 class="font-heading text-3xl sm:text-4xl text-[#002b7f] mb-6 leading-tight">Las Reglas del "Bingo Dieciochero"</h1>
        
        <div class="space-y-5 text-slate-700 leading-relaxed text-base sm:text-lg">
          <p>
            El clásico juego de salón se viste de gala para celebrar a nuestro país. A diferencia del formato tradicional con números, nuestro <strong>bingo dieciochero</strong> está diseñado con los conceptos y tradiciones más arraigadas de Chile.
          </p>
          <p>
            Esta variante ofrece una experiencia única y cultural. Si te preguntas cómo se juega exactamente esta adaptación tan popular del <strong>bingo Chile</strong>, aquí te explicamos las reglas básicas.
          </p>
          
          <h2 class="font-heading text-2xl text-[#d52b1e] mt-8 mb-3">La labor del Animador</h2>
          <p>
            En lugar de que el locutor grite el clásico "¡O-75!", en este juego tendrá que "cantar" en voz alta elementos de nuestra identidad nacional. 
          </p>
          <p>
            Imagina la emoción al escuchar "¡Mote con Huesillo!", "¡La Cueca!" o "¡El Copihue!". Cada vez que se cante un concepto, los jugadores deben buscarlo en sus cartones ilustrados.
          </p>
          <p class="text-sm italic text-slate-500 mb-4">
            *Tip de oro: El animador es clave. Consigue un buen <a href="https://meli.la/1ij6AS6" target="_blank" rel="nofollow sponsored" class="text-blue-700 font-bold hover:underline">micrófono inalámbrico</a> y ponle entusiasmo ("cantando" y echando tallas) para que todos se maten de la risa.*
          </p>
          <p>
            Si quieres darle un toque extra de nostalgia y profesionalismo a tu fonda, usar una <a href="https://meli.la/1N31frG" target="_blank" rel="nofollow sponsored" class="text-blue-700 font-bold hover:underline">tómbola de bingo tradicional metálica</a> (en lugar de sacar papelitos de una bolsa) marcará totalmente la diferencia.
          </p>
          
          <h2 class="font-heading text-2xl text-[#d52b1e] mt-8 mb-4">Modalidades para Ganar</h2>
          <p>
            Para ganar y gritar "¡Tiqui Tiqui Ti!" con orgullo, existen varias modalidades que puedes acordar con tu familia antes de empezar cada ronda:
          </p>
          
          <ul class="list-disc pl-6 space-y-4">
            <li>
              <strong>Línea Horizontal o Vertical:</strong> El premio de consuelo. Se lo lleva el primer jugador en completar una fila o columna entera.
            </li>
            <li>
              <strong>Línea Diagonal:</strong> Quien logre marcar una línea cruzada de extremo a extremo (esquina a esquina) en su cartón.
            </li>
            <li>
              <strong>Cartón Lleno:</strong> El premio mayor y definitivo. Se lo lleva quien sea el primero en marcar absolutamente todos los conceptos de su tarjeta. ¡Es el momento perfecto para entregar el premio principal de la jornada!
            </li>
          </ul>
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
  title: 'Reglas del Bingo Dieciochero | Bingo CHILENO',
  meta: [
    { name: 'description', content: 'Aprende cómo jugar al bingo dieciochero, una variante tradicional del bingo en Chile ideal para Fiestas Patrias.' }
  ]
})
</script>
