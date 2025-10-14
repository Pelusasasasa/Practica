import { NavLink } from 'react-router'
import { Button } from '~/components/ui/button'
import { ScrollArea } from '~/components/ui/scroll-area'
import type { Client } from '../interfaces/chat-interface'

interface Props {
    clients: Client[]
}

const ContactList = ({clients}: Props) => {
    
  return (
    <ScrollArea className="h-[calc(100vh-120px)]">
            <div className="space-y-4 p-4">
                <div className="space-y-1">
                    <h3 className="px-2 text-sm font-semibold">Contacts</h3>
                    <div className="space-y-1">
                        {clients.map((client) => (
                        <NavLink to={`/chat/client/${client.id}`} key={client.id} className={({ isActive }) => isActive
                            ? 'w-full my-2 justify-start flex items-center gap-2 bg-primary/20 text-primary transition-all duration-300'
                            : 'w-full justify-start flex items-center gap-2 transition-all duration-300'}>
                            <div className="h-6 w-6 rounded-full bg-gray-300 mr-2 flex-shrink-0 flex items-center justify-center text-white text-xs">
                                <p>{client.name[0]}{client.name[1]}</p>
                            </div>
                            <span className='text-gray-400'>{client.name}</span>
                        </NavLink>
                                ))}
                                
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

export default ContactList