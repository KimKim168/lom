import { Separator } from '@/components/ui/separator';
import { Link } from '@inertiajs/react';
import { UserCircle2 } from 'lucide-react';
import { CardBody, CardContainer, CardItem } from '../components/ui/3d-card';

const newsItems = [
    {
        id: 1,
        name: 'Bar Code Generator',
        short_decription: 'Tips and strategies to improve your reading skills effectively.',
        image: '/assets/rule-library/images/barCode.png',
    },
    {
        id: 2,
        name: 'Generate Classification',
        short_decription: "Discover the latest books and events at Cambodia's annual book fair.",
        image: '/assets/rule-library/images/generate.png',
    },
    {
        id: 3,
        name: 'QR Code Generator',
        short_decription: 'Important updates on new e-invoicing regulations coming soon.',
        image: '/assets/rule-library/images/qrCode.png',
    },
    {
        id: 4,
        name: 'Reference Service Portal',
        short_decription: 'Tips and strategies to improve your reading skills effectively.',
        image: '/assets/rule-library/images/service.png',
    },
    {
        id: 5,
        name: 'Patron Card Maker',
        short_decription: "Discover the latest books and events at Cambodia's annual book fair.",
        image: '/assets/rule-library/images/cardMaker.png',
    },
    {
        id: 6,
        name: 'Patron Counter',
        short_decription: 'Important updates on new e-invoicing regulations coming soon.',
        image: '/assets/rule-library/images/counter.png',
    },
    {
        id: 7,
        name: 'Enter Load Library',
        short_decription: "Discover the latest books and events at Cambodia's annual book fair.",
        image: '/assets/rule-library/images/library.png',
    },
    {
        id: 8,
        name: 'Enter Load Library',
        short_decription: 'Important updates on new e-invoicing regulations coming soon.',
        image: '/assets/rule-library/images/library.png',
    },
];
const Index = () => {
    return (
        <div>
            <nav className="sticky top-0 z-50 border-b bg-[#0097b2]/70 backdrop-blur-xs backdrop-saturate-150">
                <div className="mx-auto flex h-10 max-w-screen-xl items-center justify-between px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center text-white">
                        <a href="#">
                            Telegram Support: <span>@alphalib</span>
                        </a>
                    </div>
                    <div className="flex items-center gap-3">
                        <a href="user/login" className="flex gap-2 text-white">
                            <UserCircle2 /> Login
                        </a>
                    </div>
                </div>
            </nav>

            {/* Start */}
            <div className="container mx-auto my-16 max-w-screen-xl px-4 sm:px-6 lg:px-8">
                <div className="mx-auto max-w-2xl text-center">
                    <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">Welcome to LOM Portal</h2>
                    <p className="text-muted-foreground mt-4 text-lg sm:text-xl">Your Trust Library Management System</p>
                </div>
                <div className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
                    {newsItems?.map((item) => (
                        <Link href={`#`} key={item.id} className="flex justify-center">
                            <CardContainer className="inter-var h-full w-full">
                                <CardBody className="group/card relative flex h-full w-full flex-col justify-between rounded-xl border bg-gray-50 p-2 transition-transform duration-300 hover:scale-[1.02] hover:border-black/[0.1] dark:border-white/[0.2] dark:bg-black dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1]">
                                    <div>
                                        <CardItem translateZ="100" className="aspect-[16/9] w-full">
                                            <img
                                                src={item.image}
                                                height={350}
                                                width={350}
                                                className="aspect-[16/9] w-full rounded-xl bg-white/10 object-cover shadow-lg backdrop-blur-md group-hover/card:shadow-xl"
                                                alt={`News image: ${item.name}`}
                                            />
                                        </CardItem>
                                        <CardItem translateZ="50" className="mt-4 line-clamp-2 text-sm dark:text-white">
                                            {item.name}
                                        </CardItem>
                                        {/* Uncomment if needed */}
                                        {/* <CardItem as="p" translateZ="60" className="mt-2 line-clamp-2 text-[14px] text-neutral-600 dark:text-neutral-300">
              {item.short_decription}
            </CardItem> */}
                                    </div>
                                </CardBody>
                            </CardContainer>
                        </Link>
                    ))}
                </div>
            </div>
            {/* End */}
            {/* start */}
            <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
                <Separator />
                <div className="flex flex-col-reverse items-center justify-between gap-x-2 gap-y-5 py-8 sm:flex-row">
                    {/* Copyright */}
                    <span className="text-muted-foreground">
                        &copy; {new Date().getFullYear()}{' '}
                        <Link href="/" target="_blank">
                            Alphalib
                        </Link>
                        . All rights reserved.
                    </span>
                    <div className="text-muted-foreground flex items-center gap-5">
                        <Link href="#" target="_blank">
                            <img src="/assets/rule-library/images/telegram.png" className="h-5 w-5" />
                        </Link>
                        <Link href="#" target="_blank">
                            <img src="/assets/rule-library/images/facebook.png" className="h-5 w-5" />
                        </Link>
                    </div>
                </div>
            </div>
            {/* End */}
        </div>
    );
};

export default Index;
