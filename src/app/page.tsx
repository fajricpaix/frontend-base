import {
  AlertTriangleIcon,
  CheckIcon,
  InfoIcon,
  PlusIcon,
  XIcon
} from "@/components/icons";
import { Button } from "@/components/ui/Button";

export default function Home() {
  return (
    <main className="min-h-screen py-8">
      <section className="container px-5 lg:px-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-semibold">Frontend Base Components</h1>
        </div>

        <div className="grid grid-cols-1 gap-8 my-8">
          {/* Button Content */}
          <div>
            <h2 className="text-2xl font-semibold">Button</h2>
            <div className="mt-4 space-y-3">
              <p className="text-lg font-semibold">Solid Button</p>
              <div className="flex gap-4">
                <Button variant="primary">Primary</Button>
                <Button variant="success">Success</Button>
                <Button variant="warning">Warning</Button>
                <Button variant="error">Error</Button>
                <Button variant="info">Info</Button>
              </div>
            </div>
            <div className="mt-4 space-y-3">
              <p className="text-lg font-semibold">Outline Button</p>
              <div className="flex gap-4">
                <Button variant="primary" outline>Primary</Button>
                <Button variant="success" outline>Success</Button>
                <Button variant="warning" outline>Warning</Button>
                <Button variant="error" outline>Error</Button>
                <Button variant="info" outline>Info</Button>
              </div>
            </div>

            <div className="mt-4 space-y-3">
              <p className="text-lg font-semibold">Button Sizes</p>
              <div className="flex items-center gap-4">
                <Button variant="primary" size="xs">Extra Small</Button>
                <Button variant="primary" size="sm">Small</Button>
                <Button variant="primary" size="default">Default</Button>
                <Button variant="primary" size="lg">Large</Button>
                <Button variant="primary" size="xl">Extra Large</Button>
              </div>
            </div>

            <div className="mt-4 space-y-3">
              <p className="text-lg font-semibold">Icon Buttons - Same Size, Different Colors</p>
              <div className="flex items-center gap-4">
                <Button variant="primary" size="icon">
                  <PlusIcon size={16} />
                </Button>
                <Button variant="success" size="icon">
                  <CheckIcon size={16} />
                </Button>
                <Button variant="warning" size="icon">
                  <AlertTriangleIcon size={16} />
                </Button>
                <Button variant="error" size="icon">
                  <XIcon size={16} />
                </Button>
                <Button variant="info" size="icon">
                  <InfoIcon size={16} />
                </Button>
              </div>
            </div>

          </div>
        </div>
      </section>
    </main>
  );
}
