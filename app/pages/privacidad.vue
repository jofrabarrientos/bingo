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
        <h1 class="font-heading text-3xl sm:text-4xl text-[#002b7f] mb-6">Política de Privacidad y Cookies</h1>
        
        <div class="space-y-6 text-slate-700 leading-relaxed text-sm sm:text-base">
          <p>
            En <strong>Bingo CHILENO</strong>, accesible desde nuestro sitio web, una de nuestras principales prioridades es la privacidad de nuestros visitantes. 
            Este documento de Política de Privacidad contiene los tipos de información que se recopilan y registran y cómo la usamos.
          </p>

          <h2 class="font-heading text-2xl text-[#d52b1e] mt-8 mb-3">Archivos de Registro (Log Files)</h2>
          <p>
            Bingo CHILENO sigue un procedimiento estándar de uso de archivos de registro. Estos archivos registran a los visitantes cuando entran a los sitios web. 
            La información recopilada por los archivos de registro incluye direcciones de protocolo de internet (IP), tipo de navegador, proveedor de servicios de internet (ISP), sello de fecha y hora, 
            páginas de referencia/salida, y posiblemente el número de clics. Estos no están vinculados a ninguna información que sea personalmente identificable. 
            El propósito de la información es analizar tendencias, administrar el sitio, rastrear el movimiento de los usuarios en el sitio web y recopilar información demográfica.
          </p>
          
          <h2 class="font-heading text-2xl text-[#d52b1e] mt-8 mb-3">Cookies y Web Beacons</h2>
          <p>
            Como cualquier otro sitio web, Bingo CHILENO utiliza "cookies". Estas cookies se utilizan para almacenar información, incluyendo las preferencias de los visitantes 
            y las páginas del sitio web a las que el visitante accedió o visitó. La información se utiliza para optimizar la experiencia de los usuarios personalizando 
            el contenido de nuestra página web en función del tipo de navegador de los visitantes y/u otra información.
          </p>

          <h2 class="font-heading text-2xl text-[#d52b1e] mt-8 mb-3">Google DoubleClick DART Cookie (Google AdSense)</h2>
          <p>
            Google es un proveedor externo en nuestro sitio. También utiliza cookies, conocidas como cookies de DART, para publicar anuncios a los visitantes 
            de nuestro sitio basándose en su visita a nuestro sitio y otros sitios en Internet.
          </p>
          <ul class="list-disc pl-6 space-y-2">
            <li>
              Google, como proveedor externo, utiliza cookies para publicar anuncios en nuestro sitio.
            </li>
            <li>
              El uso de cookies publicitarias permite a Google y a sus socios publicar anuncios basados en las visitas que los usuarios realizan en nuestro sitio y/o en otros sitios de Internet.
            </li>
            <li>
              Los usuarios pueden optar por no participar en la publicidad personalizada visitando la 
              <a href="https://www.google.com/settings/ads" target="_blank" rel="noopener noreferrer" class="text-[#002b7f] font-bold hover:underline">Configuración de anuncios de Google</a>.
            </li>
          </ul>

          <h2 class="font-heading text-2xl text-[#d52b1e] mt-8 mb-3">Políticas de Privacidad de Terceros</h2>
          <p>
            La Política de Privacidad de Bingo CHILENO no se aplica a otros anunciantes o sitios web. Por lo tanto, le aconsejamos que consulte las 
            Políticas de Privacidad respectivas de estos servidores de anuncios de terceros para obtener información más detallada. 
            Puede incluir sus prácticas e instrucciones sobre cómo excluirse de ciertas opciones.
          </p>
          <p>
            Puede optar por desactivar las cookies a través de las opciones individuales de su navegador. 
            Para conocer información más detallada sobre la gestión de cookies con navegadores web específicos, se puede encontrar en los sitios web respectivos de los navegadores.
          </p>

          <h2 class="font-heading text-2xl text-[#d52b1e] mt-8 mb-3">Consentimiento</h2>
          <p>
            Al utilizar nuestro sitio web, usted acepta por la presente nuestra Política de Privacidad y está de acuerdo con sus Términos y Condiciones.
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
  title: 'Política de Privacidad y Cookies | Bingo CHILENO',
  meta: [
    { name: 'description', content: 'Política de Privacidad y uso de Cookies para Bingo CHILENO, incluyendo detalles sobre Google AdSense.' }
  ]
})
</script>
