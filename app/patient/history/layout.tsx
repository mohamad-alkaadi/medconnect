import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Medical History & Visits",
  description: "",
};

export default function MedicalWall({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return <>{children}</>;
}
