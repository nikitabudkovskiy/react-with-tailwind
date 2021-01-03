import React, { useState } from 'react'
import '../tailwind.output.css'
import axios from 'axios'

export const Feeback = () => {

  const [question, setQuestion] = useState('')

  const onChangeQuestion = (event) => {
    setQuestion(event.target.value)
  }

  const sendEmailHandler = async (event) => {
    event.preventDefault()
    try {
      const data = await axios.post('https://api.emailjs.com/api/v1.0/email/send', {
        service_id: 'service_s63ybql',
        template_id: 'template_fuqzhr7',
        user_id: 'user_086ltuJqnmXUz40LPAiCu',
        template_params: {
          text: question,
        }
      })
      if (data.status === 200) {
        setQuestion('')
        alert('Ваше сообщение успешно отправлено!')
      }
    } catch (error) {
      alert('Ваше не удалось отправить попробуйте еще раз.')
      console.log(error)
    }
  }

  return (
    <section class="bg-gunmental mt-10">
      <div class="max-w-2xl px-6 text-center mx-auto">
        <h2 class="text-3xl mb-5 font-semibold text-white">Связь со мной</h2>
        <form className="m-4 flex justify-center">
          <textarea
            onChange={onChangeQuestion}
            placeholder="Вопрос на e-mail"
            value={question}
            class="resize p-4 mb-2 border-t w-screen focus:outline-none border-b border-l text-gray-800 border-gray-200 rounded-xl bg-white"
          />
        </form>
        <button
          onClick={sendEmailHandler}
          class="px-8 mb-10 bg-black  w-70 rounded-xl text-white font-bold p-4 uppercase ">
          Отправить
        </button>
        {/* <svg  version="1.1" id="L9" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" */}


        <div className="flex justify-center pb-10">
          <a class="flex items-center mx-2 text-white hover:text-skyBlue" target="_blank" rel="noreferrer" href="https://telegram.me/DGonzo">
            <svg id="regular" class="h-12 w-12 fill-current" enable-background="new 0 0 24 24" height="512" viewBox="0 0 24 24" width="512" xmlns="http://www.w3.org/2000/svg"><path d="m12 24c6.617 0 12-5.383 12-12s-5.383-12-12-12-12 5.383-12 12 5.383 12 12 12zm0-22.5c5.79 0 10.5 4.71 10.5 10.5s-4.71 10.5-10.5 10.5-10.5-4.71-10.5-10.5 4.71-10.5 10.5-10.5z" /><path d="m7.896 14.155 1.568-.681-.44.441c-.141.141-.22.332-.22.53v2.935c0 .672.812.998 1.28.53l1.574-1.574 3.43 1.715c.444.222.981-.041 1.073-.537l1.957-10.761c.103-.579-.467-1.047-1.012-.833l-12.716 4.977c-.57.222-.646 1.002-.13 1.331l2.934 1.872c.21.134.475.155.702.055zm8.506-6.347-1.537 8.455-3.02-1.509c-.292-.146-.64-.085-.865.141l-.676.676v-.813l3.007-3.007c.583-.583-.073-1.545-.829-1.218l-4.817 2.09-1.354-.864z" />
            </svg>
          </a>
          <a class="flex items-center mx-2 text-white hover:text-skyBlue" target="_blank" rel="noreferrer" href="https://api.whatsapp.com/send?phone=79275232472">
            <svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" class="h-12 w-12 fill-current" viewBox="0 0 128 128" fill="#000000"><path d="M 64 2 C 29.8 2 2 29.8 2 64 C 2 74.5 4.5992188 84.800391 9.6992188 93.900391 L 4.4003906 113.30078 C 3.5003906 116.40078 4.3992188 119.60039 6.6992188 121.90039 C 8.9992188 124.20039 12.200781 125.10078 15.300781 124.30078 L 35.5 119 C 44.3 123.6 54.099609 126 64.099609 126 C 98.299609 126 126.09961 98.2 126.09961 64 C 126.09961 47.4 119.7 31.899219 108 20.199219 C 96.2 8.4992187 80.6 2 64 2 z M 64 8 C 79 8 93.099609 13.800391 103.59961 24.400391 C 114.19961 35.000391 120.1 49.1 120 64 C 120 94.9 94.9 120 64 120 C 54.7 120 45.399219 117.59922 37.199219 113.19922 C 36.799219 112.99922 36.300781 112.80078 35.800781 112.80078 C 35.500781 112.80078 35.3 112.80039 35 112.90039 L 13.699219 118.5 C 12.199219 118.9 11.200781 118.09922 10.800781 117.69922 C 10.400781 117.29922 9.6 116.30078 10 114.80078 L 15.599609 94.199219 C 15.799609 93.399219 15.700781 92.600391 15.300781 91.900391 C 10.500781 83.500391 8 73.8 8 64 C 8 33.1 33.1 8 64 8 z M 64 17 C 38.1 17 17 38 17 64 C 17 72.3 19.200781 80.4 23.300781 87.5 C 24.900781 90.3 25.3 93.599219 24.5 96.699219 L 21.599609 107.19922 L 32.800781 104.30078 C 33.800781 104.00078 34.800781 103.90039 35.800781 103.90039 C 37.800781 103.90039 39.8 104.40039 41.5 105.40039 C 48.4 109.00039 56.1 111 64 111 C 89.9 111 111 89.9 111 64 C 111 51.4 106.09922 39.599219 97.199219 30.699219 C 88.399219 21.899219 76.6 17 64 17 z M 43.099609 36.699219 L 45.900391 36.699219 C 47.000391 36.699219 48.099219 36.799219 49.199219 39.199219 C 50.499219 42.099219 53.399219 49.399609 53.699219 50.099609 C 54.099219 50.799609 54.300781 51.699219 53.800781 52.699219 C 53.300781 53.699219 53.100781 54.299219 52.300781 55.199219 C 51.600781 56.099219 50.699609 57.100781 50.099609 57.800781 C 49.399609 58.500781 48.6 59.300781 49.5 60.800781 C 50.4 62.300781 53.299219 67.1 57.699219 71 C 63.299219 76 68.099609 77.600781 69.599609 78.300781 C 71.099609 79.000781 71.900781 78.900391 72.800781 77.900391 C 73.700781 76.900391 76.5 73.599609 77.5 72.099609 C 78.5 70.599609 79.500781 70.900391 80.800781 71.400391 C 82.200781 71.900391 89.400391 75.499219 90.900391 76.199219 C 92.400391 76.899219 93.399219 77.300391 93.699219 77.900391 C 94.099219 78.700391 94.100391 81.599609 92.900391 85.099609 C 91.700391 88.499609 85.700391 91.899609 82.900391 92.099609 C 80.200391 92.299609 77.699219 93.300391 65.199219 88.400391 C 50.199219 82.500391 40.7 67.099609 40 66.099609 C 39.3 65.099609 34 58.100781 34 50.800781 C 34 43.500781 37.799219 40 39.199219 38.5 C 40.599219 37 42.099609 36.699219 43.099609 36.699219 z"/></svg>
          </a>
        </div>
      </div>
    </section>
  )
}

