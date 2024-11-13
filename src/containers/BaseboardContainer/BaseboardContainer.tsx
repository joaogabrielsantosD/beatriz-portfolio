    "use client";

    import React from "react";
    import Link from 'next/link';
    import { motion } from "framer-motion";

    function BaseboardContainer() {
        return (
            <>
                <div className="w-full h-px bg-gray-dark"></div>
                <div className="flex md:flex-row flex-col items-center justify-center">
                    <div className="font-main font-medium text-[48px] text-black text-center" style={{display:"flex", flexDirection:"column", alignItems:"center", flex:"1", margin:"88px", gap:"32px"}}>
                        <h1>Let&apos;s make contact</h1>

                        <Link href="https://www.youtube.com/watch?v=CvNQ6ln91Lo"> {/* Mudar link */}
                            <motion.div
                                aria-current="page"
                                className="relative"
                                whileHover="hover"
                                animate="rest"
                            >
                                <div style={{ width: "236px", height: "60px" }}></div>  

                                <div className="absolute top-3 left-4 w-full h-15 flex space-x-10 items-center">
                                    <svg
                                        width="24"
                                        height="20"
                                        viewBox="0 0 24 20"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                        stroke="currentColor"
                                        className="text-black"
                                    >
                                        <path
                                            d="M13.7207 19.5211C13.5802 19.3804 13.5013 19.1898 13.5013 18.9911C13.5013 18.7923 13.5802 18.6017 13.7207 18.4611L21.4394 10.7411L1.25066 10.7411C1.05175 10.7411 0.860981 10.662 0.720329 10.5214C0.579678 10.3807 0.50066 10.19 0.50066 9.99106C0.50066 9.79214 0.579678 9.60138 0.720329 9.46073C0.860981 9.32008 1.05175 9.24106 1.25066 9.24106L21.4394 9.24106L13.7207 1.52106C13.5882 1.37888 13.5161 1.19084 13.5195 0.996535C13.5229 0.802234 13.6016 0.616848 13.739 0.479435C13.8765 0.342022 14.0618 0.263311 14.2561 0.259882C14.4504 0.256454 14.6385 0.328577 14.7807 0.461057L23.7807 9.46106C23.9211 9.60168 24 9.79231 24 9.99106C24 10.1898 23.9211 10.3804 23.7807 10.5211L14.7807 19.5211C14.64 19.6615 14.4494 19.7404 14.2507 19.7404C14.0519 19.7404 13.8613 19.6615 13.7207 19.5211Z"
                                            fill="#484848"
                                        />
                                    </svg>
                                    <p className="font-main font-regular text-[25px] text-black">
                                        Email me!
                                    </p>
                                </div>

                                <motion.div
                                    className="absolute top-0 left-0 border border-black"
                                    style={{ originX: 0, height: "100%", borderRadius: "100px" }}
                                    initial={false}
                                    variants={{
                                        rest: {
                                            width: 60,
                                        },
                                        hover: {
                                            width: 236,
                                        },
                                    }}
                                ></motion.div>
                            </motion.div>
                        </Link>
                    </div>

                    <div className="block md:hidden h-[1px] w-full bg-gray-dark"></div>
                    <div className="flex-grow-0 flex-shrink-0 w-[1px] bg-gray-dark self-stretch"></div>
                    
                    <div className="flex flex-1 flex-col space-y-8 items-start w-full my-8">
                        <Link href="#my-work">
                            <h1 className="font-main font-medium text-[31px] text-black mx-8 hover:text-purple-600">
                                My Work
                            </h1>
                        </Link>

                        <div className="block h-[1px] w-full bg-gray-dark"></div>
                        <Link href="https://www.youtube.com/watch?v=fBR0gxGQtT8">
                            <h1 className="font-main font-medium text-[31px] text-black mx-8 hover:text-purple-600">
                                About
                            </h1>
                        </Link>

                        <div className="block h-[1px] w-full bg-gray-dark"></div>
                        <Link href="https://www.youtube.com/watch?v=fBR0gxGQtT8">
                            <h1 className="font-main font-medium text-[31px] text-black mx-8 hover:text-purple-600">
                                Projects
                            </h1>
                        </Link>

                        <div className="block h-[1px] w-full bg-gray-dark"></div>
                        <Link href="https://www.youtube.com/watch?v=fBR0gxGQtT8">
                            <h1 className="font-main font-medium text-[31px] text-black mx-8 hover:text-purple-600">
                                Skills
                            </h1>
                        </Link>
                        
                        <div className="block h-[1px] w-full bg-gray-dark"></div>
                        <Link href="https://www.youtube.com/watch?v=fBR0gxGQtT8">
                            <h1 className="font-main font-medium text-[31px] text-black mx-8 hover:text-purple-600">
                                Contact
                            </h1>
                        </Link>
                        
                        <div className="block h-[1px] w-full bg-gray-dark"></div>
                        <div className="flex space-x-4 mx-8">
                            <Link href="https://www.linkedin.com/in/beatriz-calado-355393329/">
                                <svg
                                    width="32"
                                    height="33"
                                    viewBox="0 0 32 33"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="hover:shadow-lg hover:shadow-purple-600"
                                >
                                    <path
                                    d="M24.9733 8.06372L23.2666 9.39705L15.9999 14.7971L8.73327 9.34372L7.0266 8.01039C6.62454 7.67778 6.13374 7.47044 5.61499 7.41405C5.09624 7.35767 4.57235 7.45471 4.10821 7.69317C3.64408 7.93162 3.2601 8.301 3.00386 8.75555C2.74761 9.2101 2.63035 9.72985 2.6666 10.2504V25.7037C2.6666 26.1846 2.85765 26.6459 3.19772 26.9859C3.53778 27.326 3.99901 27.5171 4.47994 27.5171H8.73327V17.2237L15.9999 22.6771L23.2666 17.2237V27.5171H27.5199C28.0009 27.5171 28.4621 27.326 28.8022 26.9859C29.1422 26.6459 29.3333 26.1846 29.3333 25.7037V10.2504C29.3583 9.73434 29.2329 9.22213 28.9723 8.77602C28.7117 8.32991 28.327 7.96912 27.8652 7.7375C27.4034 7.50587 26.8842 7.4134 26.3708 7.47131C25.8574 7.52923 25.3719 7.73504 24.9733 8.06372Z"
                                    fill="black"
                                    />
                                </svg>
                            </Link>

                            <Link href="https://www.linkedin.com/in/beatriz-calado-355393329/">
                                <svg
                                    width="32"
                                    height="33"
                                    viewBox="0 0 32 33"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="hover:shadow-lg hover:shadow-purple-600"
                                >
                                    <path
                                    d="M25.3333 4.84961C26.0406 4.84961 26.7189 5.13056 27.219 5.63066C27.719 6.13075 28 6.80903 28 7.51628V26.1829C28 26.8902 27.719 27.5685 27.219 28.0686C26.7189 28.5687 26.0406 28.8496 25.3333 28.8496H6.66667C5.95942 28.8496 5.28115 28.5687 4.78105 28.0686C4.28095 27.5685 4 26.8902 4 26.1829V7.51628C4 6.80903 4.28095 6.13075 4.78105 5.63066C5.28115 5.13056 5.95942 4.84961 6.66667 4.84961H25.3333ZM24.6667 25.5163V18.4496C24.6667 17.2968 24.2087 16.1912 23.3936 15.3761C22.5784 14.5609 21.4728 14.1029 20.32 14.1029C19.1867 14.1029 17.8667 14.7963 17.2267 15.8363V14.3563H13.5067V25.5163H17.2267V18.9429C17.2267 17.9163 18.0533 17.0763 19.08 17.0763C19.5751 17.0763 20.0499 17.2729 20.3999 17.623C20.75 17.9731 20.9467 18.4479 20.9467 18.9429V25.5163H24.6667ZM9.17333 12.2629C9.76742 12.2629 10.3372 12.0269 10.7573 11.6069C11.1773 11.1868 11.4133 10.617 11.4133 10.0229C11.4133 8.78294 10.4133 7.76961 9.17333 7.76961C8.57571 7.76961 8.00257 8.00701 7.57999 8.4296C7.1574 8.85218 6.92 9.42532 6.92 10.0229C6.92 11.2629 7.93333 12.2629 9.17333 12.2629ZM11.0267 25.5163V14.3563H7.33333V25.5163H11.0267Z"
                                    fill="black"
                                    />
                                </svg>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="w-full h-px bg-gray-dark"></div>
            </>
        );
    }

    export default BaseboardContainer;
