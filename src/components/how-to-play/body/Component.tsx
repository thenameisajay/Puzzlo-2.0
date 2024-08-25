import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { howToPlayItems } from '@/data/how-to-play/data';

export default function HowToPlayBodyComponent() {
  return (
    <div className="mx-auto w-full max-w-3xl rounded-xl bg-white bg-opacity-90 p-4 shadow-xl">
      <Accordion type="single" collapsible className="w-full space-y-4">
        {howToPlayItems.map((item, index) => (
          <AccordionItem
            value={`item-${index}`}
            key={index}
            className="overflow-hidden rounded-lg border border-sky-200 bg-white shadow-md transition-all duration-200 ease-in-out hover:shadow-lg"
          >
            <AccordionTrigger className="flex w-full items-center justify-between rounded-t-lg bg-sky-50 px-6 py-4 text-left text-sky-800 hover:bg-sky-100 focus:outline-none focus:ring-2 focus:ring-sky-300 focus:ring-opacity-50">
              <span className="text-lg font-semibold">{item.question}</span>
            </AccordionTrigger>
            <AccordionContent className="rounded-b-lg bg-white px-6 py-4">
              <p className="text-sky-700">{item.answer}</p>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}
