import { 
    BarChart3, GitCompare, Settings, CheckCircle2, Clock, DollarSign, Shield,
    Database, TrendingUp, Target, Zap, Brain, BarChart, PieChart, Code,
    Cloud, FileText, Search, Filter, CheckCircle, ArrowRight, Eye,
    FileCheck, RefreshCw, Users, Lightbulb
} from 'lucide-react';

export const data_science_faq = [
    {
        title: "What is Data Science and how can it benefit my business?",
        icon: <BarChart3 className="w-5 h-5 text-blue-500" />,
        description: (
            <>
                <div className="mb-4">
                    Data Science is an interdisciplinary field that combines statistics, mathematics, and computer science to extract insights from data:
                </div>

                <div className="space-y-3">
                    <div className="flex items-start gap-3 p-3 bg-blue-50 rounded-lg border-l-4 border-blue-500">
                        <Database className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                        <div>
                            <span className="font-semibold text-blue-900">Data Collection & Analysis:</span>
                            <p className="text-blue-800 mt-1">Systematic collection, cleaning, and analysis of structured and unstructured data.</p>
                        </div>
                    </div>

                    <div className="flex items-start gap-3 p-3 bg-green-50 rounded-lg border-l-4 border-green-500">
                        <TrendingUp className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                        <div>
                            <span className="font-semibold text-green-900">Predictive Insights:</span>
                            <p className="text-green-800 mt-1">Forecast future trends and behaviors using statistical models and machine learning.</p>
                        </div>
                    </div>

                    <div className="flex items-start gap-3 p-3 bg-purple-50 rounded-lg border-l-4 border-purple-500">
                        <Target className="w-5 h-5 text-purple-600 mt-0.5 flex-shrink-0" />
                        <div>
                            <span className="font-semibold text-purple-900">Data-Driven Decisions:</span>
                            <p className="text-purple-800 mt-1">Make informed business decisions based on evidence rather than intuition.</p>
                        </div>
                    </div>

                    <div className="flex items-start gap-3 p-3 bg-orange-50 rounded-lg border-l-4 border-orange-500">
                        <Zap className="w-5 h-5 text-orange-600 mt-0.5 flex-shrink-0" />
                        <div>
                            <span className="font-semibold text-orange-900">Process Optimization:</span>
                            <p className="text-orange-800 mt-1">Identify inefficiencies and optimize business processes for better performance.</p>
                        </div>
                    </div>
                </div>

                <div className="mt-4 p-3 bg-yellow-50 rounded-lg">
                    <p className="text-yellow-800">
                        Data Science can increase <span className="font-semibold">business efficiency by 30-50% and revenue by 15-20%</span> through insights.
                    </p>
                </div>
            </>
        ),
    },
    {
        title: "What is the difference between Data Science, Data Analytics, and Business Intelligence?",
        icon: <GitCompare className="w-5 h-5 text-purple-500" />,
        description: (
            <>
                <div className="mb-4">
                    While related, these fields have distinct focuses and methodologies:
                </div>

                <div className="space-y-3">
                    <div className="flex items-start gap-3 p-3 bg-blue-50 rounded-lg border-l-4 border-blue-500">
                        <Brain className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                        <div>
                            <span className="font-semibold text-blue-900">Data Science:</span>
                            <p className="text-blue-800 mt-1">Predictive modeling, machine learning, advanced analytics, and algorithm development.</p>
                        </div>
                    </div>

                    <div className="flex items-start gap-3 p-3 bg-green-50 rounded-lg border-l-4 border-green-500">
                        <BarChart className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                        <div>
                            <span className="font-semibold text-green-900">Data Analytics:</span>
                            <p className="text-green-800 mt-1">Statistical analysis, data interpretation, and extracting actionable insights from existing data.</p>
                        </div>
                    </div>

                    <div className="flex items-start gap-3 p-3 bg-purple-50 rounded-lg border-l-4 border-purple-500">
                        <PieChart className="w-5 h-5 text-purple-600 mt-0.5 flex-shrink-0" />
                        <div>
                            <span className="font-semibold text-purple-900">Business Intelligence (BI):</span>
                            <p className="text-purple-800 mt-1">Reporting, dashboards, and descriptive analytics for historical business performance.</p>
                        </div>
                    </div>
                </div>

                <div className="mt-4 space-y-2">
                    <h4 className="font-semibold text-gray-900">Key Distinctions:</h4>
                    {[
                        "Data Science: Future-focused with predictive capabilities",
                        "Data Analytics: Present-focused with diagnostic insights", 
                        "Business Intelligence: Past-focused with descriptive reporting",
                        "Data Science uses advanced algorithms and machine learning",
                        "Analytics focuses on statistical methods and hypothesis testing",
                        "BI emphasizes visualization and performance monitoring"
                    ].map((distinction, index) => (
                        <div key={index} className="flex items-start gap-2 p-2">
                            <ArrowRight className="w-4 h-4 text-gray-600 mt-0.5 flex-shrink-0" />
                            <p className="text-gray-700 text-sm">{distinction}</p>
                        </div>
                    ))}
                </div>

                <div className="mt-4 p-3 bg-purple-100 rounded-lg border border-purple-200">
                    <p className="text-purple-800">
                        Most organizations benefit from <span className="font-semibold">combining all three approaches</span> for comprehensive data strategy.
                    </p>
                </div>
            </>
        ),
    },
    {
        title: "What technologies and tools do you use for data science projects?",
        icon: <Settings className="w-5 h-5 text-green-500" />,
        description: (
            <>
                <div className="mb-4">
                    We utilize industry-leading data science technologies and tools across the entire analytics lifecycle:
                </div>

                <div className="grid gap-3">
                    <div className="flex items-start gap-3 p-3 bg-blue-50 rounded-lg">
                        <Code className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                        <div>
                            <span className="font-medium text-blue-900">Programming Languages:</span>
                            <p className="text-blue-700 text-sm mt-1">Python, R, SQL, Scala, Julia, SAS</p>
                        </div>
                    </div>

                    <div className="flex items-start gap-3 p-3 bg-green-50 rounded-lg">
                        <Database className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                        <div>
                            <span className="font-medium text-green-900">Data Processing:</span>
                            <p className="text-green-700 text-sm mt-1">Pandas, NumPy, Dask, Apache Spark, Hadoop, Kafka</p>
                        </div>
                    </div>

                    <div className="flex items-start gap-3 p-3 bg-purple-50 rounded-lg">
                        <Brain className="w-5 h-5 text-purple-600 mt-0.5 flex-shrink-0" />
                        <div>
                            <span className="font-medium text-purple-900">Machine Learning:</span>
                            <p className="text-purple-700 text-sm mt-1">Scikit-learn, TensorFlow, PyTorch, XGBoost, LightGBM</p>
                        </div>
                    </div>

                    <div className="flex items-start gap-3 p-3 bg-orange-50 rounded-lg">
                        <BarChart className="w-5 h-5 text-orange-600 mt-0.5 flex-shrink-0" />
                        <div>
                            <span className="font-medium text-orange-900">Visualization:</span>
                            <p className="text-orange-700 text-sm mt-1">Tableau, Power BI, D3.js, Plotly, Matplotlib, Seaborn</p>
                        </div>
                    </div>

                    <div className="flex items-start gap-3 p-3 bg-indigo-50 rounded-lg">
                        <Cloud className="w-5 h-5 text-indigo-600 mt-0.5 flex-shrink-0" />
                        <div>
                            <span className="font-medium text-indigo-900">Cloud Platforms:</span>
                            <p className="text-indigo-700 text-sm mt-1">AWS, Google Cloud, Azure, Databricks, Snowflake</p>
                        </div>
                    </div>

                    <div className="flex items-start gap-3 p-3 bg-red-50 rounded-lg">
                        <FileText className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
                        <div>
                            <span className="font-medium text-red-900">Analytics Tools:</span>
                            <p className="text-red-700 text-sm mt-1">Jupyter, RStudio, Apache Airflow, MLflow, Git</p>
                        </div>
                    </div>
                </div>

                <div className="mt-4 p-3 bg-gray-50 rounded-lg">
                    <p className="text-gray-700">
                        We select the optimal tech stack based on <span className="font-semibold">your data requirements, scalability needs, and existing infrastructure</span>.
                    </p>
                </div>
            </>
        ),
    },
    {
        title: "How do you ensure data quality and accuracy in your projects?",
        icon: <CheckCircle2 className="w-5 h-5 text-green-500" />,
        description: (
            <>
                <div className="mb-4">
                    Data quality is fundamental to successful data science projects. We implement comprehensive quality assurance processes:
                </div>

                <div className="space-y-3">
                    <div className="flex items-start gap-3 p-3 bg-blue-50 rounded-lg border-l-4 border-blue-500">
                        <Search className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                        <div>
                            <span className="font-semibold text-blue-900">Data Profiling & Assessment:</span>
                            <p className="text-blue-800 mt-1">Comprehensive analysis of data completeness, consistency, and accuracy before processing.</p>
                        </div>
                    </div>

                    <div className="flex items-start gap-3 p-3 bg-green-50 rounded-lg border-l-4 border-green-500">
                        <Filter className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                        <div>
                            <span className="font-semibold text-green-900">Data Cleaning & Preprocessing:</span>
                            <p className="text-green-800 mt-1">Systematic removal of duplicates, handling missing values, and outlier detection.</p>
                        </div>
                    </div>

                    <div className="flex items-start gap-3 p-3 bg-purple-50 rounded-lg border-l-4 border-purple-500">
                        <Shield className="w-5 h-5 text-purple-600 mt-0.5 flex-shrink-0" />
                        <div>
                            <span className="font-semibold text-purple-900">Data Validation:</span>
                            <p className="text-purple-800 mt-1">Automated validation rules and quality checks throughout the data pipeline.</p>
                        </div>
                    </div>
                </div>

                <div className="mt-4 space-y-2">
                    <h4 className="font-semibold text-gray-900">Our Quality Assurance Process:</h4>
                    {[
                        "Statistical data validation and anomaly detection",
                        "Cross-validation and model performance testing",
                        "Data lineage tracking and audit trails",
                        "Automated data quality monitoring dashboards",
                        "Regular data quality assessments and reports",
                        "Data governance and compliance frameworks",
                        "Version control for datasets and models"
                    ].map((process, index) => (
                        <div key={index} className="flex items-start gap-2 p-2">
                            <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                            <p className="text-gray-700 text-sm">{process}</p>
                        </div>
                    ))}
                </div>

                <div className="mt-4 p-3 bg-green-100 rounded-lg border border-green-200">
                    <p className="text-green-800">
                        Our quality processes ensure <span className="font-semibold">95%+ data accuracy and model reliability</span> across all projects.
                    </p>
                </div>
            </>
        ),
    },
    {
        title: "What is the typical timeline for data science projects?",
        icon: <Clock className="w-5 h-5 text-orange-500" />,
        description: (
            <>
                <div className="mb-4">
                    Data science project timelines depend on <span className="font-semibold">data complexity, model requirements, and business objectives</span>:
                </div>

                <div className="space-y-3">
                    <div className="flex items-center gap-3 p-3 bg-green-50 rounded-lg">
                        <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                        <div>
                            <span className="font-semibold text-green-900">Exploratory Data Analysis:</span>
                            <span className="ml-2 px-2 py-1 bg-green-100 text-green-800 rounded text-sm font-medium">2–4 weeks</span>
                            <p className="text-green-700 text-sm mt-1">Data discovery, visualization, and initial insights</p>
                        </div>
                    </div>

                    <div className="flex items-center gap-3 p-3 bg-blue-50 rounded-lg">
                        <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0" />
                        <div>
                            <span className="font-semibold text-blue-900">Predictive Analytics Projects:</span>
                            <span className="ml-2 px-2 py-1 bg-blue-100 text-blue-800 rounded text-sm font-medium">1–3 months</span>
                            <p className="text-blue-700 text-sm mt-1">Statistical modeling, forecasting, and prediction systems</p>
                        </div>
                    </div>

                    <div className="flex items-center gap-3 p-3 bg-purple-50 rounded-lg">
                        <CheckCircle className="w-5 h-5 text-purple-600 flex-shrink-0" />
                        <div>
                            <span className="font-semibold text-purple-900">Machine Learning Solutions:</span>
                            <span className="ml-2 px-2 py-1 bg-purple-100 text-purple-800 rounded text-sm font-medium">2–6 months</span>
                            <p className="text-purple-700 text-sm mt-1">Custom ML models, recommendation systems, classification</p>
                        </div>
                    </div>

                    <div className="flex items-center gap-3 p-3 bg-orange-50 rounded-lg">
                        <CheckCircle className="w-5 h-5 text-orange-600 flex-shrink-0" />
                        <div>
                            <span className="font-semibold text-orange-900">Enterprise Data Platforms:</span>
                            <span className="ml-2 px-2 py-1 bg-orange-100 text-orange-800 rounded text-sm font-medium">6–12+ months</span>
                            <p className="text-orange-700 text-sm mt-1">Big data infrastructure, MLOps, comprehensive analytics platforms</p>
                        </div>
                    </div>
                </div>

                <div className="mt-4 space-y-2">
                    <h4 className="font-semibold text-gray-900">Project Phases:</h4>
                    {[
                        "Business problem definition and data assessment (1-2 weeks)",
                        "Data collection, cleaning, and preparation (2-4 weeks)", 
                        "Exploratory data analysis and feature engineering (2-3 weeks)",
                        "Model development, training, and validation (3-8 weeks)",
                        "Model deployment and integration (2-4 weeks)",
                        "Monitoring, optimization, and maintenance (ongoing)"
                    ].map((phase, index) => (
                        <div key={index} className="flex items-start gap-2 p-2">
                            <ArrowRight className="w-4 h-4 text-gray-600 mt-0.5 flex-shrink-0" />
                            <p className="text-gray-700 text-sm">{phase}</p>
                        </div>
                    ))}
                </div>

                <div className="mt-4 p-3 bg-orange-50 rounded-lg border border-orange-200">
                    <p className="text-orange-800">
                        <span className="font-semibold">80% of project time</span> is typically spent on data preparation and cleaning phases.
                    </p>
                </div>
            </>
        ),
    },
    {
        title: "What is the ROI and business impact of data science initiatives?",
        icon: <DollarSign className="w-5 h-5 text-green-500" />,
        description: (
            <>
                <div className="mb-4">
                    Data science investments deliver significant returns through improved decision-making and operational efficiency:
                </div>

                <div className="space-y-3">
                    <div className="flex items-start gap-3 p-3 bg-green-50 rounded-lg border-l-4 border-green-500">
                        <TrendingUp className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                        <div>
                            <span className="font-semibold text-green-900">Revenue Growth:</span>
                            <p className="text-green-800 mt-1">15-20% average revenue increase through better customer insights and pricing optimization</p>
                        </div>
                    </div>

                    <div className="flex items-start gap-3 p-3 bg-blue-50 rounded-lg border-l-4 border-blue-500">
                        <Zap className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                        <div>
                            <span className="font-semibold text-blue-900">Operational Efficiency:</span>
                            <p className="text-blue-800 mt-1">20-40% cost reduction through process automation and predictive maintenance</p>
                        </div>
                    </div>

                    <div className="flex items-start gap-3 p-3 bg-purple-50 rounded-lg border-l-4 border-purple-500">
                        <Target className="w-5 h-5 text-purple-600 mt-0.5 flex-shrink-0" />
                        <div>
                            <span className="font-semibold text-purple-900">Decision Speed:</span>
                            <p className="text-purple-800 mt-1">50-70% faster decision-making with real-time analytics and automated insights</p>
                        </div>
                    </div>
                </div>

                <div className="mt-4 space-y-2">
                    <h4 className="font-semibold text-gray-900">Typical Business Impacts:</h4>
                    {[
                        "Customer retention improvement by 10-25%",
                        "Marketing campaign effectiveness increase by 20-30%",
                        "Inventory optimization reducing costs by 15-25%",
                        "Fraud detection preventing 60-80% of potential losses",
                        "Supply chain optimization saving 10-20% in logistics costs",
                        "Predictive maintenance reducing downtime by 30-50%",
                        "Risk management improving by 40-60% through better modeling"
                    ].map((impact, index) => (
                        <div key={index} className="flex items-start gap-2 p-2">
                            <TrendingUp className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                            <p className="text-gray-700 text-sm">{impact}</p>
                        </div>
                    ))}
                </div>

                <div className="mt-4 p-3 bg-yellow-50 rounded-lg border border-yellow-200">
                    <p className="text-yellow-800">
                        Organizations typically achieve <span className="font-semibold">200-400% ROI within 18-24 months</span> of data science implementation.
                    </p>
                </div>
            </>
        ),
    },
    {
        title: "How do you handle data privacy and compliance requirements?",
        icon: <Shield className="w-5 h-5 text-red-500" />,
        description: (
            <>
                <div className="mb-4">
                    We prioritize data privacy and regulatory compliance throughout our data science projects:
                </div>

                <div className="space-y-3">
                    <div className="flex items-start gap-3 p-3 bg-red-50 rounded-lg border-l-4 border-red-500">
                        <Shield className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
                        <div>
                            <span className="font-semibold text-red-900">Data Protection:</span>
                            <p className="text-red-800 mt-1">End-to-end encryption, secure data handling, and GDPR/CCPA/HIPAA compliance.</p>
                        </div>
                    </div>

                    <div className="flex items-start gap-3 p-3 bg-blue-50 rounded-lg border-l-4 border-blue-500">
                        <Eye className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                        <div>
                            <span className="font-semibold text-blue-900">Data Anonymization:</span>
                            <p className="text-blue-800 mt-1">Advanced anonymization and pseudonymization techniques to protect individual privacy.</p>
                        </div>
                    </div>

                    <div className="flex items-start gap-3 p-3 bg-green-50 rounded-lg border-l-4 border-green-500">
                        <FileCheck className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                        <div>
                            <span className="font-semibold text-green-900">Compliance Framework:</span>
                            <p className="text-green-800 mt-1">Comprehensive governance framework ensuring adherence to industry regulations.</p>
                        </div>
                    </div>
                </div>

                <div className="mt-4 space-y-2">
                    <h4 className="font-semibold text-gray-900">Our Privacy & Compliance Measures:</h4>
                    {[
                        "Data minimization and purpose limitation principles",
                        "Regular privacy impact assessments (PIAs)",
                        "Consent management and data subject rights implementation",
                        "Secure data storage with access controls and audit logs",
                        "Data retention and deletion policies",
                        "Cross-border data transfer compliance",
                        "Regular compliance audits and certifications"
                    ].map((measure, index) => (
                        <div key={index} className="flex items-start gap-2 p-2">
                            <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                            <p className="text-gray-700 text-sm">{measure}</p>
                        </div>
                    ))}
                </div>

                <div className="mt-4 p-3 bg-red-50 rounded-lg border border-red-200">
                    <p className="text-red-800">
                        We maintain <span className="font-semibold">SOC 2 Type II certification</span> and follow industry-leading privacy standards.
                    </p>
                </div>
            </>
        ),
    },
    {
        title: "Do you provide ongoing support and maintenance for data science solutions?",
        icon: <Settings className="w-5 h-5 text-purple-500" />,
        description: (
            <>
                <div className="mb-4">
                    <span className="font-semibold">Yes!</span> We offer comprehensive <span className="font-semibold text-purple-700">data science support and maintenance services</span>:
                </div>

                <div className="space-y-2">
                    {[
                        { icon: <BarChart className="w-4 h-4 text-blue-500" />, text: "Continuous model performance monitoring and optimization" },
                        { icon: <RefreshCw className="w-4 h-4 text-green-500" />, text: "Model retraining and updates with new data" },
                        { icon: <Database className="w-4 h-4 text-purple-500" />, text: "Data pipeline maintenance and quality assurance" },
                        { icon: <TrendingUp className="w-4 h-4 text-orange-500" />, text: "Model drift detection and performance optimization" },
                        { icon: <Shield className="w-4 h-4 text-red-500" />, text: "Security updates and compliance monitoring" },
                        { icon: <Cloud className="w-4 h-4 text-indigo-500" />, text: "Infrastructure scaling and cloud optimization" },
                        { icon: <Users className="w-4 h-4 text-pink-500" />, text: "24/7 technical support and troubleshooting" },
                        { icon: <Lightbulb className="w-4 h-4 text-cyan-500" />, text: "Feature enhancement and solution evolution" }
                    ].map((item, index) => (
                        <div key={index} className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                            {item.icon}
                            <p className="text-gray-700">{item.text}</p>
                        </div>
                    ))}
                </div>

                <div className="mt-4 space-y-3">
                    <div className="p-3 bg-purple-50 rounded-lg border border-purple-200">
                        <h4 className="font-semibold text-purple-900 mb-2">Support Plans:</h4>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
                            <span className="px-2 py-1 bg-purple-100 text-purple-800 rounded text-sm">Basic Analytics</span>
                            <span className="px-2 py-1 bg-purple-100 text-purple-800 rounded text-sm">Advanced ML</span>
                            <span className="px-2 py-1 bg-purple-100 text-purple-800 rounded text-sm">Enterprise Data</span>
                        </div>
                    </div>
                </div>

                <div className="mt-4 p-3 bg-purple-50 rounded-lg border border-purple-200">
                    <p className="text-purple-800">
                        Our data science expertise ensures your solutions remain <span className="font-semibold">accurate, relevant, and continuously improving</span>.
                    </p>
                </div>
            </>
        ),
    }
];
