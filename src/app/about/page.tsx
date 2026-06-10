import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";

export const metadata: Metadata = {
  title: "About",
  description: "Learn about Biryani ByHearts and our passion for authentic Lucknowi biryani.",
};

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main className="pt-24 pb-16 px-6 max-w-4xl mx-auto">
        <h1 className="text-4xl font-extrabold text-slate-900 mb-6">About Us</h1>

        <div className="prose prose-slate max-w-none space-y-6">
          <p className="text-lg text-gray-700 leading-relaxed">
            Welcome to <strong className="text-primary">Biryani ByHearts</strong>, where every grain
            tells a story. Born in the heart of Lucknow, we bring you the legendary Dum Pukht
            tradition that has defined Awadhi cuisine for centuries.
          </p>

          <div className="bg-orange-50 rounded-2xl p-8 my-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Our Story</h2>
            <p className="text-gray-700 leading-relaxed">
              Our journey began with a simple belief: biryani is not just food — it&apos;s an
              emotion. We source the finest basmati rice, handpick our spices, and slow-cook every
              batch in traditional dum style to deliver an experience that transports you to the
              royal kitchens of Lucknow.
            </p>
          </div>

          <div className="grid sm:grid-cols-3 gap-6 my-8">
            {[
              {
                title: "Traditional Dum",
                desc: "Slow-cooked in sealed handis for authentic aroma",
              },
              {
                title: "Premium Ingredients",
                desc: "Finest basmati, pure ghee, handpicked spices",
              },
              {
                title: "Generations of Recipes",
                desc: "Secret spice blends passed down through ages",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="text-center p-6 bg-white rounded-xl shadow-sm border border-gray-100"
              >
                <h3 className="font-bold text-slate-900 mb-2">{item.title}</h3>
                <p className="text-gray-500 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </main>
    </>
  );
}
