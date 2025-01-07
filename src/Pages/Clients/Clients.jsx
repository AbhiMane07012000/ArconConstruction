import React, { useEffect, useRef } from 'react';

const Clients = () => {




const CompanyLogoData = [
    { src: '/images/clients/ava-lifespaces-group_logo.jpg', alt: 'Ava LifeSpaces Logo' },
    { src: '/images/clients/eiffel-developers-and-realtors.png', alt: 'Eiffel Developers and Realtors Logo' },
    { src: '/images/clients/indiabulls.png', alt: 'Indiabulls Logo' },
    { src: '/images/clients/kumar-properties.png', alt: 'Kumar Properties Logo' },
    { src: '/images/clients/lodha-group-logo-768x178.png', alt: 'Lodha Group Logo' },
    { src: '/images/clients/man-realty.png', alt: 'Man Realty Logo' },
    { src: '/images/clients/marathon-group_logo.jpg', alt: 'Marathon Group Logo' },
    { src: '/images/clients/richa-realtors.png', alt: 'Richa Realtors Logo' },
    { src: '/images/clients/Shapoorji-Pallonji-Group.jpg', alt: 'Shapoorji Pallonji Group Logo' },
    { src: '/images/clients/xrbia.jpeg', alt: 'Xrbia Logo' },
];

    const logosRef = useRef(null);
    const containerRef = useRef(null);

    useEffect(() => {
        if (logosRef.current) {
            const ul = logosRef.current;
            const clonedUl = ul.cloneNode(true);
            ul.insertAdjacentElement('afterend', clonedUl);
            clonedUl.setAttribute('aria-hidden', 'true');
        }
    }, []);

    const handleMouseEnter = () => {
        if (containerRef.current && logosRef.current) {
            logosRef.current.style.animationPlayState = 'paused';
            const clonedUl = logosRef.current.nextElementSibling;
            if (clonedUl) {
                clonedUl.style.animationPlayState = 'paused';
            }
        }
    };

    const handleMouseLeave = () => {
        if (containerRef.current && logosRef.current) {
            logosRef.current.style.animationPlayState = 'running';
            const clonedUl = logosRef.current.nextElementSibling;
            if (clonedUl) {
                clonedUl.style.animationPlayState = 'running';
            }
        }
    };



  return (
    <div
      id="client"
      className="md:h-full lg:h-[100vh] px-4 pt-5 lg:pt-44 lg:px-40 justify-center items-center font-code"
    >
     <h2 className="text-center text-xl lg:text-3xl font-bold">Our Clients</h2>
            <h2 className="text-center text-sm lg:text-xl  my-5">
                Trusted by the world&apos;s most innovative companies
            </h2>

            {/* <!-- Logo Carousel animation  --> */}
            <div
                className="w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]"
            >
                <ul
                    ref={logosRef}
                    role="list"
                    className="flex items-center justify-center md:justify-start [&_li]:mx-4 sm:[&_li]:mx-6 lg:[&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll"
                >
                    {CompanyLogoData.map(({ src, alt }) => (
                        <li
                            key={alt}
                            className="flex-none"
                            ref={containerRef}
                            onMouseEnter={handleMouseEnter}
                            onMouseLeave={handleMouseLeave}
                        >
                            <img
                                src={src}
                                alt={alt}
                                className=" w-auto h-16 sm:h-20 md:h-24 lg:h-28 xl:h-32 flex-none p-5 bg-white rounded-lg"
                                loading="lazy"
                                fetchPriority='high'
                            />
                        </li>
                    ))}
                </ul>
            </div>
     
    </div>
  );
};

export default Clients;

