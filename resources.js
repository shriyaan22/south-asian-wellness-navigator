// resources.js

// FIX 1: Changed array name from 'resources' to 'resourcesData'
const resourcesData = [
    {
        // FIX 2: Changed 'name' to 'title'
        title: "Mann Mukti",
        // FIX 3: Changed 'category: "mind"' to the correct array structure and capitalized value
        dimensions: ["Mind"],
        description: "UK-based organization dedicated to tackling the stigma around mental health in South Asian communities.",
        link: "https://www.mannmukti.org/",
        reviewed: true,
        testimonial: "They offer great online resources and community stories that really normalize the conversation."
    },
    {
        title: "Brown Girl Therapy",
        dimensions: ["Mind", "Identity & Culture"],
        description: "Resources and content for children of immigrants, focusing on intergenerational trauma and cultural identity.",
        link: "https://browngirltherapy.com/",
        reviewed: true,
        testimonial: "The weekly newsletter provides deeply relatable insights and coping strategies."
    },
    {
        title: "South Asian Mental Health Initiative & Network (SAMHIN)",
        dimensions: ["Mind", "Community"],
        description: "Promotes mental health awareness and provides education and resources for the South Asian community in the US.",
        link: "https://samhin.org/",
        reviewed: true,
        testimonial: "Excellent educational webinars aimed at families and service providers."
    },
    {
        title: "Shanti Project (Diaspora Trauma)",
        dimensions: ["Mind", "Identity & Culture"],
        description: "Fictional Placeholder: Trauma-informed support groups tailored for South Asian immigrants navigating diaspora trauma.",
        link: "#placeholder-trauma",
        reviewed: false,
        testimonial: "A safe space to discuss the unique challenges of cultural displacement and historical trauma."
    },
    {
        title: "Tricycle Magazine / Buddhist Meditation",
        dimensions: ["Soul"],
        description: "While not exclusively South Asian, it provides high-quality meditation and spiritual content deeply rooted in South Asian traditions.",
        link: "https://tricycle.org/",
        reviewed: false,
        testimonial: "The guided meditations are fantastic for beginners, very calming."
    },
    {
        title: "AASRA Suicide Prevention (India)",
        dimensions: ["Mind"],
        description: "A free, confidential 24-hour helpline in India for anyone feeling suicidal or low.",
        link: "http://www.aasra.info/",
        reviewed: true,
        testimonial: "Critical lifeline service providing immediate support in a crisis."
    },
    {
        title: "Desi Strong Family Mediation",
        dimensions: ["Family"],
        description: "Immigrant family mediation and conflict resolution services, focusing on cultural and generational gaps.",
        link: "#placeholder-family",
        reviewed: true,
        testimonial: "Helped bridge the communication gap between my parents and me with culturally sensitive approaches."
    },
    {
        title: "South Asian Women's Health Collective (SAWHC)",
        dimensions: ["Body"],
        description: "Focuses on the physical and reproductive health needs of South Asian women, including nutritional guidance and movement classes.",
        link: "#placeholder-sawhc",
        reviewed: true,
        testimonial: "Their focus on preventative health through an intersectional lens is truly valuable."
    },
    {
        title: "Yoga with Adriene (Free YouTube)",
        dimensions: ["Body", "Mind"],
        description: "Free yoga sessions accessible to everyone, promoting physical and mental balance through South Asian practice.",
        link: "https://www.youtube.com/@yogawithadriene",
        reviewed: true,
        testimonial: "Gentle and accessible yoga for daily movement and stress relief."
    },
    {
        title: "Sufi Healing Centre UK",
        dimensions: ["Soul"],
        description: "Offers spiritual counseling and meditation based on Sufi wisdom and practices.",
        link: "#placeholder-sufi",
        reviewed: false,
        testimonial: "A profound sense of peace and connection through traditional spiritual guidance."
    },
    {
        title: "Sadhana (Hindu American Movement)",
        dimensions: ["Identity & Culture", "Soul", "Community"],
        description: "A movement to promote progressive Hindu values and social justice, connecting faith with activism.",
        link: "https://www.sadhanausa.org/",
        reviewed: true,
        testimonial: "Inspiring work that connects my spiritual and political identity."
    },
    {
        title: "The Sikh Helpline",
        dimensions: ["Soul", "Mind", "Community"],
        description: "Confidential support service for the Sikh community facing abuse, mental health struggles, or spiritual queries.",
        link: "https://www.sikhhelpline.com/",
        reviewed: true,
        testimonial: "Provides support that understands the cultural and religious context of the Sikh faith."
    },
    {
        title: "Purdue South Asian Students Association (Purdue SASA)",
        dimensions: ["Work/Study", "Community"],
        description: "An example of a campus group providing academic, social, and study support to South Asian students.",
        link: "#placeholder-sasa",
        reviewed: false,
        testimonial: "Crucial networking and mentorship opportunities during university."
    },
    {
        title: "Financial Literacy for Desis",
        dimensions: ["Work/Study", "Family"],
        description: "Non-profit offering financial planning workshops and resources specifically for the diaspora community.",
        link: "#placeholder-finance",
        reviewed: false,
        testimonial: "Helped me navigate retirement planning with family obligations in mind."
    },
    {
        title: "Tarangini Dance & Movement Therapy",
        dimensions: ["Body", "Mind"],
        description: "Uses classical Indian dance forms for somatic and emotional healing.",
        link: "#placeholder-dance",
        reviewed: true,
        testimonial: "A unique and powerful way to process emotions without relying on words alone."
    },
    {
        title: "The Family Acceptance Project (South Asian Focus)",
        dimensions: ["Family", "Identity & Culture"],
        description: "Resources for families of South Asian LGBTQ+ individuals to foster acceptance and reduce conflict.",
        link: "https://familyproject.sfsu.edu/",
        reviewed: true,
        testimonial: "Offers vital, evidence-based tools for improving family communication and support."
    },
    {
        title: "South Asian SOAR (Sexual Orientation And Rights)",
        dimensions: ["Identity & Culture", "Community", "Mind"],
        description: "A network for LGBTQ+ South Asians, providing community, resources, and advocacy.",
        link: "#placeholder-lgbtq",
        reviewed: true,
        testimonial: "Finding my community here has been life-changing and validating."
    },
    {
        title: "The Juggernaut (SA Diaspora News & Culture)",
        dimensions: ["Identity & Culture", "Community"],
        description: "A media company covering South Asian diaspora news and culture, validating experiences and fostering connection.",
        link: "https://thejuggernaut.com/",
        reviewed: false,
        testimonial: "A great source for feeling connected to the wider South Asian global experience."
    },
    {
        title: "The Ayurveda Experience (Platform)",
        dimensions: ["Body"],
        description: "Online courses, consultations, and products based on traditional Ayurvedic principles.",
        link: "https://www.theayurvedaexperience.com/",
        reviewed: true,
        testimonial: "Excellent platform for learning about personalized wellness routines through Ayurveda."
    },
    {
        title: "National Alliance on Mental Illness (NAMI)",
        dimensions: ["Community", "Mind", "Family"],
        description: "National organization with local chapters that often have specific South Asian affinity groups.",
        link: "https://www.nami.org/",
        reviewed: true,
        testimonial: "Their local groups are a great place for family support and education."
    },
    {
        title: "Pakistan Psychological Association (PPA) Directory",
        dimensions: ["Mind"],
        description: "Directory of licensed therapists and psychologists practicing in Pakistan.",
        link: "#placeholder-ppa",
        reviewed: false,
        testimonial: "A starting point for finding local, regulated mental health professionals in Pakistan."
    },
    {
        title: "Bangladesh Health Portal - Mental Health Section",
        dimensions: ["Mind", "Body"],
        description: "Government-run resource for basic mental health information and contact points in Bangladesh.",
        link: "#placeholder-bd-health",
        reviewed: false,
        testimonial: "Good overview of public health services, though resources can be limited."
    },
    {
        title: "Desi Therapist Finder (US/Canada)",
        dimensions: ["Mind", "Family", "Identity & Culture"],
        description: "An online directory dedicated to connecting South Asians with culturally competent therapists in the diaspora.",
        link: "#placeholder-therapistfinder",
        reviewed: true,
        testimonial: "The best tool I've found for filtering by language, faith, and cultural competency."
    },
    {
        title: "Seva for the Planet",
        dimensions: ["Community", "Soul"],
        description: "Non-profit encouraging 'Seva' (selfless service) by South Asian youth, promoting civic engagement and well-being.",
        link: "#placeholder-seva",
        reviewed: true,
        testimonial: "Getting involved with community service really boosted my sense of purpose."
    },
    {
        title: "Temple/Mandir Community Counselling",
        dimensions: ["Soul", "Family", "Community"],
        description: "Local Mandirs and Temples often offer informal spiritual or life counseling services for free.",
        link: "#placeholder-temple",
        reviewed: false,
        testimonial: "Informal, accessible support that respects traditional values."
    },
    {
        title: "Immigrant Legal Resource Center",
        dimensions: ["Work/Study", "Community"],
        description: "Provides legal aid and resources related to immigration status, which can be a significant source of stress.",
        link: "https://www.ilrc.org/",
        reviewed: false,
        testimonial: "Crucial help for reducing work/study stress tied to visa or permanent residency issues."
    },
    {
        title: "South Asian Art Therapy Collective",
        dimensions: ["Mind", "Body"],
        description: "Offers expressive and creative therapy methods grounded in South Asian artistic traditions.",
        link: "#placeholder-arttherapy",
        reviewed: true,
        testimonial: "A gentle way to explore feelings when talk therapy feels too direct."
    },
    {
        title: "Pondicherry Institute of Neuroscience (PIN)",
        dimensions: ["Body", "Mind"],
        description: "A high-level institution in India focused on integrating traditional and modern practices for neurological wellness.",
        link: "#placeholder-pin",
        reviewed: false,
        testimonial: "Provides clinical insights and research on mind-body connections."
    },
    {
        title: "Awaaz (Domestic Violence Support)",
        dimensions: ["Family", "Community"],
        description: "A confidential helpline and resource center for South Asian individuals experiencing domestic violence or abuse.",
        link: "#placeholder-awaaz",
        reviewed: true,
        testimonial: "Immediate, life-saving support with cultural sensitivity."
    },
    {
        title: "South Asian American Digital Archive (SAADA)",
        dimensions: ["Identity & Culture", "Community"],
        description: "Preserves and shares the history and stories of South Asians in the US, strengthening identity and belonging.",
        link: "https://www.saada.org/",
        reviewed: true,
        testimonial: "Reading the community history is incredibly grounding and identity-affirming."
    },
    {
        title: "Pakistani Women in Computing (PWiC)",
        dimensions: ["Work/Study", "Community", "Identity & Culture"],
        description: "Professional networking and mentorship group for Pakistani women in tech globally.",
        link: "https://pwic.org/",
        reviewed: true,
        testimonial: "Invaluable professional and personal support in a male-dominated field."
    },
    {
        title: "The Gurdwaras of North America",
        dimensions: ["Soul", "Community", "Family"],
        description: "Local Gurdwaras provide spiritual guidance, Langar (free food), and community support for the Sikh faith and community.",
        link: "#placeholder-gurdwara",
        reviewed: false,
        testimonial: "The ultimate source of community, selfless service, and spiritual grounding."
    },
    {
        title: "Desi Diets & Wellness Coaching",
        dimensions: ["Body", "Mind"],
        description: "Nutritional coaching that respects and incorporates traditional South Asian dietary practices rather than foreign fads.",
        link: "#placeholder-desi-diet",
        reviewed: true,
        testimonial: "Finally, a nutritionist who understands and values my cultural food."
    },
    {
        title: "Mindful Desi App",
        dimensions: ["Mind", "Soul"],
        description: "Fictional Placeholder: Meditation app with guided sessions in Hindi, Urdu, and Bengali, using South Asian musical scores.",
        link: "#placeholder-mindfuldesi",
        reviewed: true,
        testimonial: "The background music and familiar language make meditation feel more accessible."
    },
    {
        title: "Himalayan Buddhist Centers",
        dimensions: ["Soul", "Mind"],
        description: "Centers that offer Tibetan and Nepalese Buddhist philosophy and meditation training.",
        link: "#placeholder-himalayan",
        reviewed: true,
        testimonial: "Deep, traditional practices that offer clarity and perspective."
    },
    {
        title: "South Asian Student Success Network (SSSN)",
        dimensions: ["Work/Study", "Mind"],
        description: "Peer mentorship and study skills coaching for high school and college students.",
        link: "#placeholder-sssn",
        reviewed: false,
        testimonial: "Helped me manage exam stress and develop a better study schedule."
    },
    {
        title: "Interfaith Dialogue South Asia",
        dimensions: ["Community", "Soul", "Identity & Culture"],
        description: "Organization promoting peace and understanding among diverse faith communities in the region/diaspora.",
        link: "#placeholder-interfaith",
        reviewed: false,
        testimonial: "Important work in building bridges and fostering mutual respect."
    },
    {
        title: "Caste Equity Advocacy Group",
        dimensions: ["Identity & Culture", "Community"],
        description: "Focuses on addressing caste-based discrimination and promoting equity within the diaspora.",
        link: "#placeholder-casteequity",
        reviewed: true,
        testimonial: "Essential resource for understanding and combating systemic injustice."
    },
    {
        title: "Family Financial Counseling Services",
        dimensions: ["Family", "Work/Study"],
        description: "Non-profit specializing in counseling for family disputes centered around wealth, inheritance, or financial strain.",
        link: "#placeholder-family-finance",
        reviewed: false,
        testimonial: "Helped us work through a very stressful family financial disagreement."
    },
    {
        title: "Diaspora Professional Network (DPN)",
        dimensions: ["Work/Study", "Community"],
        description: "A professional networking site for South Asians worldwide, offering mentorship and job boards.",
        link: "#placeholder-dpn",
        reviewed: true,
        testimonial: "A great place to find culturally relevant mentorship and career advice."
    }
];

// Attach it to the window object or declare it globally for access by script.js
// The array is now named 'resourcesData' for script.js to access.
