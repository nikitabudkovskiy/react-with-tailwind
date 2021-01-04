import React from 'react'
import homeowner from './../assets/img/homeowener.png'
import union from './../assets/img/union.png'
import investTime from './../assets/img/investTime.png'
import openQuality from './../assets/img/openQuality.png'


export const MyProject = () => (
  <section class="bg-black mt-20">
    <div className="text-center pt-5 pb-10 text-white text-4xl">
      Мои проекты
    </div>

    <div class="flex flex-wrap flex-col px-5">

    <div class="mx-auto min-w-full bg-white rounded-xl  overflow-hidden mb-10">
        <div class="md:flex">
          <div class="md:flex-shrink-0">
            <img class="h-48 w-full object-cover md:w-48" src={openQuality} alt="Man looking at item at a store" />
          </div>
          <div class="p-8">
            <div class="uppercase tracking-wide text-sm text-header font-semibold">Открытое качество</div>
            <p class="mt-2 text-gray-500">Приложение проекта «Открытое качество» для получения результатов исследований товаров по штрихкоду.</p>
          </div>
        </div>
      </div>

      <div class="mx-auto min-w-full bg-white rounded-xl shadow-md overflow-hidden mb-10">
        <div class="md:flex">
          <div class="md:flex-shrink-0">
            <img class="h-48 w-full object-cover md:w-48" src={homeowner} alt="Man looking at item at a store" />
          </div>
          <div class="p-8">
            <div class="uppercase tracking-wide text-sm text-header font-semibold">Домовладелец</div>
            <p class="mt-2 text-gray-500">Мобильное приложение Домовладелец© предназначено для жителей многоквартирных домов и коттеджных поселков:</p>
          </div>
        </div>
      </div>

      <div class="mx-auto min-w-full bg-white rounded-xl shadow-md overflow-hidden mb-10">
        <div class="md:flex">
          <div class="md:flex-shrink-0">
            <img class="h-48 w-full object-cover md:w-48" src={investTime} alt="Man looking at item at a store" />
          </div>
          <div class="p-8">
            <div class="uppercase tracking-wide text-sm text-header font-semibold">Invest Time</div>
            <p class="mt-2 text-gray-500">Вы знаете, что такое банковский вклад? А инвестиционный портфель или ПИФ? Это банковские продукты, которые позволят вам заработать больше, чем вклад.у</p>
          </div>
        </div>
      </div>

      <div class="mx-auto min-w-full  bg-white rounded-xl shadow-md overflow-hidden mb-10">
        <div class="md:flex">
          <div class="md:flex-shrink-0">
            <img class="h-48 w-full object-cover md:w-48" src={union} alt="Man looking at item at a store" />
          </div>
          <div class="p-8">
            <div class="uppercase tracking-wide text-sm text-header font-semibold">Профсоюз работников ада</div>
            <p class="mt-2 text-gray-500">Аудиоспектакль с алкоголем: четыре бара, четыре напитка, подлинная история человечества, теория заговора и джаз</p>
          </div>
        </div>
      </div>
      
    </div>
  </section>
)

