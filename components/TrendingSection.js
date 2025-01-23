'use client'
import {MemeCard, MemeCardContainer} from './MemeCard'
export default function TrendingSection() {
  const trendingMemes = [
    {
      id: 'virtual',
      imageUrl: '/images/hottest-1.png',
      name: 'VIRTUAL',
      price: 2.74,
      marketCap: '1.7B',
      change: 0.59,
      verified: false
    },
    {
      id: 'ai16z',
      imageUrl: '/images/hottest-2.png',
      name: 'AI16Z',
      price: 0.0873,
      marketCap: '962K',
      change: -11.59,
      verified: true
    },
    {
      id: 'ticker3',
      imageUrl: '/images/hottest-1.png',
      name: 'TICKER3',
      price: 0.1232,
      marketCap: '701M',
      verified: true
    },
    {
      id: 'ticker4',
      imageUrl: '/images/hottest-2.png',
      name: 'TICKER4',
      price: 25.51,
      marketCap: '988',
      verified: false
    }
  ]

  return (
    <section className="px-4 mb-12">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-2xl font-bold mb-6">Hottest</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <MemeCardContainer>
          {trendingMemes.map((meme) => (
            <MemeCard 
              key={meme.id}
              name={meme.name}
              price={meme.price}
              marketCap={meme.marketCap}
              change={5}
              verified={true}
              imageUrl={meme.imageUrl}
            />
            // <MemeCard key={meme.id} {...meme} />
          ))}
          </MemeCardContainer>
        </div>
      </div>
    </section>
  )
}
