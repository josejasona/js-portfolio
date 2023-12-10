import React from "react";
import { NavigationBar } from "./navigation-bar";

export interface LayoutProps {
    children: React.ReactNode;
    }


export function Layout({ }: LayoutProps) { 
  return (
    <>
      <NavigationBar />
    </>
  );
}
