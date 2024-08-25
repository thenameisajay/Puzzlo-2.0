import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { howToPlayItems } from '@/data/how-to-play/data';

export default function HowToPlayBodyComponent() {
  return (
    <>
      <Accordion type="single" collapsible className="w-full space-y-4">
        {howToPlayItems.map((item, index) => (
          <AccordionItem
            value={`item-${index}`}
            key={index}
            className="overflow-hidden rounded-lg bg-white shadow-lg"
          >
            <AccordionTrigger className="rounded-t-lg bg-gray-100 px-6 py-4 text-left text-gray-800 hover:bg-gray-200 hover:text-gray-900">
              <span className="text-lg font-semibold">{item.question}</span>
            </AccordionTrigger>
            <AccordionContent className="rounded-b-lg bg-gray-50 px-6 py-4">
              <p className="text-gray-700">{item.answer}</p>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </>
  );
}
