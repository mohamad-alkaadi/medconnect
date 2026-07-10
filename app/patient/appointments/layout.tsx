import { Metadata } from "next";

export const metadata: Metadata = {
  title: "My Appointments",
  description: "",
};

export default function MedicalWall({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return <>{children}</>;
}
