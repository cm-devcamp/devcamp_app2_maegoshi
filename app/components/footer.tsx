export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <div className="w-full bg-slate-700">
      <div className="mt-8 mb-32 m-auto text-center max-w-5xl text-left text-white">
        &copy; {year} DevelopersIO BASECAMP all rights reserved.
      </div>
    </div>
  )
}