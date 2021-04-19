import TopBar from '../components/TopBar'
import Notifications from '../components/Notification'
import TradePageGrid from '../components/TradePageGrid'
import MarketSelect from '../components/MarketSelect'
import MarketHeader from '../components/MarketHeader'
import AlphaModal from '../components/AlphaModal'
import useLocalStorageState from '../hooks/useLocalStorageState'

const Index = () => {
  const [alphaAccepted] = useLocalStorageState('mangoAlphaAccepted', false)

  return (
    <div className={`bg-th-bkg-1 text-th-fgd-1 transition-all `}>
      <TopBar />
      <MarketSelect />
      <MarketHeader />
      <div className={`min-h-screen p-1 sm:px-2 sm:py-1 md:px-6 md:py-1`}>
        <TradePageGrid />
      </div>
      <Notifications />
      {!alphaAccepted && (
        <AlphaModal isOpen={!alphaAccepted} onClose={() => {}} />
      )}
    </div>
  )
}

export default Index
