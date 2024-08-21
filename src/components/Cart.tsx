import Image from "next/image";
import { listData } from "@/app/type";
import Modal from "./Modal";
import { useState } from "react";

export default function Cart({ list, removeItem, setList }: listData) {
  const [showModal, setShowModal] = useState(false);

  function startNew() {
    setShowModal(false);
    setList([]);
  }

  return (
    <div className="bg-White px-6 py-8 rounded-xl my-10 md:m-0 xl:min-w-[385px] mx-auto h-fit">
      <h1 className="text-Red font-bold text-3xl">
        Your cart (
        {list.reduce(function (acc, obj) {
          return acc + (obj.quantity || 0);
        }, 0)}
        )
      </h1>
      {list.length ? (
        <>
          {list.map((l, index) => (
            <div
              key={index}
              className="flex justify-between items-center my-6 border-b border-Rose-100"
            >
              <div>
                <p className="font-semibold ">{l.name}</p>
                <div className="flex gap-5 my-2 ">
                  <p className="font-semibold text-Red">{l.quantity}x</p>
                  <p className="text-Rose-400">@ ${l.price}</p>
                  {l.price && l.quantity && (
                    <p className="text-Rose-500 font-semibold">
                      ${l.price * l.quantity}
                    </p>
                  )}
                </div>
              </div>
              <span className="p-1 border border-Rose-400 rounded-full cursor-pointer hover:border-Rose-900 remove-item">
                <Image
                  src="/icon-remove-item.svg"
                  alt=""
                  width={10}
                  height={10}
                  onClick={() => removeItem(index)}
                />
              </span>
            </div>
          ))}
          <div className="flex justify-between items-center">
            <p>Order Total</p>
            <p className="font-bold text-3xl text-Rose-900">
              $
              {list.reduce(function (acc, obj) {
                return acc + (obj.quantity || 0) * (obj.price || 0);
              }, 0)}
            </p>
          </div>
          <div className="flex items-center py-4 px-2 gap-1 my-6 justify-center rounded-lg bg-Rose-50">
            <Image
              src="/icon-carbon-neutral.svg"
              alt=""
              width={21}
              height={20}
            />
            <p>
              This is a <strong>carbon-neutral</strong> delivery
            </p>
          </div>
          <button
            className="rounded-[3rem] bg-Red border-none w-full text-Rose-100 py-3 px-8 font-semibold hover:brightness-75"
            onClick={() => setShowModal(true)}
          >
            Confirm Order
          </button>
          {showModal && (
            <Modal
              list={list}
              startNew={startNew}
              setShowModal={setShowModal}
            />
          )}
        </>
      ) : (
        <div className="grid place-content-center">
          <Image
            src="/illustration-empty-cart.svg"
            alt=""
            width={128}
            height={128}
            className="mx-auto my-8"
          />
          <p className="font-semibold text-Rose-500">
            Your added items will appear here
          </p>
        </div>
      )}
    </div>
  );
}
