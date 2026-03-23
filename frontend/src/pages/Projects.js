// Project Page - blog-style layout to showcase projects
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { useState, useEffect } from 'react';

const projects = [
    {
        title: 'AdrianMorack.com',
        date: 'December 2025',
        tags: ['React', 'Node.js', 'Express', 'TypeScript', 'i18n'],
        summary:
            "My personal portfolio website, the one you're looking at right now. Built with a React frontend and a TypeScript/Express backend. Features English/German localization, a contact form that routes through the backend, and a responsive design optimized for desktop and mobile.",
        github: 'https://github.com/AdrianMorack/AdrianMorack.com',
        demo: null,
    },

    {
        title: 'OvertakeHQ.com',
        date: 'March 2026',
        tags: ['React', 'TypeScript', 'Node.js', 'Express', 'PostgreSQL', 'Prisma', 'Python', 'FastAPI', 'Docker', 'Full Stack'],
        summary:
            "A full-stack Formula 1 prediction platform where players join Grids, predict race outcomes (qualifying P1–P3, race P1–P3, fastest lap, and top team), and compete on leaderboards. Features JWT authentication with refresh token rotation, live race streaming via Server-Sent Events, and F1 championship standings sourced from the Jolpica API. A FastAPI Python service bridges the FastF1 library for real-time telemetry and timing data, while server-side cron jobs automatically sync the race schedule, score qualifying and race results, and detect live sessions. Fully orchestrated with Docker Compose and automated via GitHub Actions for weekly data syncs, race-weekend keep-alives, and scheduled database backups.",
        github: 'https://github.com/AdrianMorack/Overtake.com',
        demo: 'https://overtakehq.com',
    },

    {
        title: 'FoxholeProject',
        date: 'June 2024',
        tags: ['PHP', 'Laravel', 'Livewire', 'Tailwind CSS', 'MySQL', 'Full Stack'],
        summary:
            "A full-stack live war stats dashboard for the game Foxhole. Pulls real-time war data directly from the official Foxhole API and displays war state, map control percentages, and town hall ownership across both game shards (Able and Baker). Built with Laravel 12, Livewire 3, and Tailwind CSS 4. Features ETag-based API caching to avoid redundant fetches, server-side query caching for snappy UI, and Artisan commands that drive the full data sync pipeline — war state, map reports, live map icons, and location labels.",
        github: 'https://github.com/AdrianMorack/FoxholeProject-',
        demo: 'https://foxholeproject-main-7simwz.laravel.cloud/able', 
    }
    // Add more projects below following the same structure:
    // {
    //   title: 'Project Name',
    //   date: 'Month Year',
    //   tags: ['Tech1', 'Tech2'],
    //   summary: 'Short description of the project.',
    //   github: 'https://github.com/...',
    //   demo: 'https://...',
    // },
];

