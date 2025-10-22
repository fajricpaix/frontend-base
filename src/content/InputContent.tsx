import { CheckIcon, InfoIcon } from "@/components/icons";
import { Input } from "@/components/ui/Input";

export default function InputContent() {
  return (
    <>
      <h2 className="text-2xl font-semibold">Input</h2>

      <div className="mt-4 space-y-3">
        <p className="text-lg font-semibold">Form Input</p>
        
        <div className="grid grid-cols-1 gap-4">
          <Input 
            id="default-input-sm" 
            name="default-input-sm" 
            placeholder="Default Input SM"
            size="sm" />
          <Input 
            id="default-input" 
            name="default-input" 
            placeholder="Default Input" />
          <Input 
            id="default-input-lg" 
            name="default-input-lg" 
            placeholder="Default Input LG"
            size="lg" />
        </div>
      </div>

      <div className="mt-4 space-y-3">
        <p className="text-lg font-semibold">Form Input with Icon</p>
        <div className="grid grid-cols-1 gap-4">
          <Input 
            id="default-input" 
            name="default-input" 
            placeholder="Default Input"
            leftIcon={<InfoIcon className="stroke-info" size={20} />} 
            rightIcon={<CheckIcon className="stroke-success" size={20} />}
          />
        </div>
      </div>
    </>
  );
}
