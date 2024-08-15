export default async function ExampleFeature4() {

    // fake wait for test page loading
    await new Promise((resolve) => {
        setTimeout(resolve, 50000);
    })

    return (
        <div className="h-screen w-full bg-slate-50 flex justify-center items-center">
            <h1 className="text-2xl">Loaded Successfully</h1>
        </div>
    );
}