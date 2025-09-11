import { LucideProps } from "lucide-react";

export interface dashboardItemsProps {
    label: string;
    href: string;
    icon: React.ForwardRefExoticComponent<Omit<LucideProps, "ref"> & React.RefAttributes<SVGSVGElement>>
}