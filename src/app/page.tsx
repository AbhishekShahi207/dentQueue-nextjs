import { Button } from '@/components/ui/button'

import { SignedIn, SignedOut, SignInButton, SignOutButton, SignUpButton } from '@clerk/nextjs'
import React from 'react'

function Home() {
  return (
    <div>


      <SignedOut>
    <SignUpButton mode='modal'>SignIn</SignUpButton>
      </SignedOut>

      <SignedIn>
        <SignOutButton>Logout</SignOutButton>
      </SignedIn>

    </div>
  )
}

export default Home
