import Image from "next/image";

export default function TrainingPage() {
    return (
        <section className="px-4 py-10 xl:px-[125px] xl:py-20">
            <div className="container mx-auto grid gap-10 lg:grid-cols-2 lg:items-center lg:justify-between">
                <div className="h-[400px] w-full xl:h-[500px]">
                    <Image
                        src="/training.jpg"
                        alt="training illustration"
                        width={800}
                        height={800}
                        className="h-full w-full object-cover"
                    />
                </div>
                <div className="max-w-5xl">
                    <h2 className="mb-4 text-2xl font-semibold md:text-3xl">
                        Training
                    </h2>
                    <p className="text-center text-sm leading-6 md:text-base md:leading-8 lg:text-start">
                        At Consertex, our Training & Development service is
                        designed to equip energy sector teams with the skills
                        and knowledge needed to thrive in a rapidly evolving
                        industry. We deliver customised training programs
                        covering emerging technologies, regulatory compliance,
                        safety standards, and operational best practices.
                    </p>
                    <p className="py-3 text-center text-sm leading-6 md:text-base md:leading-8 lg:text-start">
                        Our approach combines expert-led sessions, hands-on
                        workshops, and real-world case studies to ensure
                        practical application of knowledge. This targeted
                        learning methodology improves workforce performance,
                        enhances safety culture, and enables organisations to
                        adapt quickly to technological and market changes.
                    </p>
                    <p className="text-center text-sm leading-6 md:text-base md:leading-8 lg:text-start">
                        With a team of industry professionals and subject matter
                        experts, Consertex transforms training into a strategic
                        advantage. Whether onboarding new talent, upskilling
                        existing teams, or preparing for large-scale digital
                        transformation, our Training & Development service
                        ensures your workforce remains competitive, capable, and
                        future ready.
                    </p>
                </div>
            </div>
        </section>
    );
}
