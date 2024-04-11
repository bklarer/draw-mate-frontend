import QuickDraw from "@/components/QuickDraw";

export default function QuickDrawPage() {

    return (
        <div className="flex min-h-screen flex-col items-center p-24">
            <h1 className="text-5xl">Quick Draw Page</h1>
            <QuickDraw className="mt-10" />
        </div>
    )

}