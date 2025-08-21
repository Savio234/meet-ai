

export default function AuthLayout({ children }: { children: React.ReactNode }) {
    return (
        // <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
        //     <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-md">
        //         {children}
        //     </div>
        // </div>
        <div className="bg-muted flex min-h-svh flex-col items-center justify-center p-4 md:p-10">
            <div className="w-full max-w-sm md:max-w-[60rem]">
                {children}
            </div>
        </div>
    );
}