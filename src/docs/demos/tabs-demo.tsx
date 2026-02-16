import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"

export default function TabsDemo() {
  return (
    <Tabs defaultValue="inventory" className="max-w-2xl">
      <TabsList>
        <TabsTrigger value="inventory">Inventory</TabsTrigger>
        <TabsTrigger value="equipment">Equipment</TabsTrigger>
        <TabsTrigger value="prayer">Prayer</TabsTrigger>
      </TabsList>
      <TabsContent value="inventory">
        <div className="grid grid-cols-4 gap-2">
          <div className="border-2 border-black bg-rs-brown-dark p-2 text-center">
            Shark
          </div>
          <div className="border-2 border-black bg-rs-brown-dark p-2 text-center">
            Brew
          </div>
          <div className="border-2 border-black bg-rs-brown-dark p-2 text-center">
            Whip
          </div>
          <div className="border-2 border-black bg-rs-brown-dark p-2 text-center">
            Rune
          </div>
        </div>
      </TabsContent>
      <TabsContent value="equipment">
        <div className="space-y-2">
          <p>
            <span className="text-rs-gold">Weapon:</span> Abyssal Whip
          </p>
          <p>
            <span className="text-rs-gold">Body:</span> Bandos Chestplate
          </p>
          <p>
            <span className="text-rs-gold">Cape:</span> Fire Cape
          </p>
        </div>
      </TabsContent>
      <TabsContent value="prayer">
        <p>Prayer book ready. Activate your boosts before battle.</p>
      </TabsContent>
    </Tabs>
  )
}
