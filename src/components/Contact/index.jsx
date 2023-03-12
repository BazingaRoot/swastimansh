import React from "react";
import imgs from "../../assets/images/contact-img.jpg";

function Contact() {
  return (
    <>
    <section id="contact" className=" bg-white relative flex flex-wrap lg:h-screen lg:items-center">
      <div className="w-full px-4 py-8 sm:px-6 sm:py-16 lg:w-1/2 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-lg text-center">
          <h1 className="text-2xl font-bold sm:text-3xl">Get started today!</h1>

          <p className="mt-4 text-gray-500">
          Thank you again for considering <b>SWASTIMANSH</b> as your trusted partner in health. We look forward to hearing from you soon!
          </p>
        </div>

        <form action="" className="mx-auto mt-4 mb-0 max-w-sm space-y-4">
          <div className="gap-2 py-2 grid grid-cols-2 md:grid-cols-2 mt-6 ">
              <input
                className=" h-14 rounded-2xl  border-[1px] pl-4   "
                type="text"
                placeholder="Name"
              />
              <input
                className="h-14  rounded-2xl  border-[1px]  pl-4 "
                type="text"
                placeholder="Last Name"
              />
            </div>
            <div className="gap-2 py-2 grid grid-cols-2 md:grid-cols-2 mt-6">
              <input
                className=" h-14  rounded-2xl   border-[1px] pl-4 "
                type="email"
                placeholder="Email"
              />
              <input
                className=" h-14  rounded-2xl  border-[1px] pl-4"
                type="phone"
                placeholder="Phone"
              />
            </div>
            <textarea
              className=" rounded-2xl border-[1px]  h-36 pl-4  w-full  pt-2"
              rows={40}
              cols={35}
              placeholder="Message"
            ></textarea>

          <div className="flex items-center justify-between">
            <button
              type="submit"
              className="inline-block rounded-lg bg-blue-500 px-5 py-3 text-sm font-medium text-white"
            >
              Connect
            </button>
          </div>
        </form>
      </div>

      <div className="relative hidden lg:block mt-12 w-full sm:h-96 lg:h-full lg:w-1/2 justify-center ">
        <img
          alt="Welcome"
          src={imgs}
          style={{ maxWidth: '40rem' }}
          className="absolute inset-0 object-cover"
        />
      </div>
    </section>

    </>
  );
}

export default Contact;