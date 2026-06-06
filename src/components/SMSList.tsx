// placeholder
"use client";

import { Copy, Trash2 } from "lucide-react";
import { SMS } from "@/types/sms";

interface Props {
  data: SMS[];
  onDelete: (id: number) => void;
}

export default function SMSList({
  data,
  onDelete
}: Props) {
  function copy(text: string) {
    navigator.clipboard.writeText(text);
    alert("Copied");
  }

  return (
    <div className="overflow-auto">

      <table className="w-full">

        <thead>
          <tr className="border-b border-slate-800">
            <th className="p-3 text-left">
              Sender
            </th>

            <th className="p-3 text-left">
              Message
            </th>

            <th className="p-3 text-left">
              Device
            </th>

            <th className="p-3 text-left">
              Time
            </th>

            <th className="p-3 text-left">
              Action
            </th>
          </tr>
        </thead>

        <tbody>

          {data.map((sms) => (
            <tr
              key={sms.id}
              className="border-b border-slate-800"
            >
              <td className="p-3">
                {sms.sender}
              </td>

              <td className="p-3">
                {sms.message}
              </td>

              <td className="p-3">
                {sms.device_id}
              </td>

              <td className="p-3">
                {new Date(
                  sms.created_at
                ).toLocaleString()}
              </td>

              <td className="p-3">

                <div className="flex gap-2">

                  <button
                    onClick={() =>
                      copy(sms.message)
                    }
                  >
                    <Copy size={18} />
                  </button>

                  <button
                    onClick={() =>
                      onDelete(sms.id)
                    }
                  >
                    <Trash2 size={18} />
                  </button>

                </div>

              </td>
            </tr>
          ))}

        </tbody>

      </table>
    </div>
  );
}