import {
    Bot, MessageSquare, Share2, Clock, DollarSign, Shield, CheckCircle, ArrowRight
} from 'lucide-react';

export const ai_chatbots_faq = [
    {
        title: "What's the difference between an AI chatbot and a traditional rule-based bot?",
        icon: <Bot className="w-5 h-5 text-blue-500" />,
        description: (
            <>
                <div className="mb-4">
                    Traditional bots follow rigid decision trees, while AI chatbots understand natural language and context:
                </div>
                <div className="space-y-3">
                    <div className="flex items-start gap-3 p-3 bg-blue-50 rounded-lg border-l-4 border-blue-500">
                        <Bot className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                        <div>
                            <span className="font-semibold text-blue-900">AI Chatbots & Copilots:</span>
                            <p className="text-blue-800 mt-1">Understand intent, handle open-ended questions, and pull answers from your actual documents and data.</p>
                        </div>
                    </div>
                    <div className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg border-l-4 border-gray-400">
                        <MessageSquare className="w-5 h-5 text-gray-600 mt-0.5 flex-shrink-0" />
                        <div>
                            <span className="font-semibold text-gray-900">Rule-Based Bots:</span>
                            <p className="text-gray-700 mt-1">Only handle pre-scripted paths and break down as soon as a user goes off-script.</p>
                        </div>
                    </div>
                </div>
            </>
        ),
    },
    {
        title: "Which platforms and channels can you build the chatbot for?",
        icon: <Share2 className="w-5 h-5 text-purple-500" />,
        description: (
            <>
                <div className="mb-4">We can deploy your AI assistant across the channels your customers and team already use:</div>
                <div className="space-y-2">
                    {[
                        "Your website, as an embedded widget",
                        "WhatsApp Business and other messaging apps",
                        "Slack and Microsoft Teams for internal copilots",
                        "Voice channels and IVR systems"
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
        title: "How long does it take to build and launch a chatbot?",
        icon: <Clock className="w-5 h-5 text-orange-500" />,
        description: (
            <>
                <div className="space-y-3">
                    <div className="flex items-center gap-3 p-3 bg-green-50 rounded-lg">
                        <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                        <div>
                            <span className="font-semibold text-green-900">Focused FAQ / Support Bot:</span>
                            <span className="ml-2 px-2 py-1 bg-green-100 text-green-800 rounded text-sm font-medium">2–4 weeks</span>
                        </div>
                    </div>
                    <div className="flex items-center gap-3 p-3 bg-blue-50 rounded-lg">
                        <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0" />
                        <div>
                            <span className="font-semibold text-blue-900">Multi-Channel Copilot with Integrations:</span>
                            <span className="ml-2 px-2 py-1 bg-blue-100 text-blue-800 rounded text-sm font-medium">4–8 weeks</span>
                        </div>
                    </div>
                </div>
            </>
        ),
    },
    {
        title: "How much does an AI chatbot cost?",
        icon: <DollarSign className="w-5 h-5 text-green-500" />,
        description: (
            <>
                <div className="mb-4">Pricing depends on scope, number of channels, and integrations required. As a general guide:</div>
                <div className="space-y-3">
                    <div className="flex items-start gap-3 p-3 bg-green-50 rounded-lg border-l-4 border-green-500">
                        <DollarSign className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                        <div>
                            <span className="font-semibold text-green-900">Starter Chatbot:</span>
                            <p className="text-green-800 mt-1">Single channel, scripted plus AI answers, connected to a knowledge base.</p>
                        </div>
                    </div>
                    <div className="flex items-start gap-3 p-3 bg-purple-50 rounded-lg border-l-4 border-purple-500">
                        <DollarSign className="w-5 h-5 text-purple-600 mt-0.5 flex-shrink-0" />
                        <div>
                            <span className="font-semibold text-purple-900">Full Copilot:</span>
                            <p className="text-purple-800 mt-1">Multi-channel, CRM/helpdesk integrated, with human handoff and analytics.</p>
                        </div>
                    </div>
                </div>
                <div className="mt-4 p-3 bg-yellow-50 rounded-lg">
                    <p className="text-yellow-800">Share your use case with us and we'll give you a precise, no-obligation estimate.</p>
                </div>
            </>
        ),
    },
    {
        title: "How do you handle data privacy in chatbot conversations?",
        icon: <Shield className="w-5 h-5 text-red-500" />,
        description: (
            <>
                <div className="space-y-3">
                    <div className="flex items-start gap-3 p-3 bg-red-50 rounded-lg border-l-4 border-red-500">
                        <Shield className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
                        <div>
                            <span className="font-semibold text-red-900">Data Handling:</span>
                            <p className="text-red-800 mt-1">Conversation data is stored securely and access is restricted to authorized systems only.</p>
                        </div>
                    </div>
                    <div className="flex items-start gap-3 p-3 bg-blue-50 rounded-lg border-l-4 border-blue-500">
                        <CheckCircle className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                        <div>
                            <span className="font-semibold text-blue-900">Compliance-Aware Design:</span>
                            <p className="text-blue-800 mt-1">We design data retention and consent flows in line with your applicable privacy requirements.</p>
                        </div>
                    </div>
                </div>
            </>
        ),
    },
];
