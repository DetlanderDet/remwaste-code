import {
    MapPin,
    Trash,
    Truck,
    Shield,
    Calendar,
    CreditCard,
} from "lucide-react";

export const steps = [
    { icon: MapPin, label: "Postcode", active: true },
    { icon: Trash, label: "Waste Type", active: true },
    { icon: Truck, label: "Select Skip", active: true },
    { icon: Shield, label: "Permit Check", active: false },
    { icon: Calendar, label: "Choose Date", active: false },
    { icon: CreditCard, label: "Payment", active: false },
];
