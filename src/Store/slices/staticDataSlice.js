import { createSlice } from "@reduxjs/toolkit";

const staticDataSlice = createSlice({
    name: "staticData",
    initialState: {
        testimonials: [
            {
                name: "Emma Johnson",
                description: "This service exceeded my expectations! The attention to detail and seamless user experience are top-notch."
            },
            {
                name: "Liam Brown",
                description: "I was blown away by how intuitive and responsive the platform is. It's become an essential tool in my daily workflow."
            },
            {
                name: "Sophia Martinez",
                description: "Absolutely love it! The ease of use and elegant design make it a standout among the competition."
            },
            {
                name: "Oliver Smith",
                description: "This platform has made my work so much easier. The features are exactly what I needed, and the support team is incredible."
            },
            {
                name: "Ava Davis",
                description: "Highly recommend this! It's user-friendly, efficient, and has helped streamline my tasks immensely."
            },
            {
                name: "Noah Wilson",
                description: "A game changer in its field. I’ve tried many services, but this one stands out for its simplicity and effectiveness."
            },
            {
                name: "Isabella Thompson",
                description: "From the design to the functionality, everything is just perfect. It has improved my productivity by leaps and bounds."
            },
            {
                name: "James Anderson",
                description: "The best platform I’ve used in years! It’s reliable, fast, and offers all the tools I need to stay ahead."
            },
        ],
        ourProducts: [
            {
                id: 1,
                icon: "fa-solid fa-briefcase fa-fw",
                name: "Checking Account",
                description: "Manage your daily expenses easily with our Checking Account. Get a free debit card and enjoy zero overdraft fees."
            },
            {
                id: 2,
                icon: "fa-solid fa-cloud-arrow-down fa-fw",
                name: "Savings Account",
                description: "Our Savings Account offers high-interest rates with no monthly fees. Access your funds anytime while earning competitive interest."
            },
            {
                id: 3,
                icon: "fa-solid fa-money-bills fa-fw",
                name: "Personal Loans",
                description: "Get quick access to funds with our flexible personal loan options. Competitive rates and fast approval process."
            },
        ],
        ourFeatures: [
            {
                id: 1,
                name: "24/7 Account Access",
                description: "Enjoy the convenience of accessing your accounts anytime, anywhere through our secure online banking platform. Check balances, transfer funds, and pay bills with ease."
            },
            {
                id: 1,
                name: "Mobile Banking App",
                description: "Stay connected to your finances on the go with our user-friendly mobile banking app. Easily manage your accounts, deposit checks, and make payments from your smartphone or tablet."
            },
            {
                id: 1,
                name: "Secure Transactions",
                description: "Rest assured knowing that your transactions are protected by industry-leading security measures. We employ encryption and multi-factor authentication to safeguard your financial information."
            },
            {
                id: 1,
                name: "Bill Pay and Transfers",
                description: "Save time and avoid late fees with our convenient bill pay service. Set up recurring payments or make one-time transfers between your accounts with just a few clicks."
            },
        ],
        faq: [
            {
                id: 1,
                question: "How do I open a bank account?",
                answer: "To open a bank account, you need to visit our website or any branch with a valid ID and proof of address. You can also complete the process online by filling out the required forms and uploading your documents."
            },
            {
                id: 2,
                question: "What documents are required to apply for a loan?",
                answer: "To apply for a loan, you'll need your ID, proof of income, and bank statements from the past 6 months. Additional documents may be requested based on the type of loan you're applying for."
            },
            {
                id: 3,
                question: "How can I reset my online banking password?",
                answer: "You can reset your online banking password by clicking on 'Forgot Password' on the login page. Enter your registered email or phone number to receive a verification code. Follow the instructions to create a new password."
            },
            {
                id: 4,
                question: "What is the minimum balance required for a savings account?",
                answer: "The minimum balance required for a savings account is $500. However, you can check specific account types for any special requirements."
            },
            {
                id: 5,
                question: "How do I transfer money to another account?",
                answer: "To transfer money, log into your online banking, select 'Transfers', and enter the recipient’s account number and the amount to send. You can also visit a branch for assistance."
            },
            {
                id: 6,
                question: "Are there any fees for international transactions?",
                answer: "Yes, international transactions typically incur a fee. You can check our fees section on the website or contact customer support for detailed information on charges."
            }
        ],
        benefits: [
            {
                icon: '/assets/careers/benefits/1.png',
                name: 'Competitive Compensation',
                description: 'We provide a competitive salary package that recognizes the skills and expertise of our employees. YourBank believes in rewarding exceptional performance and offering opportunities for financial growth.'
            },
            {
                icon: '/assets/careers/benefits/2.png',
                name: 'Health and Wellness',
                description: 'We prioritize the health and well-being of our employees by providing comprehensive medical, dental, and vision insurance plans. We also offer wellness programs, gym memberships, and resources to support a healthy lifestyle.'
            },
            {
                icon: '/assets/careers/benefits/3.png',
                name: 'Retirement Planning',
                description: 'YourBank is committed to helping employees plan for their future. We offer a retirement savings plan with a generous employer match to help them build a secure financial foundation for the long term.'
            },
            {
                icon: '/assets/careers/benefits/4.png',
                name: 'Work-Life Balance',
                description: 'We understand the importance of maintaining a healthy work-life balance. YourBank offers flexible work arrangements, paid time off, parental leave, and other programs that support employees in managing their personal and professional commitments.'
            },
        ],
        values: [
            {
                name: 'Integrity',
                description: 'We conduct ourselves with utmost honesty, transparency, and ethical behavior. We believe in doing what is right for our customers, colleagues, and stakeholders, even when faced with difficult choices.'
            },
            {
                name: 'Customer Centrality',
                description: 'Our customers are at the heart of everything we do. We are dedicated to understanding their needs, providing personalized solutions, and delivering exceptional service that exceeds expectations.'
            },
            {
                name: 'Collaboration',
                description: 'We foster a collaborative and inclusive work environment, where teamwork and diversity are celebrated. By leveraging the unique strengths and perspectives of our employees, we drive innovation and achieve greater success together.'
            },
            {
                name: 'Innovation',
                description: 'We embrace change and constantly seek innovative solutions to meet the evolving needs of our customers. We encourage our employees to think creatively, challenge conventions, and explore new ideas to drive the future of banking.'
            },
        ],
        jobOpenings: [
            {
                name: 'Relationship Manager',
                location: 'India',
                department: 'Retail Banking',
                about: 'As a Relationship Manager at YourBank, you will be responsible for developing and maintaining relationships with our valued customers. You will proactively identify their financial needs and offer tailored solutions to help them achieve their goals. We are seeking individuals with excellent communication skills, a strong sales acumen, and a passion for delivering exceptional customer service.',
                requirementsAndQualifications: [
                    `Bachelor's degree in Business, Finance, or a related field`,
                    `Minimum of 3 years of experience in sales or relationship management in the banking industry`,
                    `Proven track record of meeting and exceeding sales targets`,
                    `Excellent interpersonal and negotiation skills`,
                    `Strong knowledge of banking products and services`,
                ]
            },
            {
                name: 'Risk Analyst',
                location: 'India',
                department: 'Risk Management',
                about: 'As a Risk Analyst at YourBank, you will play a vital role in identifying and assessing potential risks to our organization. You will analyze data, conduct risk assessments, and develop strategies to mitigate risks. We are looking for detail-oriented individuals with strong analytical skills and a solid understanding of risk management principles.',
                requirementsAndQualifications: [
                    `Bachelor's degree in Finance, Economics, or a related field`,
                    `Minimum of 2 years of experience in risk management or a similar role`,
                    `Proficiency in risk analysis tools and techniques`,
                    `Strong analytical and problem-solving skills`,
                    `Knowledge of regulatory requirements and industry best practices`,
                ]
            },
            {
                name: 'IT Security Specialist',
                location: 'India',
                department: 'Information Technology',
                about: 'As an IT Security Specialist at YourBank, you will be responsible for ensuring the security and integrity of our information systems. You will develop and implement security protocols, conduct vulnerability assessments, and respond to security incidents. We are seeking individuals with a strong technical background, knowledge of cybersecurity best practices, and a commitment to maintaining the confidentiality of customer data.',
                requirementsAndQualifications: [
                    `Bachelor's degree in Computer Science, Information Security, or a related field`,
                    `Minimum of 5 years of experience in IT security or a similar role`,
                    `In-depth knowledge of network security protocols and technologies`,
                    `Familiarity with regulatory frameworks such as PCI DSS and GDPR`,
                    `Professional certifications such as CISSP or CISM are preferred`,
                ]
            },
        ],
        protectYou: [
            {
                icon: '/assets/security/protectYou/1.png',
                name: 'Secure Online Banking Platform',
                description: 'Our online banking platform is built with multiple layers of security to safeguard your information. We utilize industry-standard encryption protocols to ensure that your data remains confidential and protected during transmission.'
            },
            {
                icon: '/assets/security/protectYou/2.png',
                name: 'Multi-Factor Authentication',
                description: 'To enhance the security of your online banking experience, we employ multi-factor authentication. This additional layer of security requires you to provide multiple pieces of identification, such as a password and a one-time verification code, to access your account.'
            },
            {
                icon: '/assets/security/protectYou/3.png',
                name: 'Fraud Monitoring',
                description: 'We have sophisticated fraud detection systems in place to monitor your accounts for any suspicious activities. Our dedicated team works around the clock to detect and prevent unauthorized transactions, providing you with peace of mind.'
            },
            {
                icon: '/assets/security/protectYou/4.png',
                name: 'Secure Mobile Banking',
                description: 'Our mobile banking app is designed with the same level of security as our online banking platform. You can confidently access your accounts, make transactions, and manage your finances on the go, knowing that your information is protected.'
            },
        ],
    }
});

export default staticDataSlice.reducer;