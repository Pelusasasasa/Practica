import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Copy, Download, ThumbsUp, ThumbsDown, Send } from "lucide-react"
import { useParams } from "react-router"
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
import { getClientMessages, sendMessage } from "@/fake/fake-data"
import type { Message } from "../interface/chat.interface"

export default function ChatPage() {
    const { clientId } = useParams();
    const queryClient = useQueryClient();
    const [input, setInput] = useState("")

    const { data: messages = [], isLoading } = useQuery({
        queryKey: ['messages', clientId],
        queryFn: () => getClientMessages(clientId ?? '')
    });

    const { mutate: sendMessageMutation } = useMutation({
        mutationFn: sendMessage,
        onSuccess: (newMessage) => {
            queryClient.setQueryData(['messages', clientId], (oldMessages: Message[]) => [...oldMessages, newMessage])
        }
    })

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        sendMessageMutation({
            content: input,
            clientId: clientId ?? '',
            createdAt: new Date(),
            sender: 'agent'
        })

        setInput('')
    }

    if (isLoading) {
        return (
            <div className="flex flex-1 items-center justify-center h-full min-h-[300px]">
                <div className="flex flex-col items-center gap-3">
                    <svg className="animate-spin h-8 w-8 text-primary" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"></path>
                    </svg>
                    <span className="text-muted-foreground">Cargando...</span>
                </div>
            </div>
        )
    };

    return (
        <div className="flex-1 flex flex-col">
            <ScrollArea className="flex-1 p-4">
                {messages.length === 0 && (
                    <div className="flex flex-col items-center justify-center text-center text-muted-foreground text-base p-12 bg-muted/40 rounded-lg shadow mt-14 mb-6">
                        <svg xmlns="http://www.w3.org/2000/svg" className="mx-auto mb-4 h-10 w-10 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 8h10M7 12h5m2 8a9 9 0 100-18 9 9 0 000 18zm4-3.5V21l-3-2.25" />
                        </svg>
                        <p className="font-medium">Todavía no hay mensajes en esta conversación</p>
                        <span className="text-xs mt-1 text-muted-foreground">¡Envía el primer mensaje para empezar la charla!</span>
                    </div>
                )}
                <div className="space-y-4">
                    {messages.map((message, index) => (
                        <div key={index} className="w-full">
                            {message.sender === "client" ? (
                                // Agent message - left aligned
                                <div className="flex gap-2 max-w-[80%]">
                                    <div className="h-8 w-8 rounded-full bg-primary flex-shrink-0" />
                                    <div className="space-y-2">
                                        <div className="flex items-center gap-2">
                                            <span className="text-sm font-medium">NexTalk</span>
                                            <span className="text-sm text-muted-foreground">{message.createdAt.toLocaleTimeString()}</span>
                                        </div>
                                        <div className="p-3 bg-muted/50 rounded-lg">
                                            <p className="text-sm whitespace-pre-wrap">{message.content}</p>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <Button variant="ghost" size="icon" className="h-8 w-8">
                                                <Copy className="h-4 w-4" />
                                            </Button>
                                            <Button variant="ghost" size="icon" className="h-8 w-8">
                                                <Download className="h-4 w-4" />
                                            </Button>
                                            <Button variant="ghost" size="icon" className="h-8 w-8">
                                                <ThumbsUp className="h-4 w-4" />
                                            </Button>
                                            <Button variant="ghost" size="icon" className="h-8 w-8">
                                                <ThumbsDown className="h-4 w-4" />
                                            </Button>
                                        </div>
                                    </div>
                                </div>
                            ) : (
                                // User message - right aligned
                                <div className="flex flex-col items-end">
                                    <div className="text-right mb-1">
                                        <span className="text-sm font-medium mr-2">G5</span>
                                        <span className="text-sm text-muted-foreground">{message.createdAt.toLocaleTimeString()}</span>
                                    </div>
                                    <div className="bg-black text-white p-3 rounded-lg max-w-[80%]">
                                        <p className="text-sm whitespace-pre-wrap">{message.content}</p>
                                    </div>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </ScrollArea>

            <div className="p-4 border-t">
                <form onSubmit={handleSubmit}>
                    <div className="flex items-center gap-2">
                        <Textarea
                            placeholder="Type a message as a customer"
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            className="min-h-[44px] h-[44px] resize-none py-3"
                        />
                        <Button className="h-[44px] px-4 flex items-center gap-2">
                            <Send className="h-4 w-4" />
                            <span>Send</span>
                        </Button>
                    </div>
                </form>
            </div>
        </div>
    )
}

