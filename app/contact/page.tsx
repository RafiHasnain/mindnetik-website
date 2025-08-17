import {
  MapPin,
  Phone,
  Mail,
  Linkedin,
  Instagram,
  Twitter,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const ContactPage = () => {
  const contactInfo = [
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Dubai Office",
      details: ["Business Bay, Dubai", "United Arab Emirates"],
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Phone",
      details: ["+971 4 XXX XXXX", "+1 XXX XXX XXXX"],
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email",
      details: ["hello@mindnetik.com", "support@mindnetik.com"],
    },
  ];

  const socialLinks = [
    { icon: <Linkedin className="w-6 h-6" />, name: "LinkedIn", url: "#" },
    { icon: <Instagram className="w-6 h-6" />, name: "Instagram", url: "#" },
    { icon: <Twitter className="w-6 h-6" />, name: "Twitter", url: "#" },
  ];

  return (
    <div className="min-h-screen ">
      {/* Hero Section */}
      <section className="pt-40 pb-20 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent animate-gradient">
              Contact Us
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto">
              Ready to transform your business? Let's start a conversation about
              how we can help you achieve your digital transformation goals.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form and Info */}
      <section className="py-20 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold mb-6 bg-white bg-clip-text text-transparent">
                Send us a Message
              </h2>
              <Card className="bg-gray-900 border-gray-700">
                <CardContent className="p-8">
                  <form className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-white text-sm font-medium mb-2">
                          First Name
                        </label>
                        <Input
                          className="bg-gray-800 border-gray-600 focus:border-primary"
                          placeholder="John"
                        />
                      </div>
                      <div>
                        <label className="block text-white text-sm font-medium mb-2">
                          Last Name
                        </label>
                        <Input
                          className="bg-gray-800 border-gray-600 focus:border-primary"
                          placeholder="Doe"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-white text-sm font-medium mb-2">
                        Email
                      </label>
                      <Input
                        type="email"
                        className="bg-gray-800 border-gray-600 focus:border-primary"
                        placeholder="john@company.com"
                      />
                    </div>
                    <div>
                      <label className="block text-white text-sm font-medium mb-2">
                        Company
                      </label>
                      <Input
                        className="bg-gray-800 border-gray-600 focus:border-primary"
                        placeholder="Your Company"
                      />
                    </div>
                    <div>
                      <label className="block text-white text-sm font-medium mb-2">
                        Subject
                      </label>
                      <Input
                        className="bg-gray-800 border-gray-600 focus:border-primary"
                        placeholder="How can we help?"
                      />
                    </div>
                    <div>
                      <label className="block text-white text-sm font-medium mb-2">
                        Message
                      </label>
                      <Textarea
                        className="bg-gray-800 border-gray-600 focus:border-primary min-h-[120px]"
                        placeholder="Tell us about your project, goals, and how we can help..."
                      />
                    </div>
                    <Button className="w-full bg-primary hover:bg-secondary hover:opacity-90 font-semibold px-8 py-4 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-primary/25">
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold mb-6 bg-white bg-clip-text text-transparent">
                Get in Touch
              </h2>
              <div className="space-y-6 mb-8">
                {contactInfo.map((info, index) => (
                  <Card key={index} className={`bg-gray-900 border-gray-700`}>
                    <CardContent className="p-6">
                      <div className="flex items-start">
                        <div className="text-primary mr-4 mt-1">
                          {info.icon}
                        </div>
                        <div>
                          <h3 className="text-lg  text-white font-semibold mb-2">
                            {info.title}
                          </h3>
                          {info.details.map((detail, detailIndex) => (
                            <p key={detailIndex} className="text-gray-300">
                              {detail}
                            </p>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Social Media */}
              <div>
                <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
                <div className="flex space-x-4">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.url}
                      className="w-12 h-12 bg-gray-900 border border-gray-700 rounded-lg flex items-center justify-center text-primary hover:border-primary hover:bg-primary hover:text-white transition-all duration-300"
                      aria-label={social.name}
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="">
        {/* <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3650.6707120515375!2d90.4126813155454!3d23.794737484567467!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c7707177a5db%3A0x95fd408f44f9bc61!2sAhsan%20Technologies%20Ltd.!5e0!3m2!1sen!2sbd!4v1674385397114!5m2!1sen!2sbd"
          width="600"
          height="450"
          style="border: 0"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe> */}
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3604.123456789012!2d55.2708!3d25.2048!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f6c7b8a9b8b9b%3A0x1234567890abcdef!2sDubai%20Office%20Location!5e0!3m2!1sen!2suae!4v1234567890123"
          width="100%"
          height="450"
          style={{ border: 0 }}
          // allowFullScreen="true"
          referrerPolicy="no-referrer-when-downgrade"
          className="w-full   shadow-lg"
          loading="lazy"
        ></iframe>
      </section>
    </div>
  );
};

export default ContactPage;
