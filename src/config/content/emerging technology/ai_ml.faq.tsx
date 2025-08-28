import { 
    Brain, Sparkles, Settings, Clock, DollarSign, Shield, Eye,
    BarChart, Zap, Target, Search, Lightbulb, Code, Database,
    Cloud, MessageSquare, CheckCircle, ArrowRight, TrendingUp,
    Building, Scale, Scan, Camera, Car, Heart, RefreshCw,
    Users
} from 'lucide-react';

export const ai_ml_faq = [
    {
        title: "What is AI/ML and how can it benefit my business?",
        icon: <Brain className="w-5 h-5 text-blue-500" />,
        description: (
            <>
                <div className="mb-4">
                    AI (Artificial Intelligence) and ML (Machine Learning) are technologies that enable systems to learn, reason, and make decisions:
                </div>

                <div className="space-y-3">
                    <div className="flex items-start gap-3 p-3 bg-blue-50 rounded-lg border-l-4 border-blue-500">
                        <Brain className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                        <div>
                            <span className="font-semibold text-blue-900">Artificial Intelligence (AI):</span>
                            <p className="text-blue-800 mt-1">Systems that simulate human intelligence to perform tasks and make decisions.</p>
                        </div>
                    </div>

                    <div className="flex items-start gap-3 p-3 bg-green-50 rounded-lg border-l-4 border-green-500">
                        <BarChart className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                        <div>
                            <span className="font-semibold text-green-900">Machine Learning (ML):</span>
                            <p className="text-green-800 mt-1">Algorithms that learn from data to make predictions and improve performance.</p>
                        </div>
                    </div>

                    <div className="flex items-start gap-3 p-3 bg-purple-50 rounded-lg border-l-4 border-purple-500">
                        <Zap className="w-5 h-5 text-purple-600 mt-0.5 flex-shrink-0" />
                        <div>
                            <span className="font-semibold text-purple-900">Automation & Efficiency:</span>
                            <p className="text-purple-800 mt-1">Automate repetitive tasks and optimize business processes for better efficiency.</p>
                        </div>
                    </div>

                    <div className="flex items-start gap-3 p-3 bg-orange-50 rounded-lg border-l-4 border-orange-500">
                        <Target className="w-5 h-5 text-orange-600 mt-0.5 flex-shrink-0" />
                        <div>
                            <span className="font-semibold text-orange-900">Data-Driven Insights:</span>
                            <p className="text-orange-800 mt-1">Extract valuable insights from data to make informed business decisions.</p>
                        </div>
                    </div>
                </div>

                <div className="mt-4 p-3 bg-yellow-50 rounded-lg">
                    <p className="text-yellow-800">
                        AI/ML can increase <span className="font-semibold">productivity by 20-40% and reduce operational costs</span> significantly.
                    </p>
                </div>
            </>
        ),
    },
    {
        title: "What is Generative AI and how does it differ from traditional AI?",
        icon: <Sparkles className="w-5 h-5 text-purple-500" />,
        description: (
            <>
                <div className="mb-4">
                    Generative AI is a subset of AI that creates new content, data, or solutions rather than just analyzing existing information:
                </div>

                <div className="space-y-3">
                    <div className="flex items-start gap-3 p-3 bg-purple-50 rounded-lg border-l-4 border-purple-500">
                        <Sparkles className="w-5 h-5 text-purple-600 mt-0.5 flex-shrink-0" />
                        <div>
                            <span className="font-semibold text-purple-900">Generative AI:</span>
                            <p className="text-purple-800 mt-1">Creates new content like text, images, code, or music based on training data.</p>
                        </div>
                    </div>

                    <div className="flex items-start gap-3 p-3 bg-blue-50 rounded-lg border-l-4 border-blue-500">
                        <Search className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                        <div>
                            <span className="font-semibold text-blue-900">Traditional AI:</span>
                            <p className="text-blue-800 mt-1">Analyzes existing data to make predictions, classifications, or recommendations.</p>
                        </div>
                    </div>

                    <div className="flex items-start gap-3 p-3 bg-green-50 rounded-lg border-l-4 border-green-500">
                        <Lightbulb className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                        <div>
                            <span className="font-semibold text-green-900">Creative Applications:</span>
                            <p className="text-green-800 mt-1">Content creation, design automation, code generation, and creative problem solving.</p>
                        </div>
                    </div>
                </div>

                <div className="mt-4 space-y-2">
                    <h4 className="font-semibold text-gray-900">Popular Generative AI Models:</h4>
                    {[
                        "Large Language Models (LLMs) like GPT, Claude, and Gemini",
                        "Image generation models like DALL-E, Midjourney, and Stable Diffusion",
                        "Code generation tools like GitHub Copilot and CodeT5",
                        "Audio generation models for music and speech synthesis",
                        "Video generation and editing AI systems"
                    ].map((model, index) => (
                        <div key={index} className="flex items-start gap-2 p-2">
                            <ArrowRight className="w-4 h-4 text-gray-600 mt-0.5 flex-shrink-0" />
                            <p className="text-gray-700 text-sm">{model}</p>
                        </div>
                    ))}
                </div>

                <div className="mt-4 p-3 bg-purple-100 rounded-lg border border-purple-200">
                    <p className="text-purple-800">
                        Generative AI is revolutionizing <span className="font-semibold">content creation, software development, and creative industries</span>.
                    </p>
                </div>
            </>
        ),
    },
    {
        title: "What AI/ML technologies and frameworks do you use?",
        icon: <Settings className="w-5 h-5 text-green-500" />,
        description: (
            <>
                <div className="mb-4">
                    We utilize industry-leading AI/ML frameworks and technologies across the entire machine learning lifecycle:
                </div>

                <div className="grid gap-3">
                    <div className="flex items-start gap-3 p-3 bg-blue-50 rounded-lg">
                        <Code className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                        <div>
                            <span className="font-medium text-blue-900">ML Frameworks:</span>
                            <p className="text-blue-700 text-sm mt-1">TensorFlow, PyTorch, Scikit-learn, Keras, XGBoost</p>
                        </div>
                    </div>

                    <div className="flex items-start gap-3 p-3 bg-green-50 rounded-lg">
                        <Database className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                        <div>
                            <span className="font-medium text-green-900">Data Processing:</span>
                            <p className="text-green-700 text-sm mt-1">Pandas, NumPy, Apache Spark, Dask, Apache Airflow</p>
                        </div>
                    </div>

                    <div className="flex items-start gap-3 p-3 bg-purple-50 rounded-lg">
                        <Cloud className="w-5 h-5 text-purple-600 mt-0.5 flex-shrink-0" />
                        <div>
                            <span className="font-medium text-purple-900">Cloud Platforms:</span>
                            <p className="text-purple-700 text-sm mt-1">AWS SageMaker, Google AI Platform, Azure ML, Databricks</p>
                        </div>
                    </div>

                    <div className="flex items-start gap-3 p-3 bg-orange-50 rounded-lg">
                        <MessageSquare className="w-5 h-5 text-orange-600 mt-0.5 flex-shrink-0" />
                        <div>
                            <span className="font-medium text-orange-900">NLP & Generative AI:</span>
                            <p className="text-orange-700 text-sm mt-1">OpenAI API, Hugging Face, spaCy, NLTK, LangChain</p>
                        </div>
                    </div>

                    <div className="flex items-start gap-3 p-3 bg-indigo-50 rounded-lg">
                        <Eye className="w-5 h-5 text-indigo-600 mt-0.5 flex-shrink-0" />
                        <div>
                            <span className="font-medium text-indigo-900">Computer Vision:</span>
                            <p className="text-indigo-700 text-sm mt-1">OpenCV, YOLO, detectron2, MediaPipe, PIL/Pillow</p>
                        </div>
                    </div>

                    <div className="flex items-start gap-3 p-3 bg-red-50 rounded-lg">
                        <BarChart className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
                        <div>
                            <span className="font-medium text-red-900">MLOps & Monitoring:</span>
                            <p className="text-red-700 text-sm mt-1">MLflow, Kubeflow, Weights & Biases, Neptune, TensorBoard</p>
                        </div>
                    </div>
                </div>

                <div className="mt-4 p-3 bg-gray-50 rounded-lg">
                    <p className="text-gray-700">
                        We select technologies based on <span className="font-semibold">your specific use case, data requirements, and scalability needs</span>.
                    </p>
                </div>
            </>
        ),
    },
    {
        title: "How long does it take to develop and deploy AI/ML solutions?",
        icon: <Clock className="w-5 h-5 text-orange-500" />,
        description: (
            <>
                <div className="mb-4">
                    AI/ML development timeline varies based on <span className="font-semibold">complexity, data availability, model requirements, and deployment scope</span>:
                </div>

                <div className="space-y-3">
                    <div className="flex items-center gap-3 p-3 bg-green-50 rounded-lg">
                        <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                        <div>
                            <span className="font-semibold text-green-900">Simple ML Models (Proof of Concept):</span>
                            <span className="ml-2 px-2 py-1 bg-green-100 text-green-800 rounded text-sm font-medium">2–6 weeks</span>
                            <p className="text-green-700 text-sm mt-1">Basic classification, regression, or clustering models</p>
                        </div>
                    </div>

                    <div className="flex items-center gap-3 p-3 bg-blue-50 rounded-lg">
                        <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0" />
                        <div>
                            <span className="font-semibold text-blue-900">Medium Complexity AI Solutions:</span>
                            <span className="ml-2 px-2 py-1 bg-blue-100 text-blue-800 rounded text-sm font-medium">2–4 months</span>
                            <p className="text-blue-700 text-sm mt-1">Computer vision, NLP applications, chatbots, recommendation systems</p>
                        </div>
                    </div>

                    <div className="flex items-center gap-3 p-3 bg-purple-50 rounded-lg">
                        <CheckCircle className="w-5 h-5 text-purple-600 flex-shrink-0" />
                        <div>
                            <span className="font-semibold text-purple-900">Enterprise AI/ML Platforms:</span>
                            <span className="ml-2 px-2 py-1 bg-purple-100 text-purple-800 rounded text-sm font-medium">4–12+ months</span>
                            <p className="text-purple-700 text-sm mt-1">Custom deep learning models, generative AI systems, MLOps infrastructure</p>
                        </div>
                    </div>
                </div>

                <div className="mt-4 space-y-2">
                    <h4 className="font-semibold text-gray-900">AI/ML Development Phases:</h4>
                    {[
                        "Data analysis and problem definition (1-2 weeks)",
                        "Data collection, cleaning, and preprocessing (2-4 weeks)",
                        "Model development, training, and validation (2-8 weeks)",
                        "Model optimization and fine-tuning (1-3 weeks)",
                        "Integration, testing, and deployment (2-4 weeks)",
                        "Monitoring, maintenance, and continuous learning (ongoing)"
                    ].map((phase, index) => (
                        <div key={index} className="flex items-start gap-2 p-2">
                            <ArrowRight className="w-4 h-4 text-gray-600 mt-0.5 flex-shrink-0" />
                            <p className="text-gray-700 text-sm">{phase}</p>
                        </div>
                    ))}
                </div>

                <div className="mt-4 p-3 bg-orange-50 rounded-lg border border-orange-200">
                    <p className="text-orange-800">
                        Data quality and availability significantly impact <span className="font-semibold">development timeline and model performance</span>.
                    </p>
                </div>
            </>
        ),
    },
    {
        title: "What is the cost of AI/ML development and implementation?",
        icon: <DollarSign className="w-5 h-5 text-green-500" />,
        description: (
            <>
                <div className="mb-4">
                    AI/ML development costs vary based on complexity, data requirements, and infrastructure needs:
                </div>

                <div className="space-y-3">
                    <div className="flex items-start gap-3 p-3 bg-green-50 rounded-lg border-l-4 border-green-500">
                        <DollarSign className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                        <div>
                            <span className="font-semibold text-green-900">Simple ML Solutions:</span>
                            <p className="text-green-800 mt-1">$20,000 - $50,000 for basic predictive models and analytics</p>
                        </div>
                    </div>

                    <div className="flex items-start gap-3 p-3 bg-blue-50 rounded-lg border-l-4 border-blue-500">
                        <TrendingUp className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                        <div>
                            <span className="font-semibold text-blue-900">Advanced AI Applications:</span>
                            <p className="text-blue-800 mt-1">$50,000 - $200,000 for computer vision, NLP, and intelligent automation</p>
                        </div>
                    </div>

                    <div className="flex items-start gap-3 p-3 bg-purple-50 rounded-lg border-l-4 border-purple-500">
                        <Building className="w-5 h-5 text-purple-600 mt-0.5 flex-shrink-0" />
                        <div>
                            <span className="font-semibold text-purple-900">Enterprise AI Platforms:</span>
                            <p className="text-purple-800 mt-1">$200,000+ for comprehensive AI ecosystems and generative AI solutions</p>
                        </div>
                    </div>
                </div>

                <div className="mt-4 space-y-2">
                    <h4 className="font-semibold text-gray-900">Cost Factors Include:</h4>
                    {[
                        "Data collection, cleaning, and preparation costs",
                        "Model complexity and training computational requirements",
                        "Cloud infrastructure and storage expenses",
                        "Integration with existing systems and platforms",
                        "Ongoing model monitoring and maintenance",
                        "Compliance and security implementation",
                        "Team expertise and specialized talent requirements"
                    ].map((factor, index) => (
                        <div key={index} className="flex items-start gap-2 p-2">
                            <ArrowRight className="w-4 h-4 text-gray-600 mt-0.5 flex-shrink-0" />
                            <p className="text-gray-700 text-sm">{factor}</p>
                        </div>
                    ))}
                </div>

                <div className="mt-4 p-3 bg-yellow-50 rounded-lg border border-yellow-200">
                    <p className="text-yellow-800">
                        AI/ML investments typically show <span className="font-semibold">300-500% ROI within 2-3 years</span> through automation and insights.
                    </p>
                </div>
            </>
        ),
    },
    {
        title: "How do you ensure data privacy and AI ethics?",
        icon: <Shield className="w-5 h-5 text-red-500" />,
        description: (
            <>
                <div className="mb-4">
                    We prioritize data privacy, security, and ethical AI practices throughout our development process:
                </div>

                <div className="space-y-3">
                    <div className="flex items-start gap-3 p-3 bg-red-50 rounded-lg border-l-4 border-red-500">
                        <Shield className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
                        <div>
                            <span className="font-semibold text-red-900">Data Privacy & Security:</span>
                            <p className="text-red-800 mt-1">End-to-end encryption, secure data handling, and GDPR/CCPA compliance.</p>
                        </div>
                    </div>

                    <div className="flex items-start gap-3 p-3 bg-blue-50 rounded-lg border-l-4 border-blue-500">
                        <Scale className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                        <div>
                            <span className="font-semibold text-blue-900">AI Ethics & Fairness:</span>
                            <p className="text-blue-800 mt-1">Bias detection and mitigation, fairness testing, and ethical AI guidelines.</p>
                        </div>
                    </div>

                    <div className="flex items-start gap-3 p-3 bg-green-50 rounded-lg border-l-4 border-green-500">
                        <Eye className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                        <div>
                            <span className="font-semibold text-green-900">Transparency & Explainability:</span>
                            <p className="text-green-800 mt-1">Interpretable models, audit trails, and clear decision-making processes.</p>
                        </div>
                    </div>
                </div>

                <div className="mt-4 space-y-2">
                    <h4 className="font-semibold text-gray-900">Our Ethical AI Practices:</h4>
                    {[
                        "Regular bias audits and fairness assessments",
                        "Data anonymization and differential privacy techniques",
                        "Model interpretability and explainable AI implementation",
                        "Compliance with industry standards and regulations",
                        "Continuous monitoring for ethical considerations",
                        "Transparent AI decision-making processes",
                        "Responsible AI governance and oversight"
                    ].map((practice, index) => (
                        <div key={index} className="flex items-start gap-2 p-2">
                            <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                            <p className="text-gray-700 text-sm">{practice}</p>
                        </div>
                    ))}
                </div>

                <div className="mt-4 p-3 bg-red-50 rounded-lg border border-red-200">
                    <p className="text-red-800">
                        We adhere to <span className="font-semibold">responsible AI principles</span> ensuring ethical, fair, and transparent AI systems.
                    </p>
                </div>
            </>
        ),
    },
    {
        title: "What is Computer Vision and how can it benefit my business?",
        icon: <Eye className="w-5 h-5 text-blue-500" />,
        description: (
            <>
                <div className="mb-4">
                    Computer Vision is AI technology that enables machines to interpret and understand visual information from the world:
                </div>

                <div className="grid gap-3">
                    <div className="flex items-start gap-3 p-3 bg-blue-50 rounded-lg">
                        <Eye className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                        <div>
                            <span className="font-medium text-blue-900">Image Recognition:</span>
                            <p className="text-blue-700 text-sm mt-1">Object detection, classification, and facial recognition systems</p>
                        </div>
                    </div>

                    <div className="flex items-start gap-3 p-3 bg-green-50 rounded-lg">
                        <Scan className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                        <div>
                            <span className="font-medium text-green-900">Quality Control:</span>
                            <p className="text-green-700 text-sm mt-1">Automated inspection, defect detection, and manufacturing quality assurance</p>
                        </div>
                    </div>

                    <div className="flex items-start gap-3 p-3 bg-purple-50 rounded-lg">
                        <Camera className="w-5 h-5 text-purple-600 mt-0.5 flex-shrink-0" />
                        <div>
                            <span className="font-medium text-purple-900">Security & Surveillance:</span>
                            <p className="text-purple-700 text-sm mt-1">Video analytics, crowd monitoring, and security threat detection</p>
                        </div>
                    </div>

                    <div className="flex items-start gap-3 p-3 bg-orange-50 rounded-lg">
                        <Car className="w-5 h-5 text-orange-600 mt-0.5 flex-shrink-0" />
                        <div>
                            <span className="font-medium text-orange-900">Autonomous Systems:</span>
                            <p className="text-orange-700 text-sm mt-1">Self-driving vehicles, robotics, and automated navigation systems</p>
                        </div>
                    </div>

                    <div className="flex items-start gap-3 p-3 bg-indigo-50 rounded-lg">
                        <Heart className="w-5 h-5 text-indigo-600 mt-0.5 flex-shrink-0" />
                        <div>
                            <span className="font-medium text-indigo-900">Healthcare Applications:</span>
                            <p className="text-indigo-700 text-sm mt-1">Medical imaging, diagnostic assistance, and patient monitoring</p>
                        </div>
                    </div>
                </div>

                <div className="mt-4 space-y-2">
                    <h4 className="font-semibold text-gray-900">Business Benefits:</h4>
                    {[
                        "Automated quality control and defect detection",
                        "Enhanced security and surveillance capabilities",
                        "Improved customer experience through personalization",
                        "Reduced operational costs through automation",
                        "Real-time insights and decision-making support",
                        "Scalable visual data processing capabilities"
                    ].map((benefit, index) => (
                        <div key={index} className="flex items-start gap-2 p-2">
                            <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                            <p className="text-gray-700 text-sm">{benefit}</p>
                        </div>
                    ))}
                </div>

                <div className="mt-4 p-3 bg-blue-100 rounded-lg border border-blue-200">
                    <p className="text-blue-800">
                        Computer Vision can reduce <span className="font-semibold">manual inspection time by 80-90%</span> while improving accuracy.
                    </p>
                </div>
            </>
        ),
    },
    {
        title: "Do you provide ongoing AI/ML support and model maintenance?",
        icon: <Settings className="w-5 h-5 text-purple-500" />,
        description: (
            <>
                <div className="mb-4">
                    <span className="font-semibold">Yes!</span> We offer comprehensive <span className="font-semibold text-purple-700">AI/ML support and model maintenance services</span>:
                </div>

                <div className="space-y-2">
                    {[
                        { icon: <BarChart className="w-4 h-4 text-blue-500" />, text: "Continuous model performance monitoring and optimization" },
                        { icon: <RefreshCw className="w-4 h-4 text-green-500" />, text: "Model retraining and updates with new data" },
                        { icon: <Database className="w-4 h-4 text-purple-500" />, text: "Data pipeline maintenance and quality assurance" },
                        { icon: <Shield className="w-4 h-4 text-red-500" />, text: "Security updates and vulnerability assessments" },
                        { icon: <TrendingUp className="w-4 h-4 text-orange-500" />, text: "Model drift detection and correction" },
                        { icon: <Cloud className="w-4 h-4 text-indigo-500" />, text: "Infrastructure scaling and cloud optimization" },
                        { icon: <Users className="w-4 h-4 text-pink-500" />, text: "24/7 technical support and troubleshooting" },
                        { icon: <Lightbulb className="w-4 h-4 text-cyan-500" />, text: "Feature enhancement and model evolution" }
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
                            <span className="px-2 py-1 bg-purple-100 text-purple-800 rounded text-sm">Basic Monitoring</span>
                            <span className="px-2 py-1 bg-purple-100 text-purple-800 rounded text-sm">Advanced MLOps</span>
                            <span className="px-2 py-1 bg-purple-100 text-purple-800 rounded text-sm">Enterprise AI</span>
                        </div>
                    </div>
                </div>

                <div className="mt-4 p-3 bg-purple-50 rounded-lg border border-purple-200">
                    <p className="text-purple-800">
                        Our MLOps expertise ensures your AI/ML models remain <span className="font-semibold">accurate, efficient, and continuously improving</span>.
                    </p>
                </div>
            </>
        ),
    }
];

