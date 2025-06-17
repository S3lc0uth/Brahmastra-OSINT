import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import SearchBar from './components/SearchBar';
import CategorySection from './components/CategorySection';
import ParticlesBackground from './components/ParticlesBackground';
import { tools } from './data/tools';
import { categories } from './data/categories';
import useDarkMode from './hooks/useDarkMode';
import bellaCiaoGif from './assets/tool-logos/hero/bella-ciao.gif';

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
        {/* Hero Section with full background GIF */}
        <section className="relative w-full h-[60vh] min-h-[400px] flex items-center justify-center overflow-hidden">
          <img
            src={bellaCiaoGif}
            alt="Bella Ciao Hero Background"
            className="absolute inset-0 w-full h-full object-cover object-center opacity-70 animate-float-subtle"
            style={{ zIndex: 1 }}
          />
          <div className="relative z-20 flex flex-col items-center justify-center w-full h-full">
            <h1 className="text-5xl font-extrabold text-center mb-4" style={{ color: '#39FF14', textShadow: '0 0 16px #39FF14, 0 0 32px #39FF14AA' }}>
              brahmastra
            </h1>
            <p className="text-xl text-gray-100 max-w-2xl mx-auto text-center bg-black/60 rounded-lg px-4 py-2">
              A powerful collection of intelligence tools for researchers, investigators, and cybersecurity professionals.
            </p>
            <div className="mt-8 w-full max-w-2xl">
              <SearchBar onSearch={handleSearch} />
            </div>
          </div>
        </section>
        <main className="container mx-auto px-4 pt-8 pb-12">
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