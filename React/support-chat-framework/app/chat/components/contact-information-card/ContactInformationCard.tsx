import React from 'react'
import { Button } from '~/components/ui/button'
import ContactInformation from './ContactInformation'
import ContactInformationSkeleton from './ContactInformationSkeleton'
import NoContactSelected from './NoContactSelected'
import { useLoaderData, useNavigation, useParams } from 'react-router'
import type { Client } from '~/chat/interfaces/chat-interface'

interface Props {
  client?: Client;
}

const ContactInformationCard = ({client}: Props) => {

  const { id } = useParams();
  const {clients} = useLoaderData();
  const { state } = useNavigation();

  const isPending = state == 'loading';

  if(client) return <ContactInformation client={client}/>

  if(isPending) return <ContactInformationSkeleton/>;


  if(!client) return <NoContactSelected/>

return (
    <ContactInformation client={client}/>
  )
}

export default ContactInformationCard