import AboutUsScreen from "@/components/HomeScreens/AboutUsScreen";
import ClubScreen from "@/components/HomeScreens/ClubScreen";
import HomeScreen from "@/components/HomeScreens/HomeScreen";
import NavBar from "@/components/NavBar";

export default function Home() {
  return (
    <main className="min-h-screen w-full bg-slate-50">
      <NavBar />
      <HomeScreen />
      <ClubScreen />
      <AboutUsScreen />
    </main>
  );
}
