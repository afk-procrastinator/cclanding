import { Button } from "@/components/ui/button"

export default function Contact() {
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-6">Contact Us</h1>
      <form className="max-w-md">
        <div className="mb-4">
          <label htmlFor="name" className="block mb-2">Name</label>
          <input type="text" id="name" className="w-full p-2 border rounded" />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block mb-2">Email</label>
          <input type="email" id="email" className="w-full p-2 border rounded" />
        </div>
        <div className="mb-4">
          <label htmlFor="message" className="block mb-2">Message</label>
          <textarea id="message" rows={4} className="w-full p-2 border rounded"></textarea>
        </div>
        <Button type="submit" className="bg-[#D94D1A] hover:bg-[#D94D1A]/90 text-white">
          Send Message
        </Button>
      </form>
    </div>
  )
}