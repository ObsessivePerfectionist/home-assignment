"use client";

import Link from "next/link";


import { Button, buttonVariants } from "./ui/button";
import { ResizablePanelGroup, ResizablePanel } from "./ui/resizeable";
import React from "react";
import { usePathname } from "next/navigation";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "./ui/tooltip";
import { cn } from "@/lib/utils";
import { BookIcon, ChevronLeft, ChevronRight, Euro, ListIcon, ListTodo, LucideIcon } from "lucide-react";

type Link = {
  title: string;
  link: string;
  icon: LucideIcon;
  variant: "default" | "ghost";
};

export default function Sidebar() {
  const pathname = usePathname();
  const [isCollapsed, setIsCollapsed] = React.useState(false);
  const links = [
    {
      title: "Accounts",
      link: "/accounts",
      icon: ListIcon,
      variant: "ghost",
    },
    {
      title: "Transactions",
      link: "/transactions",
      icon: Euro,
      variant: "ghost",
    },
    {
      title: "Account Balances",
      link: "/accountBalances",
      icon: BookIcon,
      variant: "ghost",
    }
  ] as Link[];
  return (
    <TooltipProvider delayDuration={0}>
      <ResizablePanelGroup direction="horizontal" isCollapsed={isCollapsed}>
        <ResizablePanel
          defaultSize={10}
          collapsedSize={3}
          collapsible={true}
          minSize={3}
          maxSize={10}
          onCollapse={() => {
            setIsCollapsed(true);
            document.cookie = `react-resizable-panels:collapsed=${JSON.stringify(
              true
            )}`;
          }}
          onResize={() => {
            setIsCollapsed(false);
            document.cookie = `react-resizable-panels:collapsed=${JSON.stringify(
              false
            )}`;
          }}
        >
          <div
            data-collapsed={isCollapsed}
            className="w-full gap-4 h-full data-[collapsed=true]"
          >
            <nav className="flex flex-col justify-between gap-1 h-full px-2 py-2 group-[[data-collapsed=true]]:justify-center group-[[data-collapsed=true]]:px-2 bg-card border-r bg-background">
              <div className="flex flex-col">
                {links.map((link, index) =>
                  isCollapsed ? (
                    <Tooltip key={index} delayDuration={0}>
                      <TooltipTrigger asChild>
                        <Link
                          href={link.link}
                          className={cn(
                            buttonVariants({
                              variant: link.variant,
                              size: "icon",
                            }),
                            "h-9 w-9",
                            link.link === pathname &&
                              "bg-primary text-primary-foreground hover:bg-primary/90 hover:text-primary-foreground"
                          )}
                        >
                          <link.icon className="mr-2 h-4 w-4"/>
                          <span className="sr-only">{link.title}</span>
                        </Link>
                      </TooltipTrigger>
                      <TooltipContent
                        side="right"
                        className="flex items-center gap-4"
                      >
                        {link.title}
                        {link.link && (
                          <span className="ml-auto text-muted-foreground"></span>
                        )}
                      </TooltipContent>
                    </Tooltip>
                  ) : (
                    <Link
                      key={index}
                      href={link.link}
                      className={cn(
                        buttonVariants({
                          variant: link.variant,
                          size: "sm",
                        }),
                        link.link === pathname &&
                          "bg-primary text-primary-foreground hover:bg-primary/90 hover:text-primary-foreground",
                        "justify-start"
                      )}
                    >
                    <link.icon className="mr-2 h-4 w-4"/>
                      {link.title}
                    </Link>
                  )
                )}
              </div>
              <div className="mt-auto flex flex-col justify-center py-2 gap-5">
                <Button
                  onClick={() => setIsCollapsed(!isCollapsed)}
                >
                  {isCollapsed ? (
                    <div>
                      <ChevronRight/>
                    </div>
                  ) : (
                    <div>
                    <ChevronLeft/>
                    </div>
                  )}
                </Button>
              </div>
            </nav>
          </div>
        </ResizablePanel>
      </ResizablePanelGroup>
    </TooltipProvider>
  );
}
