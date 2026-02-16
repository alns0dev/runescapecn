import { useState } from "react"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card"

export default function CardDemo() {
  const [hitpoints, setHitpoints] = useState(99)

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <Card>
        <CardHeader>
          <CardTitle>Player Stats</CardTitle>
          <CardDescription>Combat Level 126</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-3 text-base">
            <div className="flex justify-between">
              <span className="text-rs-orange">Attack</span>
              <span className="text-rs-green">99</span>
            </div>
            <div className="flex justify-between">
              <span className="text-rs-orange">Strength</span>
              <span className="text-rs-green">99</span>
            </div>
            <div className="flex justify-between">
              <span className="text-rs-orange">Defence</span>
              <span className="text-rs-green">99</span>
            </div>
            <div className="flex justify-between">
              <span className="text-rs-orange">Hitpoints</span>
              <span className="text-rs-green">{hitpoints}</span>
            </div>
          </div>
        </CardContent>
        <CardFooter className="gap-2">
          <Button
            size="sm"
            variant="success"
            onClick={() => setHitpoints((hp) => Math.min(99, hp + 10))}
          >
            Eat Food
          </Button>
          <Button
            size="sm"
            variant="destructive"
            onClick={() => setHitpoints((hp) => Math.max(0, hp - 15))}
          >
            Take Hit
          </Button>
        </CardFooter>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Quest Log</CardTitle>
          <CardDescription>3 Quests Available</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-3 text-base">
            <div className="text-rs-green">&#10004; Cook&apos;s Assistant</div>
            <div className="text-rs-yellow">~ Dragon Slayer</div>
            <div className="text-rs-red">&#10008; Recipe for Disaster</div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
