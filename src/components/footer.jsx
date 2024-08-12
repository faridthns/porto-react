import React from "react"

export default function Footer() {
  const tahunSekarang = new Date().getFullYear()

  return (
    <div className="hidden lg:block text-center p-5">
      &copy; {tahunSekarang} By Farid Ramadhan{" "}
    </div>
  )
}
