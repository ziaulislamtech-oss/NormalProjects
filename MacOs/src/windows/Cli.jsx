import React from 'react'
import TerminalComponent from 'react-console-emulator'
import { Rnd } from 'react-rnd';
import TernimalWindow from './TernimalWindow';

// Handle React 18/19 default import differences
const Terminal = TerminalComponent.default || TerminalComponent;

const Cli = () => {
  const commands = {
    about: {
      description: 'About me',
      usage: 'about',
      fn: () => 'I am a full-stack web developer passionate about building modern web applications with React, Node.js, and cloud technologies.'
    },
    skills: {
      description: 'List technical skills',
      usage: 'skills',
      fn: () => `Frontend: React, Vue.js, Vanilla JS, Sass, HTML/CSS
Backend: Node.js, Express, Python, Django
Databases: MongoDB, PostgreSQL, MySQL
Tools: Git, Docker, Webpack, Vite
Cloud: AWS, Azure, Heroku`
    },
    projects: {
      description: 'View my projects',
      usage: 'projects',
      fn: () => `1. Portfolio Website - React + Vite
2. E-commerce Platform - MERN Stack
3. Task Management App - Next.js
4. Real-time Chat App - Socket.io
5. Data Dashboard - React + Chart.js`
    },
    experience: {
      description: 'Display work experience',
      usage: 'experience',
      fn: () => `Senior Developer @ Tech Corp (2022 - Present)
  - Led development of 5+ React applications
  - Mentored junior developers

Full Stack Developer @ Web Solutions (2020 - 2022)
  - Built scalable APIs with Node.js
  - Designed responsive UIs with React`
    },
    contact: {
      description: 'Get contact information',
      usage: 'contact',
      fn: () => `Email: ziaulislam.tech@gmail.com
Phone: +92 3456044533
Location: KPK Pkistan`
    },
    github: {
      description: 'Open GitHub profile',
      usage: 'github',
      fn: () => {
        window.open('https://github.com/ziaulislamtech-oss', '_blank')
        return 'Opening GitHub...'
      }
    },
    resume: {
      description: 'Download resume',
      usage: 'resume',
      fn: () => 'Resume download started...'
    },
    social: {
      description: 'View social media links',
      usage: 'social',
      fn: () => `Twitter: @ankurdev
LinkedIn: /in/ziaulislam1
Portfolio: ankurprajapati.dev`
    },
    echo: {
      description: 'Echo a passed string',
      usage: 'echo <string>',
      fn: (...args) => args.join(' ')
    }
  }

  const welcomeMessage = `
╔════════════════════════════════════════╗
║     Welcome to My Portfolio CLI!       ║
╚════════════════════════════════════════╝

Hello! 👋 Welcome to my interactive portfolio. You can navigate through my work experience, skills, and projects using terminal commands.

Type 'help' to see all available commands, or try:
  • about     - Learn about me
  • skills    - View my technical skills
  • projects  - Check out my work
  • experience - See my career history
  • contact   - Get in touch

Happy exploring! 🚀
`

  return (
    <TernimalWindow width={550} height={400} x={150} y={100} title="zia@portfolio:~" windowName ="cli" >
      <div className="w-full h-full">
        <Terminal
          commands={commands}
          welcomeMessage={welcomeMessage}
          promptLabel={'ziaulislam:~$'}
          promptLabelStyle={{ color: '#00ff00' }}

          /* FIX: Terminal ke main element par custom scrollbar styling inject ki 
            aur default container-style ko match kiya.
          */
          style={{
            height: '100%',
            width: '100%',
            borderRadius: '0px',
            backgroundColor: '#222222',
          }}
          contentStyle={{
            padding: '12px',
          }}
          // react-console-emulator ki scrollbar pseudo-classes par target kiya
          className="
          [&::-webkit-scrollbar]:w-2
          [&::-webkit-scrollbar]:h-2
          [&::-webkit-scrollbar-track]:bg-transparent
          [&::-webkit-scrollbar-thumb]:bg-[#3A3A3A]
          [&::-webkit-scrollbar-thumb]:rounded-full
          hover:[&::-webkit-scrollbar-thumb]:bg-[#555555]
          active:[&::-webkit-scrollbar-thumb]:bg-[#00ff00]
        "
        />
      </div>
    </TernimalWindow>
  )


}

export default Cli
