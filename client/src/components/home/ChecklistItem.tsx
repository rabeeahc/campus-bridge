import { useState } from "react";

type ChecklistItemProps = {
  title: string;
  info: string;
};

function ChecklistItem({ title, info }: ChecklistItemProps) {
  const [open, setOpen] = useState(false);

  return (
    <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white transition-all">
      <button
        onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between p-5 text-left"
      >
        <div className="flex items-center gap-4">
          <div className="h-6 w-6 rounded-full border-2 border-blue-600"></div>

          <span className="font-medium text-slate-800">
            {title}
          </span>
        </div>

        <span className="text-xl">
          {open ? "−" : "+"}
        </span>
      </button>

      {open && (
        <div className="border-t border-slate-200 bg-slate-50 px-5 py-4">
          <p className="text-slate-600">
            {info}
          </p>
        </div>
      )}
    </div>
  );
}

export default ChecklistItem;