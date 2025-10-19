import React from "react";

export const HowItWork = () => {
  return (
    <section className="py-32">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="font-poppins text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">
            How does it work?
          </h2>
          <p className="max-w-lg mx-auto mt-4 text-base leading-relaxed text-gray-600">
            Our secure and seamless process makes document verification effortless for users and organizations.
          </p>
        </div>

        <div className="relative mt-12 lg:mt-20">
          <div className="absolute inset-x-0 hidden xl:px-44 top-2 md:block md:px-20 lg:px-28">
            <img
              className="w-full"
              src="https://cdn.rareblocks.xyz/collection/celebration/images/steps/2/curved-dotted-line.svg"
              alt=""
            />
          </div>

          <div className="relative grid grid-cols-1 text-center gap-y-12 md:grid-cols-3 gap-x-12">
            <div>
              <div className="animate-pulse flex items-center justify-center w-16 h-16 mx-auto bg-black border-2 border-gray-200 rounded-full shadow">
                <span className="text-xl font-semibold text-white"> 1 </span>
              </div>
              <h3 className="mt-6 text-xl font-semibold leading-tight text-black md:mt-10">
                Upload Your Documents
              </h3>
              <p className="mt-4 text-base text-gray-600">
                The client securely uploads documents directly through our application. All files are encrypted and transferred to our protected servers.
              </p>
            </div>

            <div>
              <div className="animate-pulse flex items-center justify-center w-16 h-16 mx-auto bg-black border-2 border-gray-200 rounded-full shadow">
                <span className="text-xl font-semibold text-white"> 2 </span>
              </div>
              <h3 className="mt-6 text-xl font-semibold leading-tight text-black md:mt-10">
                QR Code Generation
              </h3>
              <p className="mt-4 text-base text-gray-600">
                Once uploaded, a unique QR code is instantly generated for each document. This QR code acts as a secure digital key for access and verification.
              </p>
            </div>

            <div>
              <div className="animate-pulse flex items-center justify-center w-16 h-16 mx-auto bg-black border-2 border-gray-200 rounded-full shadow">
                <span className="text-xl font-semibold text-white"> 3 </span>
              </div>
              <h3 className="mt-6 text-xl font-semibold leading-tight text-black md:mt-10">
                Scan & Verify Instantly
              </h3>
              <p className="mt-4 text-base text-gray-600">
                Scanning the QR code loads the document on any monitor and verifies its authenticity in real time, providing a seamless and secure verification process.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
