import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Github, Mail } from 'lucide-react'
import { ContactLink } from './_components/contact-link'
export default function Footer() {
  return (
    <footer className="flex justify-center mt-12 lg:mt-0">
      <div className="flex items-center space-x-4">
        <div className="flex flex-row space-x-2 items-center justify-center gap-2">
          <div className="flex items-center space-x-3">
            <Avatar className="w-10 h-10 lg:w-12 lg:h-12">
              <AvatarImage src="/professional-avatar.png" alt="Arlen Resende" />
              <AvatarFallback>AR</AvatarFallback>
            </Avatar>
          </div>
          <ContactLink
            href="https://github.com/arlenresende"
            label="GitHub"
            icon={<Github size={18} />}
          />
          <ContactLink
            href="mailto:arlenaraujo12@gmail.com"
            label="Email"
            icon={<Mail size={18} />}
          />
        </div>
      </div>
    </footer>
  )
}
