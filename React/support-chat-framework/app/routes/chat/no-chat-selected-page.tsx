import React from 'react'

const NoChatSelectedPage = () => {
    return (
        <div className="flex flex-col items-center justify-center h-full py-32 text-center text-muted-foreground">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-message-circle w-16 h-16 mb-6 text-primary/60"
            >
                <circle cx="12" cy="12" r="10" />
                <path d="M8 12h.01M12 12h.01M16 12h.01" />
            </svg>
            <h2 className="text-xl font-semibold mb-2">No chat seleccionado</h2>
            <p className="max-w-md">Por favor selecciona una conversación en la barra lateral para comenzar a chatear.</p>
        </div>
    )
}

export default NoChatSelectedPage