import React from 'react';
import { motion } from 'framer-motion';
import { MessageSquare } from 'lucide-react';

export const FloatingChatButton: React.FC = () => {
    return (
        <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 1, type: "spring" }}
            className="fixed bottom-8 right-8 z-[60]"
        >
            <button className="w-16 h-16 rounded-full bg-primary flex items-center justify-center shadow-[0_0_30px_rgba(255,184,0,0.4)] hover:scale-110 active:scale-95 transition-all group relative">
                <MessageSquare className="text-black w-8 h-8 fill-black" />
                <span className="absolute -top-1 -right-1 bg-black text-white text-[10px] font-black px-1.5 py-0.5 rounded-full border-2 border-primary">AI</span>
            </button>
        </motion.div>
    );
};
