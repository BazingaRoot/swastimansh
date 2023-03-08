import React from "react";
// import img from "../assets/images/contact-img.svg";

function Contact() {
  return (
    <>
    <section id="contact" className=" bg-white relative flex flex-wrap lg:h-screen lg:items-center">
      <div className="w-full px-4 py-12 sm:px-6 sm:py-16 lg:w-1/2 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-lg text-center">
          <h1 className="text-2xl font-bold sm:text-3xl">Get started today!</h1>

          <p className="mt-4 text-gray-500">
          Thank you again for considering <b>SWASTIMANSH</b> as your trusted partner in health. We look forward to hearing from you soon!
          </p>
        </div>

        <form action="" className="mx-auto mt-8 mb-0 max-w-md space-y-4">
        <div className="flex gap-4 py-2  ">
              <input
                className=" h-14 rounded-2xl  border-[1px] pl-4  "
                type="text"
                placeholder="Name"
              />
              <input
                className="h-14  rounded-2xl  border-[1px]  pl-4 "
                type="text"
                placeholder="Last Name"
              />
            </div>
            <div className="flex gap-4  py-4  ">
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

      <div className="relative h-64 w-full sm:h-96 lg:h-full lg:w-1/2">
        <img
          alt="Welcome"
          src="https://images.unsplash.com/photo-1630450202872-e0829c9d6172?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
          className="absolute inset-0 h-full w-full object-cover"
        />
      </div>
    </section>

    </>
  );
}

export default Contact;