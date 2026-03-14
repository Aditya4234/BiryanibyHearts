import Image from "next/image";

export default function RightPanel({ items = [], activeIndex = 0, onSelect = () => {} }) {

  const defaultItems = [
    { title: "Lucknawi Chicken", src: "/image/biryani-2.png" },
    { title: "Awadhi Mutton", src: "/image/biryani-3.png" },
    { title: "Dum Ke Biryani", src: "/image/biryani-1.png" },
    { title: "Kacche Gosht", src: "/image/biryani-2.png" },
  ];

  const menuItems = items.length ? items : defaultItems;

  return (
    <aside className="hidden lg:block absolute right-16 bottom-24">

      <div className="grid grid-cols-2 gap-6">
        {menuItems.map((item, idx) => {
          const isActive = idx === activeIndex;

          return (
            <button
              key={item.title}
              onClick={() => onSelect(idx)}
              className="text-center"
              type="button"
            >
              <div
                className={
                  "relative w-24 h-24 mx-auto rounded-full overflow-hidden transition ring-2 " +
                  (isActive
                    ? "ring-amber-400"
                    : "ring-transparent hover:ring-amber-200")
                }
              >
                <Image
                  src={item.src}
                  alt={item.title}
                  fill
                  className="object-cover"
                />
              </div>

              <p className="mt-2 text-sm font-medium text-gray-800">
                {item.title}
              </p>
            </button>
          );
        })}
      </div>

    </aside>
  );
}
