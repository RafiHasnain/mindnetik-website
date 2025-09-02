"use client";
import React, { useState } from "react";
import { Card, CardContent } from "../ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { sendEmail } from "@/utils/sendEmail";

const initialState = {
  fullName: "",
  email: "",
  phone: "",
  comment: "",
};
const ContactForm = () => {
  const [data, setData] = useState(initialState);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    console.log("Handle submit clicked");
    e.preventDefault();
    if (
      data.fullName !== "" ||
      data.email !== "" ||
      data.phone !== "" ||
      data.comment !== ""
    ) {
      sendEmail(data);
      console.log({ data });
      setData(initialState);
    }
  };
  return (
    <div>
      <Card className="bg-gray-900/80 backdrop-blur-sm border-gray-700/50 shadow-2xl min-w-[200px] sm:min-w-[600px] md:min-w-[600px] lg:min-w-[600px]">
        <CardContent className="p-8 md:p-12">
          <form className="space-y-8 " onSubmit={handleSubmit}>
            {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-8"> */}
            <div className="group">
              <label className="block text-sm font-medium mb-3 text-gray-300 group-focus-within:text-primary transition-colors duration-300">
                Full Name
              </label>
              <Input
                type="text"
                name="fullName"
                value={data.fullName}
                className=" bg-gray-800/50 border-gray-600 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-300 h-12"
                placeholder="Enter your name"
                required
                onChange={(e) =>
                  setData({ ...data, [e.target.name]: e.target.value })
                }
              />
            </div>
            <div className="group">
              <label className="block text-sm font-medium mb-3 text-gray-300 group-focus-within:text-primary transition-colors duration-300">
                Email Address
              </label>
              <Input
                type="email"
                name="email"
                value={data.email}
                className="bg-gray-800/50 border-gray-600 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-300 h-12"
                placeholder="your@email.com"
                required
                onChange={(e) =>
                  setData({ ...data, [e.target.name]: e.target.value })
                }
              />
            </div>
            <div className="group">
              <label className="block text-sm font-medium mb-3 text-gray-300 group-focus-within:text-primary transition-colors duration-300">
                Phone Number
              </label>
              <Input
                type="text"
                name="phone"
                value={data.phone}
                className="bg-gray-800/50 border-gray-600 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-300 h-12"
                placeholder="Enter your phone number"
                required
                onChange={(e) =>
                  setData({ ...data, [e.target.name]: e.target.value })
                }
              />
            </div>
            {/* </div> */}

            <div className="group">
              <label className="block text-sm font-medium mb-3 text-gray-300 group-focus-within:text-primary transition-colors duration-300">
                Project Details
              </label>
              <Textarea
                name="comment"
                value={data.comment}
                rows={4}
                className="bg-gray-800/50 border-gray-600 focus:border-primary focus:ring-2 focus:ring-primary/20 min-h-[140px] transition-all duration-300"
                placeholder="Tell us about your project, goals, and how we can help transform your business..."
                required
                onChange={(e) =>
                  setData({ ...data, [e.target.name]: e.target.value })
                }
              />
            </div>

            <div className="text-center">
              <Button
                type="submit"
                size="lg"
                className="group bg-primary hover:bg-secondary text-white font-semibold px-8 py-4 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-primary/25 font-manrope"
                // onSubmit={handleSubmit}
              >
                Start Your Transformation
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default ContactForm;
