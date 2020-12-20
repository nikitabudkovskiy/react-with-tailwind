import React from 'react'
import '../tailwind.output.css'

export const Header = () => (
    <header class="bg-header  shadow border-indigo-600">
      <div class="container mx-auto px-6 py-4">
        <div class="flex items-center justify-between">
          <div>
            <a class="flex items-center hover:text-skyBlue" href="#">
              <svg class="h-6 w-6 sm:h-6 sm:w-6" fill="none" viewBox="0 0 24 24" stroke="#FFF">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>

              <span class="mx-3 font-medium text-white text-sm md:text-base">Будковский Никита</span>
            </a>
          </div>
          <div class="flex items-center -mx-2">

            <a class="flex items-center mx-2 text-white hover:text-skyBlue" href="#">
              <svg class="h-5 w-5 sm:h-6 sm:w-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M19 11H5M19 11C20.1046 11 21 11.8954 21 13V19C21 20.1046 20.1046 21 19 21H5C3.89543 21 3 20.1046 3 19V13C3 11.8954 3.89543 11 5 11M19 11V9C19 7.89543 18.1046 7 17 7M5 11V9C5 7.89543 5.89543 7 7 7M7 7V5C7 3.89543 7.89543 3 9 3H15C16.1046 3 17 3.89543 17 5V7M7 7H17" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
            </a>

            <a class="flex items-center mx-2 text-white hover:text-skyBlue" target="_blank" href="https://telegram.me/DGonzo">
              <svg id="regular" class="h-5 w-5 sm:h-6 sm:w-6 fill-current" enable-background="new 0 0 24 24" height="512" viewBox="0 0 24 24" width="512" xmlns="http://www.w3.org/2000/svg"><path d="m12 24c6.617 0 12-5.383 12-12s-5.383-12-12-12-12 5.383-12 12 5.383 12 12 12zm0-22.5c5.79 0 10.5 4.71 10.5 10.5s-4.71 10.5-10.5 10.5-10.5-4.71-10.5-10.5 4.71-10.5 10.5-10.5z" /><path d="m7.896 14.155 1.568-.681-.44.441c-.141.141-.22.332-.22.53v2.935c0 .672.812.998 1.28.53l1.574-1.574 3.43 1.715c.444.222.981-.041 1.073-.537l1.957-10.761c.103-.579-.467-1.047-1.012-.833l-12.716 4.977c-.57.222-.646 1.002-.13 1.331l2.934 1.872c.21.134.475.155.702.055zm8.506-6.347-1.537 8.455-3.02-1.509c-.292-.146-.64-.085-.865.141l-.676.676v-.813l3.007-3.007c.583-.583-.073-1.545-.829-1.218l-4.817 2.09-1.354-.864z" />
              </svg>
            </a>

            <a target="_blank" rel="noopener noreferrer" class="flex items-center mx-2 text-white hover:text-skyBlue" href="https://github.com/nikitabudkovskiy">
              <svg class="h-5 w-5 sm:h-6 sm:w-6 fill-current" xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'>
                <path d='M256,32C132.3,32,32,134.9,32,261.7c0,101.5,64.2,187.5,153.2,217.9a17.56,17.56,0,0,0,3.8.4c8.3,0,11.5-6.1,11.5-11.4,0-5.5-.2-19.9-.3-39.1a102.4,102.4,0,0,1-22.6,2.7c-43.1,0-52.9-33.5-52.9-33.5-10.2-26.5-24.9-33.6-24.9-33.6-19.5-13.7-.1-14.1,1.4-14.1h.1c22.5,2,34.3,23.8,34.3,23.8,11.2,19.6,26.2,25.1,39.6,25.1a63,63,0,0,0,25.6-6c2-14.8,7.8-24.9,14.2-30.7-49.7-5.8-102-25.5-102-113.5,0-25.1,8.7-45.6,23-61.6-2.3-5.8-10-29.2,2.2-60.8a18.64,18.64,0,0,1,5-.5c8.1,0,26.4,3.1,56.6,24.1a208.21,208.21,0,0,1,112.2,0c30.2-21,48.5-24.1,56.6-24.1a18.64,18.64,0,0,1,5,.5c12.2,31.6,4.5,55,2.2,60.8,14.3,16.1,23,36.6,23,61.6,0,88.2-52.4,107.6-102.3,113.3,8,7.1,15.2,21.1,15.2,42.5,0,30.7-.3,55.5-.3,63,0,5.4,3.1,11.5,11.4,11.5a19.35,19.35,0,0,0,4-.4C415.9,449.2,480,363.1,480,261.7,480,134.9,379.7,32,256,32Z' />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </header>
)

