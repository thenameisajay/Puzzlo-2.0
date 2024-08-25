import PageHeader from '@/components/header/Component';
import HowToPlayBodyComponent from './body/Component';

const pageTitle = `How to Play`;

const pageDescription = `Understand the game with our comprehensive guide to rules, controls, and strategies.`;

const HowToPlayFooter = () => {
  return (
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
  );
};

export default function HowToPlayComponent() {
  return (
    <div className="mx-auto max-w-4xl">
      <PageHeader
        title={pageTitle}
        description={pageDescription}
        className="mb-4"
      />
      <HowToPlayBodyComponent />
      <HowToPlayFooter />
    </div>
  );
}
