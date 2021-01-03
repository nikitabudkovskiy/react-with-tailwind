import React from 'react'
import ReactLogo from '../logo.svg'

export const AboutMe = () => (
  <section class="bg-gunmental mt-20">
  <div class="max-w-2xl px-6 text-center mx-auto">
      <h2 class="text-3xl font-semibold text-white">Здравствуйте, <span class="bg-skyBlue text-white rounded px-1">меня зовут Никита</span><br/> Приятно познакомиться.</h2>
      <span class="text-white text-opacity-75 mt-4">Я, React Native разработчик c годом опыта работы.<br/>Разрабаратывал с нулям пять приложений и занимался доработкой трех приложений</span>
      <div class="flex items-end justify-center mt-16">
          <img 
            src={ReactLogo} 
            className="w-200 h-200 animate-spin-slow" 
            alt=""
        />
      </div>
  </div>
</section>
)

