import { cn } from "@/lib/utils";

type Props = {
    children: React.ReactNode;
    className?: string;
    childClassName?: string;
};

export default function Container({
    children,
    className,
    childClassName,
}: Props) {
    return (
        <section className={cn("py-24", className)}>
            <div className={cn("mx-auto container", childClassName)}>
                {children}
            </div>
        </section>
    );
}
