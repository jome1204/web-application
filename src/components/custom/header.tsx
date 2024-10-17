import { useState } from "react";
import { Button } from "../ui/button";

import { MoonIcon, SunIcon } from "lucide-react";

const Header = () => {
  const [isDark, setIsDark] = useState(false);
  const onThemeChange = () => {
    setIsDark((prev) => !prev);
  };
  return (
    <header className="h-16 flex items-center justify-between">
      <h1 className="text-3xl font-bold">World's country </h1>
      <ul>
        <Button
          onClick={onThemeChange}
          size="icon"
          variant="secondary"
          className="rounded-full"
        >
          {isDark ? <SunIcon size={16} /> : <MoonIcon size={16} />}
        </Button>
      </ul>
    </header>
  );
};

export default Header;
