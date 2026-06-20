export default function NavbarItem({ title, href } : {
    title: string,
    href: string
}) {
    return (
        <div className={"flex-1 flex items-center justify-center"}>
            <h1 className={"text-lg font-playfair cursor-pointer"}>
                <a href={href}>
                    {title}
                </a>
            </h1>
        </div>

    );
}
