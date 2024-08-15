export default async function ExampleFeature4() {

    // fake wait for test page loading
    await new Promise((resolve) => {
        setTimeout(resolve, 10000);
    })

    return (
        <div className="h-screen w-full bg-slate-50 flex flex-col justify-center items-center">
            <h1 className="text-2xl">Welcome to the nested page</h1>
            <h2>See how it uses the same loading page?</h2>
        </div>
    );
}