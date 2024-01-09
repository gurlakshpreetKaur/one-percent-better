/* This page is the landing page or homepage, dynamically rendered.
   When no user is logged in, a log-in/sign-up page + features and graphics will be displayed
   If a user is logged in, it will open up directly to the user dashboard */
import LoginSignupInterface from '@/components/LandingPage/LoginSignupInterface';
import DetailsSection from '@/components/LandingPage/DetailsSection';
import NavBar from '@/components/NavBar';
import HomeMain from '@/components/Home/Home';

export default function Page() {
  const loggedIn = true;
  return loggedIn ? <Home /> : <UserAuthenticationPage />
}


/**
 * This is the user dashboard which will be shown if the user is logged in.
 */
function Home() {
  return <main className="min-h-screen bg-coffee-100">
    <NavBar />
    <HomeMain />
  </main>;
}

/**
 * This is the authentication page (with details of webapp) shown if no user is logged in.
 */
function UserAuthenticationPage() {
  return (
    <main className={`bg-coffee-300
    md:h-screen overflow-hidden sm:p-12 md:p-16
    flex justify-center items-center`}>
      <div className={`bg-white bg-opacity-60 
      sm:rounded-3xl sm:border-4 sm:border-solid sm:border-yerba-mate-600 
      h-full w-full max-h-[37.5rem] max-w-[55rem] lg:w-4/5 md:aspect-square lg:aspect-video p-12 overflow-y-auto
      grid lg:grid-cols-[3fr_2fr] md:grid-cols-[repeat(auto-fill,minmax(15rem,1fr))] gap-10`}>
        <DetailsSection />
        <LoginSignupInterface />
      </div>
    </main>
  )
}
