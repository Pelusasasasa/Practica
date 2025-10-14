import React from 'react'
import { Button } from '~/components/ui/button'

const ContactInformationSkeleton = () => {
  return (
    <div className="p-4">
      {/* Perfil */}
      <div className="flex flex-col items-center pb-6 border-b">
        <div className="h-20 w-20 rounded-full bg-muted animate-pulse mb-3" />
        <div className="h-6 w-32 bg-muted rounded mb-2 animate-pulse" />
        <div className="h-4 w-24 bg-muted-foreground rounded mb-2 animate-pulse" />
        <div className="flex items-center mt-1 gap-2">
          <div className="h-2 w-2 rounded-full bg-muted-foreground animate-pulse" />
          <div className="h-3 w-14 bg-muted-foreground rounded animate-pulse" />
        </div>
      </div>
      {/* Contact Info */}
      <div className="py-4 space-y-4">
        <div>
          <div className="h-4 w-32 mb-2 bg-muted rounded animate-pulse" />
          <div className="space-y-2">
            <div className="flex justify-between text-sm items-center">
              <div className="h-4 w-16 bg-muted-foreground rounded animate-pulse" />
              <div className="h-4 w-24 bg-muted rounded animate-pulse" />
            </div>
            <div className="flex justify-between text-sm items-center">
              <div className="h-4 w-16 bg-muted-foreground rounded animate-pulse" />
              <div className="h-4 w-20 bg-muted rounded animate-pulse" />
            </div>
            <div className="flex justify-between text-sm items-center">
              <div className="h-4 w-24 bg-muted-foreground rounded animate-pulse" />
              <div className="h-4 w-16 bg-muted rounded animate-pulse" />
            </div>
          </div>
        </div>
        {/* Account Details */}
        <div>
          <div className="h-4 w-32 mb-2 bg-muted rounded animate-pulse" />
          <div className="space-y-2">
            <div className="flex justify-between text-sm items-center">
              <div className="h-4 w-14 bg-muted-foreground rounded animate-pulse" />
              <div className="h-4 w-20 bg-muted rounded animate-pulse" />
            </div>
            <div className="flex justify-between text-sm items-center">
              <div className="h-4 w-24 bg-muted-foreground rounded animate-pulse" />
              <div className="h-4 w-16 bg-muted rounded animate-pulse" />
            </div>
            <div className="flex justify-between text-sm items-center">
              <div className="h-4 w-16 bg-muted-foreground rounded animate-pulse" />
              <div className="h-4 w-12 bg-muted rounded animate-pulse" />
            </div>
          </div>
        </div>
      </div>
      {/* Botón */}
      <div className="pt-4 border-t">
        <div className="h-9 w-full bg-muted rounded animate-pulse" />
      </div>
    </div>
  )
}

export default ContactInformationSkeleton