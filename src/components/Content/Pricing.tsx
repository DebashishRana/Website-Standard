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
      style={{ backgroundImage: "url('/images/mockup/mockup_1.jpg')" }}
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
            Simple Pricing for Everyone
          </motion.h2>
          <motion.div
            initial={{ opacity: 0 }}
            animate={hasAnimated ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.5 }}
          >
            <blockquote className="mt-2">
              <p className="text-lg leading-relaxed text-white">
                Start verifying documents instantly for free — or talk to us for business-grade solutions & integration.
              </p>
            </blockquote>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 lg:gap-x-20 gap-y-10">
          {/* Free plan */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={hasAnimated ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
          >
            <div className="overflow-hidden card bg-white">
              <div className="p-10">
                <p className="mt-4 text-4xl font-bold text-neutral">Let set verify </p>
                <ul className="flex flex-col mt-8 space-y-4">
                  {[
                    "Unlimited basic document verifications",
                    "Instant QR code sharing",
                    "Easy access via mobile & desktop",
                    "No credit card required",
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

          {/* Business plan */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={hasAnimated ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
          >
            <div className="overflow-hidden card bg-white">
              <div className="p-10">
                <p className="mt-4 text-4xl font-bold text-neutral">For Businesses</p>
                <ul className="flex flex-col mt-8 space-y-4">
                  {[
                    "Bulk document verification & custom limits",
                    "API & dashboard integration",
                    "Team management & analytics",
                    "Priority support & SLA options",
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
                  Let’s Talk
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};
