import { ProfileWidget } from "@/components/profile-widget";
import { GalleryWrapper } from "@/components/gallery-widget";

export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center p-4 lg:p-8">
      <div className="grid w-full max-w-7xl grid-cols-1 gap-8 lg:grid-cols-2 ">
        {/* Left half - empty */}
        <div></div>

        {/* Right half - widgets */}
        <div className="flex flex-col gap-6">
          <ProfileWidget />

          {/* Horizontal Divider */}
          <div className="w-full max-w-md mx-auto h-1 rounded-sm bg-white/10 shadow-[0px_3px_1px_rgba(0,0,0,0.3)]" />

          <GalleryWrapper />
          <div className="w-full max-w-md mx-auto h-1 rounded-sm bg-white/10 shadow-[0px_3px_1px_rgba(0,0,0,0.3)]" />
        </div>
      </div>
    </main>
  );
}