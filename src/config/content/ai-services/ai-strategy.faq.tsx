import {
    Search, Database, Clock, Settings, DollarSign, CheckCircle, ArrowRight
} from 'lucide-react';

export const ai_strategy_faq = [
    {
        title: "What does an AI readiness assessment actually involve?",
        icon: <Search className="w-5 h-5 text-blue-500" />,
        description: (
            <>
                <div className="mb-4">The assessment typically covers:</div>
                <div className="space-y-2">
                    {[
                        "Stakeholder interviews to understand goals and pain points",
                        "A review of your existing data sources and quality",
                        "Identification of realistic, high-impact AI use cases",
                        "A prioritized roadmap with rough cost and timeline estimates"
                    ].map((item, index) => (
                        <div key={index} className="flex items-start gap-2 p-2">
                            <ArrowRight className="w-4 h-4 text-gray-600 mt-0.5 flex-shrink-0" />
                            <p className="text-gray-700 text-sm">{item}</p>
                        </div>
                    ))}
                </div>
            </>
        ),
    },
    {
        title: "Do we need a large dataset to get started?",
        icon: <Database className="w-5 h-5 text-purple-500" />,
        description: (
            <>
                <div className="flex items-start gap-3 p-3 bg-purple-50 rounded-lg border-l-4 border-purple-500">
                    <Database className="w-5 h-5 text-purple-600 mt-0.5 flex-shrink-0" />
                    <div>
                        <span className="font-semibold text-purple-900">Not necessarily.</span>
                        <p className="text-purple-800 mt-1">Many valuable AI use cases, like chatbots and document automation, need far less data than people assume. Part of the assessment is identifying which use cases fit the data you already have.</p>
                    </div>
                </div>
            </>
        ),
    },
    {
        title: "How long does the consulting engagement take?",
        icon: <Clock className="w-5 h-5 text-green-500" />,
        description: (
            <>
                <div className="flex items-center gap-3 p-3 bg-green-50 rounded-lg">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                    <div>
                        <span className="font-semibold text-green-900">Typical Readiness Assessment:</span>
                        <span className="ml-2 px-2 py-1 bg-green-100 text-green-800 rounded text-sm font-medium">2–4 weeks</span>
                        <p className="text-green-700 text-sm mt-1">Covers discovery, data review, and a delivered roadmap.</p>
                    </div>
                </div>
            </>
        ),
    },
    {
        title: "Does this include implementation, or just strategy?",
        icon: <Settings className="w-5 h-5 text-orange-500" />,
        description: (
            <>
                <div className="flex items-start gap-3 p-3 bg-orange-50 rounded-lg border-l-4 border-orange-500">
                    <Settings className="w-5 h-5 text-orange-600 mt-0.5 flex-shrink-0" />
                    <div>
                        <span className="font-semibold text-orange-900">The engagement itself focuses on strategy and roadmap.</span>
                        <p className="text-orange-800 mt-1">Once you have a prioritized plan, our chatbot, LLM/RAG, and automation teams can implement the recommended use cases, so strategy flows directly into delivery.</p>
                    </div>
                </div>
            </>
        ),
    },
    {
        title: "How much does AI strategy consulting cost?",
        icon: <DollarSign className="w-5 h-5 text-red-500" />,
        description: (
            <>
                <div className="flex items-start gap-3 p-3 bg-red-50 rounded-lg border-l-4 border-red-500">
                    <DollarSign className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
                    <div>
                        <span className="font-semibold text-red-900">Priced as a fixed-scope engagement</span>
                        <p className="text-red-800 mt-1">based on the size of your organization and the number of business areas we assess. Many clients treat it as a low-risk first step before committing to a larger AI build.</p>
                    </div>
                </div>
            </>
        ),
    },
];
