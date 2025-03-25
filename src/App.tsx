import { motion } from "motion/react"

function App() {
  return (
    <section className="w-full h-dvh flex justify-center items-center">
      <div 
        className="flex items-end overflow-hidden h-60"
        style={{ borderRadius: '20px' }}
      >
        <div className="folder w-80 h-52 bg-gray-200 relative">
          <div className="w-full flex mt-2 justify-center">
            <motion.img 
              src="/images/1.webp"
              initial={{ rotate: 24, x: 0,  y: 120 }}
              animate={{ rotate: 2, x: 2, y: 0, transformOrigin: 10 }}
              transition={{ type: 'spring', duration: 1.2, bounce: .4 }}
              className="absolute left-2 top-2 w-2/5 aspect-square object-cover border-4 border-white rounded-2xl" 
            />
            <motion.img 
              src="/images/2.webp"
              initial={{ rotate: -32, x: -40, y: 120 }}
              animate={{ rotate: -12, x: -40, y: 16 }}
              transition={{ type: 'spring', duration: 1.2, bounce: .4 }}
              className="absolute w-2/5 aspect-square object-cover border-4 border-white rounded-2xl" 
            />
            <motion.img 
              src="/images/3.webp"
              initial={{ rotate: 42, x: 40, y: 120 }}
              animate={{ rotate: 12, x: 40, y: 16 }}
              transition={{ type: 'spring', duration: 1.2, bounce: .4 }}
              className="absolute w-2/5 aspect-square object-cover border-4 border-white rounded-2xl" 
            />
            <motion.img
              src="/images/4.webp"
              initial={{ rotate: -24, x: -4, y: 120 }}
              animate={{ rotate: -2, x: -4, y: 16 }}
              transition={{ type: 'spring', duration: 1.2, bounce: .4 }}
              className="absolute right-1 top-2 w-2/5 aspect-square object-cover border-4 border-white rounded-2xl" 
            />
          </div>
          <div
            className="absolute left-0 right-0 bg-gray-200 bottom-0 h-28 p-1"
            style={{ borderBottomLeftRadius: '20px', borderBottomRightRadius: '20px' }}
          >
            <div className="w-full h-full rounded-bl-2xl rounded-br-2xl bg-white" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default App
