interface SectionHeaderProps {
    title: string;
    subtitle: string;
  }
  
  export default function SectionHeader({ title, subtitle }: SectionHeaderProps) {
    return (
      <div className="text-center mb-12">
        <span className="border px-3 py-1 rounded-full text-sm uppercase text-gray-700">
          Process
        </span>
        <h1 className="text-4xl font-bold mt-4">{title}</h1>
        <p className="text-gray-700 mt-4 max-w-3xl mx-auto">{subtitle}</p>
      </div>
    );
  }
  