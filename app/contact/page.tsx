import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export default function ContactPage() {
  return (
    <div className="min-h-screen flex items-center justify-center pt-24 pb-12">
      <div className="container mx-auto px-4 max-w-2xl text-center">
        <h1 className="text-5xl md:text-7xl font-bold mb-4">Contact Us</h1>
        <p className="text-lg text-neutral-300 mb-12">We'd love to hear from you. Drop us a line below.</p>
        <form className="space-y-6 text-left">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Input type="text" placeholder="Your Name" className="bg-[#1a1a1a] border-neutral-700 text-white" />
            <Input type="email" placeholder="Your Email" className="bg-[#1a1a1a] border-neutral-700 text-white" />
          </div>
          <Input type="text" placeholder="Subject" className="bg-[#1a1a1a] border-neutral-700 text-white" />
          <Textarea placeholder="Your Message" rows={6} className="bg-[#1a1a1a] border-neutral-700 text-white" />
          <div className="text-center">
            <Button
              type="submit"
              size="lg"
              className="bg-white text-black hover:bg-neutral-200 font-bold text-lg px-10 py-6"
            >
              Send Message
            </Button>
          </div>
        </form>
      </div>
    </div>
  )
}
