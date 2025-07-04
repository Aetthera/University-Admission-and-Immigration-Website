export default function SectionWrapper({ children, className = '' }) {
  return (
    <div className={`px-4 md:px-6 max-w-[1440px] mx-auto ${className}`}>
      {children}
    </div>
  );
}
