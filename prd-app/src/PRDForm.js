import React, { useState } from 'react';

function PRDForm({ formType, setIsFormSelected }) {
  // Define questions and attributes

  const PRDquestions = [
    { id: "protocolName", label: "What is the name of the DeFi protocol?", type: "text", placeholder: "Enter the protocol name" },
    { id: "sector", label: "State the specific sector", type: "text", placeholder: "Which sector does this protocol belong to?" },
    { id: "overview", label: "Provide a concise overview of the DeFi protocol's purpose and functionality in its specific market sector", type: "textarea", placeholder: "Provide a brief overview of the protocol" },
    { id: "objectives", label: "What are the primary goals and objectives of the protocol within the decentralized finance space?", type: "textarea", placeholder: "List down the primary goals and objectives" },
    { id: "disruption", label: "How does this protocol disrupt its specific sector?", type: "textarea", placeholder: "Describe how the protocol is disruptive" },
    { id: "targetUsers", label: "Who are the target users of the protocol?", type: "text", placeholder: "Specify the target users" },
    { id: "userRole", label: "What is the role of the target user in the specific sector?", type: "text", placeholder: "Define the role of the target user" },
    { id: "challenges", label: "What specific challenges or pain points in the DeFi space does the protocol aim to address?", type: "textarea", placeholder: "List down the challenges or pain points" },
    { id: "financialNeeds", label: "How does it meet the financial needs of users, such as earning, lending, borrowing, or trading, etc?", type: "textarea", placeholder: "Describe how it meets the financial needs" },
    { id: "disruptionTraditional", label: "How does the protocol disrupt the traditional competitors business model?", type: "textarea", placeholder: "Describe its impact on traditional models" },
    { id: "coreFeatures", label: "What are the core features and functionalities of the protocol?", type: "textarea", placeholder: "List down the core features" },
    { id: "featuresInteraction", label: "How do these features enable users to interact with DeFi assets and services?", type: "textarea", placeholder: "Explain the interaction with DeFi assets" },
    { id: "tokenomics", label: "Describe the token economics of the DeFi protocol.", type: "textarea", placeholder: "Detail the token economics" },
    { id: "tokenDistribution", label: "How are tokens distributed, staked, and used within the protocol?", type: "textarea", placeholder: "Describe token distribution and usage" },
    { id: "governance", label: "Is there a governance model for token holders to participate in decision-making?", type: "text", placeholder: "Describe the governance model" },
    { id: "blockchainPlatform", label: "Specify the underlying blockchain platform (e.g., Ethereum, Binance Smart Chain) and smart contracts used.", type: "text", placeholder: "Specify the blockchain platform" },
    { id: "blockchainInteraction", label: "Provide details on how the protocol interacts with blockchain technology.", type: "textarea", placeholder: "Describe the blockchain interaction" },
    { id: "securityMeasures", label: "What security measures and audits are in place to protect user funds and data?", type: "textarea", placeholder: "Detail the security measures" },
    { id: "vulnerabilities", label: "Address potential vulnerabilities and strategies to mitigate risks.", type: "textarea", placeholder: "List vulnerabilities and mitigation strategies" },
    { id: "uiActions", label: "What actions is the UI trying to persuade users to complete?", type: "textarea", placeholder: "Specify the UI actions" },
    { id: "uxTarget", label: "How is the UX catered toward our target market?", type: "textarea", placeholder: "Describe the UX strategy" },
    { id: "liquidityProvision", label: "Explain how liquidity provision and yield generation work within the protocol.", type: "textarea", placeholder: "Describe liquidity and yield strategies" },
    { id: "liquidityStrategies", label: "Outline strategies for holders to sell on non-protocol owned liquidity", type: "textarea", placeholder: "Detail the liquidity strategies" },
    { id: "testingProcess", label: "Detail the testing process, including security audits by a third-party", type: "textarea", placeholder: "Explain the testing and audit process" },
    { id: "partnerships", label: "Which firms are willing to help the progress of this product?", type: "text", placeholder: "List down partnering firms" },
    { id: "potentialPartnerships", label: "Which firms might be interested in helping the progress of the product?", type: "text", placeholder: "List down potential partnering firms" },
    { id: "roadmap", label: "Provide a development timeline and roadmap, including key milestones and release dates.", type: "textarea", placeholder: "Detail the development roadmap" },
    { id: "budget", label: "Estimate the budget required for development, audits, and ongoing maintenance.", type: "textarea", placeholder: "Provide a budget estimate" },
    { id: "resourceAllocation", label: "Identify the human resources needed for project success.", type: "textarea", placeholder: "Specify the human resources required" },
    { id: "risks", label: "Identify potential risks specific to DeFi, such as smart contract vulnerabilities or market volatility.", type: "textarea", placeholder: "List down potential risks" },
    { id: "contingencyPlans", label: "Describe contingency plans to address these risks.", type: "textarea", placeholder: "Detail the contingency plans" },
    { id: "communityEngagement", label: "Explain how the protocol is attractive to the specific sector", type: "textarea", placeholder: "Describe community engagement strategies" },
    { id: "networkEffect", label: "How will the app build a network effect?", type: "textarea", placeholder: "Detail the strategy for building a network effect" }
];
const TRDquestions = [
  { id: "techStack", label: "What technology stack will be used to build the DeFi protocol?", type: "text", placeholder: "Specify the technology stack" },
  { id: "blockchainFrameworks", label: "Are there any specific blockchain platforms or frameworks that will be utilized (theGraph, Chainlink, OpenZeppelin, etc)?", type: "text", placeholder: "List the blockchain platforms or frameworks" },
  { id: "smartContractsFundamental", label: "Which smart contracts are fundamental to the protocol's functionality?", type: "text", placeholder: "Specify the essential smart contracts" },
  { id: "smartContractsLogic", label: "Describe the primary functions and logic of these smart contracts.", type: "textarea", placeholder: "Detail the functions and logic" },
  { id: "interoperability", label: "Will the protocol be interoperable with other DeFi protocols or blockchain networks?", type: "text", placeholder: "Specify if it's interoperable" },
  { id: "dataTransfer", label: "How will data and asset transfers occur between offchain or other chains?", type: "textarea", placeholder: "Describe the transfer process" },
  { id: "securityMeasures", label: "What security measures will be implemented to protect user assets and data?", type: "textarea", placeholder: "Describe the security measures" },
  { id: "liquidityAccess", label: "If there is a need for liquidity pools or bankrolls, who will have access and how will access be managed?", type: "textarea", placeholder: "Detail access management" },
  { id: "securityMonitoring", label: "Are there plans for a bug bounty program or continuous security monitoring?", type: "text", placeholder: "Specify security monitoring plans" },
  { id: "externalAudits", label: "Have external security audits been conducted on the smart contracts and protocol code?", type: "text", placeholder: "Specify if audits have been conducted" },
  { id: "auditMethod", label: "How was the audit conducted?", type: "textarea", placeholder: "Describe the audit process" },
  { id: "auditResults", label: "What were the results of these audits, and how were vulnerabilities addressed?", type: "textarea", placeholder: "Detail audit results and actions" },
  { id: "tokenStandards", label: "What token standards (e.g., ERC-20, BEP-20) will be used for the native token(s) or smart contract(s)?", type: "text", placeholder: "List the token standards" },
  { id: "multipleTokens", label: "Are there plans for multiple token types (e.g., governance tokens, utility tokens)?", type: "text", placeholder: "Specify token plans" },
  { id: "dataPrivacy", label: "How will user data be handled and protected in compliance with privacy regulations?", type: "textarea", placeholder: "Describe data privacy measures" },
  { id: "dataStorage", label: "If any user data is stored on-chain or off-chain, what data and why?", type: "textarea", placeholder: "Detail data storage specifics" },
  { id: "decentralizedStorage", label: "Will decentralized storage solutions like IPFS be used for storing protocol-related data?", type: "text", placeholder: "Specify storage solutions" },
  { id: "dataAvailability", label: "How will data availability and retrieval be ensured?", type: "textarea", placeholder: "Detail data handling strategies" },
  { id: "scalability", label: "How will the protocol handle high transaction volumes?", type: "textarea", placeholder: "Describe scalability solutions" },
  { id: "droppedTransactions", label: "How will the protocol handle dropped transactions?", type: "textarea", placeholder: "Describe transaction management" },
  { id: "likelyFailures", label: "Which transactions are most likely to fail and why?", type: "textarea", placeholder: "Detail potential transaction failures" },
  { id: "performanceOptimization", label: "What strategies will be employed to optimize the performance of the protocol's smart contracts?", type: "textarea", placeholder: "Describe optimization strategies" },
  { id: "gasEfficiency", label: "Are gas-efficient coding practices a priority?", type: "text", placeholder: "Specify if gas efficiency is prioritized" },
  { id: "oracles", label: "Will the protocol rely on oracles for external data feeds?", type: "text", placeholder: "Specify oracle usage" },
  { id: "centralizedData", label: "Will the protocol rely on a centralized data source to be operational?", type: "text", placeholder: "Specify data source type" },
  { id: "dataFeedSelection", label: "How will data feeds be selected and integrated into the protocol?", type: "textarea", placeholder: "Detail data feed management" },
  { id: "testnetDeployment", label: "Will the protocol be deployed on a testnet for testing and validation?", type: "text", placeholder: "Specify testnet deployment plans" },
  { id: "testingStrategy", label: "What is the testing strategy, including unit tests, integration tests, and end-to-end tests?", type: "textarea", placeholder: "Detail the testing strategy" },
  { id: "mainnetDeployment", label: "Describe the process and considerations for deploying the protocol on the Ethereum mainnet or other networks.", type: "textarea", placeholder: "Describe mainnet deployment strategy" },
  { id: "technicalDocumentation", label: "Will there be comprehensive technical documentation for developers and users?", type: "text", placeholder: "Specify documentation plans" },
  { id: "documentationStorage", label: "Where will that documentation be stored?", type: "text", placeholder: "Specify documentation storage" },
  { id: "compliance", label: "How will the protocol comply with relevant legal and regulatory requirements in the DeFi space?", type: "textarea", placeholder: "Detail compliance measures" },
  { id: "monitoringTools", label: "What monitoring tools and services will be used to track the health and performance of the protocol?", type: "text", placeholder: "List monitoring tools" },
  { id: "incidentResponse", label: "How will incidents and anomalies be addressed?", type: "textarea", placeholder: "Describe incident response" },
  { id: "upgrades", label: "How will protocol upgrades and maintenance be managed without disrupting users?", type: "textarea", placeholder: "Detail upgrade and maintenance strategies" },
  { id: "upgradeMechanism", label: "Is there a mechanism for initiating and executing upgrades?", type: "text", placeholder: "Specify upgrade mechanisms" }
];

const questions = formType === 'PRD' ? PRDquestions : TRDquestions;

<button onClick={() => setIsFormSelected(false)}>Back</button>


  // State for current slide and form data
  const [currentSlide, setCurrentSlide] = useState(0);
  const [formData, setFormData] = useState({});

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData(prevState => ({ ...prevState, [id]: value }));
  }

  const handleNextSlide = () => {
    if (currentSlide < questions.length - 1) {
      setCurrentSlide(currentSlide + 1);
    } else {
      // Handle end of slideshow (maybe show a 'Thank you' message or transition to a different page)
    }
  }

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && currentSlide < questions.length - 1) {
      e.preventDefault();
      handleNextSlide();
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch('https://prd-backend-timbaldwin1.vercel.app/api/generate-prd', {
      method: 'POST',
      body: JSON.stringify(formData),
      headers: {
        'Content-Type': 'application/json'
      },
    })
    .then(response => response.blob())
    .then(blob => {
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'PRD.docx';
      document.body.appendChild(a); 
      a.click();
      a.remove();
    });
  }
  
  return (
    <div>
        <form onSubmit={handleSubmit} onKeyDown={handleKeyDown}>
            {questions.map((question, index) => {
                if (index === currentSlide) {
                    return (
                        <div key={question.id} className="form-group slide">
                            <label htmlFor={question.id}>{question.label}:</label>
                            {question.type === "text" ? (
                                <input
                                    type="text"
                                    id={question.id}
                                    value={formData[question.id] || ""}
                                    onChange={handleChange}
                                    placeholder={question.placeholder}
                                />
                            ) : (
                                <textarea
                                    id={question.id}
                                    value={formData[question.id] || ""}
                                    onChange={handleChange}
                                    placeholder={question.placeholder}
                                />
                            )}
                            {index < questions.length - 1 ? (
                                <button type="button" onClick={handleNextSlide}>Next</button>
                            ) : (
                                <button type="submit">Submit</button>
                            )}
                        </div>
                    );
                }
                return null;
            })}
        </form>
    </div>
  );
}

export default PRDForm;
