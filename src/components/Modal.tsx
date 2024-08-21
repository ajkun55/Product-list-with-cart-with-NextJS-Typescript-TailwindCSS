import Image from "next/image";
import { confirmData } from "@/app/type";

function Modal({ list, startNew, setShowModal }: confirmData): JSX.Element {
  return (
    <div
      onClick={() => setShowModal(false)}
      className="fixed inset-0 w-full h-full overflow-auto left-0 flex justify-center items-end z-50 bg-modal-bg bg-opacity-50 lg:items-center"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="bg-White w-full lg:my-auto p-6 lg:p-9 rounded-t-2xl max-w-[590px] opacity-100 lg:rounded-2xl"
      >
        <Image src="/icon-order-confirmed.svg" alt="" width={48} height={48} />
        <h1 className="text-5xl my-6 font-bold">Order Confirmed</h1>
        <p className="text-Rose-500">We hope you enjoy your food!</p>

        <div className="p-4 bg-Rose-50 rounded-md relative overflow-auto max-h-[300px] my-8">
          {list.map((l, index) => (
            <div
              key={index}
              className="flex items-center justify-between border-b border-Rose-100 py-5"
            >
              <div className="flex items-center gap-5">
                <Image
                  src={l.imageThumbnail || ""}
                  alt=""
                  width={100}
                  height={96}
                  className="rounded-md max-w-[30%]"
                />
                <div>
                  <p className="font-bold text-Rose-900">{l.name}</p>
                  <span className="flex gap-5">
                    <p className="text-Red font-semibold">{l.quantity}x</p>
                    <p className="text-Rose-400">@ ${l.price?.toFixed(2)}</p>
                  </span>
                </div>
              </div>
              {l.price && l.quantity && (
                <p className="font-semibold text-Rose-900">
                  ${(l.price * l.quantity).toFixed(2)}
                </p>
              )}
            </div>
          ))}
          <div className="flex items-center justify-between mt-6">
            <p>Order Total</p>
            <p className="font-bold text-3xl">
              $
              {list
                .reduce(function (acc, obj) {
                  return acc + (obj.quantity || 0) * (obj.price || 0);
                }, 0)
                .toFixed(2)}
            </p>
          </div>
        </div>

        <button
          className="rounded-[3rem] bg-Red border-none text-Rose-100 py-3 px-8 font-semibold w-full"
          onClick={startNew}
        >
          Start New Order
        </button>
      </div>
    </div>
  );
}

export default Modal;
