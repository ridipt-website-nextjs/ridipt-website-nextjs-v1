import {
    Database, Target, RefreshCw, BarChart3, Clock, DollarSign, CheckCircle, ArrowRight
} from 'lucide-react';

export const predictive_analytics_faq = [
    {
        title: "What data do we need to get started?",
        icon: <Database className="w-5 h-5 text-blue-500" />,
        description: (
            <>
                <div className="mb-4">Most businesses already have more usable data than they realize. Common starting points include:</div>
                <div className="space-y-2">
                    {[
                        "Sales and transaction history",
                        "CRM and customer interaction records",
                        "Website or app usage data",
                        "Operational or inventory records"
                    ].map((item, index) => (
                        <div key={index} className="flex items-start gap-2 p-2">
                            <ArrowRight className="w-4 h-4 text-gray-600 mt-0.5 flex-shrink-0" />
                            <p className="text-gray-700 text-sm">{item}</p>
                        </div>
                    ))}
                </div>
                <div className="mt-4 p-3 bg-blue-50 rounded-lg">
                    <p className="text-blue-800">We start with a short data audit to confirm what's usable before committing to a model.</p>
                </div>
            </>
        ),
    },
    {
        title: "How accurate are the predictions?",
        icon: <Target className="w-5 h-5 text-purple-500" />,
        description: (
            <>
                <div className="flex items-start gap-3 p-3 bg-purple-50 rounded-lg border-l-4 border-purple-500">
                    <Target className="w-5 h-5 text-purple-600 mt-0.5 flex-shrink-0" />
                    <div>
                        <span className="font-semibold text-purple-900">Accuracy depends on data quality and the specific problem.</span>
                        <p className="text-purple-800 mt-1">We validate every model against historical outcomes before deployment, and report accuracy metrics clearly so you know exactly how much to trust each prediction.</p>
                    </div>
                </div>
            </>
        ),
    },
    {
        title: "Can this integrate with our existing BI tools?",
        icon: <BarChart3 className="w-5 h-5 text-green-500" />,
        description: (
            <>
                <div className="flex items-start gap-3 p-3 bg-green-50 rounded-lg border-l-4 border-green-500">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <div>
                        <span className="font-semibold text-green-900">Yes.</span>
                        <p className="text-green-800 mt-1">We can feed predictions into dashboards you already use, such as Power BI, Looker, or Google Data Studio, or build a lightweight dashboard for you if you don't have one yet.</p>
                    </div>
                </div>
            </>
        ),
    },
    {
        title: "How often are models retrained?",
        icon: <RefreshCw className="w-5 h-5 text-orange-500" />,
        description: (
            <>
                <div className="flex items-start gap-3 p-3 bg-orange-50 rounded-lg border-l-4 border-orange-500">
                    <RefreshCw className="w-5 h-5 text-orange-600 mt-0.5 flex-shrink-0" />
                    <div>
                        <span className="font-semibold text-orange-900">It depends on how fast your data changes.</span>
                        <p className="text-orange-800 mt-1">We set up a retraining schedule, often monthly or quarterly, and monitor for model drift so accuracy doesn't quietly degrade over time.</p>
                    </div>
                </div>
            </>
        ),
    },
    {
        title: "What's the cost and timeline for a predictive analytics project?",
        icon: <Clock className="w-5 h-5 text-red-500" />,
        description: (
            <>
                <div className="space-y-3">
                    <div className="flex items-center gap-3 p-3 bg-green-50 rounded-lg">
                        <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                        <div>
                            <span className="font-semibold text-green-900">Single Prediction Use Case:</span>
                            <span className="ml-2 px-2 py-1 bg-green-100 text-green-800 rounded text-sm font-medium">4–8 weeks</span>
                        </div>
                    </div>
                    <div className="flex items-center gap-3 p-3 bg-blue-50 rounded-lg">
                        <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0" />
                        <div>
                            <span className="font-semibold text-blue-900">Full Analytics Platform:</span>
                            <span className="ml-2 px-2 py-1 bg-blue-100 text-blue-800 rounded text-sm font-medium">2–4 months</span>
                        </div>
                    </div>
                </div>
                <div className="mt-4 p-3 bg-yellow-50 rounded-lg">
                    <p className="text-yellow-800"><DollarSign className="inline w-4 h-4 mr-1" />Cost scales with data complexity and the number of models needed; we'll size this after understanding your data.</p>
                </div>
            </>
        ),
    },
];
