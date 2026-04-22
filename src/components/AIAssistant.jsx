import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { GoogleGenAI } from '@google/genai';
import { FaRobot, FaTimes, FaPaperPlane } from 'react-icons/fa';

const AIAssistant = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { role: 'assistant', text: 'Hello! I am your AI assistant for Karrcholai. How can I help you today?' },
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef(null);

  // Initialize Gemini API
  const ai = new GoogleGenAI({ apiKey: import.meta.env.VITE_GEMINI_API_KEY || 'PLACEHOLDER' });

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage = input;
    setInput('');
    setMessages((prev) => [...prev, { role: 'user', text: userMessage }]);
    setIsLoading(true);

    try {
      if (!import.meta.env.VITE_GEMINI_API_KEY) {
        throw new Error('API Key missing. Please set VITE_GEMINI_API_KEY in your .env file.');
      }

      const response = await ai.models.generateContent({
        model: 'gemini-2.5-flash',
        contents: `You are an AI assistant for a premier construction and project management consultancy named Karrcholai.
        Be helpful, concise, and professional. 
        User message: ${userMessage}`,
      });

      setMessages((prev) => [
        ...prev,
        { role: 'assistant', text: response.text || 'Sorry, I am not able to answer that right now.' },
      ]);
    } catch (error) {
      console.error('Error generating AI response:', error);
      setMessages((prev) => [
        ...prev,
        { role: 'assistant', text: 'Sorry, I encountered an error. ' + (error.message || '') },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSend();
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            className="bg-white rounded-2xl shadow-2xl w-80 sm:w-96 overflow-hidden mb-4 border border-gray-200"
          >
            {/* Header */}
            <div className="bg-blue-600 p-4 flex justify-between items-center text-white">
              <div className="flex items-center space-x-2">
                <FaRobot className="text-xl" />
                <h3 className="font-semibold text-lg">AI Assistant</h3>
              </div>
              <button onClick={() => setIsOpen(false)} className="text-white hover:text-gray-200 focus:outline-none">
                <FaTimes />
              </button>
            </div>

            {/* Chat Area */}
            <div className="h-80 overflow-y-auto p-4 space-y-4 bg-gray-50 flex flex-col">
              {messages.map((msg, idx) => (
                <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div
                    className={`max-w-[80%] p-3 rounded-2xl text-sm ${
                      msg.role === 'user'
                        ? 'bg-blue-600 text-white rounded-tr-none'
                        : 'bg-gray-200 text-gray-800 rounded-tl-none'
                    }`}
                  >
                    {msg.text}
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex justify-start">
                  <div className="max-w-[80%] p-3 rounded-2xl text-sm bg-gray-200 text-gray-800 rounded-tl-none flex space-x-1">
                    <span className="w-2 h-2 bg-gray-500 rounded-full animate-bounce"></span>
                    <span className="w-2 h-2 bg-gray-500 rounded-full animate-bounce delay-100"></span>
                    <span className="w-2 h-2 bg-gray-500 rounded-full animate-bounce delay-200"></span>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input Area */}
            <div className="p-3 bg-white border-t border-gray-200 flex items-center space-x-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Ask me anything..."
                className="flex-1 bg-gray-100 rounded-full px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition-shadow text-gray-800"
              />
              <button
                onClick={handleSend}
                disabled={isLoading || !input.trim()}
                className="p-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 disabled:bg-blue-300 disabled:cursor-not-allowed transition-colors"
              >
                <FaPaperPlane />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Button */}
      {!isOpen && (
        <motion.button
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => setIsOpen(true)}
          className="bg-blue-600 text-white p-4 rounded-full shadow-2xl hover:bg-blue-700 hover:shadow-blue-500/50 transition-all focus:outline-none flex items-center justify-center"
        >
          <FaRobot className="text-2xl" />
        </motion.button>
      )}
    </div>
  );
};

export default AIAssistant;
