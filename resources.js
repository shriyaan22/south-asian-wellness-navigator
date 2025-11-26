// resources.js
const resources = [
    {
        name: "Mann Mukti",
        category: "mind",
        description: "UK-based organization dedicated to tackling the stigma around mental health in South Asian communities.",
        link: "https://www.mannmukti.org/",
        reviewed: true,
        testimonial: "They offer great online resources and community stories that really normalize the conversation."
    },
    {
        name: "Brown Girl Therapy",
        category: "mind",
        description: "Resources and content for children of immigrants, focusing on intergenerational trauma and cultural identity.",
        link: "https://browngirltherapy.com/",
        reviewed: true,
        testimonial: "The weekly newsletter provides deeply relatable insights and coping strategies."
    },
    {
        name: "South Asian Mental Health Initiative & Network (SAMHIN)",
        category: "community",
        description: "Promotes mental health awareness and provides education and resources for the South Asian community in the US.",
        link: "https://samhin.org/",
        reviewed: true,
        testimonial: "Excellent educational webinars aimed at families and service providers."
    },
    {
        name: "Shanti Project (Diaspora Trauma)",
        category: "mind",
        description: "Fictional Placeholder: Trauma-informed support groups tailored for South Asian immigrants navigating diaspora trauma.",
        link: "#placeholder-trauma",
        reviewed: false,
        testimonial: "A safe space to discuss the unique challenges of cultural displacement and historical trauma."
    },
    {
        name: "Tricycle Magazine / Buddhist Meditation",
        category: "soul",
        description: "While not exclusively South Asian, it provides high-quality meditation and spiritual content deeply rooted in South Asian traditions.",
        link: "https://tricycle.org/",
        reviewed: false,
        testimonial: "The guided meditations are fantastic for beginners, very calming."
    },
    {
        name: "AASRA Suicide Prevention (India)",
        category: "mind",
        description: "A free, confidential 24-hour helpline in India for anyone feeling suicidal or low.",
        link: "http://www.aasra.info/",
        reviewed: true,
        testimonial: "Critical lifeline service providing immediate support in a crisis."
    },
    {
        name: "Desi Strong Family Mediation",
        category: "family",
        description: "Immigrant family mediation and conflict resolution services, focusing on cultural and generational gaps.",
        link: "#placeholder-family",
        reviewed: true,
        testimonial: "Helped bridge the communication gap between my parents and me with culturally sensitive approaches."
    },
    {
        name: "South Asian Women's Health Collective (SAWHC)",
        category: "body",
        description: "Focuses on the physical and reproductive health needs of South Asian women, including nutritional guidance and movement classes.",
        link: "#placeholder-sawhc",
        reviewed: true,
        testimonial: "Their focus on preventative health through an intersectional lens is truly valuable."
    },
    {
        name: "Yoga with Adriene (Free YouTube)",
        category: "body",
        description: "Free yoga sessions accessible to everyone, promoting physical and mental balance through South Asian practice.",
        link: "https://www.youtube.com/@yogawithadriene",
        reviewed: true,
        testimonial: "Gentle and accessible yoga for daily movement and stress relief."
    },
    {
        name: "Sufi Healing Centre UK",
        category: "soul",
        description: "Offers spiritual counseling and meditation based on Sufi wisdom and practices.",
        link: "#placeholder-sufi",
        reviewed: false,
        testimonial: "A profound sense of peace and connection through traditional spiritual guidance."
    },
    {
        name: "Sadhana (Hindu American Movement)",
        category: "identityculture",
        description: "A movement to promote progressive Hindu values and social justice, connecting faith with activism.",
        link: "https://www.sadhanausa.org/",
        reviewed: true,
        testimonial: "Inspiring work that connects my spiritual and political identity."
    },
    {
        name: "The Sikh Helpline",
        category: "soul",
        description: "Confidential support service for the Sikh community facing abuse, mental health struggles, or spiritual queries.",
        link: "https://www.sikhhelpline.com/",
        reviewed: true,
        testimonial: "Provides support that understands the cultural and religious context of the Sikh faith."
    },
    {
        name: "Purdue South Asian Students Association (Purdue SASA)",
        category: "workstudy",
        description: "An example of a campus group providing academic, social, and study support to South Asian students.",
        link: "#placeholder-sasa",
        reviewed: false,
        testimonial: "Crucial networking and mentorship opportunities during university."
    },
    {
        name: "Financial Literacy for Desis",
        category: "workstudy",
        description: "Non-profit offering financial planning workshops and resources specifically for the diaspora community.",
        link: "#placeholder-finance",
        reviewed: false,
        testimonial: "Helped me navigate retirement planning with family obligations in mind."
    },
    {
        name: "Tarangini Dance & Movement Therapy",
        category: "body",
        description: "Uses classical Indian dance forms for somatic and emotional healing.",
        link: "#placeholder-dance",
        reviewed: true,
        testimonial: "A unique and powerful way to process emotions without relying on words alone."
    },
    {
        name: "The Family Acceptance Project (South Asian Focus)",
        category: "family",
        description: "Resources for families of South Asian LGBTQ+ individuals to foster acceptance and reduce conflict.",
        link: "https://familyproject.sfsu.edu/",
        reviewed: true,
        testimonial: "Offers vital, evidence-based tools for improving family communication and support."
    },
    {
        name: "South Asian SOAR (Sexual Orientation And Rights)",
        category: "identityculture",
        description: "A network for LGBTQ+ South Asians, providing community, resources, and advocacy.",
        link: "#placeholder-lgbtq",
        reviewed: true,
        testimonial: "Finding my community here has been life-changing and validating."
    },
    {
        name: "The Juggernaut (SA Diaspora News & Culture)",
        category: "identityculture",
        description: "A media company covering South Asian diaspora news and culture, validating experiences and fostering connection.",
        link: "https://thejuggernaut.com/",
        reviewed: false,
        testimonial: "A great source for feeling connected to the wider South Asian global experience."
    },
    {
        name: "The Ayurveda Experience (Platform)",
        category: "body",
        description: "Online courses, consultations, and products based on traditional Ayurvedic principles.",
        link: "https://www.theayurvedaexperience.com/",
        reviewed: true,
        testimonial: "Excellent platform for learning about personalized wellness routines through Ayurveda."
    },
    {
        name: "National Alliance on Mental Illness (NAMI)",
        category: "community",
        description: "National organization with local chapters that often have specific South Asian affinity groups.",
        link: "https://www.nami.org/",
        reviewed: true,
        testimonial: "Their local groups are a great place for family support and education."
    },
    {
        name: "Pakistan Psychological Association (PPA) Directory",
        category: "mind",
        description: "Directory of licensed therapists and psychologists practicing in Pakistan.",
        link: "#placeholder-ppa",
        reviewed: false,
        testimonial: "A starting point for finding local, regulated mental health professionals in Pakistan."
    },
    {
        name: "Bangladesh Health Portal - Mental Health Section",
        category: "mind",
        description: "Government-run resource for basic mental health information and contact points in Bangladesh.",
        link: "#placeholder-bd-health",
        reviewed: false,
        testimonial: "Good overview of public health services, though resources can be limited."
    },
    {
        name: "Desi Therapist Finder (US/Canada)",
        category: "mind",
        description: "An online directory dedicated to connecting South Asians with culturally competent therapists in the diaspora.",
        link: "#placeholder-therapistfinder",
        reviewed: true,
        testimonial: "The best tool I've found for filtering by language, faith, and cultural competency."
    },
    {
        name: "Seva for the Planet",
        category: "community",
        description: "Non-profit encouraging 'Seva' (selfless service) by South Asian youth, promoting civic engagement and well-being.",
        link: "#placeholder-seva",
        reviewed: true,
        testimonial: "Getting involved with community service really boosted my sense of purpose."
    },
    {
        name: "Temple/Mandir Community Counselling",
        category: "soul",
        description: "Local Mandirs and Temples often offer informal spiritual or life counseling services for free.",
        link: "#placeholder-temple",
        reviewed: false,
        testimonial: "Informal, accessible support that respects traditional values."
    },
    {
        name: "Immigrant Legal Resource Center",
        category: "workstudy",
        description: "Provides legal aid and resources related to immigration status, which can be a significant source of stress.",
        link: "https://www.ilrc.org/",
        reviewed: false,
        testimonial: "Crucial help for reducing work/study stress tied to visa or permanent residency issues."
    },
    {
        name: "South Asian Art Therapy Collective",
        category: "mind",
        description: "Offers expressive and creative therapy methods grounded in South Asian artistic traditions.",
        link: "#placeholder-arttherapy",
        reviewed: true,
        testimonial: "A gentle way to explore feelings when talk therapy feels too direct."
    },
    {
        name: "Pondicherry Institute of Neuroscience (PIN)",
        category: "body",
        description: "A high-level institution in India focused on integrating traditional and modern practices for neurological wellness.",
        link: "#placeholder-pin",
        reviewed: false,
        testimonial: "Provides clinical insights and research on mind-body connections."
    },
    {
        name: "Awaaz (Domestic Violence Support)",
        category: "family",
        description: "A confidential helpline and resource center for South Asian individuals experiencing domestic violence or abuse.",
        link: "#placeholder-awaaz",
        reviewed: true,
        testimonial: "Immediate, life-saving support with cultural sensitivity."
    },
    {
        name: "South Asian American Digital Archive (SAADA)",
        category: "identityculture",
        description: "Preserves and shares the history and stories of South Asians in the US, strengthening identity and belonging.",
        link: "https://www.saada.org/",
        reviewed: true,
        testimonial: "Reading the community history is incredibly grounding and identity-affirming."
    },
    {
        name: "Pakistani Women in Computing (PWiC)",
        category: "workstudy",
        description: "Professional networking and mentorship group for Pakistani women in tech globally.",
        link: "https://pwic.org/",
        reviewed: true,
        testimonial: "Invaluable professional and personal support in a male-dominated field."
    },
    {
        name: "The Gurdwaras of North America",
        category: "soul",
        description: "Local Gurdwaras provide spiritual guidance, Langar (free food), and community support for the Sikh faith and community.",
        link: "#placeholder-gurdwara",
        reviewed: false,
        testimonial: "The ultimate source of community, selfless service, and spiritual grounding."
    },
    {
        name: "Desi Diets & Wellness Coaching",
        category: "body",
        description: "Nutritional coaching that respects and incorporates traditional South Asian dietary practices rather than foreign fads.",
        link: "#placeholder-desi-diet",
        reviewed: true,
        testimonial: "Finally, a nutritionist who understands and values my cultural food."
    },
    {
        name: "Mindful Desi App",
        category: "mind",
        description: "Fictional Placeholder: Meditation app with guided sessions in Hindi, Urdu, and Bengali, using South Asian musical scores.",
        link: "#placeholder-mindfuldesi",
        reviewed: true,
        testimonial: "The background music and familiar language make meditation feel more accessible."
    },
    {
        name: "Himalayan Buddhist Centers",
        category: "soul",
        description: "Centers that offer Tibetan and Nepalese Buddhist philosophy and meditation training.",
        link: "#placeholder-himalayan",
        reviewed: true,
        testimonial: "Deep, traditional practices that offer clarity and perspective."
    },
    {
        name: "South Asian Student Success Network (SSSN)",
        category: "workstudy",
        description: "Peer mentorship and study skills coaching for high school and college students.",
        link: "#placeholder-sssn",
        reviewed: false,
        testimonial: "Helped me manage exam stress and develop a better study schedule."
    },
    {
        name: "Interfaith Dialogue South Asia",
        category: "community",
        description: "Organization promoting peace and understanding among diverse faith communities in the region/diaspora.",
        link: "#placeholder-interfaith",
        reviewed: false,
        testimonial: "Important work in building bridges and fostering mutual respect."
    },
    {
        name: "Caste Equity Advocacy Group",
        category: "identityculture",
        description: "Focuses on addressing caste-based discrimination and promoting equity within the diaspora.",
        link: "#placeholder-casteequity",
        reviewed: true,
        testimonial: "Essential resource for understanding and combating systemic injustice."
    },
    {
        name: "Family Financial Counseling Services",
        category: "family",
        description: "Non-profit specializing in counseling for family disputes centered around wealth, inheritance, or financial strain.",
        link: "#placeholder-family-finance",
        reviewed: false,
        testimonial: "Helped us work through a very stressful family financial disagreement."
    },
    {
        name: "Diaspora Professional Network (DPN)",
        category: "workstudy",
        description: "A professional networking site for South Asians worldwide, offering mentorship and job boards.",
        link: "#placeholder-dpn",
        reviewed: true,
        testimonial: "A great place to find culturally relevant mentorship and career advice."
    }
];

// Export the array so script.js can access it
// Note: We use a simple global variable assignment for GitHub Pages compatibility
// In a modern build system, you'd use 'export default resources;'
// For simple HTML/JS, we just attach it to the window object or declare it globally.
// We'll use a global variable 'resources' in this setup.
