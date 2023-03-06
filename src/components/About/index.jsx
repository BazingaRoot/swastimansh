import React from "react";
import { Col, Row } from 'antd';
import img0 from "../../assets/images/icons8-degree-64.png";
import img1 from "../../assets/images/icons8-skills-64.png";
import img2 from "../../assets/images/icons8-features-list-50.png";

function About() {
  return (
    <>
      <section class="bg-gray-900 text-white">
        <div
          class="mx-auto max-w-screen-xl px-4 py-8 sm:py-12 sm:px-6 lg:py-16 lg:px-8"
        >
          <div class="mx-auto text-center">
            <h2 class="text-3xl font-bold sm:text-4xl">About Us</h2>

            <p class="mt-4 text-gray-300">
            Dr.Juhi is a skilled and compassionate physiotherapist dedicated to helping her clients achieve their physical health goals. With years of experience and a commitment to personalized care, she strives to provide the best possible treatment for each individual's unique needs. Let us help you move better and feel better, starting today.
            </p>
          </div>

          <div class="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            <a
              class="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-pink-500/10 hover:shadow-pink-500/10"
              href="/services/digital-campaigns"
            >
              <img className='width-50 ast-img' src={img0} alt="" />

              <h2 class="mt-4 text-xl font-bold text-white">B.P. Th.</h2>

              <p class="mt-1 text-sm text-gray-100">MGM Institute of Physiotherapy, Aurangabad.</p>
              <p class="mt-1 text-sm text-gray-500">
              Experienced and highly skilled Physiotherapist & certified Advanced Fitness Trainer, with a track record of success in assisting patients with physical difficulties, resulting from illnesses, injuries or ageing.
              </p>
            </a>

            <a
              class="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-pink-500/10 hover:shadow-pink-500/10"
              href="/services/digital-campaigns"
            >
              <img className='width-50 ast-img' src={img1} alt="" />

              <h2 class="mt-4 text-xl font-bold text-white">Physiotherapy Skills</h2>

              <p class="mt-1 text-sm text-gray-500">
              <Row>
                <Col span={12}>
                  • Patient Assessment <br />	• Treatment Modification	<br /> • Mobilization Training <br />
                  • Rehabilitation <br />	• Patient Appraisal <br />	• Pain Prevention</Col>
                    <Col span={12}>• Wellness Promotion	<br /> • Physical Health Promotion	<br /> • Movement Restoration <br />
                  • Discharge Planning <br />	•	Post-operative Rehab	</Col>
              </Row>
              </p>
            </a>

            <a
              class="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-pink-500/10 hover:shadow-pink-500/10"
              href="/services/digital-campaigns"
            >
              <img className='width-50 ast-img' src={img2} alt="" />

              <h2 class="mt-4 text-xl font-bold text-white">Other Skills</h2>

              <p class="mt-1 text-sm text-gray-500">
              <Row>
                <Col span={12}>
                  • Yoga 	<br />	• Spinning Therapy 	<br />	• Pilates  	<br />
                  • Aerobics 	<br />	• Obesity Control 	<br />	• Pre & Postnatal Fitness
                </Col>
                    <Col span={12}>• Diet & Nutrition <br />	• Diabetic Fitness <br />	• Weight Management <br />
                  • Cardio Kickboxing	<br /> • Exercise Ball <br /> • Resistance Band Ex.	<br /> •	Meditation Techniques
                  </Col>
              </Row>
              </p>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;