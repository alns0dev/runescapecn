import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion"

export default function AccordionDemo() {
  return (
    <div className="space-y-6">
      <div>
        <p className="text-base text-rs-brown-light mb-3 font-[family-name:var(--font-rs-bold)]">
          Quest Journal
        </p>
        <Accordion type="single" collapsible className="w-full border-2 border-black rs-stone-bg shadow-[inset_-1px_-1px_0_rgba(0,0,0,0.5),inset_1px_1px_0_rgba(255,255,255,0.08)]">
          <AccordionItem value="item-1">
            <AccordionTrigger>Free Quests</AccordionTrigger>
            <AccordionContent>
              <ul className="space-y-1">
                <li className="text-rs-green">Cook's Assistant</li>
                <li className="text-rs-green">Sheep Shearer</li>
                <li className="text-rs-yellow">Dragon Slayer</li>
                <li className="text-rs-red">Shield of Arrav</li>
              </ul>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>Members Quests</AccordionTrigger>
            <AccordionContent>
              <ul className="space-y-1">
                <li className="text-rs-green">Monkey Madness</li>
                <li className="text-rs-yellow">Recipe for Disaster</li>
                <li className="text-rs-red">Song of the Elves</li>
              </ul>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>Miniquests</AccordionTrigger>
            <AccordionContent>
              <ul className="space-y-1">
                <li className="text-rs-green">Alfred Grimhand's Barcrawl</li>
                <li className="text-rs-red">Mage Arena II</li>
              </ul>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  )
}
