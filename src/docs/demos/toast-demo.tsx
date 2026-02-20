import { Button } from "@/components/ui/button"
import { Toaster } from "@/components/ui/toaster"
import { useToast } from "@/components/ui/use-toast"

export default function ToastDemo() {
  const { toast } = useToast()

  return (
    <div className="space-y-6">
      <Toaster />
      <div>
        <p className="text-base text-rs-brown-light mb-3 font-[family-name:var(--font-rs-bold)]">
          Game Notifications
        </p>
        <div className="flex flex-wrap gap-3">
          <Button
            onClick={() =>
              toast({
                title: "Level Up!",
                description:
                  "Congratulations, your Attack level is now 73.",
              })
            }
          >
            Level Up
          </Button>
          <Button
            variant="success"
            onClick={() =>
              toast({
                variant: "success",
                title: "Rare Drop!",
                description: "You received a Dragon Chain Body!",
              })
            }
          >
            Rare Drop
          </Button>
          <Button
            variant="destructive"
            onClick={() =>
              toast({
                variant: "destructive",
                title: "Oh dear, you are dead!",
                description: "You lost your items.",
              })
            }
          >
            Death
          </Button>
        </div>
      </div>
    </div>
  )
}
