import {
    GraduationCap,
    Handshake,
    Radar,
    Boxes,
    TrendingUp,
    LayoutDashboard,
    Package,
} from "lucide-react";

export const services = [
    {
        id: 1,
        title: "Catchment Profiling",
        subtitle:
            "Advanced analysis to locate and evaluate prime resource catchment areas for oil and gas exploration, improving accuracy and reducing risks.",
        icon: <Radar className="h-8 w-8 text-blue-500" />,
        href: "catchment-profiling",
    },
    {
        id: 2,
        title: "Retail Site Optimisation",
        subtitle:
            "Data driven strategies to select, design, and optimise retail energy sites for peak visibility, customer reach, and sustained profitability.",
        icon: <Boxes className="h-8 w-8 text-blue-500" />,
        href: "retail-site-optimisation",
    },
    {
        id: 3,
        title: "Investment Analysis",
        subtitle:
            "Comprehensive financial modeling and risk assessment to guide strategic investment decisions within the oil and energy sectors.",
        icon: <TrendingUp className="h-8 w-8 text-blue-500" />,

        href: "investment-analysis",
    },
    {
        id: 4,
        title: "Tailored ERP Solutions",
        subtitle:
            "Custom-built enterprise resource planning systems designed to meet the unique operational demands of the oil and energy industry.",
        icon: <LayoutDashboard className="h-8 w-8 text-blue-500" />,
        href: "tailored-erp-solution",
    },
    {
        id: 5,
        title: "Business Consultation",
        subtitle:
            "Expert strategic guidance to navigate market complexities, improve operations, and unlock growth opportunities in the energy sector.",
        icon: <Handshake className="h-8 w-8 text-blue-500" />,
        href: "business-consultation",
    },
    {
        id: 6,
        title: "Procurement",
        subtitle:
            "Streamlined procurement workflows and supply chain strategies to enhance efficiency, reduce costs, and ensure timely resource delivery.",
        icon: <Package className="h-8 w-8 text-blue-500" />,
        href: "procurement",
    },
    {
        id: 7,
        title: "Training & Development",
        subtitle:
            "Comprehensive programs to upskill teams in emerging technologies, industry best practices, and effective operational methodologies.",
        icon: <GraduationCap className="h-8 w-8 text-blue-500" />,
        href: "training",
    },
];
