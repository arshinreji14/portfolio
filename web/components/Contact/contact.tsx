// pages/contact.tsx
import Head from 'next/head';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { MdEmail, MdPhone } from 'react-icons/md';
import type { NextPage } from 'next';

interface ContactItem {
  icon: JSX.Element;
  label: string;
  href: string;
  target?: string;
}

const Contact: NextPage = () => {
  const contactItems: ContactItem[] = [
    {
      icon: <MdEmail className="text-blue-600" size={24} />,
      label: 'arshinreji12@gmail.com',
      href: 'mailto:arshinreji12@gmail.com',
    },
    {
      icon: <MdPhone className="text-green-600" size={24} />,
      label: '+91 9947414953',
      href: 'tel:+919947414953',
    },
    {
      icon: <FaGithub className="text-gray-800" size={24} />,
      label: 'https://github.com/arshinreji14',
      href: 'https://github.com/arshinreji14',
      target: 'https://github.com/arshinreji14',
    },
    {
      icon: <FaLinkedin className="text-blue-700" size={24} />,
      label: 'https://www.linkedin.com/in/arshin-reji-8615a323b',
      href: 'https://www.linkedin.com/in/arshin-reji-8615a323b',
      target: '_blank',
    },
  ];

  return (
    <>
      <Head>
        <title>Contact Me</title>
        <meta name="description" content="Contact information" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="min-h-screen bg-black py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md mx-auto bg-gray-700 rounded-xl shadow-md overflow-hidden md:max-w-2xl">
          <div className="p-8">
            <div className="text-center">
              <h1 className="text-3xl font-bold text-white mb-8">Contact Me</h1>
            </div>
            
            <div className="space-y-4">
              {contactItems.map((item, index) => (
                <a 
                  key={index}
                  href={item.href}
                  target={item.target}
                  rel={item.target === '_blank' ? 'noopener noreferrer' : undefined}
                  className="flex items-center p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition duration-150"
                >
                  <div className="flex-shrink-0 mr-4">
                    {item.icon}
                  </div>
                  <div className="text-white hover:text-blue-700">
                    {item.label}
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Contact;