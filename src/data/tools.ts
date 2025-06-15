import { Tool } from "../types";

export const tools: Tool[] = [
    // =========================
    // Search Engines
    // =========================
    {
        id: "google-advanced-search",
        name: "Google Advanced Search",
        description: "Advanced interface for Google Search, allowing precise queries to find specific file types, websites, or content.",
        url: "https://www.google.com/advanced_search",
        category: "search-engines",
        tags: ["search", "google", "advanced", "filetype", "query"],
    },
    {
        id: "shodan",
        name: "Shodan",
        description: "A powerful search engine for discovering internet-connected devices, services, and vulnerabilities across the globe.",
        url: "https://www.shodan.io/",
        category: "search-engines",
        tags: ["search", "devices", "vulnerabilities", "internet-of-things"],
    },
    {
        id: "crtsh",
        name: "crt.sh",
        description: "Certificate Transparency log search engine for discovering SSL/TLS certificates issued for domains, useful for subdomain and infrastructure discovery.",
        url: "https://crt.sh/",
        category: "search-engines",
        tags: ["certificate", "transparency", "subdomain", "ssl", "tls"],
    },
    {
        id: "yandex",
        name: "Yandex",
        description: "Major Russian search engine, useful for discovering content not indexed by Western search engines.",
        url: "https://yandex.com/",
        category: "search-engines",
        tags: ["search", "yandex", "international", "content"],
    },
    {
        id: "bing",
        name: "Bing",
        description: "Microsoft's search engine, offering alternative indexing and results to Google for web research.",
        url: "https://www.bing.com/",
        category: "search-engines",
        tags: ["search", "bing", "microsoft", "web"],
    },
    {
        id: "duckduckgo",
        name: "DuckDuckGo",
        description: "Privacy-focused search engine that does not track users and offers unbiased search results.",
        url: "https://duckduckgo.com/",
        category: "search-engines",
        tags: ["search", "privacy", "no-tracking", "unbiased"],
    },
    {
        id: "exploit-db-ghdb",
        name: "Exploit-DB Google Hacking Database",
        description: "A curated database of advanced Google search queries (dorks) for finding sensitive information and vulnerabilities indexed by Google.",
        url: "https://www.exploit-db.com/google-hacking-database",
        category: "search-engines",
        tags: ["google", "dorks", "vulnerabilities", "search", "exploit-db"],
    },
    {
        id: "virustotal",
        name: "Virus Total",
        description: "Multi-engine malware and URL scanning service",
        url: "https://www.virustotal.com/gui/home/upload",
        category: "search-engines",
        tags: ["malware", "scanning", "security"],
    },

    // =========================
    // Domain/IP & Web App
    // =========================
    {
        id: "leakix",
        name: "LeakIX",
        description: "Search engine for internet service discovery and vulnerability detection",
        url: "https://leakix.net/",
        category: "domain-ip",
        tags: ["reconnaissance", "vulnerabilities", "leaks"],
    },
    {
        id: "dns-dumpster",
        name: "DNS Dumpster",
        description: "DNS reconnaissance tool for mapping network infrastructure",
        url: "https://dnsdumpster.com/",
        category: "domain-ip",
        tags: ["dns", "reconnaissance", "mapping"],
    },
    {
        id: "rapiddns",
        name: "Rapid DNS",
        description: "Quick DNS lookup tool for domain information gathering",
        url: "https://rapiddns.io/",
        category: "domain-ip",
        tags: ["dns", "lookup", "domain"],
    },
    {
        id: "ssltest",
        name: "SSL Server Test",
        description: "Analyze SSL/TLS configurations and identify security vulnerabilities",
        url: "https://www.ssllabs.com/ssltest/",
        category: "domain-ip",
        tags: ["ssl", "security", "analysis"],
    },
    {
        id: "netcraft",
        name: "Netcraft Site Report",
        description: "Detailed analysis of website infrastructure and security",
        url: "https://sitereport.netcraft.com/",
        category: "domain-ip",
        tags: ["infrastructure", "security", "analysis"],
    },

    // =========================
    // Social Media
    // =========================
    {
        id: "facebook-live-map",
        name: "Facebook Live Map",
        description: "Interactive map showing live broadcasts around the world",
        url: "http://facebook.com/livemap",
        category: "social-media",
        tags: ["facebook", "livestream", "map", "geolocation"],
    },
    {
        id: "facebook-video-downloader",
        name: "Facebook Video Downloader",
        description: "Download public Facebook videos in various quality formats",
        url: "http://fdown.net/",
        category: "social-media",
        tags: ["facebook", "video", "download", "media"],
    },
    // ... (continue with all other social-media tools as in your file)

    // =========================
    // Images & Media
    // =========================
{
        id: "findclone",
        name: "FindClone",
        description: "Facial recognition search for VK profile images",
        url: "https://findclone.ru/",
        category: "images-media",
        tags: ["vk", "facial-recognition", "search", "images"],
    },
    {
        id: "google-lens",
        name: "Google Lens",
        description: "AI-powered visual search tool for identifying objects, text, landmarks, and similar images using Google's computer vision technology",
        url: "https://lens.google.com/",
        category: "images-media",
        tags: ["visual-search", "ai", "object-recognition", "google", "reverse-image"],
    },
    {
        id: "suncalc",
        name: "SunCalc",
        description: "Solar position calculator that determines sun and moon positions for any location and time, useful for photo timestamp verification",
        url: "https://www.suncalc.org/",
        category: "images-media",
        tags: ["solar", "timestamp", "verification", "shadows", "geolocation"],
    },
    {
        id: "invid-weVerify",
        name: "InVID WeVerify",
        description: "Professional video and image verification plugin for journalists and fact-checkers to detect manipulated media content",
        url: "https://www.invid-project.eu/",
        category: "images-media",
        tags: ["verification", "deepfake", "manipulation", "forensics", "journalism"],
    },
    {
        id: "photo-forensics",
        name: "Photo Forensics",
        description: "Advanced image analysis toolkit for detecting photo manipulations, metadata extraction, and forensic examination",
        url: "https://29a.ch/photo-forensics/#forensic-magnifier",
        category: "images-media",
        tags: ["forensics", "manipulation", "metadata", "analysis", "verification"],
    },
    {
        id: "pimeyes",
        name: "PimEyes",
        description: "Powerful facial recognition search engine that finds faces across the internet using uploaded photos",
        url: "https://pimeyes.com/en",
        category: "images-media",
        tags: ["facial-recognition", "reverse-search", "face-finder", "identity"],
    },
    {
        id: "rootabout",
        name: "RootAbout",
        description: "Reverse image search engine that combines multiple search sources to find image origins and similar pictures",
        url: "https://rootabout.com/",
        category: "images-media",
        tags: ["reverse-image", "search", "origins", "multi-source"],
    },
    {
        id: "tineye",
        name: "TinEye",
        description: "Pioneer reverse image search engine that tracks where images appear online and identifies oldest/newest versions",
        url: "https://tineye.com/",
        category: "images-media",
        tags: ["reverse-image", "tracking", "timeline", "verification"],
    },
    {
        id: "jimpl",
        name: "Jimpl",
        description: "Free reverse image search tool that aggregates results from multiple search engines for comprehensive image investigation",
        url: "https://jimpl.com/",
        category: "images-media",
        tags: ["reverse-image", "aggregator", "multi-engine", "investigation"],
    },
    {
        id: "geospy",
        name: "GeoSpy AI",
        description: "AI-powered geolocation tool that analyzes images to determine where photos were taken using visual clues and landmarks",
        url: "https://geospy.ai/",
        category: "images-media",
        tags: ["geolocation", "ai", "photo-location", "landmarks", "osint"],
    },
    {
        id: "yandex-images",
        name: "Yandex Images",
        description: "Russian search engine's image search with unique algorithms, particularly effective for reverse image searches and facial recognition",
        url: "https://yandex.com/images/",
        category: "images-media",
        tags: ["reverse-image", "yandex", "facial-recognition", "russian", "search"],
    },
    {
        id: "metadata2go",
        name: "Metadata2Go",
        description: "Online metadata viewer and editor for extracting EXIF data, GPS coordinates, and technical details from images and videos",
        url: "https://www.metadata2go.com/",
        category: "images-media",
        tags: ["metadata", "exif", "gps", "coordinates", "technical-data"],
    },
    {
        id: "myheritage-enhancer",
        name: "MyHeritage Photo Enhancer",
        description: "AI-powered tool for enhancing and colorizing old, blurry, or low-quality photos using advanced machine learning algorithms",
        url: "https://www.myheritage.nl/photo-enhancer",
        category: "images-media",
        tags: ["enhancement", "ai", "restoration", "colorization", "quality-improvement"],
    },
    {
        id: "clipdrop-cleanup",
        name: "ClipDrop Cleanup",
        description: "AI-powered object removal tool that seamlessly removes unwanted elements from images while maintaining natural appearance",
        url: "https://clipdrop.co/cleanup",
        category: "images-media",
        tags: ["object-removal", "ai", "cleanup", "editing", "seamless"],
    },
    // ... (add other images-media tools)

    // =========================
    // Geolocation
    // =========================
    {
        id: "photo-map-ru",
        name: "Photo-Map.RU",
        description: "Map interface for geotagged VK posts",
        url: "http://photo-map.ru/",
        category: "geolocation",
        tags: ["vk", "geolocation", "photos", "map"],
    },
    {
        id: "mw-geofind",
        name: "MW Geofind",
        description: "Tool to identify filming locations of YouTube videos",
        url: "https://mattw.io/youtube-geofind/location",
        category: "geolocation",
        tags: ["youtube", "location", "geolocation", "videos"],
    },
    // ... (add other geolocation tools)

    // =========================
    // Communication
    // =========================
    {
        id: "disboard",
        name: "Disboard",
        description: "Search engine for public Discord servers by category and keywords",
        url: "https://disboard.org/servers",
        category: "communication",
        tags: ["discord", "servers", "search", "communities"],
    },
    // ... (add all other communication tools)

    // =========================
    // Email
    // =========================
    {
        id: "check-short-url",
        name: "Check Short URL",
        description: "Reveal the destination of shortened URLs before visiting them",
        url: "https://checkshorturl.com/",
        category: "Email",
        tags: ["url", "shortener", "security"],
    },
    // ... (add all other Email tools)

        {
        id: "dorkgpt",
        name: "Dork GPT",
        description: "AI-powered tool for generating and analyzing Google dorks and search queries for OSINT and cybersecurity research.",
        url: "https://www.dorkgpt.com/",
        category: "Artificial Intelligence",
        tags: ["ai", "dorks", "osint", "search", "cybersecurity"],
    },
    {
        id: "chatgpt",
        name: "ChatGPT",
        description: "OpenAI's conversational AI assistant capable of answering questions, generating text, and assisting with a wide range of tasks.",
        url: "https://chatgpt.com/",
        category: "Artificial Intelligence",
        tags: ["ai", "chatbot", "nlp", "assistant"],
    },
    {
        id: "gemini",
        name: "Gemini",
        description: "Google's advanced AI chatbot for research, writing, coding, and information retrieval.",
        url: "https://gemini.google.com/app",
        category: "Artificial Intelligence",
        tags: ["ai", "chatbot", "google", "nlp"],
    },
    {
        id: "deepseek",
        name: "Deep Seek",
        description: "AI-powered search and chat assistant for deep information gathering and analysis.",
        url: "https://chat.deepseek.com/",
        category: "Artificial Intelligence",
        tags: ["ai", "search", "assistant", "information"],
    },
    {
        id: "kali-gpt",
        name: "Kali GPT",
        description: "A specialized ChatGPT instance tailored for cybersecurity, penetration testing, and ethical hacking queries.",
        url: "https://chatgpt.com/g/g-uRhlB5ire-kali-gpt",
        category: "Artificial Intelligence",
        tags: ["ai", "cybersecurity", "pentesting", "hacking"],
    },
    {
        id: "perplexity",
        name: "Perplexity",
        description: "AI-powered answer engine for research, summarization, and real-time information synthesis.",
        url: "https://www.perplexity.ai/",
        category: "Artificial Intelligence",
        tags: ["ai", "search", "summarization", "research"],
    },
    {
        id: "claude",
        name: "Claude",
        description: "Anthropic's conversational AI assistant for creative writing, research, and productivity.",
        url: "https://claude.ai/new",
        category: "Artificial Intelligence",
        tags: ["ai", "chatbot", "nlp", "assistant"],
    },
    // =========================
    // Add other categories (Artificial Intelligence, Phone Number, Blogs, etc.) as needed
];

