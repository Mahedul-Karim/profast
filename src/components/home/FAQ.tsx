import React from "react";
import Container from "../common/Container";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { faqs } from "@/lib/data";

const FAQ = () => {
  return (
    <Container className="py-8">
      <h2 className="text-2xl px-2 sm:text-3xl font-bold text-navy text-center my-6">
        Frequently Asked Question
      </h2>
      <div className="max-w-[700px] mx-auto">
        <Accordion type="single" collapsible>
          {faqs.map((faq, i) => (
            <AccordionItem value={`faq-${i}`} key={i} className="data-[state=closed]:border-none bg-white my-4 rounded-2xl px-6 data-[state=open]:bg-[#E6F2F3] data-[state=open]:border data-[state=open]:border-[#067A87]">
              <AccordionTrigger className="hover:no-underline text-navy font-bold cursor-pointer">{faq.question}</AccordionTrigger>
              <AccordionContent className="text-muted font-medium border-t pt-4 border-navy/60 border-dashed">{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </Container>
  );
};

export default FAQ;
