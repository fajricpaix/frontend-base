import { ThemeToggle } from "@/components/theme/ThemeToggle";
import ButtonContent from "@/content/ButtonContent";
import InputContent from "@/content/InputContent";

export default function Home() {
  return (
    <main className="min-h-screen py-8">
      <section className="container px-5 lg:px-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-semibold">Frontend Base Components</h1>
          <ThemeToggle />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 my-8">
          {/* Button Content */}
          <div>
            <ButtonContent />
          </div>
          {/* Input Content */}
          <div>
            <InputContent />
          </div>
        </div>
      </section>
    </main>
  );
}
