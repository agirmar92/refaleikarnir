"use client";

import { ReactNode } from "react";
import { YearProvider } from "@/contexts/YearContext";

const Providers = ({ children }: { children: ReactNode }) => {
  return <YearProvider>{children}</YearProvider>;
};

export default Providers;
