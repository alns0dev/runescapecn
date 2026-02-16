import { useEffect, useState } from "react"

function useGithubStars(repo: string) {
  const [stars, setStars] = useState<number | null>(null)

  useEffect(() => {
    fetch(`https://api.github.com/repos/${repo}`)
      .then((res) => res.json())
      .then((data) => {
        if (typeof data.stargazers_count === "number") {
          setStars(data.stargazers_count)
        }
      })
      .catch(() => {})
  }, [repo])

  return stars
}

export { useGithubStars }
