import Balance from './components/Balance'
import Spending from './components/Spending'
import './index.css'

function App() {
  return (
    <main className="flex flex-col justify-center gap-4 h-[100vh] w-[100vw] bg-neutral-cream">
      <Balance />
      <Spending />
    </main>
  )
}

export default App