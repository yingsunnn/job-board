import { cn } from "@/lib/utils";

export default function H1(props: React.HTMLProps<HTMLHeadingElement>) {
  return (
    <h1
      {...props}
      className={cn(
        "text-4xl font-extrabold tracking-tighter lg:text-5xl",
        props.className,
      )}
    />
  );
}
