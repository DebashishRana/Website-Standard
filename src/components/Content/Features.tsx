"use client";
import { motion, useInView } from "framer-motion";
import {
  BarChart2Icon,
  BrainCircuitIcon,
  Clock10Icon,
  MousePointer2,
  PhoneCallIcon,
  Settings2Icon,
} from "lucide-react";
import { useState, useRef, useEffect } from "react";

export const Features = () => {
  const [hasAnimated, setHasAnimated] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef);

  useEffect(() => {
    if (isInView && !hasAnimated) {
      setHasAnimated(true);
    }
  }, [isInView, hasAnimated]);

  // Base card classes: default text color is black
  const cardBase =
    "p-12 card bg-primary-content text-black transition-colors duration-300 ease-out rounded-lg";

  // Framer motion variants for hover effect (lift + shadow)
  const cardHoverVariants = {
    rest: { y: 0, scale: 1, boxShadow: "0px 6px 18px rgba(0,0,0,0.06)" },
    hover: { y: -6, scale: 1.03, boxShadow: "0px 18px 40px rgba(0,0,0,0.18)" },
  };

  return (
    <motion.section
      ref={sectionRef}
      initial={{ opacity: 0, scale: 0.95 }}
      animate={hasAnimated ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.35 }}
      className="py-32 font-poppins"
    >
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="text-center">
          <motion.h2
            initial={{ opacity: 0, y: 8 }}
            animate={hasAnimated ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.4 }}
            className="font-poppins text-3xl font-bold leading-tight text-gray-900 sm:text-4xl xl:text-5xl"
          >
            Cutting edge technology for a seamless experience
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 8 }}
            animate={hasAnimated ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="mt-4 text-base leading-7 text-gray-600 sm:mt-8"
          >
            Dital Documentation, Verification and cloud storae all under one roof
          </motion.p>
        </div>

        <div className="grid grid-cols-1 gap-6 mt-10 text-center sm:mt-16 sm:grid-cols-2 md:grid-cols-3 xl:mt-24">
            {/* Card 1: 100% Paperless */}
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              animate={hasAnimated ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6 }}
              variants={cardHoverVariants}
              whileHover="hover"
              whileTap={{ scale: 0.99 }}
              className={`${cardBase} hover:bg-black hover:text-white`}
            >
              <BrainCircuitIcon className="mx-auto text-current" size={32} />
              <h3 className="mt-8 text-xl font-bold text-current font-pj">100% Paperless</h3>
              <p className="mt-4 text-base text-current font-pj">
                Enjoy a fully digital experience—no physical documents required. All processes are handled online for maximum convenience and speed.
              </p>
            </motion.div>

            {/* Card 2: Immediate Response */}
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              animate={hasAnimated ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.7 }}
              variants={cardHoverVariants}
              whileHover="hover"
              whileTap={{ scale: 0.99 }}
              className={`${cardBase} hover:bg-black hover:text-white`}
            >
              <Clock10Icon className="mx-auto text-current" size={32} />
              <h3 className="mt-8 text-xl font-bold text-current font-pj">Immediate Response</h3>
              <p className="mt-4 text-base text-current font-pj">
                Get instant feedback and verification. Our platform ensures your requests are processed and responded to in real time.
              </p>
            </motion.div>

            {/* Card 3: Easy to Access */}
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              animate={hasAnimated ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.8 }}
              variants={cardHoverVariants}
              whileHover="hover"
              whileTap={{ scale: 0.99 }}
              className={`${cardBase} hover:bg-black hover:text-white`}
            >
              <MousePointer2 className="mx-auto text-current" size={32} />
              <h3 className="mt-8 text-xl font-bold text-current font-pj">Easy to Access</h3>
              <p className="mt-4 text-base text-current font-pj">
                Access Store and verify your account from any device, anywhere, anytime. Our responsive design ensures a seamless experience across all platforms.
              </p>
            </motion.div>

            {/* Card 4: Latest Technology */}
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              animate={hasAnimated ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.9 }}
              variants={cardHoverVariants}
              whileHover="hover"
              whileTap={{ scale: 0.99 }}
              className={`${cardBase} hover:bg-black hover:text-white`}
            >
              <Settings2Icon className="mx-auto text-current" size={32} />
              <h3 className="mt-8 text-xl font-bold text-current font-pj">Latest Technology</h3>
              <p className="mt-4 text-base text-current font-pj">
                Benefit from the most advanced technology and algorithms, ensuring fast, reliable, and intelligent service delivery.
              </p>
            </motion.div>

            {/* Card 5: Streamlined */}
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              animate={hasAnimated ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 1 }}
              variants={cardHoverVariants}
              whileHover="hover"
              whileTap={{ scale: 0.99 }}
              className={`${cardBase} hover:bg-black hover:text-white`}
            >
              <BarChart2Icon className="mx-auto text-current" size={32} />
              <h3 className="mt-8 text-xl font-bold text-current font-pj">Streamlined</h3>
              <p className="mt-4 text-base text-current font-pj">
                Experience a smooth and hassle-free journey from start to finish. Our platform is designed for efficiency and ease of use.
              </p>
            </motion.div>

            {/* Card 6: Secured Servers */}
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              animate={hasAnimated ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 1.1 }}
              variants={cardHoverVariants}
              whileHover="hover"
              whileTap={{ scale: 0.99 }}
              className={`${cardBase} hover:bg-black hover:text-white`}
            >
              <PhoneCallIcon className="mx-auto text-current" size={32} />
              <h3 className="mt-8 text-xl font-bold text-current font-pj">Secured Servers</h3>
              <p className="mt-4 text-base text-current font-pj">
                Your data is protected with robust security measures and encrypted servers, ensuring privacy and safety at all times.
              </p>
            </motion.div>
        </div>
      </div>
    </motion.section>
  );
};
