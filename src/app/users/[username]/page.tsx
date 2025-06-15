import React from 'react'
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb'
import CardList from '@/components/CardList'
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from '@/components/ui/hover-card'
import { BadgeCheck, Candy, Citrus, Shield } from 'lucide-react'
import { Progress } from '@/components/ui/progress'
import { Badge } from '@/components/ui/badge'
import { Sheet, SheetTrigger } from '@/components/ui/sheet'
import { Button } from '@/components/ui/button'
import EditUser from '@/components/EditUser'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import AppLineChart from '@/components/AppLineChart'

const SingleUserPage = () => {
  return (
    <div>
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Dashboard</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink href="/users">Users</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>User</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <div className="mt-4 flex flex-col xl:flex-row gap-8">
        <div className="w-full xl:w-1/3 space-y-6">
          <div className="bg-primary-foreground p-4 rounded-lg">
            <h1 className="font-semibold text-xl">User Badges</h1>
            <div className="flex gap-4 mt-4">
              <HoverCard>
                <HoverCardTrigger>
                  <BadgeCheck
                    size={36}
                    className="rounded-full bg-blue-500/30 border-1 border-blue-500/50 p-2"
                  />
                </HoverCardTrigger>
                <HoverCardContent className="w-auto">
                  <h1 className="font-bold mb-2">Verified User</h1>
                  <p className="text-sm flex whitespace-nowrap text-blue-300">
                    Этот пользователь проверен Администратором
                  </p>
                </HoverCardContent>
              </HoverCard>
              <HoverCard>
                <HoverCardTrigger>
                  <Shield
                    size={36}
                    className="rounded-full bg-green-500/30 border-1 border-green-500/50 p-2"
                  />
                </HoverCardTrigger>
                <HoverCardContent className="w-auto">
                  <h1 className="font-bold mb-2">Shield User</h1>
                  <p className="text-sm flex whitespace-nowrap text-green-300">
                    Пользователь защищен
                  </p>
                </HoverCardContent>
              </HoverCard>
              <HoverCard>
                <HoverCardTrigger>
                  <Candy
                    size={36}
                    className="rounded-full bg-yellow-500/30 border-1 border-yellow-500/50 p-2"
                  />
                </HoverCardTrigger>
                <HoverCardContent className="w-auto">
                  <h1 className="font-bold mb-2">Candy User</h1>
                  <p className="text-sm flex whitespace-nowrap text-yellow-300">
                    Больше всего покупок
                  </p>
                </HoverCardContent>
              </HoverCard>
              <HoverCard>
                <HoverCardTrigger>
                  <Citrus
                    size={36}
                    className="rounded-full bg-red-500/30 border-1 border-red-500/50 p-2"
                  />
                </HoverCardTrigger>
                <HoverCardContent className="w-auto">
                  <h1 className="font-bold mb-2">Popular User</h1>
                  <p className="text-sm flex whitespace-nowrap text-red-300">
                    Более 150 просмотров
                  </p>
                </HoverCardContent>
              </HoverCard>
            </div>
          </div>
          <div className="bg-primary-foreground p-4 rounded-lg">
            <div className="flex items-center justify-between">
              <h1 className="text-xl font-semibold">User Information</h1>
              <Sheet>
                <SheetTrigger asChild>
                  <Button>Edit User</Button>
                </SheetTrigger>
                <EditUser />
              </Sheet>
            </div>
            <div className="space-y-4 mt-4">
              <div className="flex flex-col gap-2 mb-8">
                <p className="text-sm text-muted-foreground">
                  Profile completion
                </p>
                <Progress value={66} />
              </div>
              <div className="flex items-center gap-2">
                <span className="font-bold">Username: </span>
                <span>Ravil2.git </span>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-bold">Email: </span>
                <span>rafffa141105@gmail.com</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-bold">Telergam: </span>
                <span>
                  <a
                    className="text-blue-200"
                    target="_blank"
                    href="https://t.me/Zyko2442"
                  >
                    Zyko2442
                  </a>{' '}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-bold">Location: </span>
                <span>Almaty </span>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-bold">Role: </span>
                <span>
                  <Badge>Developer</Badge>{' '}
                </span>
              </div>
            </div>
            <p className="text-sm text-muted-foreground mt-4">
              Joined on 06.14.2025
            </p>
          </div>
          <div className="bg-primary-foreground p-4 rounded-lg">
            <CardList title="Recent Transactions" />
          </div>
        </div>
        <div className="w-full xl:w-2/3 space-y-6">
          <div className="bg-primary-foreground p-4 rounded-lg space-y-2">
            <div className="flex items-center gap-2">
              <Avatar className="size-12">
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>RV</AvatarFallback>
              </Avatar>
              <h1 className="text-xl font-semibold">Ravil2 .git</h1>
            </div>
            <p className="text-sm text-muted-foreground">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus
              omnis quia reprehenderit temporibus dicta doloribus eveniet
              tempora esse magnam, laudantium earum odio quas provident voluptas
              corrupti ullam! Illo, doloremque dignissimos?
            </p>
          </div>
          <div className="bg-primary-foreground p-4 rounded-lg">
            <h1 className='text-xl font-semibold'>User Activity</h1>
            <AppLineChart /></div>
        </div>
      </div>
    </div>
  )
}

export default SingleUserPage
