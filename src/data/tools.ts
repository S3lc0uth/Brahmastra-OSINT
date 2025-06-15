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

    // =========================
    // Add other categories (Artificial Intelligence, Phone Number, Blogs, etc.) as needed
];

