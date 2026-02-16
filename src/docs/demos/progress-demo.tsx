import { useEffect, useState } from "react"

import { Progress } from "@/components/ui/progress"

export default function ProgressDemo() {
  const [loadingProgress, setLoadingProgress] = useState(0)

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      setLoadingProgress((prev) => (prev >= 99 ? prev : prev + 1))
    }, 80)

    return () => {
      window.clearInterval(intervalId)
    }
  }, [])

  useEffect(() => {
    if (loadingProgress < 99) {
      return
    }

    const resetId = window.setTimeout(() => {
      setLoadingProgress(0)
    }, 2500)

    return () => {
      window.clearTimeout(resetId)
    }
  }, [loadingProgress])

  return (
    <div className="space-y-3 max-w-xl">
      <div>
        <p className="text-base text-rs-brown-light mb-2 font-[family-name:var(--font-rs-bold)]">
          Loading (Dynamic Color)
        </p>
        <Progress
          dynamicColor
          value={loadingProgress}
          max={99}
          label={`${loadingProgress}/99`}
        />
        <p className="text-sm text-rs-brown-light mt-2">
          Color changes by threshold: 0-20 red, 21-49 orange, 50-74
          yellow, 75-100 green.
        </p>
      </div>
      <div>
        <p className="text-base text-rs-brown-light mb-2 font-[family-name:var(--font-rs-bold)]">
          Default (Green)
        </p>
        <Progress value={73} max={99} label="73/99" />
      </div>
      <div>
        <p className="text-base text-rs-brown-light mb-2 font-[family-name:var(--font-rs-bold)]">
          Orange
        </p>
        <Progress variant="orange" value={54} max={99} label="54/99" />
      </div>
      <div>
        <p className="text-base text-rs-brown-light mb-2 font-[family-name:var(--font-rs-bold)]">
          Red
        </p>
        <Progress variant="red" value={18} max={99} label="18/99" />
      </div>
    </div>
  )
}
