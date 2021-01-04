import React from 'react'
import ReactLogo from '../logo.svg'

export const AboutMe = () => {
  const cond =
    window.matchMedia("(min-width: 330px)").matches &&
    window.matchMedia("(max-width: 500px)").matches
    
  return (
    <section className="bg-gunmental mt-20">
      <div className="max-w-2xl px-6 text-center mx-auto">
        <h2 className="text-3xl font-semibold text-white">Здравствуйте, <div class="bg-skyBlue inline-flex text-white rounded px-1">{window.matchMedia("(max-width: 538px)").matches ? "\nменя зовут Никита" : "меня зовут Никита"}</div><br /> Приятно познакомиться.</h2>
        <div className="text-white text-opacity-75 mt-4 whitespace-pre-wrap">{cond ? "Я, React Native разработчик\nc годом опыта работы." : "Я, React Native разработчик c годом опыта работы."}<br />Разрабаратывал с нулям пять приложений и занимался доработкой трех приложений</div>
        <div className="flex items-end justify-center mt-16">
          <img
            src={ReactLogo}
            className="w-200 h-200 animate-spin-slow"
            alt=""
          />
        </div>
      </div>
    </section>
  )
}

