import Navbar from "./_components/navbar";

const ProtectedLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-col items-center justify-center h-full w-full gap-y-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-cyan-500 to-blue-500">
      <Navbar />
      {children}
    </div>
  );
};

export default ProtectedLayout;
