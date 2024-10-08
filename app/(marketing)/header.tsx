import {
  ClerkLoaded,
  ClerkLoading,
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton
} from "@clerk/nextjs"
import Image from "next/image"
import { Loader } from "lucide-react"
import { Button } from "@/components/ui/button"

export const Header = () => {
  return (
    <header className="h-20 w-full border-b-2 border-white px-4 font-dotgothic16">
      <div className="lg:max-w-screen-lg mx-auto flex items-center justify-between h-full">
        <div className="pt-8 pl-4 pb-7 flex items-center gap-x-3">
          <Image src="/starry.png" height={40} width={40} alt="Starry"/>
          <h1 className="text-sm sm:text-2xl font-bold text-white tracking-wide">ことばクエスト</h1>
        </div>
        <ClerkLoading>
          <Loader className="h-5 w-5 text-muted-foreground animate-spin"/>
        </ClerkLoading>
        <ClerkLoaded>
          <SignedIn>
            <UserButton />
          </SignedIn>
          <SignedOut>
            <SignInButton
              mode="modal"
              forceRedirectUrl="/learn"
              signUpForceRedirectUrl="/learn"
            >
              <Button size="lg" variant="ghost">
                ログイン
              </Button>
            </SignInButton>
          </SignedOut>
        </ClerkLoaded>
      </div>
    </header>
  )
}
