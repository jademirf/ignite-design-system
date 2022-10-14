import { Heading } from '../components/Heading'
import { FormEvent, useState } from 'react'
import { Text } from '../components/Text'
import { TextInput } from '../components/TextInput'
import { Logo } from '../Logo'
import '../styles/global.css'
import { Envelope, Lock } from 'phosphor-react';
import { Checkbox } from '../components/Checkbox'
import { Button } from '../components/Button'

export function SignIn () {

  const [isUserSignedIn, setIsUserSignedIn] = useState(false)

  function handleSignIn (event: FormEvent) {
    event.preventDefault();

    setIsUserSignedIn(true)
  }

  return (
    <div className="w-screen h-screen bg-gray-900 flex flex-col items-center justify-center text-gray-100">
          <header className="flex flex-col items-center">
            <Logo />
            <Heading size="lg" className="mt-4 mb-2">Ignite Design System</Heading>
            <Text size="lg" className="text-gray-400">Login and start using!</Text>
          </header>
          <main className="flex items-center flex-col mt-10 w-full">
            <form onSubmit={handleSignIn} action="" className="flex flex-col items-stretch w-full max-w-sm gap-4">
              {isUserSignedIn && <Text size="lg" className="font-bold">User loged in!</Text>}
              <label htmlFor="email" className="flex flex-col gap-3">
                <Text className="font-semibold">E-mail address:</Text>
                <TextInput.Root>
                  <TextInput.Icon>
                    <Envelope />
                  </TextInput.Icon>
                  <TextInput.Input id="email" type="email" placeholder="type your email address" />
                </TextInput.Root>
              </label>
              <label htmlFor="password" className="flex flex-col gap-3">
                <Text className="font-semibold">Password:</Text>
                <TextInput.Root>
                  <TextInput.Icon>
                    <Lock />
                  </TextInput.Icon>
                  <TextInput.Input id="password" type="password" placeholder="type your pass" />
                </TextInput.Root>
              </label>
              <label htmlFor="remember" className="flex items-center gap-2">
                <Checkbox id="remember" />
                <Text className="text-gray-200">Remeber me for 30 days</Text>
              </label>
              <Button type="submit" className="mt-4">Login</Button>
            </form>
          </main>
          <footer className="flex flex-col items-center gap-4 mt-8">
            <Text asChild>
              <a href="" className="text-gray-400 underline hover:text-gray-200">Forgot password?</a>
            </Text>
            <Text asChild>
              <a href="" className="text-gray-400 underline hover:text-gray-200">Don't have an account? Create one now.</a>
            </Text>
          </footer>
        </div>
  )
}
