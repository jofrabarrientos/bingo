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
          src="https://images.unsplash.com/photo-1596484552834-6a58f850e0a1?q=80&w=800&auto=format&fit=crop" 
          alt="Impresora imprimiendo documentos y hojas" 
          class="w-full h-64 object-cover rounded-xl mb-8 border border-slate-200"
        />

        <h1 class="font-heading text-3xl sm:text-4xl text-[#002b7f] mb-6 leading-tight">¿Cómo usar nuestro Generador de Cartones de Bingo?</h1>
        
        <div class="space-y-5 text-slate-700 leading-relaxed text-base sm:text-lg">
          <p>
            Nuestra plataforma es una herramienta gratuita y fácil de usar, diseñada especialmente para que tengas tus <strong>cartones de bingo para imprimir</strong> listos en cuestión de segundos, sin complicaciones. 
          </p>
          <p>
            Ya sea para una fonda, un evento escolar o simplemente jugar en familia este 18 de septiembre, crear tus cartones personalizados nunca fue tan rápido. Solo debes seguir estos 3 simples pasos:
          </p>
          
          <h2 class="font-heading text-2xl text-[#d52b1e] mt-8 mb-3">Paso 1: Seleccionar la cantidad de cartones</h2>
          <p>
            Ingresa a nuestra herramienta principal en la página de inicio. Allí encontrarás un panel de control intuitivo.
          </p>
          <p>
            Elige cuántos cartones distintos necesitas generar. Puedes seleccionar desde 1 hasta 1.000 cartones únicos, dependiendo de la cantidad de familiares y amigos que vayan a participar en el juego.
          </p>
          
          <h2 class="font-heading text-2xl text-[#d52b1e] mt-8 mb-3">Paso 2: Generar y previsualizar en pantalla</h2>
          <p>
            Haz clic en el botón rojo de generar. Nuestro sistema creará automáticamente cartones únicos y 100% aleatorios con nuestra colorida temática de Fiestas Patrias. 
          </p>
          <p>
            Podrás ver una previsualización de cómo lucen directamente en tu pantalla para asegurarte de que todo esté perfecto y a tu gusto.
          </p>

          <h2 class="font-heading text-2xl text-[#d52b1e] mt-8 mb-3">Paso 3: Imprimir o guardar como PDF</h2>
          <p>
            Una vez que estés conforme con el resultado, tienes dos opciones. Puedes enviarlos directamente a tu impresora si estás conectado a una, o guardarlos como un archivo PDF para imprimir más tarde.
          </p>

          <div class="bg-blue-50 border-l-4 border-[#002b7f] p-4 my-6 rounded-r-lg">
            <h3 class="font-bold text-[#002b7f] mb-2">💡 Tips para imprimir los mejores cartones:</h3>
            <ul class="list-disc pl-5 space-y-2 text-sm sm:text-base text-slate-800">
              <li>
                Usa una <a href="https://meli.la/1qQHwhu" target="_blank" rel="nofollow sponsored" class="text-blue-700 font-bold hover:underline">buena impresora multifuncional</a> con niveles de tinta óptimos para que los colores resalten.
              </li>
              <li>
                Te recomendamos usar una <a href="https://meli.la/1HS8TkC" target="_blank" rel="nofollow sponsored" class="text-blue-700 font-bold hover:underline">resma de papel de alto gramaje o cartulina</a> para que los cartones no se doblen ni se rompan durante el juego.
              </li>
              <li>
                ¡No olvides los marcadores! Puedes usar los clásicos porotos, o comprar <a href="https://meli.la/2gUFsix" target="_blank" rel="nofollow sponsored" class="text-blue-700 font-bold hover:underline">fichas de bingo profesionales</a> para que se vea más auténtico.
              </li>
            </ul>
          </div>

          <p>
            Guardarlos en PDF es ideal si deseas llevar el archivo en tu celular o en un pendrive a una imprenta local para obtener una calidad profesional y un papel más grueso. ¡Así te durarán para muchos dieciochos más!
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
  title: 'Cómo usar nuestro Generador de Cartones | Bingo CHILENO',
  meta: [
    { name: 'description', content: 'Manual rápido de 3 pasos para generar, previsualizar e imprimir cartones de bingo chileno gratis para Fiestas Patrias.' }
  ]
})
</script>
