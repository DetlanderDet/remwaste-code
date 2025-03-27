import { fetchSkipData } from "./api";
import { steps } from "./stepsData";
import { JSX, useEffect, useState } from "react";
import { Skip } from "./interface/Skip";

export default function App() {
    const [sortedSkipData, setSortedSkipData] = useState<Skip[]>([]);
    const [selectedSkipId, setSelectedSkipId] = useState<number | null>(null);

    // Fetch and sort skip data on mount
    useEffect(() => {
        fetchSkipData().then((data) => {
            const sorted = [...data].sort((a, b) => a.size - b.size);
            setSortedSkipData(sorted);
        });
    }, []);

    return (
        <div className="min-h-screen bg-gray-950 text-white p-6">
            {/* Header Steps */}
            <div className="flex flex-wrap items-center justify-center gap-4 max-w-6xl mx-auto mb-7">
                {steps.map((step, index) => (
                    <>
                        <Step
                            key={index}
                            icon={<step.icon size={18} />}
                            label={step.label}
                            active={step.active}
                        />
                        {index !== steps.length - 1 && <Divider />}
                    </>
                ))}
            </div>

            <div className="text-center mb-8">
                <h1 className="text-3xl font-bold">Choose Your Skip Size</h1>
                <p className="text-gray-400 mt-2 text-sm">
                    Select the skip size that best suits your needs
                </p>
            </div>

            {/* Skip Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
                {sortedSkipData.map((skip) => (
                    <div
                        key={skip.id}
                        onClick={() => setSelectedSkipId(skip.id)}
                        className={`bg-gray-900 rounded-tl-2xl rounded-br-2xl p-5 transition hover:shadow-2xl hover:scale-105 cursor-pointer ${
                            selectedSkipId === skip.id
                                ? "border-2 text-yellow-400 shadow-lg"
                                : "border border-gray-800"
                        }`}
                    >
                        <div className="flex justify-between items-center mb-4">
                            <span className="bg-gray-700 text-white text-sm px-3 py-1 rounded-full">
                                {skip.size} Yards
                            </span>
                            {!skip.allowed_on_road && (
                                <span className="text-yellow-400 text-xs">
                                    Private Only
                                </span>
                            )}
                        </div>

                        <img
                            src="https://images.unsplash.com/photo-1590496793929-36417d3117de?q=80&w=800"
                            alt="Skip Image"
                            className="w-full h-32 object-cover rounded-lg mb-4"
                        />

                        <h2 className="text-xl font-semibold mb-2 text-white">
                            {skip.size} Yard Skip
                        </h2>

                        <p className="text-gray-400 mb-4">
                            {skip.hire_period_days} Day Hire Period
                        </p>

                        <p className="text-2xl text-yellow-400 mb-3">
                            <span className="font-bold">
                                £{skip.price_before_vat}
                            </span>
                            <span className="text-sm text-gray-400 ml-2">
                                Per week
                            </span>
                        </p>

                        <button
                            className={`w-full py-2 rounded ${
                                selectedSkipId === skip.id
                                    ? "bg-[#FAC415] text-black"
                                    : "bg-gray-700  text-white hover:bg-gray-600"
                            }`}
                        >
                            {selectedSkipId === skip.id
                                ? "Selected"
                                : "Select This Skip"}
                        </button>
                    </div>
                ))}
            </div>

            {/* Footer */}
            {selectedSkipId && (
                <div className="fixed bottom-0 left-0 w-full bg-gray-900 p-4 border-t border-gray-800 flex items-center justify-between">
                    <div className="text-white text-sm flex items-center gap-2">
                        <span className="text-xl">
                            {
                                sortedSkipData.find(
                                    (skip) => skip.id === selectedSkipId
                                )?.size
                            }
                        </span>
                        <span className="text-blue-500 text-xl">£</span>
                        <span className="text-sm">7 day hire</span>
                    </div>

                    <div className="flex gap-3">
                        <button
                            onClick={() => setSelectedSkipId(null)}
                            className="bg-gray-800 text-white px-5 py-2 rounded hover:bg-gray-700 hover:scale-105 transition"
                        >
                            Back
                        </button>
                        <button className="bg-[#FAC415] text-black px-6 py-2 rounded hover:bg-[#eab308] hover:scale-105 transition-all duration-300 flex items-center gap-2">
                            Continue <span>→</span>
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}

// Single step icon + label
const Step = ({
    icon,
    label,
    active = false,
}: {
    icon: JSX.Element;
    label: string;
    active?: boolean;
}) => (
    <div
        className={`flex items-center gap-2 ${
            active ? "text-yellow-400 font-semibold" : "text-gray-400"
        }`}
    >
        {icon}
        {label}
    </div>
);

const Divider = () => <div className="w-8 h-px bg-gray-600"></div>;
