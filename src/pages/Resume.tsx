import React, { useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Loader2, Send } from "lucide-react";
import ReactGA from "react-ga4";

const Resume = () => {
  ReactGA.send({ hitType: "pageview", page: "/my-path", title: "Resume request page" });
  
  const [senderEmail, setSenderEmail] = useState("");
  const [messageContent, setMessageContent] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState({ type: "", text: "" });

  // EmailJS Credentials
  const SERVICE_ID = "service_yozri3b";
  const TEMPLATE_ID = "template_y22ydxa";
  const PUBLIC_KEY = "8XK7ZzB-O_w3J-Q1v";

  const handleSendEmail = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const templateParams = {
        from_name: senderEmail, 
        to_email: "syedrizwank271@gmail.com",
        reply_to: senderEmail, 
        message: messageContent, 
      };

      await emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY);

      setMessage({ type: "success", text: "Email sent successfully!" });
      setSenderEmail("");
      setMessageContent("");
    } catch (error) {
      console.error("EmailJS Error:", error);
      setMessage({ type: "error", text: "Failed to send email. Try again later." });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <motion.div 
      className="min-h-screen pt-20 px-2 md:px-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <div className="container mx-auto">
        {/* Alert Message */}
        {message.text && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="max-w-2xl mx-auto mb-6"
          >
            <Alert variant={message.type === "error" ? "destructive" : "default"}>
              <AlertDescription>{message.text}</AlertDescription>
            </Alert>
          </motion.div>
        )}

        {/* Email Form */}
        <motion.div 
          className="space-y-6 max-w-2xl mx-auto"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Card className="overflow-hidden border dark:border-gray-800">
            <CardHeader className="p-6">
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <CardTitle className="text-xl mb-4">Send a Message</CardTitle>
                <CardDescription className="text-base text-muted-foreground/80">
                  Enter your email and message below to send an email.
                </CardDescription>
              </motion.div>

              <form onSubmit={handleSendEmail} className="mt-6 space-y-4">
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <Input
                    type="email"
                    placeholder="Your Email"
                    value={senderEmail}
                    onChange={(e) => setSenderEmail(e.target.value)}
                    required
                  />
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                >
                  <Textarea
                    placeholder="Write your message here..."
                    value={messageContent}
                    onChange={(e) => setMessageContent(e.target.value)}
                    required
                  />
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button 
                    type="submit" 
                    disabled={isLoading || !senderEmail || !messageContent} 
                    className="gap-2"
                  >
                    {isLoading ? <Loader2 className="h-4 w-4 animate-spin" /> : <Send className="h-4 w-4" />}
                    Send Email
                  </Button>
                </motion.div>
              </form>
            </CardHeader>
          </Card>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Resume;