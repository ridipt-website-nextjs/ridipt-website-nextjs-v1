import { 
    Link, Layers, Settings, Clock, DollarSign, Shield, FileText,
    Database, Eye, Zap, Coins, Image, Building, Wallet, Network,
    Code, FileCode, Wrench, Cloud, TestTube, BarChart, CheckCircle,
    ArrowRight, TrendingUp, Scan, Users, RefreshCw, AlertTriangle
} from 'lucide-react';

export const blockchain_faq = [
    {
        title: "What is Blockchain and how can it benefit my business?",
        icon: <Link className="w-5 h-5 text-blue-500" />,
        description: (
            <>
                <div className="mb-4">
                    Blockchain is a distributed ledger technology that creates a secure, transparent, and tamper-proof record of transactions:
                </div>

                <div className="space-y-3">
                    <div className="flex items-start gap-3 p-3 bg-blue-50 rounded-lg border-l-4 border-blue-500">
                        <Database className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                        <div>
                            <span className="font-semibold text-blue-900">Decentralized Ledger:</span>
                            <p className="text-blue-800 mt-1">Distributed database that maintains a continuously growing list of records (blocks).</p>
                        </div>
                    </div>

                    <div className="flex items-start gap-3 p-3 bg-green-50 rounded-lg border-l-4 border-green-500">
                        <Shield className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                        <div>
                            <span className="font-semibold text-green-900">Enhanced Security:</span>
                            <p className="text-green-800 mt-1">Cryptographic hashing and consensus mechanisms ensure data integrity and security.</p>
                        </div>
                    </div>

                    <div className="flex items-start gap-3 p-3 bg-purple-50 rounded-lg border-l-4 border-purple-500">
                        <Eye className="w-5 h-5 text-purple-600 mt-0.5 flex-shrink-0" />
                        <div>
                            <span className="font-semibold text-purple-900">Transparency & Trust:</span>
                            <p className="text-purple-800 mt-1">Immutable records provide transparency and eliminate need for intermediaries.</p>
                        </div>
                    </div>

                    <div className="flex items-start gap-3 p-3 bg-orange-50 rounded-lg border-l-4 border-orange-500">
                        <Zap className="w-5 h-5 text-orange-600 mt-0.5 flex-shrink-0" />
                        <div>
                            <span className="font-semibold text-orange-900">Smart Contracts:</span>
                            <p className="text-orange-800 mt-1">Self-executing contracts with terms directly written into code for automation.</p>
                        </div>
                    </div>
                </div>

                <div className="mt-4 p-3 bg-yellow-50 rounded-lg">
                    <p className="text-yellow-800">
                        Blockchain can reduce <span className="font-semibold">operational costs by 30-50% and increase trust</span> in business processes.
                    </p>
                </div>
            </>
        ),
    },
    {
        title: "What types of blockchain solutions do you develop?",
        icon: <Layers className="w-5 h-5 text-purple-500" />,
        description: (
            <>
                <div className="mb-4">
                    We develop comprehensive blockchain solutions across various industries and use cases:
                </div>

                <div className="grid gap-3">
                    <div className="flex items-start gap-3 p-3 bg-blue-50 rounded-lg">
                        <Coins className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                        <div>
                            <span className="font-medium text-blue-900">Cryptocurrency & DeFi:</span>
                            <p className="text-blue-700 text-sm mt-1">Digital currencies, decentralized exchanges, lending platforms, yield farming</p>
                        </div>
                    </div>

                    <div className="flex items-start gap-3 p-3 bg-green-50 rounded-lg">
                        <FileText className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                        <div>
                            <span className="font-medium text-green-900">Smart Contracts & dApps:</span>
                            <p className="text-green-700 text-sm mt-1">Automated agreements, decentralized applications, governance tokens</p>
                        </div>
                    </div>

                    <div className="flex items-start gap-3 p-3 bg-purple-50 rounded-lg">
                        <Image className="w-5 h-5 text-purple-600 mt-0.5 flex-shrink-0" />
                        <div>
                            <span className="font-medium text-purple-900">NFTs & Digital Assets:</span>
                            <p className="text-purple-700 text-sm mt-1">Non-fungible tokens, digital collectibles, asset tokenization platforms</p>
                        </div>
                    </div>

                    <div className="flex items-start gap-3 p-3 bg-orange-50 rounded-lg">
                        <Building className="w-5 h-5 text-orange-600 mt-0.5 flex-shrink-0" />
                        <div>
                            <span className="font-medium text-orange-900">Enterprise Solutions:</span>
                            <p className="text-orange-700 text-sm mt-1">Supply chain management, identity verification, document authentication</p>
                        </div>
                    </div>

                    <div className="flex items-start gap-3 p-3 bg-indigo-50 rounded-lg">
                        <Wallet className="w-5 h-5 text-indigo-600 mt-0.5 flex-shrink-0" />
                        <div>
                            <span className="font-medium text-indigo-900">Wallet Solutions:</span>
                            <p className="text-indigo-700 text-sm mt-1">Multi-currency wallets, hardware wallet integration, custody solutions</p>
                        </div>
                    </div>

                    <div className="flex items-start gap-3 p-3 bg-red-50 rounded-lg">
                        <Network className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
                        <div>
                            <span className="font-medium text-red-900">Layer 2 & Scaling:</span>
                            <p className="text-red-700 text-sm mt-1">Payment channels, sidechains, rollups, cross-chain bridges</p>
                        </div>
                    </div>
                </div>

                <div className="mt-4 p-3 bg-gray-50 rounded-lg">
                    <p className="text-gray-700">
                        We work with <span className="font-semibold">multiple blockchain platforms</span> including Ethereum, Hyperledger, and custom networks.
                    </p>
                </div>
            </>
        ),
    },
    {
        title: "Which blockchain platforms and technologies do you use?",
        icon: <Settings className="w-5 h-5 text-green-500" />,
        description: (
            <>
                <div className="mb-4">
                    We utilize leading blockchain platforms and technologies across the development ecosystem:
                </div>

                <div className="grid gap-3">
                    <div className="flex items-start gap-3 p-3 bg-blue-50 rounded-lg">
                        <Code className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                        <div>
                            <span className="font-medium text-blue-900">Blockchain Platforms:</span>
                            <p className="text-blue-700 text-sm mt-1">Ethereum, Hyperledger Fabric, Polygon, Binance Smart Chain, Solana</p>
                        </div>
                    </div>

                    <div className="flex items-start gap-3 p-3 bg-green-50 rounded-lg">
                        <FileCode className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                        <div>
                            <span className="font-medium text-green-900">Smart Contract Languages:</span>
                            <p className="text-green-700 text-sm mt-1">Solidity, Vyper, Rust, Go, JavaScript, Python</p>
                        </div>
                    </div>

                    <div className="flex items-start gap-3 p-3 bg-purple-50 rounded-lg">
                        <Wrench className="w-5 h-5 text-purple-600 mt-0.5 flex-shrink-0" />
                        <div>
                            <span className="font-medium text-purple-900">Development Tools:</span>
                            <p className="text-purple-700 text-sm mt-1">Truffle, Hardhat, Remix, Ganache, MetaMask, Web3.js</p>
                        </div>
                    </div>

                    <div className="flex items-start gap-3 p-3 bg-orange-50 rounded-lg">
                        <Cloud className="w-5 h-5 text-orange-600 mt-0.5 flex-shrink-0" />
                        <div>
                            <span className="font-medium text-orange-900">Infrastructure:</span>
                            <p className="text-orange-700 text-sm mt-1">IPFS, AWS Blockchain, Azure Blockchain, Infura, Alchemy</p>
                        </div>
                    </div>

                    <div className="flex items-start gap-3 p-3 bg-indigo-50 rounded-lg">
                        <TestTube className="w-5 h-5 text-indigo-600 mt-0.5 flex-shrink-0" />
                        <div>
                            <span className="font-medium text-indigo-900">Testing & Security:</span>
                            <p className="text-indigo-700 text-sm mt-1">Mocha, Chai, MythX, Slither, OpenZeppelin, Certik</p>
                        </div>
                    </div>

                    <div className="flex items-start gap-3 p-3 bg-red-50 rounded-lg">
                        <BarChart className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
                        <div>
                            <span className="font-medium text-red-900">Analytics & Monitoring:</span>
                            <p className="text-red-700 text-sm mt-1">Etherscan, The Graph, Dune Analytics, Tenderly</p>
                        </div>
                    </div>
                </div>

                <div className="mt-4 p-3 bg-gray-50 rounded-lg">
                    <p className="text-gray-700">
                        We select the optimal blockchain stack based on <span className="font-semibold">your use case, scalability needs, and security requirements</span>.
                    </p>
                </div>
            </>
        ),
    },
    {
        title: "How long does blockchain development take?",
        icon: <Clock className="w-5 h-5 text-orange-500" />,
        description: (
            <>
                <div className="mb-4">
                    Blockchain development timeline varies based on <span className="font-semibold">complexity, platform choice, smart contract requirements, and integration scope</span>:
                </div>

                <div className="space-y-3">
                    <div className="flex items-center gap-3 p-3 bg-green-50 rounded-lg">
                        <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                        <div>
                            <span className="font-semibold text-green-900">Simple Smart Contracts:</span>
                            <span className="ml-2 px-2 py-1 bg-green-100 text-green-800 rounded text-sm font-medium">2–6 weeks</span>
                            <p className="text-green-700 text-sm mt-1">Basic token contracts, simple voting systems, escrow contracts</p>
                        </div>
                    </div>

                    <div className="flex items-center gap-3 p-3 bg-blue-50 rounded-lg">
                        <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0" />
                        <div>
                            <span className="font-semibold text-blue-900">dApp Development:</span>
                            <span className="ml-2 px-2 py-1 bg-blue-100 text-blue-800 rounded text-sm font-medium">2–4 months</span>
                            <p className="text-blue-700 text-sm mt-1">Decentralized applications, DeFi protocols, NFT marketplaces</p>
                        </div>
                    </div>

                    <div className="flex items-center gap-3 p-3 bg-purple-50 rounded-lg">
                        <CheckCircle className="w-5 h-5 text-purple-600 flex-shrink-0" />
                        <div>
                            <span className="font-semibold text-purple-900">Enterprise Blockchain Solutions:</span>
                            <span className="ml-2 px-2 py-1 bg-purple-100 text-purple-800 rounded text-sm font-medium">4–8+ months</span>
                            <p className="text-purple-700 text-sm mt-1">Custom blockchain networks, consortium chains, complex integrations</p>
                        </div>
                    </div>
                </div>

                <div className="mt-4 space-y-2">
                    <h4 className="font-semibold text-gray-900">Development Phases:</h4>
                    {[
                        "Blockchain architecture design and platform selection (1-2 weeks)",
                        "Smart contract development and testing (2-8 weeks)",
                        "Frontend and backend integration (2-6 weeks)",
                        "Security auditing and penetration testing (1-3 weeks)",
                        "Deployment and network configuration (1-2 weeks)",
                        "User acceptance testing and optimization (1-2 weeks)"
                    ].map((phase, index) => (
                        <div key={index} className="flex items-start gap-2 p-2">
                            <ArrowRight className="w-4 h-4 text-gray-600 mt-0.5 flex-shrink-0" />
                            <p className="text-gray-700 text-sm">{phase}</p>
                        </div>
                    ))}
                </div>

                <div className="mt-4 p-3 bg-orange-50 rounded-lg border border-orange-200">
                    <p className="text-orange-800">
                        Security auditing typically adds <span className="font-semibold">2-4 weeks but is crucial</span> for blockchain applications.
                    </p>
                </div>
            </>
        ),
    },
    {
        title: "What is the cost of blockchain development?",
        icon: <DollarSign className="w-5 h-5 text-green-500" />,
        description: (
            <>
                <div className="mb-4">
                    Blockchain development costs vary based on complexity, platform, and security requirements:
                </div>

                <div className="space-y-3">
                    <div className="flex items-start gap-3 p-3 bg-green-50 rounded-lg border-l-4 border-green-500">
                        <DollarSign className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                        <div>
                            <span className="font-semibold text-green-900">Simple Smart Contracts:</span>
                            <p className="text-green-800 mt-1">$15,000 - $40,000 for basic token contracts and simple dApps</p>
                        </div>
                    </div>

                    <div className="flex items-start gap-3 p-3 bg-blue-50 rounded-lg border-l-4 border-blue-500">
                        <TrendingUp className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                        <div>
                            <span className="font-semibold text-blue-900">Advanced dApps:</span>
                            <p className="text-blue-800 mt-1">$40,000 - $150,000 for DeFi protocols, NFT platforms, complex smart contracts</p>
                        </div>
                    </div>

                    <div className="flex items-start gap-3 p-3 bg-purple-50 rounded-lg border-l-4 border-purple-500">
                        <Building className="w-5 h-5 text-purple-600 mt-0.5 flex-shrink-0" />
                        <div>
                            <span className="font-semibold text-purple-900">Enterprise Blockchain:</span>
                            <p className="text-purple-800 mt-1">$150,000+ for custom networks, consortium chains, enterprise integrations</p>
                        </div>
                    </div>
                </div>

                <div className="mt-4 space-y-2">
                    <h4 className="font-semibold text-gray-900">Cost Factors Include:</h4>
                    {[
                        "Blockchain platform selection and licensing fees",
                        "Smart contract complexity and security requirements",
                        "Frontend and backend development scope",
                        "Security auditing and penetration testing costs",
                        "Integration with existing systems and APIs",
                        "Ongoing network maintenance and gas fees",
                        "Compliance and regulatory requirements"
                    ].map((factor, index) => (
                        <div key={index} className="flex items-start gap-2 p-2">
                            <ArrowRight className="w-4 h-4 text-gray-600 mt-0.5 flex-shrink-0" />
                            <p className="text-gray-700 text-sm">{factor}</p>
                        </div>
                    ))}
                </div>

                <div className="mt-4 p-3 bg-yellow-50 rounded-lg border border-yellow-200">
                    <p className="text-yellow-800">
                        Security auditing costs <span className="font-semibold">$5,000-$50,000</span> but prevents potential million-dollar exploits.
                    </p>
                </div>
            </>
        ),
    },
    {
        title: "How do you ensure blockchain security and conduct audits?",
        icon: <Shield className="w-5 h-5 text-red-500" />,
        description: (
            <>
                <div className="mb-4">
                    Security is paramount in blockchain development. We implement comprehensive security measures and auditing processes:
                </div>

                <div className="space-y-3">
                    <div className="flex items-start gap-3 p-3 bg-red-50 rounded-lg border-l-4 border-red-500">
                        <Shield className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
                        <div>
                            <span className="font-semibold text-red-900">Smart Contract Security:</span>
                            <p className="text-red-800 mt-1">Comprehensive code reviews, automated testing, and vulnerability assessments.</p>
                        </div>
                    </div>

                    <div className="flex items-start gap-3 p-3 bg-blue-50 rounded-lg border-l-4 border-blue-500">
                        <Scan className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                        <div>
                            <span className="font-semibold text-blue-900">Automated Security Testing:</span>
                            <p className="text-blue-800 mt-1">Static analysis tools like MythX, Slither, and Securify for vulnerability detection.</p>
                        </div>
                    </div>

                    <div className="flex items-start gap-3 p-3 bg-green-50 rounded-lg border-l-4 border-green-500">
                        <Users className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                        <div>
                            <span className="font-semibold text-green-900">Third-Party Audits:</span>
                            <p className="text-green-800 mt-1">Professional security audits from certified blockchain security firms.</p>
                        </div>
                    </div>
                </div>

                <div className="mt-4 space-y-2">
                    <h4 className="font-semibold text-gray-900">Our Security Process:</h4>
                    {[
                        "Secure coding practices following OpenZeppelin standards",
                        "Multi-signature wallet implementations for admin functions",
                        "Reentrancy attack prevention and access control mechanisms",
                        "Gas optimization and DoS attack mitigation",
                        "Formal verification for critical smart contract logic",
                        "Penetration testing and economic attack simulations",
                        "Bug bounty programs and community-driven security reviews"
                    ].map((process, index) => (
                        <div key={index} className="flex items-start gap-2 p-2">
                            <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                            <p className="text-gray-700 text-sm">{process}</p>
                        </div>
                    ))}
                </div>

                <div className="mt-4 p-3 bg-red-50 rounded-lg border border-red-200">
                    <p className="text-red-800">
                        Our security-first approach has <span className="font-semibold">prevented 100% of exploits</span> in audited contracts.
                    </p>
                </div>
            </>
        ),
    },
    {
        title: "What are Smart Contracts and how do they benefit businesses?",
        icon: <FileText className="w-5 h-5 text-blue-500" />,
        description: (
            <>
                <div className="mb-4">
                    Smart contracts are self-executing contracts with terms directly written into code, running on blockchain networks:
                </div>

                <div className="space-y-3">
                    <div className="flex items-start gap-3 p-3 bg-blue-50 rounded-lg border-l-4 border-blue-500">
                        <Zap className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                        <div>
                            <span className="font-semibold text-blue-900">Automation:</span>
                            <p className="text-blue-800 mt-1">Automatically execute agreements when predetermined conditions are met.</p>
                        </div>
                    </div>

                    <div className="flex items-start gap-3 p-3 bg-green-50 rounded-lg border-l-4 border-green-500">
                        <DollarSign className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                        <div>
                            <span className="font-semibold text-green-900">Cost Reduction:</span>
                            <p className="text-green-800 mt-1">Eliminate intermediaries and reduce transaction costs by 30-50%.</p>
                        </div>
                    </div>

                    <div className="flex items-start gap-3 p-3 bg-purple-50 rounded-lg border-l-4 border-purple-500">
                        <Eye className="w-5 h-5 text-purple-600 mt-0.5 flex-shrink-0" />
                        <div>
                            <span className="font-semibold text-purple-900">Transparency:</span>
                            <p className="text-purple-800 mt-1">All parties can view contract terms and execution on the blockchain.</p>
                        </div>
                    </div>
                </div>

                <div className="mt-4 space-y-2">
                    <h4 className="font-semibold text-gray-900">Business Use Cases:</h4>
                    {[
                        "Supply chain tracking and provenance verification",
                        "Insurance claim processing and payouts",
                        "Real estate transactions and property transfers",
                        "Royalty distribution for content creators",
                        "Escrow services for marketplace transactions",
                        "Automated compliance and regulatory reporting",
                        "Token vesting and employee incentive programs"
                    ].map((useCase, index) => (
                        <div key={index} className="flex items-start gap-2 p-2">
                            <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                            <p className="text-gray-700 text-sm">{useCase}</p>
                        </div>
                    ))}
                </div>

                <div className="mt-4 p-3 bg-blue-100 rounded-lg border border-blue-200">
                    <p className="text-blue-800">
                        Smart contracts can reduce <span className="font-semibold">processing time from days to minutes</span> for complex agreements.
                    </p>
                </div>
            </>
        ),
    },
    {
        title: "Do you provide ongoing blockchain support and maintenance?",
        icon: <Settings className="w-5 h-5 text-purple-500" />,
        description: (
            <>
                <div className="mb-4">
                    <span className="font-semibold">Yes!</span> We offer comprehensive <span className="font-semibold text-purple-700">blockchain support and maintenance services</span>:
                </div>

                <div className="space-y-2">
                    {[
                        { icon: <BarChart className="w-4 h-4 text-blue-500" />, text: "Smart contract monitoring and performance optimization" },
                        { icon: <Shield className="w-4 h-4 text-red-500" />, text: "Ongoing security monitoring and vulnerability assessments" },
                        { icon: <RefreshCw className="w-4 h-4 text-green-500" />, text: "Protocol upgrades and smart contract migrations" },
                        { icon: <Database className="w-4 h-4 text-purple-500" />, text: "Blockchain network maintenance and node management" },
                        { icon: <DollarSign className="w-4 h-4 text-orange-500" />, text: "Gas fee optimization and transaction cost management" },
                        { icon: <Users className="w-4 h-4 text-indigo-500" />, text: "Community governance and proposal management" },
                        { icon: <AlertTriangle className="w-4 h-4 text-yellow-500" />, text: "24/7 incident response and emergency support" },
                        { icon: <TrendingUp className="w-4 h-4 text-pink-500" />, text: "Performance analytics and usage insights" }
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
                            <span className="px-2 py-1 bg-purple-100 text-purple-800 rounded text-sm">Advanced Security</span>
                            <span className="px-2 py-1 bg-purple-100 text-purple-800 rounded text-sm">Enterprise Blockchain</span>
                        </div>
                    </div>
                </div>

                <div className="mt-4 p-3 bg-purple-50 rounded-lg border border-purple-200">
                    <p className="text-purple-800">
                        Our blockchain expertise ensures your solutions remain <span className="font-semibold">secure, scalable, and continuously optimized</span>.
                    </p>
                </div>
            </>
        ),
    }
];
