import SocialLogin from "../components/social-login";
;
export default function LoginPage() {
    return (
        <div className="w-full h-full">
            <div className="relative w-full h-full mx-auto flex md:max-w-5xl md:flex-col justify-center px-4 pt-12 md:pt-0">
                <div className="mx-auto space-y-4 sm:w-sm">
                    {/* <Logo className="h-6" /> */}
                    <p className="font-semibold text-3xl hidden md:block">
                        Nex<span className="text-primary">Blog</span>
                    </p>
                    <div className="flex flex-col space-y-1">
                        <h1 className="font-bold text-2xl tracking-wide">
                            Sign In or Join Now!
                        </h1>
                        <p className="text-base text-muted-foreground">
                            login or create your NexBlog account.
                        </p>
                    </div>
                    <SocialLogin />
                </div>
            </div>
        </div>
    );
}

