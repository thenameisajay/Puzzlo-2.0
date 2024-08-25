export default function PageHeader({
  title,
  description,
  className,
}: {
  title: string;
  description: string;
  className?: string;
}) {
  return (
    <>
      <header className={`mb-12 text-center ${className}`}>
        <h1
          className="mb-4 text-4xl font-bold text-white md:text-5xl
           lg:text-6xl
          "
        >
          {title}
        </h1>
        <p
          className="  text-2xl 
           font-bold text-gray-700 
          "
        >
          {description}
        </p>
      </header>
    </>
  );
}
