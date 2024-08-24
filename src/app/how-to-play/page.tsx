import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { howToPlayItems } from '@/data/how-to-play/data';

export default function Component() {
  return (
    <div className="min-h-screen bg-sky-500 p-6 md:p-12">
      <div className="mx-auto max-w-4xl">
        <header className="mb-12 text-center">
          <h1
            className="mb-4 text-4xl font-bold text-white md:text-5xl
           lg:text-6xl
          "
          >
            How to Play
          </h1>
          <p
            className="text-xl 
           font-bold text-gray-200 
          "
          >
            Understand the game with our comprehensive guide to rules, controls,
            and strategies.
          </p>
        </header>

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

        <footer className="mt-12 text-center text-sm text-gray-200">
          <p>
            Still have questions? Contact our{' '}
            <a
              href="mailto:tekinayfurkan@gmail.com"
              className="text-white underline hover:text-gray-200"
            >
              {' '}
              support team
            </a>{' '}
            for more help.
          </p>
        </footer>
      </div>
    </div>
  );
}
