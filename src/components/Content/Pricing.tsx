"use client";
import { motion, useInView } from "framer-motion";
import { Check } from "lucide-react";
import { useEffect, useRef, useState } from "react";

export const Pricing = () => {
  const [hasAnimated, setHasAnimated] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef);

  useEffect(() => {
    if (isInView && !hasAnimated) {
      setHasAnimated(true);
    }
  }, [isInView, hasAnimated]);

  return (
    <motion.section
      className="py-32 bg-cover bg-center"
      style={{ backgroundImage: "url('/images/mockup/pricing.jpg')" }}
      ref={sectionRef}
      initial={{ opacity: 0, y: 50 }}
      animate={hasAnimated ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="max-w-5xl px-4 mx-auto sm:px-6 lg:px-8">
        <div className="flex flex-col justify-between lg:py-5 mb-12">
          <motion.h2
            className="font-poppins text-xl font-bold leading-tight text-white lg:leading-tight md:text-5xl"
            initial={{ opacity: 0, y: 20 }}
            animate={hasAnimated ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
          >
            Flexible SAAS Pricing for Offices & Workplaces
          </motion.h2>
          <motion.div
            initial={{ opacity: 0 }}
            animate={hasAnimated ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.5 }}
          >
            <blockquote className="mt-2">
              <p className="text-lg leading-relaxed text-white">
                Free to public to upload and integrate DigiLocker. Premium plans for offices and workplaces offer increased verifications, more cloud storage, and admin controls. Scanner machine available for seamless verification. Plans scale up or down automatically based on demand.
              </p>
            </blockquote>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-x-12 lg:gap-x-20 gap-y-10">
          {/* Free plan */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={hasAnimated ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
          >
            <div className="overflow-hidden card bg-white">
              <div className="p-10">
                <p className="mt-4 text-4xl font-bold text-neutral">For public masses</p>
                <ul className="flex flex-col mt-8 space-y-4">
                  {[
                    "Upload documents and integrate DigiLocker",
                    "No cost for general public",
                    "Basic cloud storage 2GB",
                    "Easy document access and sharing",
                  ].map((item, index) => (
                    <motion.li
                      key={index}
                      className="inline-flex items-center space-x-2"
                      initial={{ opacity: 0, x: -20 }}
                      animate={hasAnimated ? { opacity: 1, x: 0 } : {}}
                      transition={{
                        duration: 0.5,
                        ease: "easeOut",
                        delay: 0.6 + index * 0.2,
                      }}
                    >
                      <Check size={18} />
                      <span className="text-base font-medium">{item}</span>
                    </motion.li>
                  ))}
                </ul>
                <button className="btn btn-neutral mt-4 w-full">
                  Get started for free
                </button>
              </div>
            </div>
          </motion.div>

          {/* Premium plan */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={hasAnimated ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
          >
            <div className="overflow-hidden card bg-white">
              <div className="p-10">
                <p className="mt-4 text-4xl font-bold text-neutral">Office Standard</p>
                <ul className="flex flex-col mt-8 space-y-4">
                  {[
                    "Increased verifications & priority support",
                    "Admin panel & analytics dashboard",
                    "Integrated scanner & verification code",
                    "Auto-pay agreement for seamless billing",
                    "Scalable resources based on demand",
                    "Scanner Double Lock integration",
                  ].map((item, index) => (
                    <motion.li
                      key={index}
                      className="inline-flex items-center space-x-2"
                      initial={{ opacity: 0, x: -20 }}
                      animate={hasAnimated ? { opacity: 1, x: 0 } : {}}
                      transition={{
                        duration: 0.5,
                        ease: "easeOut",
                        delay: 0.6 + index * 0.2,
                      }}
                    >
                      <Check size={18} />
                      <span className="text-base font-medium">{item}</span>
                    </motion.li>
                  ))}     
                </ul>
                <div className="mt-6 text-lg font-bold text-neutral">₹199/month (private offices)<br/>₹99/month (government offices)</div>
                <button className="btn btn-neutral mt-4 w-full">
                  Start with Standard
                </button>
              </div>
            </div>
          </motion.div>

          {/* Scanner Machine */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={hasAnimated ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
          >
            <div className="overflow-hidden card bg-white">
              <div className="p-10">
                <p className="mt-4 text-4xl font-bold text-neutral">Premium Office plus</p>
                <ul className="flex flex-col mt-8 space-y-4">
                  {[
                    "Integrated with verification code & software",
                    "Admin panel for management",
                    "Main cashcow: auto-pay agreement (like Paytm machine)",
                    "One-time cost: Rs 2300",
                    "Special pricing for government & private offices",
                  ].map((item, index) => (
                    <motion.li
                      key={index}
                      className="inline-flex items-center space-x-2"
                      initial={{ opacity: 0, x: -20 }}
                      animate={hasAnimated ? { opacity: 1, x: 0 } : {}}
                      transition={{
                        duration: 0.5,
                        ease: "easeOut",
                        delay: 0.6 + index * 0.2,
                      }}
                    >
                      <Check size={18} />
                      <span className="text-base font-medium">{item}</span>
                    </motion.li>
                  ))}
                </ul>
                <div className="mt-6 text-lg font-bold text-neutral">Rs 2300 one-time<br/>Special rates for offices</div>
                <button className="btn btn-neutral mt-4 w-full">
                  Get Scanner
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};
