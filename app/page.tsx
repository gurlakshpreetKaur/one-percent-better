/* This page is the landing page or homepage, dynamically rendered.
   When no user is logged in, a log-in/sign-up page + features and graphics will be displayed
   If a user is logged in, it will open up directly to the user dashboard */
import LoginSignupInterface from '@/components/loginSignupInterface'

export default function LandingPage() {
  return (
    <main className="min-h-screen bg-coffee-200 transition-all duration-1000 flex justify-center items-center p-20">
      <LoginSignupInterface />
    </main>
  )
}
