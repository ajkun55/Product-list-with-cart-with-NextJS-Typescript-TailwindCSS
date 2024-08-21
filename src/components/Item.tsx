import { itemData } from "@/app/type";
import Image from "next/image";

export default function Item({
  name,
  category,
  price,
  imageDesk,
  imageMobile,
  imageTab,
  imageThumbnail,
  addItem,
  decreaseItem,
  list,
}: Readonly<itemData>) {
  let selected = false;
  let itemIndex: number = 0;
  list.list.map((l) => {
    if (l.name === name) {
      selected = true;
      itemIndex = list.list.indexOf(l);
    }
  });

  return (
    <>
      <div className="lg:mt-5">
        <div className="relative">
          <Image
            src={imageMobile}
            alt=""
            width={654}
            height={424}
            className={`md:hidden rounded-lg mt-5 mb-8 mx-auto ${
              selected && "border-2 border-Red"
            }`}
          />
          <Image
            src={imageTab}
            alt=""
            width={427}
            height={424}
            className={`hidden md:block rounded-xl xl:hidden mx-auto ${
              selected && "border-2 border-Red"
            }`}
          />
          <Image
            src={imageDesk}
            alt=""
            width={502}
            height={480}
            className={`hidden rounded-xl xl:block ${
              selected && "border-2 border-Red"
            }`}
          />

          {selected ? (
            <span className="rounded-[3rem] absolute left-1/2 bottom-0 translate-y-1/2 -translate-x-1/2 bg-Red border-none text-Rose-100 p-3 w-[10rem] font-semibold flex justify-between items-center">
              <span
                className="border rounded-full hover-item-container hover:bg-White cursor-pointer border-Rose-50 p-[5px] h-5 grid place-content-center"
                onClick={() => decreaseItem(itemIndex)}
              >
                <Image
                  src="/icon-decrement-quantity.svg"
                  alt=""
                  width={10}
                  height={2}
                  className="hover-item"
                />
              </span>
              {list.list[itemIndex].quantity}
              <span
                className="border rounded-full  cursor-pointer hover-item-container border-Rose-50 p-[5px] hover:bg-White"
                onClick={() => addItem(name, price, imageThumbnail)}
              >
                <Image
                  src="/icon-increment-quantity.svg"
                  alt=""
                  width={10}
                  height={10}
                  className="hover-item"
                />
              </span>
            </span>
          ) : (
            <button
              className="rounded-[3rem] w-[10rem] absolute left-1/2 bottom-0 hover:border-2 hover:border-Red hover:text-Red text-Rose-900 bg-Rose-50 -translate-x-1/2 translate-y-1/2 border py-3 border-Rose-500 font-semibold flex items-center justify-center gap-2"
              onClick={() => addItem(name, price, imageThumbnail)}
            >
              <Image
                src="/icon-add-to-cart.svg"
                alt=""
                width={21}
                height={20}
              />
              Add to Cart
            </button>
          )}
        </div>
        <p className="text-Rose-500 mt-8">{category}</p>
        <p className="font-bold">{name}</p>
        <p className="text-Red font-semibold">${price.toFixed(2)}</p>
      </div>
    </>
  );
}
