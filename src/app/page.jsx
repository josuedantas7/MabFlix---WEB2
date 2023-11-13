import Banner from "./components/Banner/Banner";
import BannerPage from '@/app/assets/banner-home.png'
import CardHomePage from "./components/CardHomePage/CardHomePage";

export default function Home() {
  return (
    <main>
      <div>
          <div>
            <Banner
            banner={BannerPage}
            />
          </div>
          <div className="px-[200px] mb-32">
            <div className="mb-12">
              <h1 className="font-semibold text-3xl text-center">Um lugar para guardar seus vídeos e filmes!</h1>
            </div>
            <CardHomePage/>
          </div>
      </div>
    </main>
  )
}
