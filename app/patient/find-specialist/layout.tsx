import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Find & Book Specialist",
  description: "",
};

export default function MedicalWall({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return <>{children}</>;
}
