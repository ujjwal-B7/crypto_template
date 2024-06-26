import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
const Footer = () => {
  return (
    <footer className="primary-bg sm:pt-20 pt-10">
      <section className="section-container lg:px-20 px-4">
        <div className="flex sm:flex-row flex-col justify-between">
          <span data-aos="fade-up">
            <svg
              width="136"
              height="48"
              viewBox="0 0 136 48"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M54.8836 23.7993C54.8836 22.2158 55.2262 20.8074 55.9113 19.5741C56.5965 18.3256 57.5481 17.3587 58.7662 16.6735C59.9995 15.9732 61.3927 15.623 62.9457 15.623C64.849 15.623 66.4782 16.1254 67.8333 17.1303C69.1884 18.1352 70.0943 19.5056 70.5511 21.2413H66.2574C65.9376 20.5714 65.4809 20.0613 64.887 19.7111C64.3085 19.3609 63.6461 19.1858 62.9 19.1858C61.6972 19.1858 60.7227 19.6045 59.9767 20.442C59.2306 21.2794 58.8576 22.3985 58.8576 23.7993C58.8576 25.2001 59.2306 26.3192 59.9767 27.1566C60.7227 27.9941 61.6972 28.4128 62.9 28.4128C63.6461 28.4128 64.3085 28.2377 64.887 27.8875C65.4809 27.5373 65.9376 27.0272 66.2574 26.3573H70.5511C70.0943 28.093 69.1884 29.4634 67.8333 30.4683C66.4782 31.458 64.849 31.9528 62.9457 31.9528C61.3927 31.9528 59.9995 31.6102 58.7662 30.9251C57.5481 30.2247 56.5965 29.2578 55.9113 28.0245C55.2262 26.7912 54.8836 25.3828 54.8836 23.7993ZM76.8482 21.2185C77.305 20.5181 77.876 19.97 78.5612 19.5741C79.2463 19.163 80.0076 18.9574 80.8451 18.9574V23.0913H79.7716C78.7972 23.0913 78.0663 23.3045 77.5791 23.7308C77.0919 24.1419 76.8482 24.8727 76.8482 25.9233V31.8386H72.9428V19.0945H76.8482V21.2185ZM95.73 19.0945L87.7364 37.891H83.534L86.4574 31.4047L81.2729 19.0945H85.6352L88.5814 27.0653L91.5048 19.0945H95.73ZM101.048 20.8988C101.428 20.3049 101.954 19.8253 102.624 19.4599C103.294 19.0945 104.078 18.9118 104.976 18.9118C106.027 18.9118 106.978 19.1782 107.831 19.7111C108.684 20.244 109.354 21.0053 109.841 21.995C110.343 22.9847 110.594 24.1343 110.594 25.4437C110.594 26.7531 110.343 27.9103 109.841 28.9152C109.354 29.9049 108.684 30.6738 107.831 31.222C106.978 31.7549 106.027 32.0213 104.976 32.0213C104.093 32.0213 103.309 31.8386 102.624 31.4732C101.954 31.1078 101.428 30.6358 101.048 30.0572V37.9138H97.1423V19.0945H101.048V20.8988ZM106.62 25.4437C106.62 24.4692 106.346 23.7079 105.798 23.1598C105.265 22.5965 104.603 22.3148 103.811 22.3148C103.035 22.3148 102.372 22.5965 101.824 23.1598C101.291 23.7232 101.025 24.4921 101.025 25.4666C101.025 26.441 101.291 27.2099 101.824 27.7733C102.372 28.3366 103.035 28.6183 103.811 28.6183C104.588 28.6183 105.25 28.3366 105.798 27.7733C106.346 27.1947 106.62 26.4182 106.62 25.4437ZM119.746 28.527V31.8386H117.759C116.343 31.8386 115.239 31.496 114.448 30.8109C113.656 30.1105 113.26 28.9761 113.26 27.4079V22.3376H111.707V19.0945H113.26V15.9884H117.165V19.0945H119.723V22.3376H117.165V27.4535C117.165 27.8342 117.257 28.1083 117.44 28.2757C117.622 28.4432 117.927 28.527 118.353 28.527H119.746ZM127.723 32.0213C126.474 32.0213 125.348 31.7549 124.343 31.222C123.353 30.6891 122.569 29.9278 121.99 28.9381C121.427 27.9484 121.145 26.7912 121.145 25.4666C121.145 24.1571 121.434 23.0076 122.013 22.0179C122.592 21.013 123.383 20.244 124.388 19.7111C125.393 19.1782 126.52 18.9118 127.768 18.9118C129.017 18.9118 130.144 19.1782 131.149 19.7111C132.154 20.244 132.945 21.013 133.524 22.0179C134.102 23.0076 134.392 24.1571 134.392 25.4666C134.392 26.776 134.095 27.9332 133.501 28.9381C132.922 29.9278 132.123 30.6891 131.103 31.222C130.098 31.7549 128.971 32.0213 127.723 32.0213ZM127.723 28.6412C128.469 28.6412 129.101 28.3671 129.618 27.819C130.151 27.2708 130.418 26.4867 130.418 25.4666C130.418 24.4464 130.159 23.6623 129.641 23.1141C129.139 22.566 128.515 22.2919 127.768 22.2919C127.007 22.2919 126.375 22.566 125.873 23.1141C125.37 23.647 125.119 24.4312 125.119 25.4666C125.119 26.4867 125.363 27.2708 125.85 27.819C126.352 28.3671 126.977 28.6412 127.723 28.6412Z"
                fill="white"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M0.000244141 14.5237C0.000244141 21.9103 0.000244141 25.1574 0.000244141 32.5461C0.000244141 34.4622 1.0261 36.3422 2.72172 37.3172L18.3194 46.3231C19.998 47.3171 22.1324 47.3171 23.8089 46.3231L39.4066 37.3172C41.1022 36.3422 42.1281 34.46 42.1281 32.5461C42.1281 25.1574 42.1281 21.9124 42.1281 14.5237C42.1281 12.5928 41.0852 10.717 39.4066 9.75266L23.8111 0.746766C22.1324 -0.247294 19.998 -0.247294 18.3215 0.746766L2.72172 9.75266C1.04305 10.717 0.000244141 12.5928 0.000244141 14.5237Z"
                fill="#6639E4"
              />
              <path
                opacity="0.55"
                fillRule="evenodd"
                clipRule="evenodd"
                d="M0.996216 11.348C1.44132 10.7036 2.02419 10.1504 2.71939 9.74985L18.3191 0.746075C19.1585 0.247985 20.1123 0 21.0639 0C22.0177 0 22.9694 0.247985 23.8087 0.746075L39.4064 9.75196C40.1016 10.1526 40.6844 10.7036 41.1295 11.3501C40.4322 12.359 39.2792 13.0754 38.2915 13.6413C33.4653 16.4264 28.6222 19.1733 23.8066 21.9541C22.9673 22.4501 22.0135 22.7002 21.0618 22.7002C20.108 22.7002 19.1564 22.4522 18.317 21.9541C13.5057 19.1712 8.66256 16.4243 3.83639 13.6392C2.84657 13.0733 1.69354 12.3569 0.996216 11.348Z"
                fill="white"
              />
              <path
                opacity="0.2"
                fillRule="evenodd"
                clipRule="evenodd"
                d="M18.3191 21.9519C13.5057 19.1711 8.66253 16.4242 3.83635 13.6391C2.84653 13.0732 1.69351 12.3568 0.99618 11.3479C0.345484 12.3165 0.0105977 13.353 0 14.523C0 21.9095 0 25.1566 0 32.5453C0.0105977 33.7111 0.345484 34.7539 0.99618 35.7183C1.69351 34.7115 2.84653 33.993 3.83423 33.4271C8.66041 30.642 13.5035 27.8951 18.3191 25.1143C19.1478 24.6246 20.0868 24.3745 21.0279 24.3682C21.9923 24.3618 22.9609 24.6098 23.8108 25.1143C28.6264 27.8951 33.4695 30.642 38.2957 33.4271C39.2834 33.993 40.4385 34.7094 41.1337 35.7183C41.7993 34.7306 42.1193 33.692 42.1299 32.5453C42.1299 25.1566 42.1299 21.9116 42.1299 14.523C42.1193 13.3763 41.7972 12.3335 41.1337 11.35C40.4364 12.3568 39.2834 13.0753 38.2957 13.6412C33.4695 16.4263 28.6264 19.1732 23.8108 21.954C22.9778 22.4479 22.0304 22.6959 21.083 22.7001C20.125 22.7001 19.1648 22.4521 18.3191 21.9519Z"
                fill="white"
              />
              <path
                opacity="0.3"
                fillRule="evenodd"
                clipRule="evenodd"
                d="M9.73926 28.3785C9.73926 24.4065 9.73926 22.66 9.73926 18.688C9.74986 17.6452 10.2819 16.6511 11.2017 16.1234L19.5887 11.2802C20.4916 10.7461 21.6383 10.7461 22.5412 11.2802L30.9282 16.1234C31.8502 16.6532 32.3801 17.6452 32.3907 18.688C32.3907 22.66 32.3907 24.4065 32.3907 28.3785C32.3801 29.4234 31.8439 30.4175 30.9282 30.9431L22.5412 35.7863C21.6383 36.3204 20.4916 36.3204 19.5887 35.7863L11.2017 30.9452C10.2861 30.4175 9.74986 29.4255 9.73926 28.3785Z"
                fill="white"
              />
            </svg>
          </span>
          <div
            className="flex flex-wrap items-start gap-4 sm:mb-4 sm:my-0 my-5"
            data-aos="fade-up"
          >
            <div className="p-3 rounded-full h-fit social-icon-bg">
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.facebook.com/ujjwal.basnet.1257"
              >
                <svg className="w-7" viewBox="0 0 128 128">
                  <rect
                    fill="#9c97d380"
                    x="4.83"
                    y="4.83"
                    width="118.35"
                    height="118.35"
                    rx="6.53"
                    ry="6.53"
                  ></rect>
                  <path
                    fill="#ffffff"
                    d="M86.48 123.17V77.34h15.38l2.3-17.86H86.48v-11.4c0-5.17 1.44-8.7 8.85-8.7h9.46v-16A126.56 126.56 0 0091 22.7c-13.62 0-23 8.3-23 23.61v13.17H52.62v17.86H68v45.83z"
                  ></path>
                </svg>
              </a>
            </div>
            <div className="p-3 rounded-full h-fit social-icon-bg">
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.instagram.com/ujjwal_basnet7/"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-7 ionicon"
                  viewBox="0 0 512 512"
                >
                  <path
                    fill="white"
                    d="M349.33 69.33a93.62 93.62 0 0193.34 93.34v186.66a93.62 93.62 0 01-93.34 93.34H162.67a93.62 93.62 0 01-93.34-93.34V162.67a93.62 93.62 0 0193.34-93.34h186.66m0-37.33H162.67C90.8 32 32 90.8 32 162.67v186.66C32 421.2 90.8 480 162.67 480h186.66C421.2 480 480 421.2 480 349.33V162.67C480 90.8 421.2 32 349.33 32z"
                  />
                  <path
                    fill="white"
                    d="M377.33 162.67a28 28 0 1128-28 27.94 27.94 0 01-28 28zM256 181.33A74.67 74.67 0 11181.33 256 74.75 74.75 0 01256 181.33m0-37.33a112 112 0 10112 112 112 112 0 00-112-112z"
                  />
                </svg>
              </a>
            </div>

            <div className="p-3 rounded-full h-fit social-icon-bg">
              <a href="https://www.linkedin.com/in/ujjwal-basnet-560893239/">
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-7 h-7 ionicon"
                    viewBox="0 0 512 512"
                  >
                    <path
                      fill="white"
                      d="M444.17 32H70.28C49.85 32 32 46.7 32 66.89v374.72C32 461.91 49.85 480 70.28 480h373.78c20.54 0 35.94-18.21 35.94-38.39V66.89C480.12 46.7 464.6 32 444.17 32zm-273.3 373.43h-64.18V205.88h64.18zM141 175.54h-.46c-20.54 0-33.84-15.29-33.84-34.43 0-19.49 13.65-34.42 34.65-34.42s33.85 14.82 34.31 34.42c-.01 19.14-13.31 34.43-34.66 34.43zm264.43 229.89h-64.18V296.32c0-26.14-9.34-44-32.56-44-17.74 0-28.24 12-32.91 23.69-1.75 4.2-2.22 9.92-2.22 15.76v113.66h-64.18V205.88h64.18v27.77c9.34-13.3 23.93-32.44 57.88-32.44 42.13 0 74 27.77 74 87.64z"
                    />
                  </svg>
                </span>
              </a>
            </div>
            <div className="p-3 rounded-full h-fit social-icon-bg">
              <a href="https://github.com/ujjwal-B7">
                <span>
                  <svg className="w-7 h-7" viewBox="0 0 128 128">
                    <g fill="white">
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M64 5.103c-33.347 0-60.388 27.035-60.388 60.388 0 26.682 17.303 49.317 41.297 57.303 3.017.56 4.125-1.31 4.125-2.905 0-1.44-.056-6.197-.082-11.243-16.8 3.653-20.345-7.125-20.345-7.125-2.747-6.98-6.705-8.836-6.705-8.836-5.48-3.748.413-3.67.413-3.67 6.063.425 9.257 6.223 9.257 6.223 5.386 9.23 14.127 6.562 17.573 5.02.542-3.903 2.107-6.568 3.834-8.076-13.413-1.525-27.514-6.704-27.514-29.843 0-6.593 2.36-11.98 6.223-16.21-.628-1.52-2.695-7.662.584-15.98 0 0 5.07-1.623 16.61 6.19C53.7 35 58.867 34.327 64 34.304c5.13.023 10.3.694 15.127 2.033 11.526-7.813 16.59-6.19 16.59-6.19 3.287 8.317 1.22 14.46.593 15.98 3.872 4.23 6.215 9.617 6.215 16.21 0 23.194-14.127 28.3-27.574 29.796 2.167 1.874 4.097 5.55 4.097 11.183 0 8.08-.07 14.583-.07 16.572 0 1.607 1.088 3.49 4.148 2.897 23.98-7.994 41.263-30.622 41.263-57.294C124.388 32.14 97.35 5.104 64 5.104z"
                      ></path>
                      <path d="M26.484 91.806c-.133.3-.605.39-1.035.185-.44-.196-.685-.605-.543-.906.13-.31.603-.395 1.04-.188.44.197.69.61.537.91zm2.446 2.729c-.287.267-.85.143-1.232-.28-.396-.42-.47-.983-.177-1.254.298-.266.844-.14 1.24.28.394.426.472.984.17 1.255zM31.312 98.012c-.37.258-.976.017-1.35-.52-.37-.538-.37-1.183.01-1.44.373-.258.97-.025 1.35.507.368.545.368 1.19-.01 1.452zm3.261 3.361c-.33.365-1.036.267-1.552-.23-.527-.487-.674-1.18-.343-1.544.336-.366 1.045-.264 1.564.23.527.486.686 1.18.333 1.543zm4.5 1.951c-.147.473-.825.688-1.51.486-.683-.207-1.13-.76-.99-1.238.14-.477.823-.7 1.512-.485.683.206 1.13.756.988 1.237zm4.943.361c.017.498-.563.91-1.28.92-.723.017-1.308-.387-1.315-.877 0-.503.568-.91 1.29-.924.717-.013 1.306.387 1.306.88zm4.598-.782c.086.485-.413.984-1.126 1.117-.7.13-1.35-.172-1.44-.653-.086-.498.422-.997 1.122-1.126.714-.123 1.354.17 1.444.663zm0 0"></path>
                    </g>
                  </svg>
                </span>
              </a>
            </div>
            <div className="p-3 rounded-full h-fit social-icon-bg">
              <a href="https://twitter.com/basnetujjwal98">
                <span>
                  <svg
                    className="w-7 h-7"
                    xmlns="http://www.w3.org/2000/svg"
                    width="512"
                    height="512"
                    fill="none"
                    viewBox="0 0 512 512"
                    id="twitter"
                  >
                    <g clip-path="url(#clip0_84_15697)">
                      <rect width="512" height="512" fill="" rx="60"></rect>
                      <path
                        fill="white"
                        d="M355.904 100H408.832L293.2 232.16L429.232 412H322.72L239.296 302.928L143.84 412H90.8805L214.56 270.64L84.0645 100H193.28L268.688 199.696L355.904 100ZM337.328 380.32H366.656L177.344 130.016H145.872L337.328 380.32Z"
                      ></path>
                    </g>
                    <defs>
                      <clipPath id="clip0_84_15697">
                        <rect width="512" height="512" fill="#fff"></rect>
                      </clipPath>
                    </defs>
                  </svg>
                </span>
              </a>
            </div>
          </div>
        </div>

        <div className="flex custom:justify-between custom:flex-row  flex-col sm:mt-16 mt-10">
          <div data-aos="fade-up">
            <div className="w-80 gap-4 my-5">
              <h4>MENU</h4>
              <hr className="border-1 border-white w-full mt-5" />
            </div>
            <ul className="text-[14px] space-y-2 font-semibold tracking-wide">
              <li>
                <Link href="#">HOME</Link>
              </li>
              <li>
                <Link href="#">ABOUT</Link>
              </li>
              <li>
                <Link href="#">PRICING</Link>
              </li>
              <li>
                <Link href="#">PRICING SINGLE</Link>
              </li>
              <li>
                <Link href="#">CONTACT</Link>
              </li>
            </ul>
          </div>
          <div
            className="bg-[#9c97d333]  h-fit custom:max-w-[30rem] p-10 rounded-3xl custom:mt-0 mt-10"
            data-aos="zoom-in"
          >
            <h4>DOWNLOAD OUR APP</h4>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eum</p>
            <div className="sm:flex gap-4 mt-7 custom:justify-center">
              <Button className="btn sm:w-fit w-full px-7 py-4 flex gap-3 sm:mb-0 mb-5">
                <Image
                  src="https://assets-global.website-files.com/5f8f28722b0eae892596eb35/5fb300ea33c708602922c729_icon-app-2-crypto-template.svg"
                  width={20}
                  height={20}
                  alt="appicon"
                />
                <span>APP STORE</span>
              </Button>
              <Button className="btn sm:w-fit w-full px-7 py-4 flex gap-3">
                <Image
                  src="https://assets-global.website-files.com/5f8f28722b0eae892596eb35/5fb300ea0ee0085f1deb6fcf_icon-app-1-crypto-template.svg"
                  width={20}
                  height={20}
                  alt="appicon"
                />
                <span>PLAY STORE</span>
              </Button>
            </div>
          </div>
        </div>

        <hr className="border-[#53516c] mt-10" />
        <p className="text-center py-10">Created by &copy; Ujjwal Basnet</p>
      </section>
    </footer>
  );
};

export default Footer;
