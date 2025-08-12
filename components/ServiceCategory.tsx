import { ReactNode } from "react";

interface ServiceCategoryProps {
  title: string;
  children: ReactNode;
}

export function ServiceCategory({ title, children }: ServiceCategoryProps) {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-10 text-center font-manrope">
          {title}
        </h2>
        {children}
      </div>
    </section>
  );
}
