import NextScreenButton from "./NextScreenButton";

export default function AboutUsScreen() {
    return (
        <div id="about-us" className="w-full h-screen flex flex-col justify-center items-center relative">
            <h1 className="font-semibold text-4xl">ABOUT US</h1>
            <div className="h-1 w-96 bg-slate-800 mt-3 mb-6">

            </div>
            <p className="max-w-screen-xl text-center text-xl my-2">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde repellendus, numquam culpa velit necessitatibus deleniti iusto error ipsa consectetur voluptates, facere reiciendis sed, consequuntur voluptatem earum fugiat expedita. Omnis esse sed tenetur blanditiis saepe mollitia explicabo tempora excepturi. Nobis magnam nulla obcaecati ipsam, incidunt nam porro perspiciatis similique adipisci dolor.</p>
            <p className="max-w-screen-xl text-center text-xl my-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus eum rerum in optio? Quibusdam soluta ex tenetur qui, nihil perferendis ad dolores beatae. Maxime explicabo quaerat itaque? Culpa in, officia optio nemo cum, ad laudantium, veniam totam cumque voluptatum incidunt?</p>
            <NextScreenButton toId="/" />
        </div>
    );
}