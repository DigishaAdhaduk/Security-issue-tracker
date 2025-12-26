"use client"
import { useEffect, useState } from "react"

export default function Profile() {
  const [u, setU] = useState<any>(null)

  useEffect(() => {
    fetch("/api/auth/me", {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("t")
      }
    })
      .then(r => r.json())
      .then(setU)
  }, [])

  if (!u) return <p>loading...</p>

  return (
    <div>
      <h2>Profile</h2>
      <p>Name: {u.name}</p>
      <p>Email: {u.email}</p>
    </div>
  )
}
