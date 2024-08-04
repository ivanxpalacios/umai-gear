"use client";
import { useState } from "react";
import { Box, SwipeableDrawer, Divider } from "@mui/material";
import Link from "next/link";
import Image from "next/image";

export default function Sidebar() {
  const [state, setState] = useState(false);

  const toggleDrawer = (open) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setState(open);
  };

  const List = () => (
    <Box
      sx={{ width: 300, padding: "20px", height: "100%", position: "relative"}}
      onKeyDown={toggleDrawer(false)}
      onClick={toggleDrawer(false)}
    >

      <button className="absolute top-4 right-4 transition-colors hover:bg-[#efefef] rounded-full p-1" onClick={toggleDrawer(false)}>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
        </svg>
      </button>

      <Link href="/" className="flex w-fit pb-5">
        {/* <Image src={LogoBLife} className="w-[110px] h-auto" alt="logo blife" /> */}
        logo
      </Link>

      <div className="flex flex-col justify-between h-[85%] mt-10">

        <div className="flex-">

          <ul className="flex flex-col gap-5 pb-5">
            <li className=" hover:bg-[#efefef] rounded-[5px] transition duration-200 ease-in-out h-[40px] cursor-pointer">
              <Link href="/tienda" className="flex items-center gap-4">
                <div className="bg-[#efefef] w-[40px] h-[40px] rounded-full p-1 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-building-store" width="24" height="24" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#000" fill="none" strokeLinecap="round" strokeLinejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                    <path d="M3 21l18 0" />
                    <path d="M3 7v1a3 3 0 0 0 6 0v-1m0 1a3 3 0 0 0 6 0v-1m0 1a3 3 0 0 0 6 0v-1h-18l2 -4h14l2 4" />
                    <path d="M5 21l0 -10.15" />
                    <path d="M19 21l0 -10.15" />
                    <path d="M9 21v-4a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v4" />
                  </svg>
                </div>
                <p>Tienda</p>
              </Link>
            </li>

            <li className=" hover:bg-[#efefef] rounded-[5px] transition duration-200 ease-in-out h-[40px] cursor-pointer">
              <Link href="/sobre" className="flex items-center gap-4">
                <div className="bg-[#efefef] w-[40px] h-[40px] rounded-full p-1 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-perfume" width="24" height="24" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#000" fill="none" strokeLinecap="round" strokeLinejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                    <path d="M10 6v3" />
                    <path d="M14 6v3" />
                    <path d="M5 9m0 2a2 2 0 0 1 2 -2h10a2 2 0 0 1 2 2v8a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2z" />
                    <path d="M12 15m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
                    <path d="M9 3h6v3h-6z" />
                  </svg>
                </div>
                <p>Sobre la marca</p>
              </Link>
            </li>

            <li className=" hover:bg-[#efefef] rounded-[5px] transition duration-200 ease-in-out h-[40px] cursor-pointer">
              <Link href="/blog" className="flex items-center gap-4">
                <div className="bg-[#efefef] w-[40px] h-[40px] rounded-full p-1 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-article" width="24" height="24" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#000000" fill="none" strokeLinecap="round" strokeLinejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                    <path d="M3 4m0 2a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2z" />
                    <path d="M7 8h10" />
                    <path d="M7 12h10" />
                    <path d="M7 16h10" />
                  </svg>
                </div>
                <p>Blog</p>
              </Link>
            </li>

            
            <li className=" hover:bg-[#efefef] rounded-[5px] transition duration-200 ease-in-out h-[40px] cursor-pointer">
              <Link href="/contacto" className="flex items-center gap-4">
                <div className="bg-[#efefef] w-[40px] h-[40px] rounded-full p-1 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-phone" width="24" height="24" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#000000" fill="none" strokeLinecap="round" strokeLinejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                    <path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2" />
                  </svg>
                </div>
                <p>Contacto</p>
              </Link>
            </li>

          </ul>

          <Divider />

          <ul className="flex flex-col gap-5 pt-5">
            
            <li className=" hover:bg-[#efefef] rounded-[5px] transition duration-200 ease-in-out h-[40px] cursor-pointer">
              <Link href="/cuenta" className="flex items-center gap-4">
                <div className="bg-[#efefef] w-[40px] h-[40px] rounded-full p-1 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 21 21" fill="none">
                    <path d="M10.9524 10.9493C8.22989 10.9493 6.01538 8.75236 6.01538 6.05149C6.01538 3.35061 8.22989 1.15369 10.9524 1.15369C13.6749 1.15369 15.8894 3.35061 15.8894 6.05149C15.8894 8.75236 13.6749 10.9493 10.9524 10.9493ZM10.9524 2.57635C9.02083 2.57635 7.44944 4.13527 7.44944 6.05149C7.44944 7.96771 9.02083 9.52662 10.9524 9.52662C12.884 9.52662 14.4554 7.96771 14.4554 6.05149C14.4554 4.13527 12.884 2.57635 10.9524 2.57635Z" fill="#383838"/>
                    <path d="M19.2223 19.1536H17.7883C17.7883 15.4142 14.7216 12.3719 10.9522 12.3719C7.18286 12.3719 4.11619 15.4142 4.11619 19.1536H2.68213C2.68213 14.6295 6.39192 10.9492 10.9522 10.9492C15.5125 10.9492 19.2223 14.6295 19.2223 19.1536Z" fill="#383838"/>
                  </svg>
                </div>
                <p>Mi cuenta</p>
              </Link>
            </li>

            <li className=" hover:bg-[#efefef] rounded-[5px] transition duration-200 ease-in-out h-[40px] cursor-pointer">
              <Link href="/" className="flex items-center gap-4">
                <div className="bg-[#efefef] w-[40px] h-[40px] rounded-full p-1 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#383838" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
                  </svg>
                </div>
                <p>Carrito</p>
              </Link>
            </li>
          </ul>

        </div>

        <div className="flex flex-col gap-5 mt-5">
          <Divider />

          <div className="flex justify-center gap-6">
            {/* Facebook */}
            <Link href="#" className="flex items-center gap-4">
              <div className="bg-primary w-[40px] h-[40px] rounded-full p-1 flex items-center justify-center">
                <svg width="13" height="25" viewBox="0 0 13 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g clipPath="url(#clip0_41_11)">
                  <path d="M8.44806 25H3.84699C3.84257 24.8949 3.83471 24.7892 3.83471 24.6841C3.83422 21.0963 3.83422 17.508 3.83422 13.9203V13.5936H0V9.13818H3.83471C3.83471 9.01689 3.83471 8.92886 3.83471 8.84034C3.83471 7.90476 3.81506 6.96869 3.84159 6.0336C3.85878 5.43449 3.89219 4.82756 4.00665 4.24117C4.45615 1.94061 6.121 0.404463 8.44167 0.0860819C9.56566 -0.0679735 10.6882 0.0215253 11.8112 0.0777678C12.2086 0.0978194 12.6041 0.155529 13.0005 0.196121V4.15119C12.0141 4.16537 11.0271 4.15803 10.0422 4.20107C9.23996 4.23628 8.74035 4.65688 8.53501 5.39634C8.48343 5.58219 8.45248 5.77977 8.45052 5.97246C8.43873 6.97309 8.43922 7.97372 8.43725 8.97434C8.43725 9.02814 8.45248 9.08194 8.46427 9.16116H12.8399C12.6463 10.6543 12.4572 12.1171 12.2646 13.6033H8.43578V13.8958C8.43578 17.508 8.43578 21.1203 8.43627 24.7325C8.43627 24.8215 8.44413 24.9105 8.44855 25H8.44806Z" fill="white"/>
                  </g>
                  <defs>
                  <clipPath id="clip0_41_11">
                  <rect width="13" height="25" fill="white"/>
                  </clipPath>
                  </defs>
                </svg>
              </div>
            </Link>
            
            <Link href="/#" className="flex items-center gap-4">
              {/* Twitter */}
              <div className="bg-primary w-[40px] h-[40px] rounded-full p-1 flex items-center justify-center">
                <svg width="23" height="20" viewBox="0 0 29 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M27.1239 0C27.1701 0.108351 27.0555 0.138364 27.0067 0.191777C23.7405 3.75923 20.4716 7.32465 17.2026 10.8901C17.1733 10.9221 17.144 10.9537 17.0946 11.0076C20.7418 15.9872 24.3912 20.9693 28.0417 25.9534C27.9695 26.0272 27.8843 25.9911 27.8121 25.9916C25.2868 25.9941 22.7614 25.9916 20.236 25.9967C20.0667 25.9967 19.9646 25.957 19.8637 25.8192C17.5028 22.5849 15.1359 19.3542 12.7695 16.1235C12.719 16.0548 12.6631 15.9902 12.5985 15.9098C11.817 16.7614 11.0474 17.6002 10.2783 18.4391C8.02052 20.9011 5.76218 23.3632 3.50763 25.8278C3.39908 25.9468 3.2927 26.0002 3.12066 25.9977C2.41889 25.9875 1.71713 25.9931 0.958374 25.9931C4.50573 22.1245 8.02324 18.2895 11.5429 14.4514C10.3521 12.8251 9.16896 11.2105 7.98579 9.59545C5.69596 6.46903 3.40559 3.34261 1.11685 0.215685C1.06747 0.147521 0.994195 0.0905471 0.984426 0H9.04848C9.07453 0.0437475 9.09732 0.0895297 9.12717 0.130734C11.3915 3.22256 13.6558 6.31439 15.9212 9.4052C15.9554 9.45149 15.9755 9.51508 16.0553 9.52576C16.0835 9.49676 16.1139 9.46624 16.1432 9.4347C18.9779 6.3444 21.8121 3.2541 24.6447 0.162273C24.6865 0.11649 24.7711 0.0859689 24.7429 0.000508692H27.1239V0ZM4.22242 1.68479C4.26638 1.75397 4.28266 1.78449 4.30329 1.81196C9.87019 9.28261 15.4382 16.7527 21.0024 24.2249C21.0919 24.345 21.1869 24.3811 21.3351 24.3801C22.4081 24.375 23.4811 24.378 24.5541 24.3755C24.6176 24.3755 24.6979 24.4121 24.7527 24.3267C24.7245 24.287 24.6952 24.2463 24.6653 24.2056C20.9454 19.2138 17.2254 14.2215 13.5055 9.2297C11.6791 6.77883 9.85228 4.32795 8.02432 1.87809C7.96137 1.79365 7.92663 1.68173 7.77195 1.68224C6.60234 1.68631 5.43328 1.68428 4.22296 1.68428L4.22242 1.68479Z" fill="white"/>
                </svg>
              </div>
            </Link>
          </div>

        </div>
      </div>

    </Box>
  );

  return (
    <div>
      <button
        onClick={toggleDrawer(true)}
      >
        <svg width="42" height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M9 13.2112C9 12.5423 9.54226 12 10.2112 12H19.959C20.6279 12 21.1702 12.5423 21.1702 13.2112C21.1702 13.8801 20.6279 14.4223 19.959 14.4223H10.2112C9.54226 14.4223 9 13.8801 9 13.2112Z" fill="#FFF"/>
          <path d="M9 20.5189C9 19.8499 9.54226 19.3077 10.2112 19.3077H32.1292C32.7981 19.3077 33.3404 19.8499 33.3404 20.5189C33.3404 21.1878 32.7981 21.73 32.1292 21.73H10.2112C9.54226 21.73 9 21.1878 9 20.5189Z" fill="#FFF"/>
          <path d="M10.2112 26.616C9.54226 26.616 9 27.1583 9 27.8271C9 28.496 9.54226 29.0383 10.2112 29.0383H24.8271C25.496 29.0383 26.0383 28.496 26.0383 27.8271C26.0383 27.1583 25.496 26.616 24.8271 26.616H10.2112Z" fill="#FFF"/>
        </svg>
      </button>
      {/* <Bars3Icon
        onClick={toggleDrawer(true)}
        className={styles["boton-hamburguesa"]}
        aria-hidden="true"
      /> */}
      <SwipeableDrawer
        open={state}
        onClose={toggleDrawer(false)}
        onOpen={toggleDrawer(true)}
        transitionDuration={350}
        sx={{
          "& .MuiBackdrop-root": {
            background: "rgba(255, 255, 255, 0.15)",
            borderRadius: "16px",
            boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
            backdropFilter: "blur(7.2px)",
            WebkitBackdropFilter: "blur(7.2px)",
            border: "1px solid rgba(255, 255, 255, 0.3)",
          },
        }}
      >
        <List />
      </SwipeableDrawer>
    </div>
  );
}
