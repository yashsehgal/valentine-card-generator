'use client';

import { INITIAL_TEMPLATE_DATA, TemplateContext } from "@/context/template-context";
import { TemplateType } from "@/types/globals";
import { ReactNode, useState } from "react";

export default function TemplateContextProvider({ children }: { children: ReactNode }) {
  const [template, setTemplate] = useState<TemplateType>(INITIAL_TEMPLATE_DATA);
  return <TemplateContext.Provider value={{ template, setTemplate }}>
    {children}
  </TemplateContext.Provider>
}