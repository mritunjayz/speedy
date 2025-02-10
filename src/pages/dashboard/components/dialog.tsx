// import { Copy } from "lucide-react"

import { Button } from '@/components/ui/button';
import { GlobeIcon } from '@radix-ui/react-icons';

import {
  Dialog,
  // DialogClose,
  DialogContent,
  DialogDescription,
  // DialogFooter,
  DialogHeader,
  // DialogTitle,
  DialogTrigger
} from '@/components/ui/dialog';
// import { Input } from "@/components/ui/input"
// import { Label } from "@/components/ui/label"

export default function DialogCloseButton() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          variant="outline"
          size="icon"
          style={{ borderRadius: '20px' }}
          onClick={() => {
            console.log('llll');
          }}
        >
          <GlobeIcon />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogDescription>Large globe map view.</DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}
