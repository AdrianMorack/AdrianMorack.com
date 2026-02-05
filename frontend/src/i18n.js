import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      nav: {
        home: "Home",
        skills: "Skills",
        contact: "Contact"
      },
      home: {
        welcome: "Welcome to Adrian Morack's Website",
        subtitle: "Full Stack Development | AI Integration | Systems Administration",
        github: "GitHub Profile",
        linkedin: "LinkedIn Profile"
      },
      skills: {
        title: "My Skills",
        containerization: "Containerization",
        containerizationDetails: "Worked for a company in containerizing all aspects of an AI including, the AI model, database, frontend, and backend using Docker to ensure scalability and ease of deployment across various environments.",
        aiIntegrations: "AI Integrations",
        aiIntegrationsDetails: "Worked for a company to implement an AI chatbot into their webhook system, enhancing customer interaction and support efficiency through intelligent automation.",
        programmingFundamentals: "Programming Fundamentals",
        programmingFundamentalsDetails: "Proficient in foundational programming concepts including variables, control structures, functions, and basic data types used in multiple languages.",
        objectOriented: "Object-Oriented Design",
        objectOrientedDetails: "Skilled in object-oriented programming and design principles for writing modular and maintainable code.",
        dataStructures: "Data Structures & Algorithms",
        dataStructuresDetails: "Expertise in core data structures (lists, trees, graphs, hash tables) and algorithmic problem solving including analysis of complexity.",
        softwareDevelopment: "Software Development Lifecycle",
        softwareDevelopmentDetails: "Understanding and application of software engineering principles, including design, implementation, testing, and maintenance. This also includes creating CI/CD pipelines, automated testing, and deployment strategies.",
        operatingSystems: "Operating Systems Concepts",
        operatingSystemsDetails: "Knowledge of operating system principles such as processes, threads, scheduling, memory management, and file systems.",
        databaseManagement: "Database Management",
        databaseManagementDetails: "Ability to design, implement, and query relational databases and understand data persistence using SQL and related tools.",
        computerOrganization: "Computer Organization & Architecture",
        computerOrganizationDetails: "Understanding of the structure and functioning of computer hardware and low-level software interaction.",
        computerNetworks: "Computer Networks",
        computerNetworksDetails: "Familiarity with networking principles, protocols, and communication mechanisms in distributed systems.",
        discreteMath: "Discrete Mathematics & Formal Reasoning",
        discreteMathDetails: "Mastery of mathematical foundations including logic, discrete structures, proofs, and reasoning essential for CS theory.",
        softwareTools: "Software Tools & Practices",
        softwareToolsDetails: "Practical skills in development environments, version control, debugging, and industry-relevant tooling.",
        cybersecurity: "Cybersecurity Fundamentals",
        cybersecurityDetails: "Introductory skills in securing systems and understanding privacy, threats, and protective measures.",
        dataScience: "Data Science & AI Basics",
        dataScienceDetails: "Fundamentals in data analysis, machine learning, and data-driven computing for intelligent systems.",
        parallelComputing: "Parallel & Distributed Computing",
        parallelComputingDetails: "Experience with parallel programming and distributed systems for high-performance applications.",
        communication: "Professional Communication",
        communicationDetails: "Effective written and oral communication skills for technical and collaborative computing contexts.",
        teamwork: "Teamwork & Leadership",
        teamworkDetails: "Ability to work in teams, lead small groups, and participate in collaborative development projects.",
        ethics: "Ethical & Legal Computing Practice",
        ethicsDetails: "Understanding of ethical, legal, and societal implications of computing decisions and professional responsibilities."
      },
      contact: {
        title: "Contact Me",
        name: "Name",
        email: "Email",
        message: "Message",
        send: "Send Message",
        sending: "Sending...",
        success: "Message sent successfully!",
        error: "Failed to send message. Please try again."
      }
    }
  },
  de: {
    translation: {
      nav: {
        home: "Startseite",
        skills: "Fähigkeiten",
        contact: "Kontakt"
      },
      home: {
        welcome: "Willkommen auf Adrian Morack's Website",
        subtitle: "Full-Stack-Entwicklung | KI-Integration | Systemadministration",
        github: "GitHub-Profil",
        linkedin: "LinkedIn-Profil"
      },
      skills: {
        title: "Meine Fähigkeiten",
        containerization: "Containerisierung",
        containerizationDetails: "Arbeitete für ein Unternehmen bei der Containerisierung aller Aspekte einer KI, einschließlich des KI-Modells, der Datenbank, des Frontends und des Backends mit Docker, um Skalierbarkeit und einfache Bereitstellung in verschiedenen Umgebungen zu gewährleisten.",
        aiIntegrations: "KI-Integrationen",
        aiIntegrationsDetails: "Arbeitete für ein Unternehmen bei der Implementierung eines KI-Chatbots in ihr Webhook-System, um die Kundeninteraktion und Support-Effizienz durch intelligente Automatisierung zu verbessern.",
        programmingFundamentals: "Programmiergrundlagen",
        programmingFundamentalsDetails: "Kompetent in grundlegenden Programmierkonzepten einschließlich Variablen, Kontrollstrukturen, Funktionen und grundlegenden Datentypen in mehreren Sprachen.",
        objectOriented: "Objektorientiertes Design",
        objectOrientedDetails: "Erfahren in objektorientierter Programmierung und Designprinzipien für das Schreiben von modularem und wartbarem Code.",
        dataStructures: "Datenstrukturen & Algorithmen",
        dataStructuresDetails: "Expertise in Kerndatenstrukturen (Listen, Bäume, Graphen, Hash-Tabellen) und algorithmischer Problemlösung einschließlich Komplexitätsanalyse.",
        softwareDevelopment: "Software-Entwicklungslebenszyklus",
        softwareDevelopmentDetails: "Verständnis und Anwendung von Software-Engineering-Prinzipien, einschließlich Design, Implementierung, Testing und Wartung. Dies umfasst auch die Erstellung von CI/CD-Pipelines, automatisiertem Testen und Bereitstellungsstrategien.",
        operatingSystems: "Betriebssystemkonzepte",
        operatingSystemsDetails: "Kenntnisse der Betriebssystemprinzipien wie Prozesse, Threads, Scheduling, Speicherverwaltung und Dateisysteme.",
        databaseManagement: "Datenbankverwaltung",
        databaseManagementDetails: "Fähigkeit zum Entwerfen, Implementieren und Abfragen relationaler Datenbanken und Verständnis der Datenpersistenz mit SQL und verwandten Tools.",
        computerOrganization: "Computerorganisation & Architektur",
        computerOrganizationDetails: "Verständnis der Struktur und Funktionsweise von Computerhardware und Software-Interaktion auf niedriger Ebene.",
        computerNetworks: "Computernetzwerke",
        computerNetworksDetails: "Vertrautheit mit Netzwerkprinzipien, Protokollen und Kommunikationsmechanismen in verteilten Systemen.",
        discreteMath: "Diskrete Mathematik & Formale Argumentation",
        discreteMathDetails: "Beherrschung mathematischer Grundlagen einschließlich Logik, diskreter Strukturen, Beweise und Argumentation, die für CS-Theorie wesentlich sind.",
        softwareTools: "Software-Tools & Praktiken",
        softwareToolsDetails: "Praktische Fähigkeiten in Entwicklungsumgebungen, Versionskontrolle, Debugging und branchenrelevanten Tools.",
        cybersecurity: "Cybersicherheitsgrundlagen",
        cybersecurityDetails: "Einführende Fähigkeiten zur Sicherung von Systemen und zum Verständnis von Datenschutz, Bedrohungen und Schutzmaßnahmen.",
        dataScience: "Data Science & KI-Grundlagen",
        dataScienceDetails: "Grundlagen in Datenanalyse, maschinellem Lernen und datengesteuertem Computing für intelligente Systeme.",
        parallelComputing: "Paralleles & Verteiltes Computing",
        parallelComputingDetails: "Erfahrung mit paralleler Programmierung und verteilten Systemen für Hochleistungsanwendungen.",
        communication: "Professionelle Kommunikation",
        communicationDetails: "Effektive schriftliche und mündliche Kommunikationsfähigkeiten für technische und kollaborative Computing-Kontexte.",
        teamwork: "Teamarbeit & Führung",
        teamworkDetails: "Fähigkeit, in Teams zu arbeiten, kleine Gruppen zu leiten und an kollaborativen Entwicklungsprojekten teilzunehmen.",
        ethics: "Ethische & Rechtliche Computing-Praxis",
        ethicsDetails: "Verständnis der ethischen, rechtlichen und gesellschaftlichen Implikationen von Computing-Entscheidungen und beruflichen Verantwortlichkeiten."
      },
      contact: {
        title: "Kontaktieren Sie mich",
        name: "Name",
        email: "E-Mail",
        message: "Nachricht",
        send: "Nachricht senden",
        sending: "Wird gesendet...",
        success: "Nachricht erfolgreich gesendet!",
        error: "Nachricht konnte nicht gesendet werden. Bitte versuchen Sie es erneut."
      }
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en', // default language
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
