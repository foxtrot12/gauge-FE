import { Button } from "@/components/ui/button";
import { MenuIcon } from "lucide-react";
import { memo } from "react";
// import Image from "next/image";

function HeaderComponent() {
  return (
    <header className="h-12 bg-primary flex justify-between items-center">
      <img className="h-4/5 rounded mx-1" src="logo.jpg" alt="logo" />
      <Button className="mx-1">
        <MenuIcon />
      </Button>
    </header>
  );
}

export default memo(HeaderComponent);
