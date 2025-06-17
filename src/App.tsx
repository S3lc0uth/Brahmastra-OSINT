import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import SearchBar from './components/SearchBar';
import CategorySection from './components/CategorySection';
import ParticlesBackground from './components/ParticlesBackground';
import { tools } from './data/tools';
import { categories } from './data/categories';
import useDarkMode from './hooks/useDarkMode';

function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredTools, setFilteredTools] = useState(tools);
  const [darkMode, toggleDarkMode] = useDarkMode();

  useEffect(() => {
    if (!searchQuery.trim()) {
      setFilteredTools(tools);
      return;
    }

    const query = searchQuery.toLowerCase();
    const filtered = tools.filter(
      tool =>
        tool.name.toLowerCase().includes(query) ||
        tool.description.toLowerCase().includes(query) ||
        tool.tags.some(tag => tag.toLowerCase().includes(query))
    );

    setFilteredTools(filtered);
  }, [searchQuery]);

  const handleSearch = (query: string) => {
    setSearchQuery(query);
  };

  const getToolsByCategory = (categoryId: string) => {
    return filteredTools.filter(tool => tool.category === categoryId);
  };

  return (
    <div className="min-h-screen bg-black text-white transition-colors duration-200 relative">
      <ParticlesBackground />
      <div className="relative z-10">
        <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
        
        <main className="container mx-auto px-4 pt-28 pb-12">
          <div className="flex flex-col items-center justify-center mb-12 animate-slide-up relative min-h-[340px]">
            {/* Subtle animated radial background behind avatar */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 rounded-full animated-gradient-bg-subtle z-0" />
            {/* Subtle floating avatar */}
            <a href="https://github.com/Gr1ffend0r" target="_blank" rel="noopener noreferrer" className="z-10">
              <img
                src="https://github.com/Gr1ffend0r.png"
                alt="Gr1ffend0r GitHub Avatar"
                className="w-32 h-32 rounded-full border-2 border-blue-400 shadow-lg animate-float-subtle bg-black object-cover"
                style={{ background: 'rgba(0,0,0,0.7)' }}
              />
            </a>
            <h1 className="mt-8 text-5xl font-bold text-center animate-glow bg-clip-text text-transparent bg-gradient-to-r from-yellow-500 via-orange-500 to-red-500">
              BRAHMĀSTRA
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto mt-4 text-center">
              A powerful collection of intelligence tools for researchers, investigators, and cybersecurity professionals.
            </p>
          </div>
          
          <div className="mb-16 animate-fade-in">
            <SearchBar onSearch={handleSearch} />
          </div>
          
          {searchQuery && filteredTools.length === 0 ? (
            <div className="text-center py-12 animate-fade-in">
              <p className="text-xl text-gray-300">
                No tools found matching "{searchQuery}"
              </p>
              <button
                onClick={() => setSearchQuery('')}
                className="mt-4 px-4 py-2 bg-orange-500 text-white rounded-md hover:bg-orange-600 transition-colors"
              >
                Clear search
              </button>
            </div>
          ) : (
            categories.map((category, index) => {
              const categoryTools = getToolsByCategory(category.id);
              if (searchQuery && categoryTools.length === 0) return null;
              
              return (
                <div key={category.id} className="animate-scale-in" style={{ animationDelay: `${index * 0.1}s` }}>
                  <CategorySection
                    category={category}
                    tools={categoryTools}
                  />
                </div>
              );
            })
          )}
        </main>
        
        <Footer />
      </div>
    </div>
  );
}

export default App;