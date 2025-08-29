"use client";

import {
  FileText,
  FileImage,
  FileVideo,
  FileAudio,
  FileArchive,
  MoreVertical
} from "lucide-react";
import { JSX } from "react";
import { Switch } from "../ui/switch";
import { useState } from 'react';

// Map document format → lucide icon

export default function Table() {
  const [openMenus, setOpenMenus] = useState<number[]>([]);

  const toggleMenu = (idx: number) => {
    setOpenMenus(prev => 
      prev.includes(idx) 
        ? prev.filter(i => i !== idx)
        : [...prev, idx]
    );
  };

  const documents = [
    {
      DocumentName: "Tech requirements.pdf",
      DocumentFormat: "pdf",
      DocumentType: "Legal",
      DocumentSize: "200 KB",
      AIAppInclusion: true,
      DashboardInclusion: true,
      StageAccess: "Full",
    },
    {
      DocumentName: "Dashboard screenshot.jpg",
      DocumentFormat: "jpg",
      DocumentType: "Vendors & Assets",
      DocumentSize: "720 KB",
      AIAppInclusion: true,
      DashboardInclusion: true,
      StageAccess: "Onboarding",
    },
    {
      DocumentName: "Dashboard prototype recording.mp4",
      DocumentFormat: "mp4",
      DocumentType: "Technology",
      DocumentSize: "16 MB",
      AIAppInclusion: false,
      DashboardInclusion: true,
      StageAccess: "Franchisee",
    },
    {
      DocumentName: "Financial Overview",
      DocumentFormat: "docx",
      DocumentType: "Financial",
      DocumentSize: "4.2 MB",
      AIAppInclusion: true,
      DashboardInclusion: false,
      StageAccess: "Prospect",
    },
    {
      DocumentName: "UX Design Guidelines.docx",
      DocumentFormat: "docx",
      DocumentType: "Legal",
      DocumentSize: "400 KB",
      AIAppInclusion: true,
      DashboardInclusion: false,
      StageAccess: "Onboarding",
    },
    {
      DocumentName: "Dashboard interaction.aep",
      DocumentFormat: "aep",
      DocumentType: "Legal",
      DocumentSize: "12 MB",
      AIAppInclusion: true,
      DashboardInclusion: true,
      StageAccess: "Onboarding",
    },
    {
      DocumentName: "Briefing call recording.mp3",
      DocumentFormat: "mp3",
      DocumentType: "Financial",
      DocumentSize: "18.6 MB",
      AIAppInclusion: false,
      DashboardInclusion: false,
      StageAccess: "Prospect",
    },
  ];
  const formatIcons: Record<string, JSX.Element> = {
    pdf: <FileText className="w-5 h-5 text-red-500" />,
    docx: <FileText className="w-5 h-5 text-blue-500" />,
    jpg: <FileImage className="w-5 h-5 text-green-500" />,
    mp4: <FileVideo className="w-5 h-5 text-purple-500" />,
    mp3: <FileAudio className="w-5 h-5 text-pink-500" />,
    aep: <FileArchive className="w-5 h-5 text-gray-500" />,
  };

  const typeColors: Record<string, string> = {
    Legal: "bg-blue-100 text-blue-700",
    "Vendors & Assets": "bg-green-100 text-green-700",
    Technology: "bg-orange-100 text-orange-700",
    Financial: "bg-pink-100 text-pink-700",
  };

  return (
    <div>
      {/* Desktop Header - hidden on mobile */}
      <div className="hidden md:grid grid-cols-7 bg-gray-50 text-sm font-medium text-gray-600 p-3">
        <div className="col-span-2 flex gap-1 items-center ">
          {" "}
          <input type="checkbox" name="document" /> Document Name
        </div>
        <div>Document Type</div>
        <div>AI App Inclusion</div>
        <div>Dashboard Inclusion</div>
        <div>Stage Access</div>
        <div></div>
      </div>
  
      {/* Mobile Header */}
      <div className="md:hidden bg-gray-50 text-sm font-medium text-gray-600 p-3">
        <div className="flex gap-1 items-center">
          <input type="checkbox" name="document" /> Document Name
        </div>
      </div>
  
      {documents.map((doc, idx) => {
        return (
          <div key={idx} className="border-t">
            {/* Desktop Row */}
            <div className="hidden md:grid grid-cols-7 items-center p-3 text-sm">
              <div className="flex items-center col-span-2 gap-3">
                <input 
                  type="checkbox" 
                  name="document" 
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-2"
                />
                <div className="flex items-center justify-center w-10 h-10 bg-gray-50 rounded-lg border">
                  {formatIcons[doc.DocumentFormat] || (
                    <FileText className="w-5 h-5 text-gray-400" />
                  )}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="font-medium   text-gray-900 ">
                    {doc.DocumentName}
                  </div>
                  <div className="text-xs text-gray-500 mt-0.5">{doc.DocumentSize}</div>
                </div>
              </div>
              <div>
                <span
                  className={`px-2 py-1 rounded-full text-xs ${
                    typeColors[doc.DocumentType] || "bg-gray-100 text-gray-700"
                  }`}
                >
                  {doc.DocumentType}
                </span>
              </div>
              <div>
                <Switch 
                checked={doc.AIAppInclusion} 
                className="data-[state=checked]:bg-[#2FBDFF]" 
                />
              </div>
              <div>
              <Switch 
                checked={doc.DashboardInclusion} 
                className="data-[state=checked]:bg-[#2FBDFF]" 
                />         
              </div>
              <div>
                <select
                  className="border rounded px-2 py-1 text-sm"
                  value={doc.StageAccess}
                  aria-readonly
                >
                  <option value="Full">Full</option>
                  <option value="Onboarding">Onboarding</option>
                  <option value="Prospect">Prospect</option>
                  <option value="Franchisee">Franchisee</option>
                </select>
              </div>
              <div className="flex gap-2">
                <div className="text-center text-red-500 cursor-pointer">
                  Delete
                </div>
                <div className="text-center text-blue-500 cursor-pointer">
                  Edit
                </div>
              </div>
            </div>
  
            {/* Mobile Row */}
            <div className="md:hidden p-3 text-sm">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <input 
                    type="checkbox" 
                    name="document" 
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-2"
                  />
                  <div className="flex items-center justify-center w-10 h-10 bg-gray-50 rounded-lg border">
                    {formatIcons[doc.DocumentFormat] || (
                      <FileText className="w-5 h-5 text-gray-400" />
                    )}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="font-medium text-gray-900 text-wrap truncate">
                      {doc.DocumentName}
                    </div>
                    <div className="text-xs text-gray-500 mt-0.5">{doc.DocumentSize}</div>
                  </div>
                </div>
                <button
                  onClick={() => toggleMenu(idx)}
                  className="p-1 hover:bg-gray-100 rounded"
                >
                  <MoreVertical className="w-4 h-4" />
                </button>
              </div>
  
              {/* Mobile Dropdown Menu */}
              {openMenus.includes(idx) && (
                <div className="mt-3 p-3 bg-gray-50 rounded-lg space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Document Type:</span>
                    <span
                      className={`px-2 py-1 rounded-full text-xs ${
                        typeColors[doc.DocumentType] || "bg-gray-100 text-gray-700"
                      }`}
                    >
                      {doc.DocumentType}
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">AI App Inclusion:</span>
                    <Switch 
                      checked={doc.AIAppInclusion} 
                      className="data-[state=checked]:bg-[#2FBDFF]" 
                    />
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Dashboard Inclusion:</span>
                    <Switch 
                      checked={doc.DashboardInclusion} 
                      className="data-[state=checked]:bg-[#2FBDFF]" 
                    />
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Stage Access:</span>
                    <select
                      className="border rounded px-2 py-1 text-sm"
                      value={doc.StageAccess}
                      aria-readonly
                    >
                      <option value="Full">Full</option>
                      <option value="Onboarding">Onboarding</option>
                      <option value="Prospect">Prospect</option>
                      <option value="Franchisee">Franchisee</option>
                    </select>
                  </div>
                  <div className="flex gap-2 pt-2">
                    <div className="text-center text-red-500 cursor-pointer">
                      Delete
                    </div>
                    <div className="text-center text-blue-500 cursor-pointer">
                      Edit
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
}
