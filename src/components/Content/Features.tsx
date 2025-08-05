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
            Revolutionize Paperwork and Documentation with Our Cutting-Edge Technology
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 8 }}
            animate={hasAnimated ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="mt-4 text-base leading-7 text-gray-600 sm:mt-8"
          >
            Streamline Document Acquisition, Simplify Workflow, and Enhance Efficiency
          </motion.p>
        </div>

        <div className="grid grid-cols-1 gap-6 mt-10 text-center sm:mt-16 sm:grid-cols-2 md:grid-cols-3 xl:mt-24">
          {/* Card 1 */}
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
            <h3 className="mt-8 text-xl font-bold text-current font-pj">
              AI-Powered Document Verification
            </h3>
            <p className="mt-4 text-base text-current font-pj">
              Utilize advanced AI algorithms to identify and verify documents with unparalleled accuracy, ensuring authenticity and compliance.
            </p>
          </motion.div>

          {/* Card 2 */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={hasAnimated ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.7 }}
            variants={cardHoverVariants}
            whileHover="hover"
            whileTap={{ scale: 0.99 }}
            className={`${cardBase} hover:bg-black hover:text-white`}
          >
            <MousePointer2 className="mx-auto text-current" size={32} />
            <h3 className="mt-8 text-xl font-bold text-current font-pj">
              Blazing Fast Verification
            </h3>
            <p className="mt-4 text-base text-current font-pj">
              Streamline verification with a fast, reliable engine that reduces wait time and keeps workflows moving.
            </p>
          </motion.div>

          {/* Card 3 */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={hasAnimated ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8 }}
            variants={cardHoverVariants}
            whileHover="hover"
            whileTap={{ scale: 0.99 }}
            className={`${cardBase} hover:bg-black hover:text-white`}
          >
            <Settings2Icon className="mx-auto text-current" size={32} />
            <h3 className="mt-8 text-xl font-bold text-current font-pj">
              We value your Privacy
            </h3>
            <p className="mt-4 text-base text-current font-pj">
              Our application ensures that your data is secure and confidential, adhering to modern privacy standards and best practices.
            </p>
          </motion.div>

          {/* Card 4 */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={hasAnimated ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.9 }}
            variants={cardHoverVariants}
            whileHover="hover"
            whileTap={{ scale: 0.99 }}
            className={`${cardBase} hover:bg-black hover:text-white`}
          >
            <Clock10Icon className="mx-auto text-current" size={32} />
            <h3 className="mt-8 text-xl font-bold text-current font-pj">
              Automated Data Deletion
            </h3>
            <p className="mt-4 text-base text-current font-pj">
              To maximize privacy, data is automatically deleted after 30 days, reducing retention risk and exposure.
            </p>
          </motion.div>

          {/* Card 5 */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={hasAnimated ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 1 }}
            variants={cardHoverVariants}
            whileHover="hover"
            whileTap={{ scale: 0.99 }}
            className={`${cardBase} hover:bg-black hover:text-white`}
          >
            <PhoneCallIcon className="mx-auto text-current" size={32} />
            <h3 className="mt-8 text-xl font-bold text-current font-pj">
              Centralized Communication Hub
            </h3>
            <p className="mt-4 text-base text-current font-pj">
              Centralize all document-related discussions and approvals in one place, improving collaboration and traceability.
            </p>
          </motion.div>

          {/* Card 6 */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={hasAnimated ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 1.1 }}
            variants={cardHoverVariants}
            whileHover="hover"
            whileTap={{ scale: 0.99 }}
            className={`${cardBase} hover:bg-black hover:text-white`}
          >
            <BarChart2Icon className="mx-auto text-current" size={32} />
            <h3 className="mt-8 text-xl font-bold text-current font-pj">
              Comprehensive Analytics and Reporting
            </h3>
            <p className="mt-4 text-base text-current font-pj">
              Gain insights into verification pipelines with dashboards and reports that help you measure and improve processes.
            </p>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};
