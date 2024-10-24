import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail } from 'lucide-react';

const Contact = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <Card className="max-w-2xl mx-auto">
        <CardHeader>
          <CardTitle className="text-2xl">Contact Us</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center gap-2 text-lg">
            <Mail className="h-5 w-5" />
            <a href="mailto:info@lyvena.xyz" className="hover:text-primary">
              info@lyvena.xyz
            </a>
          </div>
          <p className="text-gray-600">
            We're here to help with any questions about the AI-PGF Council. 
            Feel free to reach out to us for support or inquiries.
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default Contact;