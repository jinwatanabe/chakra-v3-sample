import { Button, DialogBackdrop, DialogTitle, HStack } from "@chakra-ui/react";
import {
  DialogBody,
  DialogCloseTrigger,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogRoot,
  DialogTrigger,
} from "@chakra-ui/react";

function App() {
  return (
    <>
      <DialogRoot>
        <HStack>
          <DialogTrigger asChild>
            <Button>Click me</Button>
          </DialogTrigger>
          <Button>Click me</Button>
        </HStack>
        <DialogBackdrop />
        <DialogTrigger />
        <DialogContent>
          <DialogCloseTrigger />
          <DialogHeader>
            <DialogTitle />
          </DialogHeader>
          <DialogBody />
          <DialogFooter />
        </DialogContent>
      </DialogRoot>
    </>
  );
}

export default App;
