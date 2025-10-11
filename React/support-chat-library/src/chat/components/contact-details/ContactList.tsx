import { Button } from '@/components/ui/button'
import { ScrollArea } from '@/components/ui/scroll-area'
import { getClients } from '@/fake/fake-data'
import { useQuery } from '@tanstack/react-query'
import { NavLink, useParams } from 'react-router'

export const ContactList = () => {

    const { clientId } = useParams();

    const { data: clients, isLoading } = useQuery({
        queryKey: ['clients'],
        queryFn: () => getClients(),
        staleTime: 1000 * 60 * 5,
    });



    return (
        <ScrollArea className="h-[calc(100vh-120px)]">
            <div className="space-y-4 p-4">
                <div className="space-y-1">
                    <h3 className="px-2 text-sm font-semibold">Contacts</h3>
                    <div className="space-y-1">
                        {isLoading && (
                            <div className="flex items-center space-x-2 px-2 py-2">
                                <svg className="animate-spin h-4 w-4 text-gray-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"></path>
                                </svg>
                                <span className="text-gray-500 text-sm">Cargando contactos...</span>
                            </div>
                        )}
                        {
                            clients?.map((client) => (
                                <NavLink
                                    key={client.id}
                                    to={`/chat/${client.id}`}
                                    className={({ isActive }) => `w-full flex items-center mt-3 transition-all duration-300 ${isActive ? 'bg-primary/10 border-l-4 border-primary font-semibold text-primary shadow-sm ring-1 ring-primary/10' : 'hover:bg-muted/50'}`}>
                                    <div className={`h-6 w-6 rounded-full bg-gray-300 mr-2 flex-shrink-0 flex items-center justify-center  text-xs ${client.id === clientId ? 'bg-primary/10 text-blue-500 font-medium' : 'bg-gray-300'
                                        }`}>
                                        {client.name.charAt(0)}{client.name.charAt(1)}
                                    </div>
                                    <span className={`transition-all duration-300 ${clientId === client.id ? 'text-blue-600 font-medium' : 'text-gray-600'}`}>{client.name}</span>
                                </NavLink>
                            ))
                        }

                    </div>
                </div>
                <div className="pt-4 border-t mt-4">
                    <h3 className="px-2 text-sm font-semibold mb-1">Recent</h3>
                    <Button variant="ghost" className="w-full justify-start">
                        <div className="h-6 w-6 rounded-full bg-gray-500 mr-2 flex-shrink-0 flex items-center justify-center text-white text-xs">
                            TM
                        </div>
                        Thomas Miller
                    </Button>
                    <Button variant="ghost" className="w-full justify-start">
                        <div className="h-6 w-6 rounded-full bg-red-500 mr-2 flex-shrink-0 flex items-center justify-center text-white text-xs">
                            SB
                        </div>
                        Sarah Brown
                    </Button>
                </div>
            </div>
        </ScrollArea>
    )
}