function Projects() {
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
    const [hoveredCard, setHoveredCard] = useState(null);
    const [hoveredLink, setHoveredLink] = useState(null);

    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth <= 768);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <div style ={{background: 'linear-gradient(135deg, #272932 0%, #1a1a24 100%)'}}>
            <div style={{
                minHeight: '100vh',
                padding: isMobile ? '30px 16px 60px' : '60px 24px 80px',
                maxWidth: '860px',
                margin: '0 auto',
                boxSizing: 'border-box',
                background: 'linear-gradient(135deg, #272932 0%, #1a1a24 100%)',
            }}>
                {/* Page header */}
                <div style={{ marginBottom: isMobile ? '32px' : '52px' }}>
                    <h1 style={{
                        fontSize: isMobile ? '2rem' : '3rem',
                        fontWeight: '700',
                        color: '#FED766',
                        margin: '0 0 10px 0',
                        textShadow: '2px 2px 8px rgba(0,0,0,0.4)',
                        lineHeight: '1.2',
                    }}>
                        Projects
                    </h1>
                    
                    <div style={{
                        marginTop: '20px',
                        height: '2px',
                        background: 'linear-gradient(90deg, #009FB7 0%, transparent 100%)',
                        borderRadius: '2px',
                    }} />
                </div>

                {/* Project cards */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: isMobile ? '24px' : '32px' }}>
                    {projects.map((project, index) => (
                        <article
                            key={index}
                            onMouseEnter={() => setHoveredCard(index)}
                            onMouseLeave={() => setHoveredCard(null)}
                            style={{
                                background: hoveredCard === index
                                    ? 'rgba(255,255,255,0.06)'
                                    : 'rgba(255,255,255,0.03)',
                                border: `1px solid ${hoveredCard === index ? '#009FB7' : 'rgba(255,255,255,0.08)'}`,
                                borderRadius: '14px',
                                padding: isMobile ? '22px 18px' : '32px 36px',
                                transition: 'all 0.25s ease',
                                boxShadow: hoveredCard === index
                                    ? '0 8px 32px rgba(0,159,183,0.12)'
                                    : '0 2px 12px rgba(0,0,0,0.2)',
                                cursor: 'default',
                            }}
                        >
                            {/* Date */}
                            <span style={{
                                fontSize: '0.78rem',
                                color: '#009FB7',
                                letterSpacing: '0.08em',
                                textTransform: 'uppercase',
                            }}>
                                {project.date}
                            </span>

                            {/* Title */}
                            <h2 style={{
                                fontSize: isMobile ? '1.3rem' : '1.7rem',
                                fontWeight: '700',
                                color: '#EFF1F3',
                                margin: '8px 0 14px',
                                lineHeight: '1.3',
                            }}>
                                {project.title}
                            </h2>

                            {/* Tags */}
                            <div style={{
                                display: 'flex',
                                flexWrap: 'wrap',
                                gap: '8px',
                                marginBottom: '18px',
                            }}>
                                {project.tags.map((tag) => (
                                    <span key={tag} style={{
                                        padding: '3px 10px',
                                        borderRadius: '6px',
                                        fontSize: '0.78rem',
                                        background: 'rgba(0,159,183,0.12)',
                                        color: '#009FB7',
                                        border: '1px solid rgba(0,159,183,0.25)',
                                        letterSpacing: '0.04em',
                                    }}>
                                        {tag}
                                    </span>
                                ))}
                            </div>

                            {/* Summary */}
                            <p style={{
                                color: 'rgba(239,241,243,0.78)',
                                fontSize: isMobile ? '0.92rem' : '1rem',
                                lineHeight: '1.75',
                                margin: '0 0 24px',
                            }}>
                                {project.summary}
                            </p>

                            {/* Links */}
                            <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
                                {project.github && (
                                    <a
                                        href={project.github}
                                        target="_blank"
                                        rel="noreferrer"
                                        onMouseEnter={() => setHoveredLink(`${index}-github`)}
                                        onMouseLeave={() => setHoveredLink(null)}
                                        style={{
                                            display: 'inline-flex',
                                            alignItems: 'center',
                                            gap: '7px',
                                            padding: '8px 18px',
                                            borderRadius: '8px',
                                            fontSize: '0.88rem',
                                            fontWeight: '600',
                                            textDecoration: 'none',
                                            border: '1px solid',
                                            transition: 'all 0.2s ease',
                                            background: hoveredLink === `${index}-github` ? '#009FB7' : 'transparent',
                                            color: hoveredLink === `${index}-github` ? '#ffffff' : '#009FB7',
                                            borderColor: '#009FB7',
                                        }}
                                    >
                                        <FaGithub size={15} />
                                        Source
                                    </a>
                                )}
                                {project.demo && (
                                    <a
                                        href={project.demo}
                                        target="_blank"
                                        rel="noreferrer"
                                        onMouseEnter={() => setHoveredLink(`${index}-demo`)}
                                        onMouseLeave={() => setHoveredLink(null)}
                                        style={{
                                            display: 'inline-flex',
                                            alignItems: 'center',
                                            gap: '7px',
                                            padding: '8px 18px',
                                            borderRadius: '8px',
                                            fontSize: '0.88rem',
                                            fontWeight: '600',
                                            textDecoration: 'none',
                                            border: '1px solid',
                                            transition: 'all 0.2s ease',
                                            background: hoveredLink === `${index}-demo` ? '#FED766' : 'transparent',
                                            color: hoveredLink === `${index}-demo` ? '#272727' : '#FED766',
                                            borderColor: '#FED766',
                                        }}
                                    >
                                        <FaExternalLinkAlt size={13} />
                                        Live Demo
                                    </a>
                                )}
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Projects;