import {
    Search, Database, Cpu, Lock, DollarSign, Clock, CheckCircle, ArrowRight
} from 'lucide-react';

export const llm_rag_faq = [
    {
        title: "What is RAG (Retrieval-Augmented Generation) and why does it matter?",
        icon: <Search className="w-5 h-5 text-blue-500" />,
        description: (
            <>
                <div className="mb-4">
                    RAG combines a search step with a language model, so answers are grounded in your real data instead of the model's general training:
                </div>
                <div className="space-y-3">
                    <div className="flex items-start gap-3 p-3 bg-blue-50 rounded-lg border-l-4 border-blue-500">
                        <Search className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                        <div>
                            <span className="font-semibold text-blue-900">Retrieval:</span>
                            <p className="text-blue-800 mt-1">The system first searches your documents and data for the most relevant information.</p>
                        </div>
                    </div>
                    <div className="flex items-start gap-3 p-3 bg-green-50 rounded-lg border-l-4 border-green-500">
                        <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                        <div>
                            <span className="font-semibold text-green-900">Generation:</span>
                            <p className="text-green-800 mt-1">The language model then writes an answer using that retrieved information as its source of truth.</p>
                        </div>
                    </div>
                </div>
            </>
        ),
    },
    {
        title: "Can this work with our existing documents, CRM, or internal wiki?",
        icon: <Database className="w-5 h-5 text-purple-500" />,
        description: (
            <>
                <div className="mb-4">Yes. We commonly connect RAG pipelines to sources such as:</div>
                <div className="space-y-2">
                    {[
                        "Document stores like Google Drive, SharePoint, or Notion",
                        "CRMs and helpdesk systems (e.g. HubSpot, Zendesk)",
                        "Internal wikis and knowledge bases",
                        "Structured databases and spreadsheets"
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
        title: "Which language model providers do you support?",
        icon: <Cpu className="w-5 h-5 text-green-500" />,
        description: (
            <>
                <div className="grid gap-3">
                    <div className="flex items-start gap-3 p-3 bg-blue-50 rounded-lg">
                        <Cpu className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                        <div>
                            <span className="font-medium text-blue-900">Commercial APIs:</span>
                            <p className="text-blue-700 text-sm mt-1">OpenAI, Anthropic, Google, and other leading providers</p>
                        </div>
                    </div>
                    <div className="flex items-start gap-3 p-3 bg-purple-50 rounded-lg">
                        <Cpu className="w-5 h-5 text-purple-600 mt-0.5 flex-shrink-0" />
                        <div>
                            <span className="font-medium text-purple-900">Open-Source Models:</span>
                            <p className="text-purple-700 text-sm mt-1">Self-hosted options when data residency or cost require it</p>
                        </div>
                    </div>
                </div>
                <div className="mt-4 p-3 bg-gray-50 rounded-lg">
                    <p className="text-gray-700">We recommend the right provider based on <span className="font-semibold">your accuracy, cost, and data privacy needs</span>, and design the system so switching later is straightforward.</p>
                </div>
            </>
        ),
    },
    {
        title: "How is our data kept private and secure?",
        icon: <Lock className="w-5 h-5 text-red-500" />,
        description: (
            <>
                <div className="space-y-3">
                    <div className="flex items-start gap-3 p-3 bg-red-50 rounded-lg border-l-4 border-red-500">
                        <Lock className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
                        <div>
                            <span className="font-semibold text-red-900">Controlled Access:</span>
                            <p className="text-red-800 mt-1">Only authorized systems and users can query your knowledge base.</p>
                        </div>
                    </div>
                    <div className="flex items-start gap-3 p-3 bg-blue-50 rounded-lg border-l-4 border-blue-500">
                        <CheckCircle className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                        <div>
                            <span className="font-semibold text-blue-900">No Unwanted Training:</span>
                            <p className="text-blue-800 mt-1">We configure providers so your data is not used to train third-party models without explicit consent.</p>
                        </div>
                    </div>
                </div>
            </>
        ),
    },
    {
        title: "What's the typical cost and timeline for an LLM & RAG project?",
        icon: <Clock className="w-5 h-5 text-orange-500" />,
        description: (
            <>
                <div className="space-y-3">
                    <div className="flex items-center gap-3 p-3 bg-green-50 rounded-lg">
                        <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                        <div>
                            <span className="font-semibold text-green-900">Focused Q&A on One Data Source:</span>
                            <span className="ml-2 px-2 py-1 bg-green-100 text-green-800 rounded text-sm font-medium">3–6 weeks</span>
                        </div>
                    </div>
                    <div className="flex items-center gap-3 p-3 bg-blue-50 rounded-lg">
                        <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0" />
                        <div>
                            <span className="font-semibold text-blue-900">Multi-Source Enterprise Search:</span>
                            <span className="ml-2 px-2 py-1 bg-blue-100 text-blue-800 rounded text-sm font-medium">6–12 weeks</span>
                        </div>
                    </div>
                </div>
                <div className="mt-4 p-3 bg-yellow-50 rounded-lg">
                    <p className="text-yellow-800"><DollarSign className="inline w-4 h-4 mr-1" />Cost depends on data volume and integrations; we'll scope an exact estimate after a short discovery call.</p>
                </div>
            </>
        ),
    },
];
