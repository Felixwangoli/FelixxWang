import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Linkedin, Mail } from 'lucide-react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';

// Register ChartJS components
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const Header = ({ setActivePage }) => (
  <header className="fixed top-0 left-0 w-full bg-blue-800 bg-opacity-50 backdrop-filter backdrop-blur-lg p-4 z-40">
    <nav className="flex justify-between items-center max-w-6xl mx-auto">
      <h1 className="text-2xl font-bold text-blue-200">Felix Wang</h1>
      <ul className="flex space-x-6">
        {['Home', 'About', 'Blog', 'Contact', 'Data'].map((item) => (
          <li key={item}>
            <button 
              onClick={() => setActivePage(item)}
              className="text-blue-200 hover:text-white transition-colors duration-300"
            >
              {item}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  </header>
);

const HomePage = () => (
  <section className="relative h-screen flex items-center justify-center overflow-hidden">
    <div className="text-center">
      <motion.h2 
        className="text-6xl font-bold mb-4 text-blue-200"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        Welcome to My Website
      </motion.h2>
      <motion.p
        className="text-xl text-blue-100"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        Exploring Politics, Philosophy, and Economics
      </motion.p>
    </div>
  </section>
);

const AboutPage = () => (
  <section className="py-16 px-8 max-w-3xl mx-auto">
    <h2 className="text-4xl font-bold mb-8 text-blue-200">About Me</h2>
    <div className="space-y-4 text-blue-100">
      <p>I'm Felix Wang, a first-year BSc Politics and Economics student at the London School of Economics.</p>
      <p>Education: A-levels in Mathematics(A*), Economics(A*), Biology(A*), and Chinese(A*) from Shanghai Guanghua Cambridge International School.</p>
      <p>Achievements:</p>
      <ul className="list-disc list-inside">
        <li>Certificate of extraordinary achievement from Harvard International Economics Essay Competition</li>
        <li>Gold medal in Microeconomics and Hall of Fame in Macroeconomics from National Economics Challenge pre-division</li>
      </ul>
      <p>Work Experience: Intern at Caitong Securities Co.,Ltd., where I gained experience in trading, strategy development, and financial analysis.</p>
      <p>Skills: Proficient in Excel for data analysis and Python for data manipulation and automation tasks.</p>
      <p>Languages: Fluent in English and native in Mandarin</p>
      <p>Interests: Basketball, History of War, Philosophy of Kant, travelling, cooking, and body building</p>
    </div>
  </section>
);

const DataVisualizationPage = () => {
  const data = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
      {
        label: 'Economic Growth',
        data: [65, 59, 80, 81, 56, 55, 40],
        fill: false,
        borderColor: 'rgb(75, 192, 192)',
        tension: 0.1
      }
    ]
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Economic Growth Over Time'
      }
    }
  };

  return (
    <section className="py-16 px-8 max-w-3xl mx-auto">
      <h2 className="text-4xl font-bold mb-8 text-blue-200">Data Visualization</h2>
      <div className="bg-white p-4 rounded">
        <Line data={data} options={options} />
      </div>
    </section>
  );
};

const BlogPost = ({ title, date, content, image }) => (
  <article className="mb-8">
    <h3 className="text-2xl font-bold mb-2 text-blue-200">{title}</h3>
    <p className="text-blue-100 mb-2">{date}</p>
    {image && <img src={image} alt={title} className="w-full h-64 object-cover mb-4 rounded" />}
    <div className="text-blue-100" dangerouslySetInnerHTML={{ __html: content }} />
  </article>
);

const BlogPage = ({ setActivePost }) => {
  const blogPosts = [
    {
      id: 1,
      title: "The Impact of AI on Economics",
      date: "2024-03-15",
      content: `
        <p>Artificial Intelligence is reshaping the field of economics...</p>
        <img src="/images/ai-impact.jpg" alt="AI Impact" class="w-full h-64 object-cover my-4 rounded" />
        <p>Further discussion on the topic...</p>
      `,
      image: "/images/ai-economics.jpg"
    },
    // Add more blog posts here
  ];
  return (
    <section className="py-16 px-8 max-w-3xl mx-auto">
      <h2 className="text-4xl font-bold mb-8 text-blue-200">Blog</h2>
      {blogPosts.map(post => (
        <div key={post.id} onClick={() => setActivePost(post)} className="cursor-pointer">
          <BlogPost {...post} />
        </div>
      ))}
    </section>
  );
};

const ContactPage = () => (
  <section className="py-16 px-8 max-w-3xl mx-auto">
    <h2 className="text-4xl font-bold mb-8 text-blue-200">Contact</h2>
    <div className="space-y-4 text-blue-100">
      <p>Email: d.wang57@lse.ac.uk</p>
      <p>Phone: (+44 7903189669)</p>
      <p>Address: 11 Bastwick Road, London, EC1V 3AQ</p>
      <div className="flex space-x-4">
        <a href="https://www.linkedin.com/in/felix-wang-86a521330/" target="_blank" rel="noopener noreferrer" className="text-blue-200 hover:text-white">
          <Linkedin size={24} />
        </a>
        <a href="mailto:d.wang57@lse.ac.uk" className="text-blue-200 hover:text-white">
          <Mail size={24} />
        </a>
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="bg-blue-900 text-blue-200 p-4 text-center">
    <p>&copy; 2024 Felix Wang. All rights reserved.</p>
  </footer>
);

const PersonalWebsite = () => {
  const [activePage, setActivePage] = useState('Home');
  const [activePost, setActivePost] = useState(null);

  const renderContent = () => {
    switch (activePage) {
      case 'Home':
        return <HomePage />;
      case 'About':
        return <AboutPage />;
      case 'Blog':
        return activePost ? (
          <div className="py-16 px-8 max-w-3xl mx-auto">
            <BlogPost {...activePost} />
            <button 
              onClick={() => setActivePost(null)}
              className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            >
              Back to Blog
            </button>
          </div>
        ) : (
          <BlogPage setActivePost={setActivePost} />
        );
      case 'Contact':
        return <ContactPage />;
      case 'Data':
        return <DataVisualizationPage />;
      default:
        return <HomePage />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-900 to-blue-700 text-white">
      <Header setActivePage={setActivePage} />
      {renderContent()}
      <Footer />
    </div>
  );
};

export default PersonalWebsite;
