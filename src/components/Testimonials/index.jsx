import React from "react";
import mom1 from "../../assets/images/mom1.jpg"
import mom2 from "../../assets/images/mom2.jpg"
import mom3 from "../../assets/images/mom3.jpg"
import mom4 from "../../assets/images/mom4.jpg"
import mom5 from "../../assets/images/mom5.jpg"
import mom6 from "../../assets/images/mom6.jpg"

function SvgFile() {
  return <svg
  xmlns="http://www.w3.org/2000/svg"
  className="h-4 w-4"
  viewBox="0 0 20 20"
  fill="currentColor"
>
  <path
    d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
  />
</svg>;
}

function Testimonials() {
  const stars = [1,2, 3, 4, 5];
  return (
    <>
      <section id="testi" className=" bg-gradient-to-r from-green-300 to-blue-400"
      // style={{backgroundImage: `url(${bg})`}}
      >
  <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
    <h2 className="text-center text-4xl font-bold tracking-tight sm:text-5xl">
      What our Clients say?
    </h2>

    <div className="mt-12 grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-8">
      <blockquote className="rounded-lg bg-gray-100 p-8 testimonial-custom">
        <div className="flex items-center gap-4">
          <img
            alt="Man"
            src={mom2}
            className="h-20 w-20  rounded-full object-cover"
          />
          <div>
            <div className="flex gap-0.5 text-green-500">
              {stars.map((i) => <SvgFile key={i} />)}
            </div>
            <p className="mt-1 text-lg font-medium text-gray-700">Nikita Poredi and Baby Aarya</p>
          </div>
        </div>
        <p className="line-clamp-2 sm:line-clamp-none mt-4 text-gray-500">
        Dr. Juhi is a great physiotherapist and has been very supportive during my entire journey. Daily sessions helped me in building core strength and provided me much needed motivation. Her positive and cheerful nature helped me to be happy and positive during entire pregnancy. Couple sessions assisted in creating bond with our baby. I highly recommend Dr. Juhi to all the expecting mothers Thank you so much Juhi Tai...
        </p>
      </blockquote>

      <blockquote className="rounded-lg bg-gray-100 p-8 testimonial-custom">
        <div className="flex items-center gap-4">
          <img
            alt="Man"
            src={mom4}
            className="h-20 w-20  rounded-full object-cover"
          />
          <div>
            <div className="flex gap-0.5 text-green-500">
            {stars.map((i) => <SvgFile key={i} />)}
            </div>
            <p className="mt-1 text-lg font-medium text-gray-700">Mrs. Mehek Garg and Baby Rayaan</p>
          </div>
        </div>
        <p className="line-clamp-2 sm:line-clamp-none mt-4 text-gray-500">
        My Journey with Dr Juhi is just like, the passenger who knows the destination but don`&apos;t know the correct way to it. We face different situations during our pregnancy, her guidance made me calm and relaxed at that time. Me and my husband started bonding with the baby during Couple sessions. Exercises helped to tackle my mood swings, cramps and other health issues. I would recommend every pregnant mommy to join &quot;Swastimansh Maternity Fitness Sessions&quot;. I am so very thankful to Juhi di for being with me in this beautiful phase of my life.
        </p>
      </blockquote>

      <blockquote className="rounded-lg bg-gray-100 p-8 testimonial-custom">
        <div className="flex items-center gap-4">
          <img
            alt="Man"
            src={mom1}
            className="h-20 w-20 rounded-full object-cover"
          />
          <div>
            <div className="flex gap-0.5 text-green-500">
            {stars.map((i) => <SvgFile key={i} />)}
            </div>
            <p className="mt-1 text-lg font-medium text-gray-700">Mrs. Bhagyashri Tarte and baby Bhargav</p>
          </div>
        </div>
        <p className="line-clamp-2 sm:line-clamp-none mt-4 text-gray-500">
        I am so thankful I made a choice to have Dr. Juhi as my maternity fitness coach for my first pregnancy. Exercising during pregnancy led to healthy normal delivery.
Throughout my journey she made me realise the importance of exercise. Even post pregnancy I received supportive care from her. I felt relax, energetic and positive through out the entire day after our daily sessions. She was 24/7 available for me on phone calls and social media.
She is absolutely genuine and passionate about what she does. I would highly recommend *Swastimansh Maternity Fitness* to all
my friends and family
        </p>
      </blockquote>

      <blockquote className="rounded-lg bg-gray-100 p-8 testimonial-custom">
        <div className="flex items-center gap-4">
          <img
            alt="Man"
            src={mom5}
            className="h-20 w-20  rounded-full object-cover"
          />
          <div>
            <div className="flex gap-0.5 text-green-500">
            {stars.map((i) => <SvgFile key={i} />)}
            </div>
            <p className="mt-1 text-lg font-medium text-gray-700">Mrs.Geetanjali Nair and baby Shravya</p>
          </div>
        </div>
        <p className="line-clamp-2 sm:line-clamp-none mt-4 text-gray-500">
        This review goes to my dear Physio and fitness coach - Juhi
I started my Pregnancy journey in Aug 2020. It was difficult to maintain positivity with ongoing Pandemic situations, but as my bestie suggested, I consulted Juhi. She professionally checked all my reports and we started Maternity Fitness session. Juhi guided me with right exercise for backpain and meditation techniques to remain calm. Her expertise in combination of Yoga, Aerobics, Meditation and physio exercises, her focus, positive and caregiving attitude to name a few, are her core strengths and make her stand apart. She also helps with positive affirmations for baby and trust me it work wonders. In a very short time, Juhi has become my family&apos;s physio instructor. I strongly recommend joining her sessions for amazing results for yourselves and your family. Thank you Juhi for making my 2nd pregnancy journey so beautiful. I will always cherish these moments!!
        </p>
      </blockquote>
      <blockquote className="rounded-lg bg-gray-100 p-8 testimonial-custom">
        <div className="flex items-center gap-4">
          <img
            alt="Man"
            src={mom6}
            className="h-20 w-20  rounded-full object-cover"
          />
          <div>
            <div className="flex gap-0.5 text-green-500">
            {stars.map((i) => <SvgFile key={i} />)}
            </div>
            <p className="mt-1 text-lg font-medium text-gray-700">Mrs.Manisha Dorge</p>
          </div>
        </div>
        <p className="line-clamp-2 sm:line-clamp-none mt-4 text-gray-500">
        Thank you Dr. Juhi for your guidance on exercise, fitness and diet during pregnancy. You made my first maternity journey healthy and happy. I am very glad to have you as my Physio & Maternity Coach. You guided me a lot for entire 9 months and during delivery as well. Yoga, councelling and other exercises during pregnancy plays a vital role and I truly experienced it. Thank you Swastimansh & Dr. Juhi from Shauryajeet (my son) & me as well IP I wish you a great success ahead... 
        </p>
      </blockquote>
      <blockquote className="rounded-lg bg-gray-100 p-8 testimonial-custom">
        <div className="flex items-center gap-4">
          <img
            alt="Man"
            src={mom3}
            className="h-20 w-20  rounded-full object-cover"
          />
          <div>
            <div className="flex gap-0.5 text-green-500">
            {stars.map((i) => <SvgFile key={i} />)}
            </div>
            <p className="mt-1 text-lg font-medium text-gray-700">Mrs. Varsha Nair & Baby Nihira</p>
          </div>
        </div>
        <p className="line-clamp-2 sm:line-clamp-none mt-4 text-gray-500">
        Dr.Juhi (Swastimansh) was with me throughout my pregnancy & Normal delivery. I have not met her personally but the bond we have created virtually is so strong and comforting.
She is super positive. Her deep knowledge of anatomy & bio-mechanics allows her to instruct poses safely. I felt energetic and super charged throughout the day because of the Meditation sessions.
Stretching, Strengthening, relaxation, breathing techniques & affirmations which were extremenly beneficial in my labour. Couple yoga sessions deeply connected us with our baby.
Make Dr. Juhi your fitness guru & trust me, she will model you to be a better, fitter and confident version of yourself.
        </p>
      </blockquote>
    </div>
  </div>
</section>


    </>
  );
}

export default Testimonials;