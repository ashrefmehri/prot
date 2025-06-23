import { ReactNode, useState } from "react";
import { Button } from "./ui/button";
import { ChevronsUpDownIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import {
  CommandDialog,
  CommandEmpty,
  CommandInput,
  CommandItem,
  CommandList,
} from "./ui/command";

interface Props {
  options: Array<{
    id: string;
    value: string;
    children: ReactNode;
  }>;
  onSelect: (value: string) => void;
  onSearch?: (value: string) => void;
  value: string;
  placeholder?: string;
  isSearchable?: boolean;
  className?: string;
}

export const CommandSelect = ({
  options,
  onSelect,
  onSearch,
  value,
  placeholder = "Select an option",
  className,
}: Props) => {
  const [open, setOpen] = useState(false);
  const selectedOption = options.find((option) => option.value === value);

  return (
    <>
      <Button
      onClick={()=>setOpen(true)}
        type="button"
        variant="outline"
        className={cn(
          "h-9 justify-between font-normal px-2 tracking-tighter",
          !selectedOption && "text-muted-foreground",
          className
        )}
      >
        <div >
          {selectedOption?.children ?? placeholder}
        </div>
          <ChevronsUpDownIcon />
      </Button>

      <CommandDialog shouldFilter={!onSearch} open={open} onOpenChange={setOpen}>
        <CommandInput placeholder="Search ..." onValueChange={onSearch} />
        <CommandList>
          <CommandEmpty>
            <span className="text-muted-foreground text-sm tracking-tighter">
              {" "}
              No options found
            </span>
          </CommandEmpty>
          {options.map((item) => (
            <CommandItem
            className="cursor-pointer"
              key={item.id}
              onSelect={() => {
                onSelect(item.value);
                setOpen(false);
              }}
            >
              {item.children}
            </CommandItem>
          ))}
        </CommandList>
      </CommandDialog>
    </>
  );
};
