import { useState } from "react";
import { SubscriptionSuccessModal } from "@/components/SubscriptionSuccessModal";

export default function SubscriptionPreview() {
  const [open, setOpen] = useState(true);

  return (
    <div className="min-h-screen bg-background flex items-center justify-center">
      <SubscriptionSuccessModal open={open} onOpenChange={setOpen} />
      {!open && (
        <button 
          onClick={() => setOpen(true)}
          className="text-primary underline"
        >
          Відкрити модалку знову
        </button>
      )}
    </div>
  );
}
