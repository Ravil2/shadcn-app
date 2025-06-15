import React from 'react'
import { Card, CardContent, CardFooter, CardTitle } from './ui/card'
import Image from 'next/image'
import { Badge } from './ui/badge'

interface IContent {
  id: number
  title: string
  badge: string
  image: string
  count: number
}

const popularContent: IContent[] = [
  {
    id: 1,
    title: 'JavaScript Basics',
    badge: 'Coding',
    image: 'https://images.pexels.com/photos/943096/pexels-photo-943096.jpeg',
    count: 1500,
  },
  {
    id: 2,
    title: 'Machine Learning',
    badge: 'AI',
    image: 'https://images.pexels.com/photos/3094799/pexels-photo-3094799.jpeg',
    count: 1200,
  },
  {
    id: 3,
    title: 'Web Design Inspiration',
    badge: 'Design',
    image: 'https://images.pexels.com/photos/267614/pexels-photo-267614.jpeg',
    count: 980,
  },
  {
    id: 4,
    title: 'Data Science Introduction',
    badge: 'Data',
    image: 'https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg',
    count: 1320,
  },
  {
    id: 5,
    title: 'Cloud Computing',
    badge: 'Cloud',
    image: 'https://images.pexels.com/photos/325229/pexels-photo-325229.jpeg',
    count: 890,
  },
  {
    id: 6,
    title: 'Cyber Security Basics',
    badge: 'Security',
    image: 'https://images.pexels.com/photos/374074/pexels-photo-374074.jpeg',
    count: 1040,
  },
]

const latestTransactions: IContent[] = [
  {
    id: 1,
    title: 'Subscription Renewal',
    badge: 'John Doe',
    image: 'https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg',
    count: 1400,
  },
  {
    id: 2,
    title: 'Payment for Services',
    badge: 'Jane Smith',
    image: 'https://images.pexels.com/photos/267614/pexels-photo-267614.jpeg',
    count: 1250,
  },
  {
    id: 3,
    title: 'Payment for Services',
    badge: 'Alex Johnson',
    image: 'https://images.pexels.com/photos/943096/pexels-photo-943096.jpeg',
    count: 1100,
  },
  {
    id: 4,
    title: 'New Order Placed',
    badge: 'Emily Davis',
    image: 'https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg',
    count: 950,
  },
  {
    id: 5,
    title: 'Invoice Generated',
    badge: 'Michael Brown',
    image: 'https://images.pexels.com/photos/3094799/pexels-photo-3094799.jpeg',
    count: 1020,
  },
  {
    id: 6,
    title: 'Service Cancellation',
    badge: 'Sophia Wilson',
    image: 'https://images.pexels.com/photos/374006/pexels-photo-374006.jpeg',
    count: 870,
  },
]

const CardList = ({ title }: { title: string }) => {
  const list = title === 'Popular Content' ? popularContent : latestTransactions

  return (
    <div className="">
      <h1 className="text-lg font-medium mb-6">{title}</h1>
      <div className="flex flex-col gap-2">
        {list.map((item) => (
          <Card
            key={item.id}
            className="flex-row items-center justify-between gap-4 p-4"
          >
            <div className="w-12 h-12 rounded-sm relative overflow-hidden">
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover"
              />
            </div>
            <CardContent className="flex-1 p-0">
              <CardTitle className="text-sm font-medium ">
                {item.title}
              </CardTitle>
              <Badge className="mt-1" variant={'secondary'}>
                {item.badge}
              </Badge>
            </CardContent>
            <CardFooter className="p-0">{item.count / 1000}K</CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
}

export default CardList
