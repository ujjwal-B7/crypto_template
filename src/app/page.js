"use client";
import Image from "next/image";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
export default function Home() {
  useEffect(() => {
    AOS.init();
  });
  return (
    <>
      <main className="section-container h-[calc(100vh-7rem)] flex justify-center items-center">
        <div className="xs:text-center  max-w-[800px] sm:px-0 px-2 ">
          <h1 className="xs:mb-10 mb-5" data-aos="zoom-in">
            Buy and trade cryptos like never before
          </h1>
          <p className="description"  data-aos="zoom-in">
            Revolutionize crypto trading with our innovative platform.
            Experience seamless buying, selling, and trading like never before.
            Join us now!
          </p>
          <div
            className="mt-10 flex xs:flex-row flex-col justify-center gap-7"
            data-aos="fade-up"
          >
            <button className="btn px-4 py-3">DOWNLOAD APP</button>
            <button className="primary-bg rounded-3xl px-3 py-3 font-[600]">
              VIEW PRICING
            </button>
          </div>
        </div>
      </main>
      <section
        className="section-container relative lg:p-16"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        <img
          className="relative"
          src="https://assets-global.website-files.com/5f8f28722b0eae892596eb35/5fac9aa80f78095f831b055d_image-home-hero-1-crypto-template.png"
          alt="dashboard_web"
        />
        <img
          className="absolute lg:bottom-16 bottom-0 w-[20%] lg:right-20 right-5"
          src="https://assets-global.website-files.com/5f8f28722b0eae892596eb35/5fac96501854f8e4e061e9c6_image-home-hero-2-crypto-template.png"
          alt="dashboard_mobile"
        />
      </section>
    </>
  );
}
