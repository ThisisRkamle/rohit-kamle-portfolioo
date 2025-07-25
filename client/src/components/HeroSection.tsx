import { motion } from "framer-motion";
import { Mail, Linkedin, Download } from "lucide-react";
import { Button } from "@/components/ui/button";

export function HeroSection() {
  const handleEmailClick = () => {
    window.location.href = "mailto:mail2rkamle@gmail.com";
  };

  const handleLinkedInClick = () => {
    window.open("https://www.linkedin.com/in/rohith-kamle-71670ba?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BjXJreluAT4ikOxsWv%2FpxzQ%3D%3D", "_blank", "noopener,noreferrer");
  };

  const handleResumeDownload = () => {
    const link = document.createElement("a");
    link.href = "/api/download-resume";
    link.download = "Rohit_Kamle_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section className="pt-24 pb-20 bg-gradient-to-br from-blue-50 via-white to-indigo-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <motion.h1
            className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-4 animate-fade-in"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Rohit Kamle
          </motion.h1>

          <motion.h2
            className="text-xl md:text-2xl text-primary font-semibold mb-4"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            IT Manager | Cloud & Infrastructure Leader
          </motion.h2>

          <motion.p
            className="text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Experienced IT professional with 18+ years driving operational excellence,
            cloud migrations, and building high-impact teams across global infrastructure environments.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <Button
              onClick={handleEmailClick}
              className="inline-flex items-center px-6 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-secondary transform hover:scale-105 transition-all duration-200 shadow-lg"
            >
              <Mail className="w-5 h-5 mr-2" />
              Email Me
            </Button>

            <Button
              variant="outline"
              onClick={handleLinkedInClick}
              className="inline-flex items-center px-6 py-3 bg-white dark:bg-gray-800 text-gray-900 dark:text-white font-semibold rounded-lg border-2 border-gray-300 dark:border-gray-600 hover:border-primary hover:text-primary transform hover:scale-105 transition-all duration-200 shadow-lg"
            >
              <Linkedin className="w-5 h-5 mr-2" />
              LinkedIn
            </Button>

            <Button
              variant="secondary"
              onClick={handleResumeDownload}
              className="inline-flex items-center px-6 py-3 bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white font-semibold rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transform hover:scale-105 transition-all duration-200 shadow-lg"
            >
              <Download className="w-5 h-5 mr-2" />
              Download Resume
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
