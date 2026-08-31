import {
    Workflow, Settings, GitBranch, TrendingUp, ClipboardCheck, CheckCircle, ArrowRight, DollarSign
} from 'lucide-react';

export const ai_automation_faq = [
    {
        title: "What kinds of tasks can be automated with AI?",
        icon: <Workflow className="w-5 h-5 text-blue-500" />,
        description: (
            <>
                <div className="mb-4">Good candidates are repetitive, rule-based tasks that involve reading, deciding, or moving data:</div>
                <div className="space-y-2">
                    {[
                        "Invoice, form, and document data extraction",
                        "Support ticket triage and routing",
                        "Data entry between disconnected systems",
                        "Approval workflows with routine, predictable decisions"
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
        title: "Do we need to replace our existing tools?",
        icon: <Settings className="w-5 h-5 text-purple-500" />,
        description: (
            <>
                <div className="flex items-start gap-3 p-3 bg-purple-50 rounded-lg border-l-4 border-purple-500">
                    <Settings className="w-5 h-5 text-purple-600 mt-0.5 flex-shrink-0" />
                    <div>
                        <span className="font-semibold text-purple-900">No.</span>
                        <p className="text-purple-800 mt-1">We design automations to connect with the systems you already use — your email, ERP, CRM, or document storage — rather than requiring a platform switch.</p>
                    </div>
                </div>
            </>
        ),
    },
    {
        title: "How is this different from traditional RPA?",
        icon: <GitBranch className="w-5 h-5 text-green-500" />,
        description: (
            <>
                <div className="space-y-3">
                    <div className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg border-l-4 border-gray-400">
                        <GitBranch className="w-5 h-5 text-gray-600 mt-0.5 flex-shrink-0" />
                        <div>
                            <span className="font-semibold text-gray-900">Traditional RPA:</span>
                            <p className="text-gray-700 mt-1">Follows fixed rules and breaks when it hits something unexpected.</p>
                        </div>
                    </div>
                    <div className="flex items-start gap-3 p-3 bg-green-50 rounded-lg border-l-4 border-green-500">
                        <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                        <div>
                            <span className="font-semibold text-green-900">AI-Powered Automation:</span>
                            <p className="text-green-800 mt-1">Adds judgment on top of automation, handling variations and flagging only genuine exceptions for a human.</p>
                        </div>
                    </div>
                </div>
            </>
        ),
    },
    {
        title: "What's the typical ROI timeline?",
        icon: <TrendingUp className="w-5 h-5 text-orange-500" />,
        description: (
            <>
                <div className="flex items-start gap-3 p-3 bg-orange-50 rounded-lg border-l-4 border-orange-500">
                    <DollarSign className="w-5 h-5 text-orange-600 mt-0.5 flex-shrink-0" />
                    <div>
                        <span className="font-semibold text-orange-900">Most process automations pay back within a few months</span>
                        <p className="text-orange-800 mt-1">once the time saved on manual handling and the reduction in errors are accounted for. We'll estimate this for your specific process before we start building.</p>
                    </div>
                </div>
            </>
        ),
    },
    {
        title: "How do you handle exceptions the AI can't resolve?",
        icon: <ClipboardCheck className="w-5 h-5 text-red-500" />,
        description: (
            <>
                <div className="flex items-start gap-3 p-3 bg-red-50 rounded-lg border-l-4 border-red-500">
                    <ClipboardCheck className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
                    <div>
                        <span className="font-semibold text-red-900">Every automation we build includes an escalation path.</span>
                        <p className="text-red-800 mt-1">Cases the AI isn't confident about are routed to a human reviewer with full context, instead of being guessed at or silently dropped.</p>
                    </div>
                </div>
            </>
        ),
    },
];
