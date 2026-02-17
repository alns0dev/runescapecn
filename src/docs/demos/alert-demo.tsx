import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert"

export default function AlertDemo() {
  return (
    <div className="space-y-4 max-w-lg">
      <Alert>
        <AlertTitle>Game Update</AlertTitle>
        <AlertDescription>
          A system update will occur in 30 minutes. Please finish what you are
          doing and log out.
        </AlertDescription>
      </Alert>

      <Alert variant="destructive">
        <AlertTitle>Warning</AlertTitle>
        <AlertDescription>
          This is a dangerous area. You will lose your items on death.
        </AlertDescription>
      </Alert>

      <Alert variant="success">
        <AlertTitle>Quest Complete</AlertTitle>
        <AlertDescription>
          Congratulations! You have completed Dragon Slayer.
        </AlertDescription>
      </Alert>
    </div>
  )
}
