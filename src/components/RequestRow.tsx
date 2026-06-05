import React from "react";
import Image from "next/image";

export interface AdoptionRequest {
  id: number;
  petName: string;
  petImage: string;
  applicant: string;
  date: string;
  status: "Nova" | "Em conversa" | "Aprovada" | "Rejeitada";
}

interface RequestRowProps {
  req: AdoptionRequest;
  onRespond?: (id: number) => void;
  onDetails?: (id: number) => void;
}

export function getStatusClass(status: AdoptionRequest["status"]): string {
  switch (status) {
    case "Nova":
      return "bg-secondary-fixed text-on-secondary-fixed";
    case "Em conversa":
      return "bg-tertiary-fixed text-on-tertiary-fixed-variant";
    case "Aprovada":
      return "bg-success-sage/20 text-success-sage";
    case "Rejeitada":
      return "bg-error/20 text-error-brick";
    default:
      return "bg-surface-container-highest text-on-surface-variant";
  }
}

export default function RequestRow({ req, onRespond, onDetails }: RequestRowProps) {
  return (
    <tr className="hover:bg-surface-container-low transition-colors">
      <td className="px-lg py-md">
        <div className="flex items-center gap-md">
          <div className="relative w-10 h-10 rounded-lg overflow-hidden shadow-sm bg-surface-container-low">
            <Image
              src={req.petImage}
              alt={req.petName}
              fill
              className="object-cover"
            />
          </div>
          <span className="font-label-md font-bold text-text-dark">{req.petName}</span>
        </div>
      </td>
      <td className="px-lg py-md font-body-md text-on-surface">{req.applicant}</td>
      <td className="px-lg py-md font-body-md text-on-surface-variant">{req.date}</td>
      <td className="px-lg py-md">
        <span
          data-testid="request-status"
          className={`px-sm py-1 rounded-full text-[12px] font-bold ${getStatusClass(
            req.status
          )}`}
        >
          {req.status}
        </span>
      </td>
      <td className="px-lg py-md text-right">
        {req.status === "Aprovada" ? (
          <button
            onClick={() => onDetails && onDetails(req.id)}
            aria-label="Ver detalhes da solicitação aprovada"
            className="text-primary-container hover:bg-primary-fixed p-sm rounded-lg transition-colors cursor-pointer"
          >
            <span className="material-symbols-outlined">chevron_right</span>
          </button>
        ) : (
          <button
            onClick={() => onRespond && onRespond(req.id)}
            className="bg-primary-container text-white px-md py-sm rounded-xl font-button text-[14px] hover:bg-primary shadow-sm active:scale-95 transition-all cursor-pointer"
          >
            Responder
          </button>
        )}
      </td>
    </tr>
  );
}
